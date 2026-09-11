"use client";

import React, { useState } from "react";
import AnimatedDumpTruck from "./AnimatedDumpTruck";
import {
  ShieldCheck,
  Zap,
  TrendingUp,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Play,
  Smartphone,
  Truck,
  DollarSign,
  AlertCircle
} from "lucide-react";

type Props = {
  onOpenOrderModal: () => void;
};

export default function HeroSection({ onOpenOrderModal }: Props) {
  const [activeTab, setActiveTab] = useState<"fleet" | "cash">("fleet");

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-amber-50/40 via-white to-slate-50 border-b-2 border-black">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100 border-2 border-black shadow-[3px_3px_0_0_#000]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span className="text-xs font-black uppercase tracking-wider text-emerald-950">
                Solusi Enterprise Pengelolaan Sampah &amp; Retribusi Daerah #1
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-slate-900 leading-[0.95]">
              Digitalisasi Total <br />
              <span className="text-emerald-600 bg-emerald-50 px-2 border-2 border-black inline-block mt-1 shadow-[4px_4px_0_0_#000]">
                Operasional &amp; Kas
              </span>
              <br />
              Pengelolaan Sampah.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed max-w-2xl">
              Hentikan cara manual dengan kuitansi sobek &amp; kas tercecer. <strong>WastePay.id</strong> adalah platform terpadu untuk <strong>TPS3R, BUMDes, Pengelola Kawasan, Vendor Swasta, dan Dinas Lingkungan Hidup (DLH)</strong>. Otomasi billing, tagihan QRIS/Duitku, pelacakan live GPS armada truk, driver app, hingga rekonsiliasi kas harian anti-bocor.
            </p>

            {/* Proof Points Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0_0_#000] flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-[11px] font-black uppercase text-slate-900">0% Kas Bocor</div>
                  <div className="text-[10px] text-slate-500 font-bold">Audit Fisik vs Sistem</div>
                </div>
              </div>

              <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0_0_#000] flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <div className="text-[11px] font-black uppercase text-slate-900">Live GPS &amp; Rute</div>
                  <div className="text-[10px] text-slate-500 font-bold">Zonasi Voronoi RT/RW</div>
                </div>
              </div>

              <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0_0_#000] flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-[11px] font-black uppercase text-slate-900">2.000+ Terlayani</div>
                  <div className="text-[10px] text-slate-500 font-bold">Studi Kasus UPS HERU</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-4">
              <a
                href="#demo"
                className="hm-btn-green text-sm sm:text-base py-3.5 px-6 flex items-center justify-center gap-2.5"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>Coba Demo Interaktif</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="hm-btn-dark text-sm sm:text-base py-3.5 px-6 flex items-center justify-center gap-2.5"
              >
                <Zap className="w-4 h-4 text-yellow-300" />
                <span>Jadwalkan Konsultasi</span>
              </button>

              <a
                href="#kalkulator"
                className="hm-btn text-sm sm:text-base py-3.5 px-6 flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Hitung ROI</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Live Operational Pulse Simulator */}
          <div className="lg:col-span-5">
            <div className="hm-card p-0 overflow-hidden bg-white relative">
              {/* Card Header */}
              <div className="bg-slate-900 text-white p-4 border-b-2 border-black flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    OPERATIONAL PULSE • LIVE FEED
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setActiveTab("fleet")}
                    className={`px-2.5 py-1 text-[10px] font-black uppercase border border-white/30 transition-colors ${
                      activeTab === "fleet" ? "bg-emerald-500 text-black border-black" : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    Armada GPS
                  </button>
                  <button
                    onClick={() => setActiveTab("cash")}
                    className={`px-2.5 py-1 text-[10px] font-black uppercase border border-white/30 transition-colors ${
                      activeTab === "cash" ? "bg-emerald-500 text-black border-black" : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    Arus Kas
                  </button>
                </div>
              </div>

              {/* Card Body - Dynamic Tab */}
              {activeTab === "fleet" ? (
                <div className="p-6 space-y-5 bg-[#fcfcfb]">
                  {/* Visual Map Simulator */}
                  <div className="relative h-56 bg-emerald-50 border-2 border-black rounded-sm overflow-hidden p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between z-10">
                      <div className="bg-white border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase shadow-[2px_2px_0_0_#000]">
                        Sektor Cilodong - RT 04/RW 03
                      </div>
                      <div className="bg-emerald-500 text-black border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase flex items-center gap-1 shadow-[2px_2px_0_0_#000]">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                        Truk 02 Bergerak (22 km/h)
                      </div>
                    </div>

                    {/* SVG Map Grid & Animated Route */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 300 200">
                        {/* Voronoi Grid Lines */}
                        <path d="M 10 50 L 90 20 L 160 60 L 120 140 L 40 130 Z" fill="rgba(16,185,129,0.12)" stroke="#000" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M 160 60 L 250 30 L 290 110 L 210 160 L 120 140 Z" fill="rgba(245,158,11,0.12)" stroke="#000" strokeWidth="1.5" strokeDasharray="4 4" />
                        
                        {/* Roads */}
                        <line x1="20" y1="170" x2="280" y2="170" stroke="#000" strokeWidth="8" strokeLinecap="round" />
                        <line x1="20" y1="170" x2="280" y2="170" stroke="#fff" strokeWidth="2" strokeDasharray="8 6" />
                        <line x1="140" y1="170" x2="140" y2="30" stroke="#000" strokeWidth="8" strokeLinecap="round" />
                        <line x1="140" y1="170" x2="140" y2="30" stroke="#fff" strokeWidth="2" strokeDasharray="8 6" />

                        {/* Customer Points */}
                        <circle cx="60" cy="110" r="4" fill="#059669" stroke="#000" strokeWidth="1.5" />
                        <circle cx="80" cy="80" r="4" fill="#059669" stroke="#000" strokeWidth="1.5" />
                        <circle cx="110" cy="120" r="4" fill="#059669" stroke="#000" strokeWidth="1.5" />
                        <circle cx="180" cy="100" r="4" fill="#ef4444" stroke="#000" strokeWidth="1.5" />
                        <circle cx="220" cy="70" r="4" fill="#059669" stroke="#000" strokeWidth="1.5" />
                        <circle cx="240" cy="130" r="4" fill="#ef4444" stroke="#000" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Animated Dump Truck Mascot Overlay */}
                    <div className="z-10 flex items-center justify-center my-auto">
                      <div className="bg-white/95 border-2 border-black p-2.5 shadow-[4px_4px_0_0_#000] flex items-center gap-3">
                        <AnimatedDumpTruck size="sm" theme="green" />
                        <div>
                          <div className="text-xs font-black text-slate-900">Dump Truck Isuzu Giga (B 9144 T)</div>
                          <div className="text-[10px] text-slate-600 font-bold">Ritase #2 • Muatan: 2.8 m³ (Organik &amp; Campur)</div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="z-10 flex items-center justify-between text-[10px] font-black uppercase bg-white border border-black px-2 py-1">
                      <span className="text-emerald-700 font-mono">148 / 160 Titik Diangkut</span>
                      <span className="text-slate-500 font-mono">ETA Selesai: 11:45 WIB</span>
                    </div>
                  </div>

                  {/* Realtime KPI Mini Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0_0_#000]">
                      <div className="text-[10px] font-bold text-slate-500 uppercase">Efisiensi Rute BBM</div>
                      <div className="text-xl font-black text-emerald-600">+28.4%</div>
                      <div className="text-[9px] text-slate-600 font-medium">Algoritma Nearest-Neighbor</div>
                    </div>
                    <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0_0_#000]">
                      <div className="text-[10px] font-bold text-slate-500 uppercase">Kecepatan Komplain</div>
                      <div className="text-xl font-black text-slate-900">&lt; 45 Menit</div>
                      <div className="text-[9px] text-slate-600 font-medium">Auto-Dispatch via WhatsApp</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 space-y-5 bg-[#fcfcfb]">
                  {/* Financial Flow Card */}
                  <div className="bg-amber-50 border-2 border-black p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-amber-950">
                        Rekonsiliasi Kas Hari Ini
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-500 text-black border border-black text-[9px] font-black uppercase">
                        MATCH 100% (NIHIL SELISIH)
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-black/20">
                      <div>
                        <div className="text-[10px] font-bold text-slate-500">Uang Tunai di Laci Kasir:</div>
                        <div className="text-base font-black text-slate-900">Rp 4.850.000</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-500">Tercatat Sistem (Tunai):</div>
                        <div className="text-base font-black text-slate-900">Rp 4.850.000</div>
                      </div>
                    </div>

                    <div className="bg-white border border-black p-2 flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700">Online Gateway (Duitku QRIS):</span>
                      <span className="font-black text-emerald-600">Rp 12.450.000 (Lunas)</span>
                    </div>
                  </div>

                  {/* Summary Metric */}
                  <div className="bg-slate-900 text-white p-4 border-2 border-black shadow-[3px_3px_0_0_#000] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Total Retribusi Terkumpul Bulan Ini
                      </div>
                      <div className="text-2xl font-black text-emerald-400">Rp 102.400.000</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Collection Rate</div>
                      <div className="text-xl font-black text-white">96.8%</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Footer Banner */}
              <div className="p-3 bg-yellow-300 border-t-2 border-black flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider text-black flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Studi Nyata: UPS HERU Depok Sejak 2014
                </span>
                <a
                  href="https://tpsheru.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-black uppercase underline hover:text-emerald-800"
                >
                  Buka Live App &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
