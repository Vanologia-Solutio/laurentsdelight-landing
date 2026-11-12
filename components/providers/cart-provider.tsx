"use client";

import {
  buildOrderMessage,
  flavors,
  MAX_ITEM_QTY,
  MIN_ORDER_QTY,
  whatsappLink,
  type Flavor,
  type FlavorId,
} from "@/lib/content";
import {
  createContext,
  use,
  useCallback,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/** Quantity per product; products not in the cart are absent. */
type CartItems = Partial<Record<FlavorId, number>>;

export type CartLine = { flavor: Flavor; quantity: number };

// ─── Persisted store ─────────────────────────────────────────────
// A tiny external store backed by localStorage, so the cart survives reloads
// and language switches, and stays in sync across tabs.

const STORAGE_KEY = "laurents-delight:cart";
const EMPTY: CartItems = {};
const listeners = new Set<() => void>();
let items: CartItems | null = null;

const clamp = (n: number) => Math.min(MAX_ITEM_QTY, Math.max(0, Math.floor(n)));

/** Keeps only known products with valid quantities. */
function sanitize(value: unknown): CartItems {
  if (!value || typeof value !== "object") return {};
  const result: CartItems = {};
  for (const { id } of flavors) {
    const qty = (value as Record<string, unknown>)[id];
    if (typeof qty === "number" && Number.isFinite(qty) && clamp(qty) > 0) {
      result[id] = clamp(qty);
    }
  }
  return result;
}

function load(): CartItems {
  try {
    return sanitize(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}"));
  } catch {
    return {};
  }
}

function getSnapshot(): CartItems {
  items ??= load();
  return items;
}

function setItems(next: CartItems) {
  items = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable (private mode, quota) — the cart still works in memory.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    items = load();
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

// ─── Context ─────────────────────────────────────────────────────

type CartContextValue = {
  lines: CartLine[];
  /** Total number of items across all products. */
  count: number;
  /** Whether the cart can be sent as an order. */
  canCheckout: boolean;
  /** WhatsApp link with the pre-filled order message. */
  checkoutHref: string;
  quantityOf: (id: FlavorId) => number;
  add: (id: FlavorId) => void;
  setQuantity: (id: FlavorId, quantity: number) => void;
  clear: () => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);
  const [isOpen, setIsOpen] = useState(false);

  const setQuantity = useCallback((id: FlavorId, quantity: number) => {
    const next = { ...getSnapshot() };
    const qty = clamp(quantity);
    if (qty > 0) next[id] = qty;
    else delete next[id];
    setItems(next);
  }, []);

  const add = useCallback(
    (id: FlavorId) => setQuantity(id, (getSnapshot()[id] ?? 0) + 1),
    [setQuantity],
  );

  const clear = useCallback(() => setItems({}), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(() => {
    // Follow the product order on the page, not the order items were added.
    const lines = flavors
      .filter((flavor) => (cart[flavor.id] ?? 0) > 0)
      .map((flavor) => ({ flavor, quantity: cart[flavor.id]! }));
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);

    return {
      lines,
      count,
      canCheckout: count > 0 && count >= MIN_ORDER_QTY,
      checkoutHref: whatsappLink(
        buildOrderMessage(
          lines.map(({ flavor, quantity }) => ({
            name: flavor.name,
            quantity,
          })),
        ),
      ),
      quantityOf: (id) => cart[id] ?? 0,
      add,
      setQuantity,
      clear,
      isOpen,
      open,
      close,
    };
  }, [cart, isOpen, add, setQuantity, clear, open, close]);

  return <CartContext value={value}>{children}</CartContext>;
}

export function useCart() {
  const context = use(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return context;
}
