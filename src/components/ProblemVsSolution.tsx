"use client";

import React from "react";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProblemVsSolution() {
  const comparisons = [
    {
      title: "Pencatatan Iuran & Kuitansi Tagihan",
      problem: "Kuitansi kertas sering robek, tercecer, dan catatan buku kas gampang dimanipulasi atau hilang.",
      solution: "Otomasi nomor invoice digital (INV/...) dengan barcode CODE128, rincian PPN 11%, dan arsip cloud aman.",
    },
    {
      title: "Pencegahan Kebocoran Kas Penagihan",
      problem: "Uang iuran mengendap di kantong oknum penagih lapangan berhari-hari tanpa kontrol real-time.",
      solution: "Modul Rekonsiliasi Kas Harian: Uang fisik di laci kasir diaudit otomatis vs mutasi sistem (Garansi 0% Selisih).",
    },
    {
      title: "Metode Pembayaran untuk Warga",
      problem: "Warga harus sedia uang pas dan repot menunggu petugas penagih datang mengetuk pintu.",
      solution: "Portal bayar online instan via Duitku: QRIS langsung dari BCA/Mandiri/GoPay/OVO/ShopeePay & Virtual Account.",
    },
    {
      title: "Efisiensi Rute & Bahan Bakar Truk",
      problem: "Sopir keliling hanya mengandalkan hafalan jalan; boros solar BBM dan sering ada rumah warga terlewat.",
      solution: "Zonasi Voronoi RT/RW & Algoritma Nearest-Neighbor + Pemantauan Live GPS armada truk secara real-time.",
    },
    {
      title: "Penanganan Komplain Sampah Menumpuk",
      problem: "Warga ribut komplain di grup WhatsApp RT/RW tanpa tindak lanjut terukur dan membuat pengurus pusing.",
      solution: "Tiket pengaduan mandiri berfoto & ber-geotag GPS; tanggapan dan update langsung diteruskan ke WA pelapor.",
    },
    {
      title: "Pelaporan Keuangan ke Pimpinan / DLH",
      problem: "Rekapitulasi akhir bulan butuh berminggu-minggu, sering terjadi selisih angka saat audit desa atau BUMDes.",
      solution: "Laporan finansial laba-rugi & arus kas instan, ekspor CSV/Excel satu klik, dan rekam jejak Audit Log 4-level.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-900 border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0_0_#000] mb-4">
            Transformasi Operasional Persampahan
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Tinggalkan Cara Lama yang <br />
            <span className="text-red-600">Boros &amp; Rentan Bocor</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium">
            Lihat bagaimana WastePay.id merevolusi tata kelola retribusi persampahan konvensional menjadi ekosistem digital yang modern, akuntabel, dan menguntungkan.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="hm-card p-6 flex flex-col justify-between hover:shadow-[8px_8px_0_0_#000] transition-shadow"
            >
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                  Modul #0{index + 1} • {item.title}
                </div>

                {/* Problem Box */}
                <div className="p-3.5 bg-red-50 border-2 border-black mb-3">
                  <div className="flex items-center gap-2 text-xs font-black text-red-700 uppercase mb-1">
                    <XCircle className="w-4 h-4 shrink-0" />
                    <span>Cara Konvensional:</span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Solution Box */}
                <div className="p-3.5 bg-emerald-50 border-2 border-black">
                  <div className="flex items-center gap-2 text-xs font-black text-emerald-800 uppercase mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Dengan WastePay.id:</span>
                  </div>
                  <p className="text-xs text-slate-800 font-bold leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
