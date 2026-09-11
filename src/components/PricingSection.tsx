"use client";

import React, { useState } from "react";
import { Check, Zap, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { formatRupiah } from "@/lib/utils";

type Props = {
  onOpenOrderModal: (planName?: string) => void;
};

export default function PricingSection({ onOpenOrderModal }: Props) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      id: "starter",
      name: "BUMDes & TPS3R Mandiri",
      badge: "Skala Rintisan",
      target: "Cocok untuk BUMDes, pengurus RW mandiri, atau TPS3R desa",
      capacity: "Hingga 1.500 KK • 2 Armada Truk",
      monthlyPrice: 750000,
      yearlyPrice: 7500000,
      highlight: false,
      features: [
        "Smart Billing & Denda 2%/Bulan Otomatis",
        "Modul Kasir Tunai & Loket Pembayaran",
        "Rekonsiliasi Kas Harian (Anti-Bocor Kas)",
        "Portal Warga Mandiri (/daftar, /bayar)",
        "Cetak Faktur A4 Resmi & Stiker Barcode",
        "Notifikasi WhatsApp Mode Mandiri (wa.me)",
        "Database Cloud Terkelola & Backup Rutin",
        "Dukungan Komplain Berfoto Warga",
      ],
    },
    {
      id: "pro",
      name: "Professional Vendor Swasta",
      badge: "Paling Populer ⭐",
      target: "Untuk kontraktor PT/CV angkut sampah & estate management perumahan",
      capacity: "Hingga 7.500 KK • Armada Tak Terbatas",
      monthlyPrice: 1950000,
      yearlyPrice: 19500000,
      highlight: true,
      features: [
        "Semua Fitur Paket Starter BUMDes",
        "Integrasi Duitku Gateway (QRIS, VA, E-Wallet)",
        "Aplikasi Mobile Sopir (/m) & APK Android Native",
        "Pelacakan Live GPS Armada & Zonasi Voronoi",
        "Fonnte WhatsApp API Bot (Auto-Blast Pengingat)",
        "Survei Geotagging Otomatis via EXIF Kamera HP",
        "Ekspor Laporan Keuangan CSV / Excel Siap Audit",
        "SLA Dukungan Teknis Prioritas",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Pemda / White-Label",
      badge: "Dinas Lingkungan Hidup",
      target: "Untuk DLH Kabupaten/Kota, Bapenda, atau Konsorsium Metropolitan",
      capacity: "Unlimited KK • Unlimited Armada",
      monthlyPrice: 0,
      yearlyPrice: 0,
      isCustom: true,
      highlight: false,
      features: [
        "Semua Fitur Paket Professional",
        "Domain Kustom Pemda (*.go.id atau *.com)",
        "White-Label Penuh (Identitas & Kop Surat Resmi)",
        "Pilihan Instalasi On-Premise / Private Cloud Server",
        "Opsi Lisensi Kepemilikan Source Code Penuh",
        "Integrasi API BPD (Bank Pembangunan Daerah)",
        "Pelatihan On-Site Seluruh Kru & Kasir Lapangan",
        "Dedicated Account Manager & SLA 24/7",
      ],
    },
  ];

  return (
    <section id="harga" className="py-20 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-300 border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0_0_#000] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Investasi Terjangkau • Nilai Maksimal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Pilihan Paket Lisensi <br />
            <span className="text-emerald-600">Sesuai Skala Operasional Anda</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium">
            Tanpa biaya tersembunyi. Investasi software langsung balik modal dari efisiensi bahan bakar dan penghentian kebocoran kas dalam hitungan minggu.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-100 border-2 border-black shadow-[3px_3px_0_0_#000]">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all ${
                billingCycle === "monthly"
                  ? "bg-slate-900 text-white shadow-[1.5px_1.5px_0_0_#000]"
                  : "text-slate-700 hover:text-black"
              }`}
            >
              Langganan Bulanan
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                billingCycle === "yearly"
                  ? "bg-emerald-500 text-black shadow-[1.5px_1.5px_0_0_#000]"
                  : "text-slate-700 hover:text-black"
              }`}
            >
              <span>Tahunan (Hemat 2 Bulan)</span>
              <span className="bg-black text-white text-[9px] px-1.5 py-0.5 rounded font-bold">HEMAT 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                key={plan.id}
                className={`hm-card p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                  plan.highlight
                    ? "bg-emerald-50/50 border-4 border-black shadow-[10px_10px_0_0_#000]"
                    : "bg-white border-2 border-black"
                }`}
              >
                {/* Top Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black border-2 border-black px-3.5 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0_0_#000]">
                    Paling Banyak Dipilih
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white px-2 py-0.5">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mt-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium mt-1 leading-snug">
                    {plan.target}
                  </p>

                  <div className="my-4 p-2.5 bg-white border border-black text-xs font-bold text-slate-800 font-mono">
                    Kapasitas: {plan.capacity}
                  </div>

                  {/* Price Tag */}
                  <div className="py-4 border-y-2 border-black my-4">
                    {plan.isCustom ? (
                      <div>
                        <div className="text-3xl font-black text-slate-900 uppercase">
                          Kustomisasi
                        </div>
                        <div className="text-xs text-slate-500 font-bold mt-1">
                          Sesuai KAK / Dokumen Pengadaan Pemda
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
                            {formatRupiah(price)}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            /{billingCycle === "monthly" ? "bulan" : "tahun"}
                          </span>
                        </div>
                        {billingCycle === "yearly" && (
                          <div className="text-[11px] font-black text-emerald-700 mt-1">
                            Setara {formatRupiah(Math.round(price / 12))}/bulan
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[11px] font-black uppercase text-slate-500">Fitur Termasuk:</div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-800">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium text-xs leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8 border-t border-slate-200 mt-6">
                  <button
                    onClick={() => onOpenOrderModal(`${plan.name} (${billingCycle === "yearly" ? "Tahunan" : "Bulanan"})`)}
                    className={`w-full py-3 text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-black transition-all flex items-center justify-center gap-2 ${
                      plan.highlight
                        ? "hm-btn-green shadow-[4px_4px_0_0_#000]"
                        : "hm-btn-dark shadow-[4px_4px_0_0_#000]"
                    }`}
                  >
                    <span>{plan.isCustom ? "Konsultasi Pengadaan" : "Pilih Paket Ini"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-amber-50 border-2 border-black p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[4px_4px_0_0_#000]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-700 shrink-0" />
            <div>
              <div className="font-black text-sm uppercase text-slate-900">
                Garansi Pendampingan Onboarding &amp; Migrasi Data Lama
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Punya data ribuan warga di file Excel / buku catatan? Tim teknis kami bantu migrasikan ke sistem WastePay tanpa biaya tambahan.
              </div>
            </div>
          </div>
          <button
            onClick={() => onOpenOrderModal("Konsultasi Migrasi Data Excel Lama")}
            className="whitespace-nowrap px-4 py-2 border-2 border-black bg-white text-xs font-black uppercase shadow-[2px_2px_0_0_#000] hover:bg-slate-100"
          >
            Konsultasi Migrasi
          </button>
        </div>
      </div>
    </section>
  );
}
