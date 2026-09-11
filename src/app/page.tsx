"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveDemoShowcase from "@/components/InteractiveDemoShowcase";
import ProblemVsSolution from "@/components/ProblemVsSolution";
import RoiCalculator from "@/components/RoiCalculator";
import ModuleGrid from "@/components/ModuleGrid";
import ProvenCaseStudy from "@/components/ProvenCaseStudy";
import PricingSection from "@/components/PricingSection";
import TechSpecSecurity from "@/components/TechSpecSecurity";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import OrderConsultationModal from "@/components/OrderConsultationModal";
import ProposalModal from "@/components/ProposalModal";

export default function Home() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [proposalModalOpen, setProposalModalOpen] = useState(false);

  const handleOpenOrderModal = (planName?: string) => {
    setSelectedPlan(planName);
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] text-slate-900 selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenOrderModal={handleOpenOrderModal}
        onOpenProposalModal={() => setProposalModalOpen(true)}
      />

      {/* 2. Hero Section with Live Operational Pulse */}
      <HeroSection onOpenOrderModal={() => handleOpenOrderModal("Konsultasi Awal Enterprise")} />

      {/* 3. Interactive Sandbox Showcase (Admin, Map, Driver App, Invoice, WhatsApp) */}
      <InteractiveDemoShowcase />

      {/* 4. Problem vs Solution (Conventional vs WastePay.id) */}
      <ProblemVsSolution />

      {/* 5. Interactive ROI & Retribusi Potential Calculator */}
      <RoiCalculator onOpenOrderModal={handleOpenOrderModal} />

      {/* 6. 10 Core Enterprise Modules */}
      <ModuleGrid />

      {/* 7. Proven Case Study: UPS HERU Depok */}
      <ProvenCaseStudy />

      {/* 8. Pricing & Licensing Packages */}
      <PricingSection onOpenOrderModal={handleOpenOrderModal} />

      {/* 9. Technical Specifications & Security Architecture */}
      <TechSpecSecurity />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Footer */}
      <Footer
        onOpenOrderModal={() => handleOpenOrderModal("Konsultasi Umum")}
        onOpenProposalModal={() => setProposalModalOpen(true)}
      />

      {/* Interactive Modals */}
      <OrderConsultationModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrderModal}
        defaultPlan={selectedPlan}
      />

      <ProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
      />
    </main>
  );
}
