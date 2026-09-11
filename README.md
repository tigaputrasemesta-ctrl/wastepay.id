# WastePay.id — Sistem Manajemen & Retribusi Pengelolaan Sampah Enterprise Indonesia

[![Production Status](https://img.shields.io/badge/Production-Live%20on%20Vercel-success.svg)](https://wastepay.id)
[![Framework](https://img.shields.io/badge/Next.js-16.2%20(App%20Router)-black.svg)](https://nextjs.org)
[![UI Engine](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20Mode-3178c6.svg)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8.svg)](https://tailwindcss.com)
[![Testing](https://img.shields.io/badge/Vitest-59%2F59%20Passing-green.svg)](#pengujian-otomatis)

**WastePay.id** adalah portal komersial dan platform web enterprise terpadu untuk digitalisasi operasional dan penagihan retribusi pengelolaan persampahan di Indonesia. Dirancang khusus untuk **TPS3R, BUMDes, Pengelola Kawasan, Kontraktor/Vendor Swasta, dan Dinas Lingkungan Hidup (DLH)**.

---

## 🌟 Nilai Jual Utama (Core Value Proposition)

1. **Garansi 0% Kebocoran Kas Fisik (Zero-Leakage)**: Modul rekonsiliasi harian memastikan uang tunai di laci loket kasir wajib cocok 100% dengan total transaksi sistem.
2. **Efisiensi Rute Armada & Penghematan BBM hingga 28%**: Peta GIS berbasis zonasi poligon Voronoi dan algoritma *nearest-neighbor* yang mempercepat waktu tempuh dump truck.
3. **Pembayaran Digital Multi-Channel**: Terintegrasi Duitku Payment Gateway (QRIS Nasional, Virtual Account Bank BCA/Mandiri/BNI/BRI, E-Wallet GoPay/OVO/ShopeePay) dan Kasir Tunai.
4. **Survei Warga Ber-geotagging Otomatis**: Ekstraksi koordinat GPS dari metadata EXIF kamera smartphone tanpa input manual.
5. **Aplikasi Lapangan Kru Truk (`/m` & APK Android)**: Antarmuka mobile responsif ultra-ringan dengan tombol 1-ketukan penjemputan dan background GPS telemetry.
6. **WhatsApp Automation Gateway**: Bot pengingat jatuh tempo H-3, e-kwitansi pembayaran lunas, dan notifikasi progres aduan warga.
7. **Terbukti di Lapangan (Proven in Production)**: Telah diterapkan secara penuh di **UPS HERU Kota Depok** (`https://tpsheru.vercel.app`) melayani lebih dari 2.000 kepala keluarga dengan tingkat kelunasan iuran 96.8%.

---

## 🏗️ Stack Teknologi

| Komponen | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.2 (App Router + Turbopack) | Server Components & Client Interactivity yang cepat |
| **UI Engine** | React 19 & Tailwind CSS 3.4 | Styling Neo-Brutalist & Swiss Grid tanpa bloat eksternal |
| **Bahasa** | TypeScript 5 (Strict Mode) | Tipe data ketat end-to-end tanpa toleransi error |
| **Database & ORM** | Prisma 7.9 via `@prisma/adapter-pg` & Supabase PostgreSQL | Skalabilitas cloud serverless |
| **Keamanan** | JWT (`jose` HS256) & `bcryptjs` (12 rounds) | Middleware fail-closed 4-level RBAC |
| **Payment Gateway** | Duitku Payment API | Webhook signature HMAC-SHA256 |
| **Notifikasi** | WhatsApp Provider REST API & wa.me | Blast pengingat dan kwitansi digital |
| **Mobile App** | Capacitor 7.0 | Wrapper webview untuk aplikasi kru Android APK |

---

## 📦 10 Modul Enterprise yang Disertakan

1. **Smart Billing & Denda 2%/Bulan**: Mass billing 1-klik, penomoran invoice unik `INV/{kodePelanggan}/{YYYYMM}`, dan denda otomatis.
2. **Multi-Payment Gateway Duitku & Kasir**: QRIS, Virtual Account bank, E-Wallet, dan pencatatan kasir loket fisik.
3. **Survei Geotagging Warga**: Ekstraksi latitude/longitude otomatis dari EXIF foto rumah kamera HP (`exifr`).
4. **Peta GIS Voronoi & Rute Armada**: Zonasi Voronoi RT/RW dan algoritma rute tercepat pengangkutan.
5. **Driver Mobile Webview App (`/m`)**: Checklist penjemputan rumah 1-ketukan dengan pelacakan GPS live.
6. **Rekonsiliasi Kas Harian**: Audit fisik uang tunai di laci kasir vs uang masuk di sistem guna mencegah kebocoran dana.
7. **WhatsApp Gateway Otomatis**: Pengingat berkala, e-kwitansi, dan notifikasi keluhan sampah.
8. **Portal Layanan Mandiri Warga**: Pendaftaran mandiri, lacak truk live, bayar tagihan online, dan tiket aduan.
9. **Cetak Dokumen Resmi**: Lembar Faktur Retribusi A4 PPN 11%, Stiker Barcode CODE128 rumah, dan lembar tagihan RT.
10. **Keamanan Enterprise & RBAC 4-Level**: Middleware proxy fail-closed, role Superadmin (100), Admin (50), Kasir (20), Petugas (10).

---

## 🚀 Panduan Menjalankan Project

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Development
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### 3. Build Production
```bash
npm run build
npm start
```

---

## 🏢 Kontak Resmi & Konsultasi Pengadaan

- **Entitas**: CV Tiga Putra Semesta (Divisi Teknologi WastePay.id)
- **Kantor Operasional**: Jl. Kandang Ayam, Kalibaru, Kec. Cilodong, Kota Depok, Jawa Barat 16414
- **Koordinat GIS**: `-6.424838, 106.832667`
- **WhatsApp Penjualan & Demo**: [+62 814-0078-2617](https://wa.me/6281400782617)
- **Email Dukungan**: [cv.herozerowaste@gmail.com](mailto:cv.herozerowaste@gmail.com)
- **Website Resmi**: [https://wastepay.id](https://wastepay.id)
- **Demo Live Flagship**: [https://tpsheru.vercel.app](https://tpsheru.vercel.app)

---

© 2026 **WastePay.id** — Didukung oleh **CV Tiga Putra Semesta**. Seluruh hak cipta dilindungi undang-undang.
