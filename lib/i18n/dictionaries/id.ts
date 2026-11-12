// Bahasa Indonesia copy — DRAFT by Claude, needs review by a fluent speaker
// before launch. `satisfies Dictionary` makes the build fail if a key is missing.

import type { Dictionary } from "./en";

const id = {
  meta: {
    title: "Laurent's Delight | Homemade Baked Goods",
    description:
      "Nikmati aneka cookies, brownies, dan camilan manis homemade yang dibuat dengan penuh perhatian untuk menghadirkan kebahagiaan di setiap gigitan.",
  },
  links: {
    flavors: "rasa",
    story: "cerita kami",
    baker: "baker kami",
    order: "pesan",
    gallery: "galeri",
    about: "tentang kami",
    terms: "syarat layanan",
    privacy: "kebijakan privasi",
    shipping: "pengiriman & perawatan",
  },
  header: {
    navLabel: "Navigasi utama",
    home: "Beranda Laurent's Delight",
    bag: "Tas belanja",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    language: "Bahasa",
  },
  hero: {
    eyebrow: "batch kecil / bahagia besar",
    titleLine1: "Dibuat untuk",
    titleLine2: "dikenang.",
    lead: "Kebahagiaan dalam setiap adonan. Cookies dan brownies yang luar biasa enak, dibuat dengan tangan dan dikirim hangat dari dapur kami untuk orang-orang tersayangmu.",
    cta: "kenali rasanya",
    hours: "dipanggang setiap hari · 08.00–18.00",
    established: "sejak 2026",
    place: "indonesia",
    mood: "mood hari ini",
    moodText: "Baru keluar dari oven.",
    imageAlt: "Sepiring empat cookies Laurent's Delight di atas kertas roti",
  },
  flavors: {
    eyebrow: "enam cara untuk jatuh cinta",
    title: "Pilih",
    accent: "favoritmu.",
    description: "Tidak ada jawaban yang salah. Hanya beragam jenis kelezatan.",
    photoSoon: "foto segera hadir",
  },
  gallery: {
    eyebrow: "dari oven kami ke feed-mu",
    title: "Sekotak penuh",
    accent: "momen.",
    description:
      "Paling nikmat disantap dengan dua tangan, teman yang asyik, dan tanpa perlu berbagi.",
    photos: {
      apron: {
        alt: "Celemek linen dengan bordir logo Laurent's Delight",
        caption: "dibuat dengan cinta",
      },
      boxes: {
        alt: "Kotak hadiah berisi cookies Laurent's Delight dengan kartu dan kantong kertas bermerek",
        caption: "siap jadi hadiah",
      },
      arranged: {
        alt: "Deretan cookies yang dibungkus satu per satu dengan stiker Laurent's Delight",
        caption: "segar setiap batch",
      },
      packagings: {
        alt: "Cookies terbungkus dan kantong kertas berlabel yang siap dikirim",
        caption: "dikemas dengan teliti",
      },
    },
  },
  story: {
    eyebrow: "tentang laurent's delight",
    line1: "Sedikit ekstra",
    line2: "adalah rahasia kami.",
    body: "Lahir dari kecintaan memanggang di larut malam dan berbagi dengan tulus, Laurent's Delight mengubah rasa yang akrab menjadi perayaan kecil. Kami percaya cookies terbaik dibuat perlahan, dikemas dengan hangat, dan dibagikan bahkan sebelum sempat dingin.",
    cta: "kenali baker kami",
    values: ["diaduk perlahan", "isian melimpah", "selalu dibagi"],
  },
  baker: {
    // TODO: placeholder copy — replace with Fallen's real bio and quote.
    eyebrow: "kenali baker kami",
    role: "pendiri & kepala baker",
    quote:
      "Sebuah cookie seharusnya terasa seperti pelukan yang bisa kamu genggam dengan satu tangan.",
    bio: [
      "Fallen Cristine Laurent adalah tangan, hati, dan jiwa bertabur tepung di balik Laurent's Delight. Berawal dari memanggang larut malam untuk teman dan keluarga, kini dapurnya hampir tak pernah berhenti beraroma mentega dan gula merah.",
      "Ia meracik sendiri setiap resep — menguji, mencicipi, dan menyempurnakannya sampai setiap cookie layak masuk ke dalam kotak. Bagian favoritnya masih sama seperti hari pertama: melihat seseorang menggigit untuk pertama kalinya.",
    ],
    sayHi: "sapa",
    portraitAlt: "Potret",
    portraitSoon: "foto segera hadir",
    opensNewTab: "buka di tab baru",
    contacts: {
      whatsapp: {
        cta: "chat untuk pesan",
        message: "Halo Fallen! Saya ingin memesan cookies.",
      },
      instagram: { cta: "ikuti kreasinya" },
      linkedin: { cta: "terhubung" },
    },
  },
  order: {
    eyebrow: "pesan online",
    line1: "Cookies hangat.",
    line2: "Diantar sampai depan pintu.",
    body: "Kirim pesan lewat WhatsApp, dan kami akan memanggang sekotak cookies segar untukmu atau untuk orang tersayang.",
    cta: "pesan via WhatsApp",
  },
  cart: {
    title: "Keranjangmu",
    close: "Tutup keranjang",
    add: "tambah ke keranjang",
    increase: "Tambah satu",
    decrease: "Kurangi satu",
    remove: "Hapus",
    quantity: "Jumlah",
    empty: "Keranjangmu masih kosong.",
    emptyHint: "Pilih beberapa favoritmu dan semuanya akan muncul di sini.",
    browse: "lihat pilihan rasa",
    total: "Total item",
    minOrder: "Minimal pemesanan {count} item.",
    checkout: "pesan via WhatsApp",
    checkoutHint:
      "Kami akan membuka WhatsApp dengan pesananmu yang siap dikirim. Harga dan pengiriman dikonfirmasi lewat chat.",
    clear: "kosongkan keranjang",
  },
  footer: {
    tagline:
      "Cookies batch kecil untuk perasaan besar, dipanggang segar setiap hari.",
    explore: "jelajahi",
    goodToKnow: "info penting",
    sayHello: "sapa kami",
    copyright: "laurent's delight",
    madeWith: "dibuat dengan mentega & niat baik",
    backToTop: "kembali ke atas ↑",
  },
  legal: {
    eyebrow: "ketentuan",
    updated: "Terakhir diperbarui",
    onThisPage: "Di halaman ini",
    alsoRead: "Baca juga",
    backHome: "kembali ke beranda",
  },
  whatsapp: {
    title: "Chat dengan kami",
    subtitle: "Biasanya membalas dalam satu jam",
    open: "Chat via WhatsApp",
    close: "Tutup menu WhatsApp",
    orderLabel: "Saya ingin pesan",
    quickMessages: [
      {
        label: "Bisa kirim ke daerah saya?",
        message:
          "Halo! Apakah bisa dikirim ke daerah saya? Saya ingin memesan cookies.",
      },
      {
        label: "Hadiah & pesanan khusus",
        message:
          "Halo! Saya tertarik dengan kotak hadiah atau pesanan khusus untuk sebuah acara.",
      },
    ],
  },
} satisfies Dictionary;

export default id;
