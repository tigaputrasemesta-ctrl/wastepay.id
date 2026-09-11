"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, ShieldCheck, Fuel, ArrowRight, Sparkles } from "lucide-react";
import { formatRupiah, formatNumber } from "@/lib/utils";

type Props = {
  onOpenOrderModal: (plan?: string) => void;
};

export default function RoiCalculator({ onOpenOrderModal }: Props) {
  const [householdCount, setHouseholdCount] = useState(2000);
  const [monthlyFee, setMonthlyFee] = useState(50000);

  // Derived Calculations
  const monthlyRevenue = householdCount * monthlyFee;
  const yearlyRevenue = monthlyRevenue * 12;
  
  // Leakage Prevention (18% industry average in cash/manual collection)
  const savedCashLeakageYearly = Math.round(yearlyRevenue * 0.18);
  
  // Fleet Fuel & Route Efficiency (est ~Rp 1.200.000 per 500 households per month saved)
  const estimatedTrucks = Math.max(1, Math.ceil(householdCount / 650));
  const yearlyFuelSaved = estimatedTrucks * 1500000 * 12;

  // Total Annual Economic Value Gained
  const totalValueCreated = savedCashLeakageYearly + yearlyFuelSaved;

  return (
    <section id="kalkulator" className="py-20 bg-amber-50/50 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-400 text-black border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0_0_#000] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Potensi PAD &amp; Efisiensi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Berapa Potensi Retribusi <br />
            <span className="text-emerald-600">Wilayah yang Anda Kelola?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium">
            Geser slider di bawah ini untuk melihat simulasi peningkatan pendapatan iuran, pencegahan kebocoran kas fisik, dan efisiensi bahan bakar armada truk Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Controls Card */}
          <div className="lg:col-span-6 hm-card bg-white space-y-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
                <span className="font-black text-slate-900 uppercase text-sm tracking-wider">
                  Parameter Wilayah Operasional
                </span>
                <span className="bg-slate-900 text-white text-[10px] font-mono font-bold px-2 py-1">
                  LIVE CALCULATION
                </span>
              </div>

              {/* Slider 1: Jumlah KK / Pelanggan */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-baseline">
                  <label className="font-black text-sm uppercase text-slate-800">
                    1. Jumlah KK / Rumah / Pelanggan
                  </label>
                  <span className="text-2xl font-black text-emerald-600 font-mono bg-emerald-50 px-3 py-1 border-2 border-black">
                    {formatNumber(householdCount)} <span className="text-xs text-slate-600">KK</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={15000}
                  step={100}
                  value={householdCount}
                  onChange={(e) => setHouseholdCount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500 border-2 border-black"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-500 font-mono">
                  <span>300 KK (RT/RW Mandiri)</span>
                  <span>5.000 KK (BUMDes / Kawasan)</span>
                  <span>15.000 KK (Kecamatan / Kota)</span>
                </div>
              </div>

              {/* Slider 2: Tarif Iuran Retribusi */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="font-black text-sm uppercase text-slate-800">
                    2. Rata-Rata Tarif Iuran Sampah / Bulan
                  </label>
                  <span className="text-2xl font-black text-slate-900 font-mono bg-slate-100 px-3 py-1 border-2 border-black">
                    {formatRupiah(monthlyFee)}
                  </span>
                </div>
                <input
                  type="range"
                  min={20000}
                  max={150000}
                  step={5000}
                  value={monthlyFee}
                  onChange={(e) => setMonthlyFee(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900 border-2 border-black"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-500 font-mono">
                  <span>Rp 20.000 (Subsidi Desa)</span>
                  <span>Rp 50.000 (Standar Perkotaan)</span>
                  <span>Rp 150.000 (Cluster / Komersil)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-100 border-2 border-black text-xs font-bold text-slate-800 flex items-start gap-2.5">
              <span className="text-lg mt-[-2px]">💡</span>
              <span>
                <strong>Catatan Efisiensi:</strong> Dengan sistem rekonsiliasi kas harian dan routing GPS WastePay.id, pengelola rata-rata menaikkan tingkat pelunasan tagihan dari 68% menjadi 96.5% dalam 90 hari pertama.
              </span>
            </div>
          </div>

          {/* Right Results Breakdown Card */}
          <div className="lg:col-span-6 hm-card bg-slate-900 text-white space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-slate-700 pb-4 mb-6">
                <span className="font-black text-emerald-400 uppercase text-sm tracking-wider flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Estimasi Manfaat Finansial &amp; Operasional</span>
                </span>
                <span className="bg-emerald-500 text-black text-[10px] font-bold px-2 py-0.5 border border-black uppercase">
                  ROI &lt; 2 Bulan
                </span>
              </div>

              {/* Huge Highlight: Monthly & Yearly Omzet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/90 border-2 border-slate-700 p-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Potensi Omzet Bulanan</div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-1">
                    {formatRupiah(monthlyRevenue)}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">100% Tercatat Digital</div>
                </div>

                <div className="bg-slate-800/90 border-2 border-slate-700 p-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Potensi Omzet Tahunan</div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono mt-1">
                    {formatRupiah(yearlyRevenue)}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Proyeksi 12 Bulan</div>
                </div>
              </div>

              {/* Value Gained Breakdown */}
              <div className="space-y-3">
                <div className="bg-emerald-950/60 border border-emerald-500/40 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-black text-emerald-300 uppercase">
                        Kas Yang Diselamatkan Dari Kebocoran (18%)
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Pencegahan uang tercecer lewat audit rekonsiliasi kasir fisik
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-black text-emerald-400 font-mono">
                      +{formatRupiah(savedCashLeakageYearly)}
                    </div>
                    <div className="text-[9px] text-slate-400">per tahun</div>
                  </div>
                </div>

                <div className="bg-amber-950/60 border border-amber-500/40 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Fuel className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-black text-amber-300 uppercase">
                        Penghematan Solar BBM Truk (~{estimatedTrucks} Armada)
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Efisiensi rute algoritma Voronoi &amp; penjemputan terarah
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-black text-amber-400 font-mono">
                      +{formatRupiah(yearlyFuelSaved)}
                    </div>
                    <div className="text-[9px] text-slate-400">per tahun</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA to WhatsApp with prefilled calculation */}
            <div className="pt-4 border-t border-slate-700">
              <button
                onClick={() => onOpenOrderModal(`Konsultasi Wilayah ${householdCount} KK (Tarif Rp ${formatNumber(monthlyFee)})`)}
                className="w-full hm-btn-green py-3 text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Konsultasikan Implementasi Wilayah Ini &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
