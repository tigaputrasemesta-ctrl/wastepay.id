"use client";

import React from "react";
import Link from "next/link";
import AnimatedDumpTruck from "./AnimatedDumpTruck";
import { MessageSquare, Mail, MapPin, ExternalLink, ShieldCheck, Heart } from "lucide-react";

type Props = {
  onOpenOrderModal: () => void;
  onOpenProposalModal: () => void;
};

export default function Footer({ onOpenOrderModal, onOpenProposalModal }: Props) {
  return (
    <footer className="bg-slate-950 text-white border-t-4 border-black pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b-2 border-slate-800">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <AnimatedDumpTruck size="md" theme="green" />
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white">
                  wastepay<span className="text-emerald-400">.id</span>
                </span>
                <span className="bg-emerald-500 text-black text-[10px] font-black uppercase px-1.5 py-0.5 border border-black">
                  ENTERPRISE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Sistem manajemen retribusi &amp; operasional pengelolaan sampah terpadu #1 di Indonesia. Mengintegrasikan penagihan otomatis, QRIS Duitku, live GPS armada truk, dan garansi zero-leakage rekonsiliasi kas harian.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 border border-slate-700 text-[10px] font-mono text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>59/59 Vitest Passed</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 border border-slate-700 text-[10px] font-mono text-amber-400">
                <span>Supabase PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300">
              Navigasi Solusi
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a href="#fitur" className="hover:text-emerald-400 transition-colors">
                  10 Modul Terpadu
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-emerald-400 transition-colors">
                  Live Demo Sandbox
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-emerald-400 transition-colors">
                  Kalkulator Potensi PAD
                </a>
              </li>
              <li>
                <a href="#studi-kasus" className="hover:text-emerald-400 transition-colors">
                  Studi Kasus UPS HERU
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-emerald-400 transition-colors">
                  Paket &amp; Model Lisensi
                </a>
              </li>
              <li>
                <a href="#keamanan" className="hover:text-emerald-400 transition-colors">
                  Spesifikasi Teknis
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ Pengelola
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Aksi & Dokumen */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300">
              Dokumen &amp; Layanan
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button
                  onClick={onOpenProposalModal}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Unduh Proposal One-Pager (PDF)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenOrderModal}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Konsultasi Pengadaan APBD/BUMDes
                </button>
              </li>
              <li>
                <a
                  href="https://tpsheru.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>Portal Publik Warga Depok</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak Resmi */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300">
              Kantor &amp; Kontak Resmi
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Jl. Kandang Ayam, Kalibaru, Kec. Cilodong, Kota Depok, Jawa Barat 16414
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/6281400782617"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors font-mono font-bold"
                >
                  +62 814-0078-2617
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:cv.herozerowaste@gmail.com"
                  className="hover:text-emerald-400 transition-colors font-mono"
                >
                  cv.herozerowaste@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 <strong>WastePay.id</strong> • Didukung oleh <strong>CV Tiga Putra Semesta</strong>. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px]">
            <span>Platform Pengelolaan Persampahan Indonesia Modern</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
