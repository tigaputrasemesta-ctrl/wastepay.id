"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Bagaimana jika saat ini data warga masih tersimpan di buku kas manual atau file Excel?",
      a: "Kami menyediakan template import CSV/Excel terstandar. Tim teknis WastePay.id juga siap mendampingi proses migrasi data dari format apa pun sampai seluruh data warga, histori tagihan, dan zonasi RT/RW terunggah sempurna tanpa biaya tambahan.",
    },
    {
      q: "Apakah sopir truk dan kru lapangan butuh smartphone mahal dengan spesifikasi tinggi?",
      a: "Sama sekali tidak. Modul driver lapangan (/m) dirancang ultra-ringan berbasis webview yang ramah perangkat. Aplikasi dapat berjalan mulus di smartphone Android standar dengan RAM 2GB dan layar kecil.",
    },
    {
      q: "Bagaimana jika di sebagian area penjemputan sinyal internet terputus (blank spot)?",
      a: "Driver App (/m) dilengkapi mekanisme offline-resilient. Sopir tetap bisa menandai rumah yang sudah diangkut, rumah kosong, atau akses terkunci. Saat armada kembali mendapatkan sinyal 4G/WiFi, sistem otomatis menyinkronkan seluruh data ke server pusat.",
    },
    {
      q: "Ke mana uang pembayaran warga dari QRIS / Virtual Account Duitku masuk?",
      a: "Uang pembayaran masuk 100% langsung ke rekening bank resmi atas nama pengelola / BUMDes / perusahaan Anda sendiri yang didaftarkan pada merchant Duitku. WastePay.id tidak menahan dana retribusi Anda sedikit pun.",
    },
    {
      q: "Apakah sistem ini mendukung peraturan daerah (Perda) atau tarif khusus yang berbeda-beda?",
      a: "Sangat fleksibel. WastePay mendukung pengaturan kategori tarif transparan (Rumah Tangga, Bisnis, Kost, Rumah Makan, Perkantoran, Industri), fitur override custom tarif per rumah, denda keterlambatan 2%/bulan, dan kalkulasi PPN 11% resmi.",
    },
    {
      q: "Berapa lama proses implementasi hingga sistem siap digunakan sepenuhnya?",
      a: "Untuk pengelola skala rintisan hingga 3.000 KK, sistem sudah bisa live dalam 7 hingga 14 hari kerja, mencakup migrasi data, pelatihan staf loket kasir, setup rute GPS, dan pencetakan stiker barcode.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b-2 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-300 border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0_0_#000] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan Umum</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Pertanyaan yang Sering <br />
            <span className="text-emerald-600">Diajukan Calon Pengelola</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium">
            Jawaban lugas seputar teknis, migrasi, rekening pencairan dana, dan operasional lapangan.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="hm-card p-0 bg-white overflow-hidden transition-all shadow-[4px_4px_0_0_#000]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-emerald-600 font-mono">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : "text-slate-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium border-t border-slate-100 bg-emerald-50/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
