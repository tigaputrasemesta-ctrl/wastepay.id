"use client";

import React, { useState } from "react";
import AnimatedDumpTruck from "./AnimatedDumpTruck";
import {
  LayoutDashboard,
  MapPin,
  Smartphone,
  FileText,
  MessageSquare,
  Bell,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Printer,
  QrCode,
  Send,
  Truck,
  DollarSign,
  UserCheck,
  Search
} from "lucide-react";

export default function InteractiveDemoShowcase() {
  const [activeTab, setActiveTab] = useState<"admin" | "peta" | "mobile" | "invoice" | "wa">("admin");
  
  // Admin Tab State
  const [billingGenerated, setBillingGenerated] = useState(false);
  const [notifCount, setNotifCount] = useState(3);
  
  // Mobile Driver Tab State
  const [tasks, setTasks] = useState([
    { id: 1, name: "Ibu Siti Rohani (RT 01/RW 04)", code: "P000104", status: "pending", type: "Organik & Dapur" },
    { id: 2, name: "Bpk. Bambang Sutrisno (RT 01/RW 04)", code: "P000105", status: "pending", type: "Campuran" },
    { id: 3, name: "Toko Sembako Barokah (RT 02/RW 04)", code: "P000106", status: "pending", type: "Kardus & Plastik" },
    { id: 4, name: "Kost Mahasiswa Melati (RT 02/RW 04)", code: "P000107", status: "pending", type: "Campuran" },
  ]);

  // Invoice Tab State
  const [invoicePaid, setInvoicePaid] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("QRIS");

  // Handle Driver Action
  const updateTaskStatus = (id: number, status: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  // Handle Generate Billing
  const handleGenerateBilling = () => {
    setBillingGenerated(true);
    setTimeout(() => {
      setNotifCount((prev) => prev + 1);
    }, 600);
  };

  return (
    <section id="demo" className="py-20 bg-[#f8fafc] border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-300 border-2 border-black text-xs font-black uppercase shadow-[2px_2px_0_0_#000] mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            Live Interactive Sandbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
            Coba Langsung Sistemnya <br />
            <span className="text-emerald-600">Sebelum Berlangganan</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium">
            Uji coba 5 alur operasional utama WastePay.id secara langsung di browser Anda. Klik tombol, coba aplikasi sopir, dan lihat bagaimana otomasi retribusi bekerja secara instan.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 gap-2.5 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab("admin")}
            className={`px-4 py-3 border-2 border-black font-black text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 shadow-[3px_3px_0_0_#000] ${
              activeTab === "admin"
                ? "bg-slate-900 text-white translate-x-[1px] translate-y-[1px] shadow-[1px_1px_0_0_#000]"
                : "bg-white text-slate-800 hover:bg-slate-100"
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-emerald-400" />
            <span>1. Control Panel Admin &amp; Kasir</span>
          </button>

          <button
            onClick={() => setActiveTab("peta")}
            className={`px-4 py-3 border-2 border-black font-black text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 shadow-[3px_3px_0_0_#000] ${
              activeTab === "peta"
                ? "bg-slate-900 text-white translate-x-[1px] translate-y-[1px] shadow-[1px_1px_0_0_#000]"
                : "bg-white text-slate-800 hover:bg-slate-100"
            }`}
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>2. Peta GIS &amp; Live GPS Armada</span>
          </button>

          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-4 py-3 border-2 border-black font-black text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 shadow-[3px_3px_0_0_#000] ${
              activeTab === "mobile"
                ? "bg-slate-900 text-white translate-x-[1px] translate-y-[1px] shadow-[1px_1px_0_0_#000]"
                : "bg-white text-slate-800 hover:bg-slate-100"
            }`}
          >
            <Smartphone className="w-4 h-4 text-blue-400" />
            <span>3. Driver App Sopir Truk (/m)</span>
          </button>

          <button
            onClick={() => setActiveTab("invoice")}
            className={`px-4 py-3 border-2 border-black font-black text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 shadow-[3px_3px_0_0_#000] ${
              activeTab === "invoice"
                ? "bg-slate-900 text-white translate-x-[1px] translate-y-[1px] shadow-[1px_1px_0_0_#000]"
                : "bg-white text-slate-800 hover:bg-slate-100"
            }`}
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>4. Faktur A4 &amp; QRIS Duitku</span>
          </button>

          <button
            onClick={() => setActiveTab("wa")}
            className={`px-4 py-3 border-2 border-black font-black text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 shadow-[3px_3px_0_0_#000] ${
              activeTab === "wa"
                ? "bg-slate-900 text-white translate-x-[1px] translate-y-[1px] shadow-[1px_1px_0_0_#000]"
                : "bg-white text-slate-800 hover:bg-slate-100"
            }`}
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>5. WhatsApp Automation Bot</span>
          </button>
        </div>

        {/* Interactive Workspace Container */}
        <div className="bg-white border-2 border-black shadow-[8px_8px_0_0_#000] rounded-sm overflow-hidden">
          {/* Top Window Bar */}
          <div className="bg-slate-900 text-white px-4 py-3 border-b-2 border-black flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 border border-black inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 border border-black inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500 border border-black inline-block" />
              <span className="font-mono text-xs text-slate-300 ml-3 hidden sm:inline">
                https://demo.wastepay.id/{activeTab === "admin" ? "dashboard" : activeTab === "peta" ? "peta/tv" : activeTab === "mobile" ? "m" : activeTab === "invoice" ? "bayar-tagihan" : "wa-gateway"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-slate-800 px-2.5 py-1 border border-slate-700">
                ● Sandbox Aktif
              </span>
            </div>
          </div>

          {/* Tab 1: Admin & Cashier Control Panel */}
          {activeTab === "admin" && (
            <div className="p-6 md:p-8 space-y-6 bg-slate-50">
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border-2 border-black p-4 shadow-[3px_3px_0_0_#000]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 border-2 border-black flex items-center justify-center font-black text-black">
                    WP
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-lg uppercase tracking-tight">
                      UPS HERU • Dashboard Eksekutif
                    </h3>
                    <p className="text-xs text-slate-500 font-bold">
                      Periode: September 2026 • Wilayah Operasional Kota Depok
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Notification Bell */}
                  <div className="relative p-2 border-2 border-black bg-white shadow-[2px_2px_0_0_#000] cursor-pointer">
                    <Bell className="w-5 h-5 text-slate-800" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black w-5 h-5 rounded-full border border-black flex items-center justify-center">
                      {notifCount}
                    </span>
                  </div>

                  {/* Mass Billing Generator Trigger */}
                  <button
                    onClick={handleGenerateBilling}
                    disabled={billingGenerated}
                    className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-black transition-all shadow-[2px_2px_0_0_#000] ${
                      billingGenerated
                        ? "bg-emerald-100 text-emerald-900 border-emerald-900 cursor-default"
                        : "bg-emerald-500 hover:bg-emerald-400 text-black active:translate-x-[1px] active:translate-y-[1px]"
                    }`}
                  >
                    {billingGenerated ? "✓ 2.048 Tagihan Ter-Generate" : "⚡ Generate Tagihan Massal"}
                  </button>
                </div>
              </div>

              {/* Notification Banner when Generated */}
              {billingGenerated && (
                <div className="bg-emerald-100 border-2 border-black p-3.5 text-xs font-black text-emerald-950 flex items-center justify-between shadow-[2px_2px_0_0_#000]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-700" />
                    <span>SUKSES: 2.048 Invoice periode September 2026 telah dibuat otomatis + Denda 2% dihitung per jatuh tempo 15 September.</span>
                  </div>
                  <button
                    onClick={() => setBillingGenerated(false)}
                    className="underline text-[11px] font-bold text-slate-600 hover:text-black"
                  >
                    Tutup
                  </button>
                </div>
              )}

              {/* 4 Core KPI Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0_0_#000]">
                  <div className="text-xs font-bold text-slate-500 uppercase">Pemasukan Bulan Ini</div>
                  <div className="text-2xl font-black text-slate-900 mt-1">Rp 102.400.000</div>
                  <div className="text-[10px] font-black text-emerald-600 mt-2 flex items-center gap-1">
                    <span>▲ +14.2%</span>
                    <span className="text-slate-400 font-normal">vs bulan lalu</span>
                  </div>
                </div>

                <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0_0_#000]">
                  <div className="text-xs font-bold text-slate-500 uppercase">Pelanggan Aktif</div>
                  <div className="text-2xl font-black text-slate-900 mt-1">2.048 KK</div>
                  <div className="text-[10px] font-black text-slate-600 mt-2">
                    63 Titik RT/RW Terdaftar
                  </div>
                </div>

                <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0_0_#000]">
                  <div className="text-xs font-bold text-slate-500 uppercase">Armada Beroperasi</div>
                  <div className="text-2xl font-black text-amber-600 mt-1">4 Unit Truk</div>
                  <div className="text-[10px] font-black text-emerald-600 mt-2">
                    ● Semua Sinyal GPS Aktif
                  </div>
                </div>

                <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0_0_#000]">
                  <div className="text-xs font-bold text-slate-500 uppercase">Rekonsiliasi Kas Harian</div>
                  <div className="text-2xl font-black text-emerald-600 mt-1">Rp 0 Selisih</div>
                  <div className="text-[10px] font-black text-slate-900 mt-2">
                    Audit Kasir: 100% Cocok
                  </div>
                </div>
              </div>

              {/* Middle Section: 6-Month Income vs Expense Chart (Pure CSS) */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white border-2 border-black p-6 shadow-[4px_4px_0_0_#000]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-wider">
                        Grafik Arus Kas 6 Bulan Terakhir (Pure CSS Engine)
                      </h4>
                      <p className="text-xs text-slate-500">Pemasukan Retribusi vs Biaya Operasional (BBM, Gaji, TPA)</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold">
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-emerald-500 border border-black" /> Pemasukan
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-red-500 border border-black" /> Pengeluaran
                      </span>
                    </div>
                  </div>

                  {/* Pure CSS Bar Chart */}
                  <div className="h-44 flex items-end justify-between gap-4 pt-4 border-b-2 border-black px-4">
                    {[
                      { month: "Apr", income: 78, expense: 42, label: "Rp 78jt" },
                      { month: "Mei", income: 82, expense: 45, label: "Rp 82jt" },
                      { month: "Jun", income: 86, expense: 44, label: "Rp 86jt" },
                      { month: "Jul", income: 91, expense: 48, label: "Rp 91jt" },
                      { month: "Agu", income: 98, expense: 50, label: "Rp 98jt" },
                      { month: "Sep", income: 102, expense: 51, label: "Rp 102jt" },
                    ].map((b, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                        <div className="w-full flex items-end justify-center gap-1 h-full">
                          {/* Income Bar */}
                          <div
                            style={{ height: `${b.income}%` }}
                            className="w-1/2 bg-emerald-500 border-2 border-black shadow-[1px_1px_0_0_#000] relative group-hover:bg-emerald-400 transition-all"
                          >
                            <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] font-black px-1 py-0.5 rounded whitespace-nowrap transition-opacity">
                              {b.label}
                            </span>
                          </div>
                          {/* Expense Bar */}
                          <div
                            style={{ height: `${b.expense}%` }}
                            className="w-1/2 bg-red-500 border-2 border-black shadow-[1px_1px_0_0_#000] relative group-hover:bg-red-400 transition-all"
                          />
                        </div>
                        <span className="text-[11px] font-black uppercase text-slate-700 mt-2">{b.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrears and Arrears Action */}
                <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0_0_#000] flex flex-col justify-between">
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-sm tracking-wider mb-2">
                      Top 3 Tunggakan Warga
                    </h4>
                    <p className="text-xs text-slate-500 mb-4">Otomatis ditambah denda keterlambatan 2%/bulan</p>

                    <div className="space-y-3">
                      <div className="p-2.5 border border-black bg-red-50 text-xs">
                        <div className="flex justify-between font-black text-slate-900">
                          <span>Keluarga Pak Hendra (RT 02)</span>
                          <span className="text-red-600">Rp 153.000</span>
                        </div>
                        <div className="text-[10px] text-slate-600 mt-0.5 flex justify-between">
                          <span>3 Bulan Tunggakan + Denda 2%</span>
                          <span className="font-mono text-emerald-800">WA Blast Terkirim</span>
                        </div>
                      </div>

                      <div className="p-2.5 border border-black bg-red-50 text-xs">
                        <div className="flex justify-between font-black text-slate-900">
                          <span>Ibu Nurul Aini (RT 05)</span>
                          <span className="text-red-600">Rp 102.000</span>
                        </div>
                        <div className="text-[10px] text-slate-600 mt-0.5 flex justify-between">
                          <span>2 Bulan Tunggakan</span>
                          <span className="font-mono text-emerald-800">WA Blast Terkirim</span>
                        </div>
                      </div>

                      <div className="p-2.5 border border-black bg-amber-50 text-xs">
                        <div className="flex justify-between font-black text-slate-900">
                          <span>Bpk. Wahyu Utomo (RT 01)</span>
                          <span className="text-amber-700">Rp 51.000</span>
                        </div>
                        <div className="text-[10px] text-slate-600 mt-0.5 flex justify-between">
                          <span>1 Bulan Tunggakan</span>
                          <span className="font-mono text-slate-500">Pending Reminder</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 mt-4">
                    <button
                      onClick={() => alert("Simulasi: WhatsApp Reminder telah diblast ke seluruh penunggak retribusi secara berjarak (delay 1.2s per pesan anti-banned).")}
                      className="w-full hm-btn-dark py-2 text-xs flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Blast Pengingat WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: GIS Voronoi & Fleet Map */}
          {activeTab === "peta" && (
            <div className="p-6 md:p-8 space-y-6 bg-slate-900 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-black uppercase text-emerald-400">
                    Sistem GIS Voronoi &amp; Live Tracking Truk
                  </h3>
                  <p className="text-xs text-slate-400">
                    Memantau 63 Zonasi RT/RW di Kota Depok &amp; Algoritma Jalur Tercepat (Nearest-Neighbor)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-slate-800 px-3 py-1.5 border border-slate-700 text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    GPS Telemetry: -6.424838, 106.832667
                  </div>
                </div>
              </div>

              {/* Map Canvas Visualizer */}
              <div className="relative h-96 bg-slate-950 border-2 border-black rounded overflow-hidden flex items-center justify-center">
                {/* SVG Route & Voronoi Map */}
                <svg className="w-full h-full p-4" viewBox="0 0 600 350">
                  {/* Voronoi Zones */}
                  <polygon points="50,40 180,30 220,160 110,210 30,130" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" />
                  <text x="70" y="80" fill="#10b981" fontSize="12" fontWeight="900" fontFamily="monospace">ZONA RT 01 (CILODONG)</text>

                  <polygon points="220,160 380,120 420,260 280,310 190,260" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 5" />
                  <text x="240" y="200" fill="#f59e0b" fontSize="12" fontWeight="900" fontFamily="monospace">ZONA RT 02 (KALIBARU)</text>

                  <polygon points="380,120 540,60 580,220 420,260" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5" />
                  <text x="420" y="110" fill="#3b82f6" fontSize="12" fontWeight="900" fontFamily="monospace">ZONA RT 03 (JATIMULYA)</text>

                  {/* Route Paths */}
                  <path d="M 60 140 L 150 90 L 260 180 L 350 170 L 460 210 L 520 120" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 60 140 L 150 90 L 260 180 L 350 170 L 460 210 L 520 120" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 4" />

                  {/* Customer Checkpoints */}
                  <circle cx="60" cy="140" r="7" fill="#10b981" stroke="#000" strokeWidth="2" />
                  <circle cx="150" cy="90" r="7" fill="#10b981" stroke="#000" strokeWidth="2" />
                  <circle cx="260" cy="180" r="7" fill="#10b981" stroke="#000" strokeWidth="2" />
                  <circle cx="350" cy="170" r="7" fill="#f59e0b" stroke="#000" strokeWidth="2" />
                  <circle cx="460" cy="210" r="7" fill="#ef4444" stroke="#000" strokeWidth="2" />
                  <circle cx="520" cy="120" r="7" fill="#ef4444" stroke="#000" strokeWidth="2" />

                  {/* Dump Truck Marker on Position 350, 170 */}
                  <g transform="translate(330, 135)">
                    <rect x="0" y="0" width="40" height="40" rx="20" fill="#059669" stroke="#ffffff" strokeWidth="3" />
                    <text x="20" y="26" fontSize="20" textAnchor="middle">🚛</text>
                  </g>
                </svg>

                {/* Floating Telemetry Info Box */}
                <div className="absolute top-4 left-4 bg-slate-900/90 border-2 border-black p-3 text-xs shadow-[4px_4px_0_0_#000] space-y-1.5 backdrop-blur-sm">
                  <div className="text-[10px] font-black uppercase text-emerald-400">STATUS ARMADA #01</div>
                  <div className="font-bold text-white">Sopir: Pak Herman (Petugas Angkut)</div>
                  <div className="text-slate-300">Posisi: Jl. Kandang Ayam RT 02</div>
                  <div className="text-[10px] font-mono text-amber-400">Muatan: 68% • Ritase Ke-2 Menuju TPA</div>
                </div>

                {/* Floating Legend */}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-slate-700 p-2.5 text-[11px] font-bold space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span>Sudah Diangkut (Hijau)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span>Sedang Dikerjakan (Kuning)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span>Menunggu Giliran (Merah)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Driver Mobile Webview App (/m) */}
          {activeTab === "mobile" && (
            <div className="p-6 md:p-10 bg-slate-200 flex items-center justify-center">
              {/* Smartphone Shell Frame */}
              <div className="w-full max-w-sm bg-white border-4 border-black rounded-[36px] shadow-[12px_12px_0_0_#000] overflow-hidden">
                {/* Phone Speaker & Camera Notch */}
                <div className="bg-slate-900 h-6 flex items-center justify-center">
                  <div className="w-16 h-3 bg-black rounded-full" />
                </div>

                {/* Mobile App Header */}
                <div className="bg-emerald-600 text-white p-4 border-b-2 border-black">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-emerald-200">
                        PORTAL KRU LAPANGAN (/m)
                      </div>
                      <div className="text-base font-black">Halo, Sopir Herman 🚛</div>
                    </div>
                    <span className="bg-emerald-800 text-white text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-400">
                      ONLINE GPS
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-emerald-100 flex justify-between font-bold">
                    <span>Rute: Jalur Kalibaru Timur</span>
                    <span>4 Rumah Tersisa</span>
                  </div>
                </div>

                {/* Mobile Task List */}
                <div className="p-4 space-y-3 max-h-[380px] overflow-y-auto bg-slate-50">
                  <div className="text-xs font-black uppercase text-slate-600">
                    Daftar Rumah Penjemputan Hari Ini:
                  </div>

                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className={`p-3 border-2 border-black bg-white shadow-[2px_2px_0_0_#000] transition-colors ${
                        task.status === "diangkut"
                          ? "bg-emerald-50 border-emerald-900"
                          : task.status === "kosong"
                          ? "bg-amber-50 border-amber-900"
                          : task.status === "tertutup"
                          ? "bg-red-50 border-red-900"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs font-black text-slate-900">{task.name}</div>
                          <div className="text-[10px] text-slate-500 font-bold">
                            Kode: {task.code} • Jenis: {task.type}
                          </div>
                        </div>
                        <span
                          className={`text-[9px] font-black uppercase px-1.5 py-0.5 border ${
                            task.status === "diangkut"
                              ? "bg-emerald-500 text-black border-black"
                              : task.status === "kosong"
                              ? "bg-amber-400 text-black border-black"
                              : task.status === "tertutup"
                              ? "bg-red-500 text-white border-black"
                              : "bg-slate-200 text-slate-700 border-slate-400"
                          }`}
                        >
                          {task.status}
                        </span>
                      </div>

                      {/* Action Buttons for Field Driver */}
                      <div className="grid grid-cols-3 gap-1.5 mt-2.5 pt-2 border-t border-slate-200">
                        <button
                          onClick={() => updateTaskStatus(task.id, "diangkut")}
                          className="py-1 bg-emerald-500 hover:bg-emerald-400 text-black text-[9px] font-black uppercase border border-black shadow-[1px_1px_0_0_#000] active:translate-y-0.5"
                        >
                          ✓ Diangkut
                        </button>
                        <button
                          onClick={() => updateTaskStatus(task.id, "kosong")}
                          className="py-1 bg-amber-300 hover:bg-amber-200 text-black text-[9px] font-black uppercase border border-black shadow-[1px_1px_0_0_#000] active:translate-y-0.5"
                        >
                          Rumah Kosong
                        </button>
                        <button
                          onClick={() => updateTaskStatus(task.id, "tertutup")}
                          className="py-1 bg-red-400 hover:bg-red-300 text-black text-[9px] font-black uppercase border border-black shadow-[1px_1px_0_0_#000] active:translate-y-0.5"
                        >
                          Terkunci
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Home Indicator */}
                <div className="p-3 bg-white border-t-2 border-black flex justify-center">
                  <div className="w-24 h-1 bg-black rounded-full" />
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Faktur A4 & QRIS Duitku */}
          {activeTab === "invoice" && (
            <div className="p-6 md:p-10 bg-slate-100 flex flex-col items-center">
              <div className="w-full max-w-2xl bg-white border-2 border-black p-6 md:p-8 shadow-[6px_6px_0_0_#000]">
                {/* Invoice Header */}
                <div className="flex justify-between items-start border-b-2 border-black pb-6">
                  <div>
                    <div className="text-2xl font-black uppercase text-slate-900 tracking-tighter">
                      WASTEPAY<span className="text-emerald-600">.ID</span>
                    </div>
                    <div className="text-[11px] text-slate-600 font-bold max-w-xs mt-1">
                      Faktur Retribusi Pengelolaan Persampahan Resmi Kota Depok • UPS HERU
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-black text-white text-xs font-mono font-bold px-2 py-1">
                      NO: INV/P000014/202609
                    </div>
                    <div className="text-[11px] text-slate-500 font-bold mt-1">
                      Tgl: 01 September 2026
                    </div>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="grid grid-cols-2 gap-4 py-4 text-xs border-b border-black/20">
                  <div>
                    <div className="text-slate-500 font-bold uppercase text-[10px]">Ditujukan Kepada:</div>
                    <div className="font-black text-slate-900 text-sm">Bpk. Hendra Gunawan</div>
                    <div className="text-slate-600">Jl. Kandang Ayam No. 42, RT 02/RW 04</div>
                    <div className="text-slate-600">No. HP: 0812-9844-XXXX</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-500 font-bold uppercase text-[10px]">Status Pembayaran:</div>
                    <span
                      className={`inline-block mt-1 px-3 py-1 text-xs font-black uppercase border-2 border-black ${
                        invoicePaid
                          ? "bg-emerald-500 text-black shadow-[2px_2px_0_0_#000]"
                          : "bg-red-500 text-white shadow-[2px_2px_0_0_#000]"
                      }`}
                    >
                      {invoicePaid ? "LUNAS (TERVERIFIKASI)" : "BELUM LUNAS (JATUH TEMPO TGL 15)"}
                    </span>
                  </div>
                </div>

                {/* Invoice Table */}
                <div className="py-4">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b-2 border-black text-slate-900 font-black uppercase">
                        <th className="py-2">Deskripsi Layanan</th>
                        <th className="py-2 text-center">Periode</th>
                        <th className="py-2 text-right">Nominal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-medium">
                      <tr>
                        <td className="py-2.5">
                          <div className="font-bold text-slate-900">Iuran Retribusi Pengangkutan Sampah Harian</div>
                          <div className="text-[10px] text-slate-500">Paket Rumah Tangga Mandiri (3x Seminggu)</div>
                        </td>
                        <td className="py-2.5 text-center font-mono">Sep 2026</td>
                        <td className="py-2.5 text-right font-black">Rp 50.000</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-slate-600">PPN 11% (Peraturan Pajak Daerah)</td>
                        <td className="py-2 text-center font-mono">-</td>
                        <td className="py-2 text-right font-black">Rp 5.500</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-black font-black text-sm">
                        <td colSpan={2} className="py-3 uppercase">Total Tagihan</td>
                        <td className="py-3 text-right text-emerald-600 font-mono text-base">Rp 55.500</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                {/* Duitku Online Payment Simulator */}
                {!invoicePaid ? (
                  <div className="mt-4 p-4 bg-emerald-50 border-2 border-black space-y-3">
                    <div className="text-xs font-black uppercase text-slate-900">
                      Pilih Metode Pembayaran Duitku Payment Gateway:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["QRIS", "BCA Virtual Account", "Mandiri VA", "GoPay / OVO", "Bayar Tunai Kasir"].map((method) => (
                        <button
                          key={method}
                          onClick={() => setSelectedPaymentMethod(method)}
                          className={`px-3 py-1.5 text-xs font-bold border-2 border-black transition-all ${
                            selectedPaymentMethod === method
                              ? "bg-slate-900 text-white shadow-[2px_2px_0_0_#000]"
                              : "bg-white text-slate-800"
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setInvoicePaid(true)}
                      className="w-full hm-btn-green py-2.5 text-xs flex items-center justify-center gap-2"
                    >
                      <QrCode className="w-4 h-4" />
                      <span>Simulasikan Bayar Lunas via {selectedPaymentMethod}</span>
                    </button>
                  </div>
                ) : (
                  <div className="mt-4 p-4 bg-emerald-100 border-2 border-black text-center space-y-2">
                    <div className="text-sm font-black text-emerald-950 uppercase">
                      ✓ Pembayaran Berhasil Diverifikasi via Duitku ({selectedPaymentMethod})
                    </div>
                    <p className="text-xs text-emerald-800">
                      Struk digital dan kwitansi resmi telah otomatis dikirimkan ke WhatsApp warga.
                    </p>
                    <button
                      onClick={() => setInvoicePaid(false)}
                      className="text-xs font-bold underline text-slate-700 hover:text-black"
                    >
                      Reset Simulasi
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 5: WhatsApp Automation Simulator */}
          {activeTab === "wa" && (
            <div className="p-6 md:p-10 bg-slate-200 flex items-center justify-center">
              <div className="w-full max-w-sm bg-[#e5ddd5] border-4 border-black rounded-[32px] shadow-[12px_12px_0_0_#000] overflow-hidden">
                {/* WhatsApp Chat Header */}
                <div className="bg-[#075e54] text-white p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 border border-black flex items-center justify-center text-black font-black text-sm">
                    WP
                  </div>
                  <div>
                    <div className="font-bold text-sm">WastePay Notifikasi Resmi ✓</div>
                    <div className="text-[10px] text-emerald-200">Bot Otomatis • Centang Hijau</div>
                  </div>
                </div>

                {/* Chat Bubble Messages */}
                <div className="p-4 space-y-3 min-h-[380px] bg-[#efeae2] text-xs">
                  {/* Message 1: Tagihan Masuk */}
                  <div className="bg-white p-3 rounded-lg border border-black/20 shadow-sm max-w-[85%] space-y-1">
                    <div className="font-bold text-slate-900 text-[11px]">
                      📢 Tagihan Retribusi Sampah September 2026
                    </div>
                    <p className="text-[11px] text-slate-700 leading-snug">
                      Yth. Bpk. Hendra Gunawan, tagihan retribusi sampah rumah Anda untuk bulan ini telah terbit:
                    </p>
                    <div className="bg-slate-50 p-2 border border-slate-200 font-mono text-[10px]">
                      No. Invoice: INV/P000014/202609<br />
                      Total: Rp 55.500<br />
                      Jatuh Tempo: 15 Sep 2026
                    </div>
                    <p className="text-[10px] text-emerald-700 font-bold">
                      👉 Bayar Online Cepat via QRIS/VA: https://wastepay.id/bayar-tagihan?inv=...
                    </p>
                    <div className="text-[9px] text-slate-400 text-right">09:00 WIB • Terkirim</div>
                  </div>

                  {/* Message 2: Kwitansi Pembayaran Lunas */}
                  <div className="bg-white p-3 rounded-lg border border-black/20 shadow-sm max-w-[85%] space-y-1">
                    <div className="font-bold text-emerald-700 text-[11px]">
                      ✅ Pembayaran Lunas Diterima!
                    </div>
                    <p className="text-[11px] text-slate-700 leading-snug">
                      Terima kasih Bpk. Hendra! Pembayaran sebesar Rp 55.500 telah berhasil diverifikasi otomatis oleh sistem.
                    </p>
                    <div className="bg-emerald-50 p-2 border border-emerald-200 text-[10px] font-mono text-emerald-900">
                      ID Transaksi: DW-9824-202609<br />
                      Metode: QRIS Lunas<br />
                      Status Kas: Tercatat di Rekonsiliasi Kasir
                    </div>
                    <div className="text-[9px] text-slate-400 text-right">09:05 WIB • Terkirim</div>
                  </div>
                </div>

                {/* WhatsApp Chat Input Bar */}
                <div className="bg-[#f0f0f0] p-2.5 border-t border-black/20 flex items-center gap-2">
                  <input
                    type="text"
                    disabled
                    value="Ketik pesan balasan komplain..."
                    className="flex-1 bg-white border border-slate-300 px-3 py-1.5 rounded-full text-xs text-slate-400 cursor-not-allowed"
                  />
                  <div className="p-2 bg-[#128c7e] text-white rounded-full">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
