"use client";

import React from "react";
import { ShieldCheck, Code2, Database, Lock, Smartphone, Cpu, CheckCircle } from "lucide-react";

export default function TechSpecSecurity() {
  const specs = [
    {
      category: "Arsitektur Web Core",
      items: [
        { label: "Framework", val: "Next.js 16.2 (App Router + Turbopack)" },
        { label: "UI Engine", val: "React 19 & Tailwind CSS 3.4" },
        { label: "Bahasa", val: "TypeScript 5 (Strict Mode, 0 Errors)" },
        { label: "Styling", val: "Custom Neo-Brutalist & Swiss Grid (Zero Bloat)" },
      ],
    },
    {
      category: "Database & Backend",
      items: [
        { label: "ORM", val: "Prisma 7.9.0 via @prisma/adapter-pg" },
        { label: "Database", val: "PostgreSQL (Supabase Serverless Pooler)" },
        { label: "Model Relasi", val: "19 Data Models Komprehensif" },
        { label: "Data Integrity", val: "Soft Delete (deletedAt) di semua tabel sensitif" },
      ],
    },
    {
      category: "Keamanan & Autentikasi",
      items: [
        { label: "Autentikasi", val: "JWT (jose HS256) via httpOnly Secure Cookie" },
        { label: "Password Hashing", val: "Bcryptjs (12 Rounds Salt)" },
        { label: "RBAC Middleware", val: "Fail-Closed Security (src/proxy.ts)" },
        { label: "Payment Security", val: "Duitku Signature HMAC-SHA256 & Random OrderId" },
      ],
    },
    {
      category: "Automasi & Pengujian",
      items: [
        { label: "Unit Testing", val: "Vitest 4.1 (59/59 Tests Passing - 100%)" },
        { label: "Mobile Engine", val: "Capacitor 7.0 (Webview Wrapper Android APK)" },
        { label: "GIS Engine", val: "Leaflet & Turf.js (Voronoi & Nearest-Neighbor)" },
        { label: "WhatsApp Gateway", val: "Provider REST API + Auto-Delay Blast" },
      ],
    },
  ];

  return (
    <section id="keamanan" className="py-20 bg-slate-900 text-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500 text-black border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0_0_#fff] mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Arsitektur &amp; Standar Industri</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Fondasi Teknologi Modern &amp; <br />
            <span className="text-emerald-400">Keamanan Skala Enterprise</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium">
            Dibangun dengan standar rekayasa perangkat lunak tertinggi. Andal menangani puluhan ribu transaksi bulanan tanpa downtime dan zero data breach.
          </p>
        </div>

        {/* 4 Cards Spec Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((group, gIdx) => (
            <div
              key={gIdx}
              className="bg-slate-800/90 border-2 border-slate-700 p-6 flex flex-col justify-between shadow-[4px_4px_0_0_#000]"
            >
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-4 pb-2 border-b border-slate-700">
                  {group.category}
                </div>

                <div className="space-y-3">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="space-y-0.5">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-xs font-mono font-bold text-white leading-snug">
                        {item.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase">
                <CheckCircle className="w-3 h-3" />
                <span>Verified Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Defense in Depth Banner */}
        <div className="mt-12 bg-slate-800 border-2 border-emerald-500/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-lg font-black uppercase tracking-wide text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Hierarki Akses 4 Level (Fail-Closed RBAC)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Sistem memproteksi rute API secara ketat: <strong>Superadmin (100)</strong>, <strong>Admin (50)</strong>, <strong>Kasir (20)</strong>, dan <strong>Petugas Lapangan (10)</strong>. Setiap request yang tidak terdaftar otomatis ditolak (403 Forbidden). Seluruh mutasi data dicatat ke dalam audit trail JSON yang tidak bisa dimanipulasi.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 bg-slate-950 px-4 py-3 border border-slate-700 font-mono text-xs text-emerald-400">
            <span>Vitest Test Suite:</span>
            <span className="bg-emerald-500 text-black font-black px-2 py-0.5 text-[11px]">59/59 PASS (100%)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
