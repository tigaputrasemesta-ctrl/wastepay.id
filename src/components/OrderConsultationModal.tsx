"use client";

import React, { useState } from "react";
import { X, MessageSquare, Send, CheckCircle, Sparkles, Building2, User, Phone, MapPin, Hash } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
};

export default function OrderConsultationModal({ isOpen, onClose, defaultPlan }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    orgType: "BUMDes / Pengelola Desa",
    orgName: "",
    phone: "",
    city: "",
    householdEstimate: "1.000 - 3.000 KK",
    plan: defaultPlan || "Professional Vendor Swasta",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct structured WhatsApp message
    const message = `*HALO TIM SALES WASTEPAY.ID*\nSaya tertarik untuk konsultasi dan pemesanan sistem WastePay.id dengan rincian berikut:\n\n` +
      `• *Nama*: ${formData.name}\n` +
      `• *Jenis Instansi*: ${formData.orgType}\n` +
      `• *Nama Organisasi/PT/Desa*: ${formData.orgName}\n` +
      `• *Nomor WA*: ${formData.phone}\n` +
      `• *Kota/Wilayah*: ${formData.city}\n` +
      `• *Estimasi Warga/KK*: ${formData.householdEstimate}\n` +
      `• *Paket Minat*: ${formData.plan}\n` +
      `• *Catatan Tambahan*: ${formData.notes || "-"}\n\n` +
      `Mohon dibantu info jadwal demo live dan surat penawaran resminya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281400782617?text=${encodedMessage}`;

    // Mark as submitted and open WA
    setSubmitted(true);
    window.open(waUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border-4 border-black shadow-[6px_6px_0_0_#000] sm:shadow-[12px_12px_0_0_#000] p-4 sm:p-8 my-4 sm:my-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 border-2 border-black bg-slate-100 hover:bg-black hover:text-white transition-colors"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-500 text-black text-[10px] font-black uppercase px-2 py-0.5 border border-black">
                FORMULIR KONSULTASI &amp; PEMESANAN
              </span>
            </div>

            <h3 className="text-2xl font-black uppercase text-slate-900 tracking-tight">
              Mulai Digitalisasi Retribusi Bersama <span className="text-emerald-600">WastePay.id</span>
            </h3>

            <p className="text-xs text-slate-600 font-medium mt-1 mb-6">
              Isi formulir singkat di bawah ini. Tim analis operasional kami akan segera menghubungi Anda dengan simulasi penawaran dan jadwal demo sistem.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Jenis Instansi */}
              <div>
                <label className="block font-black uppercase text-slate-700 mb-1">
                  1. Kategori Pengelola / Instansi *
                </label>
                <select
                  value={formData.orgType}
                  onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border-2 border-black font-bold focus:bg-white focus:outline-none"
                  required
                >
                  <option>BUMDes / Pengelola Desa</option>
                  <option>Pengelola TPS3R / UPS Mandiri</option>
                  <option>Kontraktor Swasta / Vendor Angkutan Sampah (PT/CV)</option>
                  <option>Pengelola Kawasan / Estate Management Perumahan</option>
                  <option>Dinas Lingkungan Hidup (DLH) Pemkab / Pemkot</option>
                </select>
              </div>

              {/* Nama & Instansi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-black uppercase text-slate-700 mb-1">
                    2. Nama Lengkap Anda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Bambang Sutrisno"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border-2 border-black font-bold focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-black uppercase text-slate-700 mb-1">
                    3. Nama Instansi / Perusahaan *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: BUMDes Maju Bersama"
                    value={formData.orgName}
                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border-2 border-black font-bold focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* WhatsApp & Kota */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-black uppercase text-slate-700 mb-1">
                    4. Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border-2 border-black font-bold focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-black uppercase text-slate-700 mb-1">
                    5. Kota / Kabupaten *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Kota Depok / Kab. Bogor"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border-2 border-black font-bold focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Estimasi KK & Paket */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-black uppercase text-slate-700 mb-1">
                    6. Estimasi Jumlah KK / Titik *
                  </label>
                  <select
                    value={formData.householdEstimate}
                    onChange={(e) => setFormData({ ...formData, householdEstimate: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border-2 border-black font-bold focus:bg-white focus:outline-none"
                  >
                    <option>&lt; 1.000 KK</option>
                    <option>1.000 - 3.000 KK</option>
                    <option>3.000 - 7.500 KK</option>
                    <option>&gt; 7.500 KK (Kecamatan/Kota)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-black uppercase text-slate-700 mb-1">
                    7. Pilihan Paket Lisensi *
                  </label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border-2 border-black font-bold focus:bg-white focus:outline-none"
                  >
                    <option>BUMDes &amp; TPS3R Mandiri</option>
                    <option>Professional Vendor Swasta</option>
                    <option>Enterprise Pemda / White-Label</option>
                    <option>Kustom / Source Code Penuh</option>
                  </select>
                </div>
              </div>

              {/* Catatan Tambahan */}
              <div>
                <label className="block font-black uppercase text-slate-700 mb-1">
                  8. Catatan Khusus / Kebutuhan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Misal: butuh integrasi printer thermal barcode, jadwal migrasi dari Excel, dll..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border-2 border-black font-bold focus:bg-white focus:outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full hm-btn-green py-3 text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim &amp; Hubungkan ke WhatsApp Sales &rarr;</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 border-2 border-black rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_0_0_#000]">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>

            <h3 className="text-2xl font-black uppercase text-slate-900">
              Permintaan Anda Telah Terkirim!
            </h3>

            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Pesan terformat telah otomatis dibuka di WhatsApp. Jika aplikasi WhatsApp tidak otomatis terbuka, silakan klik tombol di bawah untuk chat langsung dengan tim sales resmi kami.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/6281400782617"
                target="_blank"
                rel="noreferrer"
                className="hm-btn-green py-2 px-6 text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Buka WhatsApp Manual</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="hm-btn py-2 px-6 text-xs"
              >
                Kembali ke Halaman
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
