// DRAFT — written by Claude as a starting point for a small, online-only
// bakery in Indonesia. Fill in the details marked below (payment methods,
// shelf life, refund window) and have it reviewed before relying on it.

import type { Locale } from "@/lib/i18n/config";

import { LEGAL_EMAIL, type LegalDoc } from "./types";

export const termsOfService: Record<Locale, LegalDoc> = {
  en: {
    title: "Terms of Service",
    description:
      "The terms that apply when you use the Laurent's Delight website or order from us.",
    intro:
      "These Terms of Service govern your use of the Laurent's Delight website and any order you place with us. By placing an order, you agree to these terms — please read them before you order.",
    sections: [
      {
        id: "about-us",
        heading: "About us",
        body: [
          "Laurent's Delight is a small home bakery in Indonesia. We don't have a physical store; all orders are placed online, mainly through WhatsApp.",
        ],
      },
      {
        id: "orders",
        heading: "Placing an order",
        body: [
          {
            list: [
              "Your order is confirmed only once we've confirmed it with you on WhatsApp and received your payment.",
              "We bake in small batches, so availability is limited. We may decline or reschedule an order if we can't fulfil it, and we'll refund any payment you've made.",
              "Please check your order summary carefully — flavors, quantities, delivery date and address — before you pay.",
            ],
          },
        ],
      },
      {
        id: "prices-payment",
        heading: "Prices and payment",
        body: [
          "Prices are in Indonesian Rupiah (IDR) and are the ones we quote when confirming your order. Delivery fees are charged separately and shown before you pay. Payment is made in full by bank transfer or e-wallet before we bake or send your order.",
        ],
      },
      {
        id: "delivery",
        heading: "Delivery",
        body: [
          {
            list: [
              "We deliver through third-party couriers. Delivery times are estimates and may vary because of traffic, weather or courier delays.",
              "Please make sure your address and phone number are correct and that someone can receive the order.",
              "If delivery fails because of an incorrect address or because no one is available, we can't offer a refund, and re-delivery may cost extra.",
            ],
          },
        ],
      },
      {
        id: "freshness-allergens",
        heading: "Freshness, storage and allergens",
        body: [
          "Our cookies are baked fresh for each order. We'll share storage tips and how long they're best enjoyed when we confirm your order.",
          "Our products contain or may contain wheat (gluten), eggs, dairy, nuts and soy, and are made in a kitchen that handles all of these. Please tell us about any allergies before you order — we can't guarantee any product is allergen-free.",
        ],
      },
      {
        id: "cancellations-refunds",
        heading: "Cancellations and refunds",
        body: [
          {
            list: [
              "You can cancel for a full refund before we start baking your order. Once baking has started, orders can't be cancelled.",
              "If your order arrives damaged or isn't what you ordered, message us within 24 hours of delivery with photos. We'll replace the affected items or refund you.",
            ],
          },
        ],
      },
      {
        id: "website-content",
        heading: "Website content",
        body: [
          "All text, photos and designs on this website belong to Laurent's Delight. Please don't copy or reuse them for commercial purposes without our permission.",
        ],
      },
      {
        id: "liability",
        heading: "Our responsibility",
        body: [
          "To the extent permitted by law, our total responsibility for any order is limited to the amount you paid for it. We aren't responsible for delays or problems caused by events outside our control, such as courier disruptions or severe weather.",
        ],
      },
      {
        id: "changes",
        heading: "Changes to these terms",
        body: [
          "We may update these terms from time to time. The version on this page when you place an order is the one that applies to that order.",
        ],
      },
      {
        id: "governing-law",
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of the Republic of Indonesia.",
        ],
      },
      {
        id: "contact",
        heading: "Contact us",
        body: [
          `Questions about these terms or your order? Email us at ${LEGAL_EMAIL} or message us on WhatsApp.`,
        ],
      },
    ],
  },
  id: {
    title: "Syarat Layanan",
    description:
      "Ketentuan yang berlaku saat kamu menggunakan situs Laurent's Delight atau memesan dari kami.",
    intro:
      "Syarat Layanan ini mengatur penggunaan situs Laurent's Delight dan setiap pesanan yang kamu buat bersama kami. Dengan melakukan pemesanan, kamu menyetujui ketentuan ini — mohon dibaca sebelum memesan.",
    sections: [
      {
        id: "about-us",
        heading: "Tentang kami",
        body: [
          "Laurent's Delight adalah usaha kue rumahan kecil di Indonesia. Kami tidak memiliki toko fisik; semua pesanan dilakukan secara online, terutama melalui WhatsApp.",
        ],
      },
      {
        id: "orders",
        heading: "Melakukan pemesanan",
        body: [
          {
            list: [
              "Pesananmu baru dianggap terkonfirmasi setelah kami mengonfirmasinya lewat WhatsApp dan menerima pembayaranmu.",
              "Kami memanggang dalam jumlah kecil, sehingga ketersediaan terbatas. Kami dapat menolak atau menjadwalkan ulang pesanan jika tidak dapat memenuhinya, dan pembayaran yang sudah masuk akan kami kembalikan.",
              "Mohon periksa ringkasan pesananmu dengan teliti — rasa, jumlah, tanggal pengiriman, dan alamat — sebelum membayar.",
            ],
          },
        ],
      },
      {
        id: "prices-payment",
        heading: "Harga dan pembayaran",
        body: [
          "Harga dalam Rupiah (IDR) dan mengikuti harga yang kami sampaikan saat konfirmasi pesanan. Ongkos kirim dihitung terpisah dan diinformasikan sebelum pembayaran. Pembayaran dilakukan penuh melalui transfer bank atau dompet digital sebelum pesanan dipanggang atau dikirim.",
        ],
      },
      {
        id: "delivery",
        heading: "Pengiriman",
        body: [
          {
            list: [
              "Kami mengirim pesanan melalui kurir pihak ketiga. Waktu pengiriman merupakan perkiraan dan dapat berubah karena lalu lintas, cuaca, atau keterlambatan kurir.",
              "Pastikan alamat dan nomor teleponmu benar, serta ada yang dapat menerima pesanan.",
              "Jika pengiriman gagal karena alamat salah atau tidak ada penerima, kami tidak dapat memberikan pengembalian dana, dan pengiriman ulang dapat dikenakan biaya tambahan.",
            ],
          },
        ],
      },
      {
        id: "freshness-allergens",
        heading: "Kesegaran, penyimpanan, dan alergen",
        body: [
          "Cookies kami dipanggang segar untuk setiap pesanan. Kami akan membagikan tips penyimpanan dan berapa lama cookies paling nikmat disantap saat mengonfirmasi pesananmu.",
          "Produk kami mengandung atau mungkin mengandung gandum (gluten), telur, susu, kacang-kacangan, dan kedelai, serta dibuat di dapur yang mengolah semua bahan tersebut. Mohon beri tahu kami tentang alergi apa pun sebelum memesan — kami tidak dapat menjamin produk mana pun bebas alergen.",
        ],
      },
      {
        id: "cancellations-refunds",
        heading: "Pembatalan dan pengembalian dana",
        body: [
          {
            list: [
              "Kamu dapat membatalkan pesanan dengan pengembalian dana penuh sebelum kami mulai memanggang. Setelah proses memanggang dimulai, pesanan tidak dapat dibatalkan.",
              "Jika pesananmu tiba dalam keadaan rusak atau tidak sesuai, kirim pesan kepada kami dalam 24 jam setelah diterima beserta fotonya. Kami akan mengganti produk yang terdampak atau mengembalikan danamu.",
            ],
          },
        ],
      },
      {
        id: "website-content",
        heading: "Konten situs",
        body: [
          "Seluruh teks, foto, dan desain di situs ini adalah milik Laurent's Delight. Mohon tidak menyalin atau menggunakannya kembali untuk tujuan komersial tanpa izin kami.",
        ],
      },
      {
        id: "liability",
        heading: "Tanggung jawab kami",
        body: [
          "Sejauh diizinkan oleh hukum, total tanggung jawab kami atas suatu pesanan terbatas pada jumlah yang kamu bayarkan untuk pesanan tersebut. Kami tidak bertanggung jawab atas keterlambatan atau masalah akibat kejadian di luar kendali kami, seperti gangguan kurir atau cuaca buruk.",
        ],
      },
      {
        id: "changes",
        heading: "Perubahan ketentuan ini",
        body: [
          "Kami dapat memperbarui ketentuan ini sewaktu-waktu. Versi yang tercantum di halaman ini saat kamu melakukan pemesanan adalah versi yang berlaku untuk pesanan tersebut.",
        ],
      },
      {
        id: "governing-law",
        heading: "Hukum yang berlaku",
        body: ["Ketentuan ini diatur oleh hukum Negara Republik Indonesia."],
      },
      {
        id: "contact",
        heading: "Hubungi kami",
        body: [
          `Ada pertanyaan tentang ketentuan ini atau pesananmu? Kirim email ke ${LEGAL_EMAIL} atau hubungi kami lewat WhatsApp.`,
        ],
      },
    ],
  },
};
