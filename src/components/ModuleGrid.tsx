"use client";

import React, { useState } from "react";
import {
  CreditCard,
  MapPin,
  Smartphone,
  Shield,
  FileCheck,
  MessageCircle,
  Truck,
  DollarSign,
  Printer,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ModuleGrid() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "Smart Billing & Denda 2%/Bulan",
      icon: CreditCard,
      badge: "Billing Engine",
      color: "bg-emerald-50 text-emerald-800 border-emerald-900",
      description: "Generate ribuan invoice bulanan dalam satu klik. Dilengkapi sistem kalkulasi denda keterlambatan 2%/bulan otomatis setelah tanggal 15.",
      details: [
        "Generate massal seluruh pelanggan aktif awal bulan tanpa duplikasi",
        "Penomoran invoice unik otomatis: INV/{kodePelanggan}/{YYYYMM}",
        "Denda keterlambatan 2%/bulan dihitung otomatis saat akses/pembayaran",
        "Dukungan custom tarif per pelanggan atau per paket kategori layanan",
      ],
    },
    {
      id: 2,
      title: "Gateway Pembayaran Duitku & Kasir Tunai",
      icon: DollarSign,
      badge: "Payment Gateway",
      color: "bg-blue-50 text-blue-800 border-blue-900",
      description: "Pilihan pembayaran digital lengkap untuk warga via QRIS, Virtual Account bank, dan e-wallet dengan verifikasi signature HMAC-SHA256.",
      details: [
        "QRIS Nasional otomatis (BCA, Mandiri, GoPay, OVO, ShopeePay, Dana)",
        "Virtual Account bank (BCA, Mandiri, BNI, BRI, Permata)",
        "Verifikasi webhook otomatis signature HMAC-SHA256 (status lunas realtime)",
        "Pencatatan kasir tunai instan untuk pembayaran fisik di loket",
      ],
    },
    {
      id: 3,
      title: "Survei Geotagging & Kamera EXIF HP",
      icon: MapPin,
      badge: "GIS Geotag",
      color: "bg-amber-50 text-amber-800 border-amber-900",
      description: "Petugas survei cukup mengambil foto rumah warga; sistem otomatis membaca koordinat GPS dari data EXIF kamera tanpa perlu mengetik.",
      details: [
        "Ekstraksi latitude/longitude otomatis via pustaka exifr kamera HP",
        "Akurasi koordinat dan sumber (exif_foto, gps_perangkat, manual) tercatat",
        "Kompresi foto rumah otomatis ke format JPEG max 1024px hemat storage",
        "Titik koordinat langsung dihubungkan ke peta rute armada pengangkutan",
      ],
    },
    {
      id: 4,
      title: "Peta GIS Voronoi & Rute Armada",
      icon: Truck,
      badge: "GIS Routing",
      color: "bg-purple-50 text-purple-800 border-purple-900",
      description: "Zonasi poligon Voronoi untuk 63 titik RT/RW dan algoritma nearest-neighbor untuk memotong jarak tempuh dan menghemat bahan bakar armada.",
      details: [
        "Zonasi Voronoi otomatis menggunakan Turf.js berbasis titik pelanggan",
        "Algoritma nearest-neighbor menyusun urutan rumah yang paling efisien",
        "Pemantauan live tracking armada dump truck di layar monitor TV kantor",
        "Buka rute pengangkutan langsung ke aplikasi Google Maps sopir",
      ],
    },
    {
      id: 5,
      title: "Driver App Lapangan (/m) & Android APK",
      icon: Smartphone,
      badge: "Mobile App",
      color: "bg-lime-50 text-lime-800 border-lime-900",
      description: "Aplikasi mobile ultra-ringan berbasis Capacitor Android untuk sopir & kru truk. Tombol status penjemputan 1-ketukan ramah smartphone lama.",
      details: [
        "Antarmuka responsif ultra-ringan khusus perangkat kru lapangan",
        "Tombol aksi cepat: 'Sudah Diangkut', 'Rumah Kosong', 'Akses Tertutup'",
        "Latar belakang GPS beacon untuk memperbarui posisi armada ke server",
        "Bisa di-install sebagai file APK Android native melalui Capacitor",
      ],
    },
    {
      id: 6,
      title: "Rekonsiliasi Kas Harian (Zero-Leakage)",
      icon: Shield,
      badge: "Anti-Fraud",
      color: "bg-red-50 text-red-800 border-red-900",
      description: "Modul audit fisik uang di laci kasir terhadap uang masuk di sistem. Mengeliminasi 100% risiko kebocoran dana iuran oleh oknum penagih.",
      details: [
        "Sistem menghitung total pemasukan tunai menurut database per hari",
        "Kasir wajib memasukkan nominal uang fisik riil di laci loket",
        "Sistem otomatis menghitung selisih (harus Rp 0 untuk lolos audit)",
        "Menghilangkan risiko uang tagihan tercecer atau dibawa kabur penagih",
      ],
    },
    {
      id: 7,
      title: "WhatsApp Gateway & Auto-Blast Bot",
      icon: MessageCircle,
      badge: "Automation",
      color: "bg-emerald-50 text-emerald-800 border-emerald-900",
      description: "Pengiriman otomatis pengingat jatuh tempo H-3, e-kwitansi pembayaran lunas, dan notifikasi progres komplain langsung ke chat warga.",
      details: [
        "Terintegrasi API WhatsApp Provider (Fonnte) dengan fallback link wa.me",
        "Pemberitahuan otomatis saat pendaftaran warga baru disetujui",
        "Pengingat jatuh tempo berkala dengan delay 1.2 detik aman dari banned",
        "Kwitansi digital dan link pembayaran dikirim otomatis ke WhatsApp warga",
      ],
    },
    {
      id: 8,
      title: "Portal Layanan Mandiri Warga Publik",
      icon: Users,
      badge: "Citizen Portal",
      color: "bg-indigo-50 text-indigo-800 border-indigo-900",
      description: "Portal web publik responsif yang memungkinkan warga mendaftar mandiri, melacak posisi truk penjemput, mengecek tagihan, dan lapor komplain.",
      details: [
        "Form pendaftaran mandiri (/daftar) dengan auto-matching kelurahan Depok",
        "Pelacakan armada truk live ala aplikasi ojek online (/lacak)",
        "Cek tagihan & bayar online instan (/bayar-tagihan)",
        "Pusat pengaduan sampah menumpuk dengan upload foto bukti (/pengaduan)",
      ],
    },
    {
      id: 9,
      title: "Cetak Dokumen Resmi (A4, Barcode, RT)",
      icon: Printer,
      badge: "Print Ready",
      color: "bg-amber-50 text-amber-800 border-amber-900",
      description: "Standardisasi cetak dokumen resmi: Faktur Retribusi A4 standar PPN 11%, Stiker Barcode CODE128 pagar rumah, dan rekap tagihan per RT.",
      details: [
        "Faktur A4 resmi siap cetak (window.print) dengan QR verifikasi keabsahan",
        "Stiker barcode CODE128 ukuran A6 untuk ditempel di tong sampah rumah",
        "Lembar cetak tagihan fisik per RT rapi untuk petugas penagih lapangan",
        "Laporan buku besar dan rekapitulasi laba rugi siap ekspor CSV / Excel",
      ],
    },
    {
      id: 10,
      title: "Keamanan Enterprise & RBAC Fail-Closed",
      icon: FileCheck,
      badge: "Enterprise Security",
      color: "bg-slate-100 text-slate-900 border-slate-900",
      description: "Arsitektur keamanan fail-closed dengan hierarki 4-level role, audit trail permanen di semua mutasi data, dan 59/59 automated Vitest test suite.",
      details: [
        "Proxy middleware fail-closed (rute tak terdaftar ditolak 403 Forbidden)",
        "4 Level Akses: Superadmin (100), Admin (50), Kasir (20), Petugas (10)",
        "Audit Log merekam aksi create, update, delete lengkap dengan JSON history",
        "59/59 unit test Vitest passing dengan nol regresi dan 100% strict TypeScript",
      ],
    },
  ];

  return (
    <section id="fitur" className="py-20 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-400 text-black border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0_0_#000] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Arsitektur ERP Terpadu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            10 Modul Enterprise <br />
            <span className="text-emerald-600">Terlengkap di Indonesia</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium">
            Semua fungsi operasional persampahan harian telah dirancang menyatu dalam satu ekosistem tanpa perlu aplikasi pihak ketiga yang terpisah-pisah.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="hm-card p-6 flex flex-col justify-between hover:shadow-[8px_8px_0_0_#000] transition-all bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 border-2 border-black bg-slate-900 text-white flex items-center justify-center shadow-[2px_2px_0_0_#000]">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 border-2 border-black bg-slate-100 shadow-[1.5px_1.5px_0_0_#000]">
                      {mod.badge}
                    </span>
                  </div>

                  <h3 className="font-black text-slate-900 text-lg uppercase tracking-tight mb-2">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                    {mod.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-200 pt-3">
                    {mod.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-800">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium text-[11px] leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 font-mono">
                    MODUL-0{mod.id}
                  </span>
                  <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider">
                    READY FOR PRODUCTION ✓
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
