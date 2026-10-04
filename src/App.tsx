import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessReason from './components/BusinessReason';
import About from './components/About';
import Services from './components/Services';
import Method from './components/Method';
import SelectedWork from './components/SelectedWork';
import Clients from './components/Clients';
import WhyAdsPlus from './components/WhyAdsPlus';
import Industries from './components/Industries';
import Markets from './components/Markets';
import MissionVision from './components/MissionVision';
import InsightsSection from './components/InsightsSection';
import FinalCTA from './components/FinalCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Modals
import CaseStudyModal from './components/CaseStudyModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import AboutModal from './components/AboutModal';
import ProjectBriefModal from './components/ProjectBriefModal';
import InsightModal from './components/InsightModal';

// Types
import { CaseStudy, ServiceItem, InsightItem } from './data/content';

export default function App(): React.JSX.Element {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedInsight, setSelectedInsight] = useState<InsightItem | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState<boolean>(false);
  const [briefModalOpen, setBriefModalOpen] = useState<boolean>(false);

  const handleOpenBrief = (): void => {
    setBriefModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#ed1c24] selection:text-white">
      {/* Subtle Grain Overlay for Editorial Film Feel */}
      <div className="grain-overlay" />

      {/* Custom Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Global Navigation */}
      <Navbar onOpenProjectBrief={handleOpenBrief} />

      {/* Main Homepage Flow (Strictly according to Brief Order) */}
      <main id="main-content">
        {/* 01 HERO: Built To Sell+ */}
        <Hero onOpenProjectBrief={handleOpenBrief} />

        {/* 02 BUSINESS REASON: Marketing should have a business reason behind it */}
        <BusinessReason />

        {/* 03 ABOUT: Business First. Marketing Second */}
        <About onOpenAboutModal={() => setAboutModalOpen(true)} />

        {/* 04 SERVICES: Built To Move Brands Forward */}
        <Services
          onSelectService={(srv: ServiceItem) => setSelectedService(srv)}
          onOpenProjectBrief={handleOpenBrief}
        />

        {/* 05 METHOD: Understand -> Define -> Execute */}
        <Method onOpenProjectBrief={handleOpenBrief} />

        {/* 06 SELECTED WORK: Strategy In Motion */}
        <SelectedWork
          onSelectCaseStudy={(proj: CaseStudy) => setSelectedCaseStudy(proj)}
        />

        {/* 07 CLIENTS: Trusted By Ambitious Businesses */}
        <Clients />

        {/* 08 WHY ADS PLUS+: Marketing For Businesses Where The Decision Matters */}
        <WhyAdsPlus onOpenProjectBrief={handleOpenBrief} />

        {/* 09 INDUSTRIES: Experience Across Markets That Move */}
        <Industries onOpenProjectBrief={handleOpenBrief} />

        {/* 10 MARKETS: Egypt + GCC + International */}
        <Markets />

        {/* 11 MISSION / VISION: Smarter Decisions. Stronger Brands */}
        <MissionVision />

        {/* STRATEGIC INSIGHTS (Sitemap Requirement) */}
        <InsightsSection
          onSelectInsight={(art: InsightItem) => setSelectedInsight(art)}
        />

        {/* 12 FINAL CTA: Have A Business Challenge? */}
        <FinalCTA onOpenProjectBrief={handleOpenBrief} />

        {/* 13 CONTACT SECTION: Let's Build What Sells */}
        <ContactSection />
      </main>

      {/* 14 FOOTER: Built To Sell+ */}
      <Footer onOpenProjectBrief={handleOpenBrief} />

      {/* Modals & Overlays */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenBrief={handleOpenBrief}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBrief={handleOpenBrief}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenBrief={handleOpenBrief}
      />

      <InsightModal
        article={selectedInsight}
        onClose={() => setSelectedInsight(null)}
        onOpenBrief={handleOpenBrief}
      />

      <ProjectBriefModal
        isOpen={briefModalOpen}
        onClose={() => setBriefModalOpen(false)}
      />
    </div>
  );
}
