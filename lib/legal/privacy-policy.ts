// DRAFT — written by Claude as a starting point for a small, online-only
// bakery in Indonesia. Have it reviewed (ideally by someone familiar with
// UU PDP, Law No. 27 of 2022) before relying on it.

import type { Locale } from "@/lib/i18n/config";

import { LEGAL_EMAIL, type LegalDoc } from "./types";

export const privacyPolicy: Record<Locale, LegalDoc> = {
  en: {
    title: "Privacy Policy",
    description:
      "How Laurent's Delight collects, uses and protects your personal information.",
    intro:
      'This Privacy Policy explains how Laurent\'s Delight ("we", "us") collects, uses and protects your personal information when you visit our website or order from us. We are a small home bakery in Indonesia without a physical store, and we take orders online — mainly through WhatsApp.',
    sections: [
      {
        id: "information-we-collect",
        heading: "Information we collect",
        body: [
          "We only collect what we need to bake and deliver your order:",
          {
            list: [
              "When you order: your name, phone or WhatsApp number, delivery address, and any notes you share (such as allergies or a gift message).",
              "When you contact us: the messages you send us through WhatsApp, Instagram or email.",
              "When you browse our website: a single cookie that remembers your language choice. We don't currently use analytics or advertising trackers.",
            ],
          },
        ],
      },
      {
        id: "how-we-use-it",
        heading: "How we use your information",
        body: [
          {
            list: [
              "To confirm, prepare and deliver your order.",
              "To talk with you about your order — payment, delivery updates or questions.",
              "To reply to your messages and improve our cookies and service.",
              "To meet our legal obligations, such as keeping basic transaction records.",
            ],
          },
          "We never sell your personal information.",
        ],
      },
      {
        id: "sharing",
        heading: "Who we share it with",
        body: [
          "We share your information only when it's needed to complete your order:",
          {
            list: [
              "Delivery partners receive your name, phone number and address so they can deliver your order.",
              "Payment providers (banks or e-wallets) process your payment under their own terms.",
              "WhatsApp and Instagram (Meta) handle the messages you send us, under their own privacy policies.",
              "Government authorities, if we are required to by law.",
            ],
          },
        ],
      },
      {
        id: "cookies",
        heading: "Cookies",
        body: [
          "Our website sets one functional cookie, NEXT_LOCALE, which remembers whether you prefer English or Bahasa Indonesia. It lasts one year, contains no personal information, and you can clear it at any time in your browser settings.",
          "If we start using analytics or other cookies in the future, we will update this policy first.",
        ],
      },
      {
        id: "retention",
        heading: "How long we keep it",
        body: [
          "We keep order details only for as long as we need them to fulfil your order and to meet record-keeping or tax obligations. You can ask us to delete your information at any time, unless the law requires us to keep it.",
        ],
      },
      {
        id: "security",
        heading: "How we protect it",
        body: [
          "We take reasonable steps to keep your information safe and limit access to the people who prepare and deliver your order. No method of sending or storing data online is completely secure, but we work hard to protect what you share with us.",
        ],
      },
      {
        id: "your-rights",
        heading: "Your rights",
        body: [
          "Under Indonesia's Personal Data Protection Law (Law No. 27 of 2022), you can ask us to:",
          {
            list: [
              "Access the personal information we hold about you.",
              "Correct information that is inaccurate or incomplete.",
              "Delete your information, or stop using it.",
              "Withdraw consent you have given us.",
            ],
          },
          "To make a request, contact us using the details below.",
        ],
      },
      {
        id: "children",
        heading: "Children",
        body: [
          "Our services are meant for adults. If you are under 18, please order with the permission of a parent or guardian.",
        ],
      },
      {
        id: "changes",
        heading: "Changes to this policy",
        body: [
          'We may update this policy from time to time. When we do, we\'ll change the "last updated" date at the top of this page.',
        ],
      },
      {
        id: "contact",
        heading: "Contact us",
        body: [
          `Questions about your privacy? Email us at ${LEGAL_EMAIL} or message us on WhatsApp.`,
        ],
      },
    ],
  },
  id: {
    title: "Kebijakan Privasi",
    description:
      "Bagaimana Laurent's Delight mengumpulkan, menggunakan, dan melindungi data pribadimu.",
    intro:
      'Kebijakan Privasi ini menjelaskan bagaimana Laurent\'s Delight ("kami") mengumpulkan, menggunakan, dan melindungi data pribadimu saat kamu mengunjungi situs kami atau memesan dari kami. Kami adalah usaha kue rumahan kecil di Indonesia tanpa toko fisik, dan kami menerima pesanan secara online — terutama melalui WhatsApp.',
    sections: [
      {
        id: "information-we-collect",
        heading: "Data yang kami kumpulkan",
        body: [
          "Kami hanya mengumpulkan data yang diperlukan untuk membuat dan mengantar pesananmu:",
          {
            list: [
              "Saat memesan: nama, nomor telepon atau WhatsApp, alamat pengiriman, serta catatan yang kamu berikan (misalnya alergi atau pesan hadiah).",
              "Saat menghubungi kami: pesan yang kamu kirim melalui WhatsApp, Instagram, atau email.",
              "Saat menjelajahi situs kami: satu cookie yang mengingat pilihan bahasamu. Saat ini kami tidak menggunakan analitik atau pelacak iklan.",
            ],
          },
        ],
      },
      {
        id: "how-we-use-it",
        heading: "Cara kami menggunakan datamu",
        body: [
          {
            list: [
              "Untuk mengonfirmasi, menyiapkan, dan mengantar pesananmu.",
              "Untuk berkomunikasi tentang pesananmu — pembayaran, info pengiriman, atau pertanyaan.",
              "Untuk membalas pesanmu serta meningkatkan cookies dan layanan kami.",
              "Untuk memenuhi kewajiban hukum, seperti menyimpan catatan transaksi dasar.",
            ],
          },
          "Kami tidak pernah menjual data pribadimu.",
        ],
      },
      {
        id: "sharing",
        heading: "Pihak yang menerima datamu",
        body: [
          "Kami hanya membagikan datamu jika diperlukan untuk menyelesaikan pesanan:",
          {
            list: [
              "Mitra pengiriman menerima nama, nomor telepon, dan alamatmu agar dapat mengantar pesanan.",
              "Penyedia pembayaran (bank atau dompet digital) memproses pembayaranmu sesuai ketentuan mereka.",
              "WhatsApp dan Instagram (Meta) mengelola pesan yang kamu kirim kepada kami, sesuai kebijakan privasi mereka.",
              "Instansi pemerintah, apabila diwajibkan oleh hukum.",
            ],
          },
        ],
      },
      {
        id: "cookies",
        heading: "Cookie",
        body: [
          "Situs kami menggunakan satu cookie fungsional, NEXT_LOCALE, untuk mengingat apakah kamu memilih Bahasa Indonesia atau English. Cookie ini berlaku satu tahun, tidak berisi data pribadi, dan dapat kamu hapus kapan saja melalui pengaturan browser.",
          "Jika di kemudian hari kami menggunakan analitik atau cookie lain, kami akan memperbarui kebijakan ini terlebih dahulu.",
        ],
      },
      {
        id: "retention",
        heading: "Berapa lama kami menyimpannya",
        body: [
          "Kami menyimpan detail pesanan hanya selama diperlukan untuk menyelesaikan pesananmu dan memenuhi kewajiban pencatatan atau perpajakan. Kamu dapat meminta kami menghapus datamu kapan saja, kecuali jika hukum mewajibkan kami untuk menyimpannya.",
        ],
      },
      {
        id: "security",
        heading: "Cara kami melindunginya",
        body: [
          "Kami mengambil langkah yang wajar untuk menjaga keamanan datamu dan membatasi akses hanya bagi orang yang menyiapkan dan mengantar pesananmu. Tidak ada metode pengiriman atau penyimpanan data online yang sepenuhnya aman, namun kami berusaha keras melindungi data yang kamu bagikan.",
        ],
      },
      {
        id: "your-rights",
        heading: "Hak-hakmu",
        body: [
          "Berdasarkan Undang-Undang Pelindungan Data Pribadi (UU No. 27 Tahun 2022), kamu dapat meminta kami untuk:",
          {
            list: [
              "Mengakses data pribadi yang kami simpan tentang dirimu.",
              "Memperbaiki data yang tidak akurat atau tidak lengkap.",
              "Menghapus datamu, atau berhenti menggunakannya.",
              "Menarik kembali persetujuan yang telah kamu berikan.",
            ],
          },
          "Untuk mengajukan permintaan, hubungi kami melalui kontak di bawah ini.",
        ],
      },
      {
        id: "children",
        heading: "Anak-anak",
        body: [
          "Layanan kami ditujukan untuk orang dewasa. Jika kamu berusia di bawah 18 tahun, mohon memesan dengan izin orang tua atau wali.",
        ],
      },
      {
        id: "changes",
        heading: "Perubahan kebijakan ini",
        body: [
          'Kami dapat memperbarui kebijakan ini sewaktu-waktu. Jika ada perubahan, kami akan memperbarui tanggal "terakhir diperbarui" di bagian atas halaman ini.',
        ],
      },
      {
        id: "contact",
        heading: "Hubungi kami",
        body: [
          `Ada pertanyaan tentang privasimu? Kirim email ke ${LEGAL_EMAIL} atau hubungi kami lewat WhatsApp.`,
        ],
      },
    ],
  },
};
