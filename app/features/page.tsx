'use client';

import React from 'react';
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import WaterfallEnrichmentSection from '@/components/landing/WaterfallEnrichmentSection';
import AiDiscoverySection from '@/components/landing/AiDiscoverySection';
import FeaturesHero from '@/components/landing/FeaturesHero';
import SectionDivider from '@/components/landing/SectionDivider';

export default function FeaturesPage() {
  return (
    <div className="pricing-gradient-bg relative text-[#10251D] font-sans antialiased selection:bg-[#DDEBE0] selection:text-[#145C43]">
      <div className="relative z-10">
        <LandingNavbar />

        <main className="pt-4 pb-12 space-y-0">
          <FeaturesHero />
          <SectionDivider />
          <AiDiscoverySection />
          <SectionDivider />
          <WaterfallEnrichmentSection />
        </main>

        <LandingFooter />
      </div>
    </div>
  );
}
