"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedDumpTruck from "./AnimatedDumpTruck";
import { MessageSquare, Menu, X, Sparkles, ChevronRight } from "lucide-react";

type Props = {
  onOpenOrderModal: (plan?: string) => void;
  onOpenProposalModal: () => void;
};

export default function Navbar({ onOpenOrderModal, onOpenProposalModal }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner Marquee */}
      <div className="hm-marquee">
        <div className="hm-marquee-content">
          <span>🚀 DIGITALISASI SISTEM RETRIBUSI &amp; PENGELOLAAN PERSAMPAHAN ENTERPRISE #1 DI INDONESIA</span>
          <span>•</span>
          <span>GARANSI 0% KEBOCORAN KAS FISIK</span>
          <span>•</span>
          <span>PELACAKAN LIVE GPS ARMADA &amp; ZONASI VORONOI</span>
          <span>•</span>
          <span>INTEGRASI DUITKU QRIS &amp; WHATSAPP GATEWAY OTOMATIS</span>
          <span>•</span>
          <span>TERUJI NYATA DI 2.000+ KK KOTA DEPOK (UPS HERU)</span>
          <span>•</span>
          <span>🚀 DIGITALISASI SISTEM RETRIBUSI &amp; PENGELOLAAN PERSAMPAHAN ENTERPRISE #1 DI INDONESIA</span>
          <span>•</span>
          <span>GARANSI 0% KEBOCORAN KAS FISIK</span>
          <span>•</span>
          <span>PELACAKAN LIVE GPS ARMADA &amp; ZONASI VORONOI</span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <AnimatedDumpTruck size="md" theme="green" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 group-hover:text-emerald-600 transition-colors">
                    wastepay<span className="text-emerald-500">.id</span>
                  </span>
                  <span className="bg-emerald-400 text-black text-[10px] font-black uppercase px-1.5 py-0.5 border border-black shadow-[1.5px_1.5px_0_0_#000]">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase -mt-1 hidden sm:block">
                  Waste Management &amp; Billing ERP
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-black uppercase tracking-wider text-slate-800">
              <a href="#fitur" className="hover:text-emerald-600 transition-colors">
                Modul Sistem
              </a>
              <a href="#demo" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
                <span>Demo Live</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </a>
              <a href="#kalkulator" className="hover:text-emerald-600 transition-colors">
                Kalkulator ROI
              </a>
              <a href="#studi-kasus" className="hover:text-emerald-600 transition-colors">
                Studi Kasus
              </a>
              <a href="#harga" className="hover:text-emerald-600 transition-colors">
                Paket &amp; Lisensi
              </a>
              <a href="#keamanan" className="hover:text-emerald-600 transition-colors">
                Spesifikasi
              </a>
              <a href="#faq" className="hover:text-emerald-600 transition-colors">
                FAQ
              </a>
            </nav>

            {/* Right Action CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenProposalModal()}
                className="px-3.5 py-2 text-xs font-black uppercase tracking-wider border-2 border-black bg-slate-100 hover:bg-slate-200 transition-all shadow-[2px_2px_0_0_#000] active:translate-x-[1px] active:translate-y-[1px]"
              >
                Unduh Proposal
              </button>

              <button
                onClick={() => onOpenOrderModal()}
                className="hm-btn-green py-2 px-4 text-xs flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Konsultasi &amp; Order</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 border-2 border-black bg-white shadow-[2px_2px_0_0_#000]"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t-2 border-black bg-white px-4 pt-4 pb-6 space-y-3">
            <a
              href="#fitur"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black text-sm uppercase py-2 border-b border-slate-200"
            >
              Modul Sistem
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black text-sm uppercase py-2 border-b border-slate-200 flex items-center justify-between"
            >
              <span>Demo Live Sandbox</span>
              <span className="bg-emerald-500 text-black text-[10px] px-2 py-0.5 border border-black font-bold">INTERAKTIF</span>
            </a>
            <a
              href="#kalkulator"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black text-sm uppercase py-2 border-b border-slate-200"
            >
              Kalkulator Potensi Retribusi
            </a>
            <a
              href="#studi-kasus"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black text-sm uppercase py-2 border-b border-slate-200"
            >
              Studi Kasus UPS HERU Depok
            </a>
            <a
              href="#harga"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black text-sm uppercase py-2 border-b border-slate-200"
            >
              Paket Harga &amp; Lisensi
            </a>
            <a
              href="#keamanan"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black text-sm uppercase py-2 border-b border-slate-200"
            >
              Spesifikasi Teknis &amp; Keamanan
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-black text-sm uppercase py-2 border-b border-slate-200"
            >
              FAQ
            </a>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposalModal();
                }}
                className="w-full py-2.5 text-xs font-black uppercase tracking-wider border-2 border-black bg-slate-100 shadow-[2px_2px_0_0_#000]"
              >
                Unduh Ringkasan Proposal PDF
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full hm-btn-green py-2.5 text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi Sales via WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
