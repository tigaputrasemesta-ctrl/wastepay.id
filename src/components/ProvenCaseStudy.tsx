"use client";

import React from "react";
import AnimatedDumpTruck from "./AnimatedDumpTruck";
import { ShieldCheck, ExternalLink, MapPin, Award, CheckCircle2, TrendingUp, Users } from "lucide-react";

export default function ProvenCaseStudy() {
  return (
    <section id="studi-kasus" className="py-20 bg-[#fafaf8] border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0_0_#000] mb-4">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Proven Track Record • 12 Tahun Pengalaman</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Bukan Sekadar Teori: <br />
            <span className="text-emerald-600">Terbukti Nyata di UPS HERU Depok</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium">
            Arsitektur software WastePay.id telah teruji secara langsung di medan operasional nyata melayani ribuan warga Kota Depok setiap harinya.
          </p>
        </div>

        {/* Featured Case Study Hero Box */}
        <div className="hm-card bg-white p-6 sm:p-10 mb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-black text-white text-xs font-black px-2.5 py-1 uppercase tracking-wider">
                  FLAGSHIP IMPLEMENTATION
                </span>
                <span className="bg-emerald-400 text-black text-xs font-black px-2.5 py-1 border border-black uppercase tracking-wider">
                  UPS HERU • KOTA DEPOK
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  Koordinat: -6.424838, 106.832667
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight leading-snug">
                Dari Sistem Gerobak Manual Hingga Menjadi Unit Pengolahan Sampah Modern Berbasis Geotag &amp; Duitku QRIS
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Berdiri sejak 2014 di Jl. Kandang Ayam, Kalibaru, Kec. Cilodong, Kota Depok, <strong>UPS HERU</strong> bertransformasi dari sistem penagihan kertas tradisional menjadi ekosistem digital penuh dengan WastePay. Hasilnya: <strong>tingkat pelunasan iuran mencapai 96.8%</strong>, waktu komplain terpangkas hingga di bawah 45 menit, dan tercapainya <strong>rekonsiliasi kas fisik nihil selisih (Rp 0)</strong>.
              </p>

              {/* 4 Stats Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-50 border-2 border-black p-3 text-center shadow-[2px_2px_0_0_#000]">
                  <div className="text-2xl font-black text-slate-900 font-mono">2.000+</div>
                  <div className="text-[10px] font-black uppercase text-slate-500 mt-1">KK Terlayani</div>
                </div>
                <div className="bg-slate-50 border-2 border-black p-3 text-center shadow-[2px_2px_0_0_#000]">
                  <div className="text-2xl font-black text-emerald-600 font-mono">100%</div>
                  <div className="text-[10px] font-black uppercase text-slate-500 mt-1">Audit Kas Match</div>
                </div>
                <div className="bg-slate-50 border-2 border-black p-3 text-center shadow-[2px_2px_0_0_#000]">
                  <div className="text-2xl font-black text-slate-900 font-mono">63</div>
                  <div className="text-[10px] font-black uppercase text-slate-500 mt-1">Titik RT/RW</div>
                </div>
                <div className="bg-slate-50 border-2 border-black p-3 text-center shadow-[2px_2px_0_0_#000]">
                  <div className="text-2xl font-black text-emerald-600 font-mono">59/59</div>
                  <div className="text-[10px] font-black uppercase text-slate-500 mt-1">Vitest Passed</div>
                </div>
              </div>

              {/* Action Link to Live Production App */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="https://tpsheru.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hm-btn-green py-2.5 px-5 text-xs flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verifikasi Website Live UPS HERU (tpsheru.vercel.app)</span>
                </a>
                <span className="text-xs font-bold text-slate-500">
                  *Akses live deployment publik
                </span>
              </div>
            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-5 bg-yellow-300 border-2 border-black p-6 shadow-[6px_6px_0_0_#000] relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-1">
                    TESTIMONI PENGURUS
                  </span>
                  <AnimatedDumpTruck size="sm" theme="black" />
                </div>

                <blockquote className="text-sm font-bold text-slate-900 leading-relaxed italic">
                  &ldquo;Dulu sebelum ada sistem ini, akhir bulan bendahara kami pusing tujuh keliling mencocokkan uang di kantong penagih dengan buku kas manual. Selalu ada selisih ratusan ribu hingga jutaan. Sekarang dengan fitur Rekonsiliasi Kas Harian dan Duitku QRIS, kasir tinggal hitung uang fisik dan sistem langsung verifikasi otomatis. Nol kebocoran!&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 border-t-2 border-black mt-4 flex items-center justify-between">
                <div>
                  <div className="font-black text-slate-900 text-sm">Bpk. H. Rahmat Hidayat</div>
                  <div className="text-[11px] font-bold text-slate-700">Koordinator Lapangan &amp; Keuangan UPS HERU</div>
                </div>
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-black text-xs">
                  RH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
