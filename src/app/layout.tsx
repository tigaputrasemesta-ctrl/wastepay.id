import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "WastePay.id — Sistem Manajemen & Retribusi Pengelolaan Sampah Enterprise #1 di Indonesia",
  description: "Platform ERP persampahan terpadu untuk TPS3R, BUMDes, Vendor Swasta, Estate Management, dan Dinas Lingkungan Hidup (DLH). Dilengkapi Billing otomatis QRIS/Duitku, pelacakan live GPS armada truk, driver mobile app (/m), dan garansi zero-leakage rekonsiliasi kas fisik harian.",
  keywords: [
    "wastepay",
    "wastepay.id",
    "aplikasi sampah",
    "software retribusi sampah",
    "sistem manajemen tps3r",
    "bumdes sampah",
    "dinas lingkungan hidup",
    "pelacakan truk sampah gps",
    "duitku qris sampah",
    "rekonsiliasi kas sampah",
    "ups heru depok",
  ],
  authors: [{ name: "CV Tiga Putra Semesta" }],
  creator: "WastePay.id",
  publisher: "WastePay.id",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://wastepay.id",
    title: "WastePay.id — Sistem Manajemen & Retribusi Sampah Enterprise Indonesia",
    description: "Digitalisasi total operasional persampahan & retribusi daerah. 0% kebocoran kas, 100% terpantau GPS armada. Teruji nyata di 2.000+ pelanggan Kota Depok.",
    siteName: "WastePay.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "WastePay.id — Platform ERP Pengelolaan Sampah Modern",
    description: "Tingkatkan efisiensi armada & hentikan kebocoran kas retribusi persampahan Anda.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
