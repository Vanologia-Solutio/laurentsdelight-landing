"use client";

import type { ComponentProps } from "react";

import { useCart } from "@/components/providers/cart-provider";

/** A button that opens the cart drawer — usable from server components. */
export function OpenCartButton({
  onClick,
  ...props
}: Omit<ComponentProps<"button">, "type">) {
  const { open } = useCart();

  return (
    <button
      type="button"
      onClick={(event) => {
        onClick?.(event);
        open();
      }}
      {...props}
    />
  );
}
