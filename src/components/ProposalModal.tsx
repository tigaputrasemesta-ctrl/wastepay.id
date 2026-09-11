"use client";

import React from "react";
import { X, Printer, Download, CheckCircle, FileText, Building, Phone, Mail } from "lucide-react";
import AnimatedDumpTruck from "./AnimatedDumpTruck";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ProposalModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border-4 border-black shadow-[6px_6px_0_0_#000] sm:shadow-[16px_16px_0_0_#000] p-4 sm:p-10 my-4 sm:my-8 max-h-[92vh] overflow-y-auto">
        {/* Top Floating Actions */}
        <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500 text-black text-xs font-black uppercase px-2.5 py-1 border border-black shadow-[2px_2px_0_0_#000]">
              RINGKASAN EKSEKUTIF RESMI
            </span>
            <span className="text-xs font-bold text-slate-500 hidden sm:inline">
              Dokumen Siap Cetak / Save as PDF
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hm-btn-green py-1.5 px-4 text-xs flex items-center gap-1.5 shadow-[2px_2px_0_0_#000]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 border-2 border-black bg-slate-100 hover:bg-black hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Proposal Body */}
        <div className="space-y-6 text-slate-900">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-4 border-black pb-6 gap-4">
            <div className="flex items-center gap-3">
              <AnimatedDumpTruck size="md" theme="green" animated={false} />
              <div>
                <h1 className="text-3xl font-black uppercase tracking-tight">
                  WASTEPAY<span className="text-emerald-600">.ID</span>
                </h1>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                  Enterprise Waste Management &amp; Revenue Collection ERP
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right text-xs">
              <div className="font-black bg-black text-white px-2.5 py-1 inline-block font-mono">
                DOC-PROPOSAL-2026/WP
              </div>
              <div className="text-slate-500 font-bold mt-1">Edisi Penawaran Resmi 2026</div>
            </div>
          </div>

          {/* Section 1: Ringkasan Eksekutif */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-wider bg-slate-100 border-l-4 border-emerald-600 px-3 py-1.5 mb-2">
              1. Ringkasan Eksekutif &amp; Latar Belakang Masalah
            </h2>
            <p className="text-xs leading-relaxed text-slate-700 font-medium">
              Pengelolaan persampahan di tingkat TPS3R, BUMDes, maupun vendor kawasan perumahan sering kali mengalami inefisiensi berat: kuitansi kertas tercecer, tingkat kepatuhan bayar rendah (&lt;70%), rute armada truk tidak teratur sehingga boros bahan bakar solar, serta <strong>kebocoran kas fisik mencapai 15% - 25%</strong> akibat tidak adanya mekanisme rekonsiliasi kasir harian.
            </p>
            <p className="text-xs leading-relaxed text-slate-700 font-medium mt-2">
              <strong>WastePay.id</strong> menghadirkan platform digital fullstack terintegrasi dari pendaftaran mandiri warga, survey ber-geotagging EXIF kamera HP, faktur otomatis PPN 11%, gateway Duitku QRIS, pemantauan live GPS truk sampah, aplikasi mobile kru lapangan (/m), hingga <strong>rekonsiliasi kas fisik nihil selisih</strong>.
            </p>
          </div>

          {/* Section 2: Hasil Uji Coba Nyata (Flagship Study) */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-wider bg-slate-100 border-l-4 border-emerald-600 px-3 py-1.5 mb-2">
              2. Validasi Operasional Nyata (UPS HERU Kota Depok)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              <div className="p-2 border border-black bg-slate-50">
                <span className="block text-[10px] text-slate-500 font-sans font-bold">Basis Pelanggan</span>
                <span className="font-black text-base text-slate-900">2.000+ KK</span>
              </div>
              <div className="p-2 border border-black bg-slate-50">
                <span className="block text-[10px] text-slate-500 font-sans font-bold">Collection Rate</span>
                <span className="font-black text-base text-emerald-600">96.8% Lunas</span>
              </div>
              <div className="p-2 border border-black bg-slate-50">
                <span className="block text-[10px] text-slate-500 font-sans font-bold">Selisih Kas Fisik</span>
                <span className="font-black text-base text-emerald-600">Rp 0 (Nihil)</span>
              </div>
              <div className="p-2 border border-black bg-slate-50">
                <span className="block text-[10px] text-slate-500 font-sans font-bold">Vitest Unit Test</span>
                <span className="font-black text-base text-slate-900">59/59 Pass</span>
              </div>
            </div>
          </div>

          {/* Section 3: 10 Modul Terpadu */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-wider bg-slate-100 border-l-4 border-emerald-600 px-3 py-1.5 mb-2">
              3. Lingkup 10 Modul Sistem yang Diserahkan
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {[
                "1. Smart Billing & Denda 2%/Bulan",
                "2. Multi-Payment Duitku (QRIS/VA)",
                "3. Survei Geotag EXIF Kamera HP",
                "4. Peta GIS Voronoi & Rute Armada",
                "5. Driver Mobile App (/m) & APK",
                "6. Rekonsiliasi Kas Harian Fisik",
                "7. WhatsApp Gateway Auto-Blast",
                "8. Portal Layanan Mandiri Warga",
                "9. Faktur Resmi A4 & Stiker Barcode",
                "10. Fail-Closed RBAC 4-Level & Audit",
              ].map((m, idx) => (
                <div key={idx} className="flex items-center gap-1.5 font-bold text-slate-800">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[11px]">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Alur Implementasi (Roadmap Go-Live 14 Hari) */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-wider bg-slate-100 border-l-4 border-emerald-600 px-3 py-1.5 mb-2">
              4. Jadwal Implementasi Cepat (14 Hari Go-Live)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 border border-black bg-white">
                <div className="font-black text-slate-900">Hari 1 - 4: Setup &amp; Migrasi</div>
                <div className="text-[11px] text-slate-600 mt-1">
                  Penyusunan database wilayah, import data warga lama dari Excel, setting tarif iuran.
                </div>
              </div>
              <div className="p-2.5 border border-black bg-white">
                <div className="font-black text-slate-900">Hari 5 - 8: Pilot Rute &amp; Sopir</div>
                <div className="text-[11px] text-slate-600 mt-1">
                  Uji coba aplikasi mobile kru (/m) di 1 armada truk, pemetaan titik rute jalan.
                </div>
              </div>
              <div className="p-2.5 border border-black bg-white">
                <div className="font-black text-slate-900">Hari 9 - 14: Go-Live Penuh</div>
                <div className="text-[11px] text-slate-600 mt-1">
                  Generate tagihan massal, pembagian stiker barcode, dan broadcast WhatsApp warga.
                </div>
              </div>
            </div>
          </div>

          {/* Footer Contact */}
          <div className="border-t-2 border-black pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs font-bold text-slate-600">
            <div>
              <strong>CV Tiga Putra Semesta • Divisi Teknologi WastePay.id</strong><br />
              Jl. Kandang Ayam, Kalibaru, Kec. Cilodong, Kota Depok, Jawa Barat 16414
            </div>
            <div className="text-left sm:text-right">
              WA: +62 814-0078-2617 • Email: cv.herozerowaste@gmail.com<br />
              Website: https://wastepay.id • Demo: https://tpsheru.vercel.app
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
