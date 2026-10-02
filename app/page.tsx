'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target,
  Globe2,
  ShieldCheck,
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

import LandingNavbar from '@/components/landing/LandingNavbar';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorksTimeline from '@/components/landing/HowItWorksTimeline';
import FaqSection from '@/components/landing/FaqSection';
import LandingFooter from '@/components/landing/LandingFooter';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HomePage() {
  return (
    <div className="pricing-gradient-bg relative text-[#10251D] font-sans antialiased selection:bg-[#DDEBE0] selection:text-[#145C43]">
      <div className="relative z-10">
        {/* Top Navbar */}
        <LandingNavbar />

        <main className="space-y-0">
          {/* SECTION 1: HERO (Crisp White Canvas) */}
          <HeroSection
            onExploreClick={() => {
              const el = document.getElementById('hiw-steps');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* SECTION 2: HOW IT WORKS (Soft Sage / Mint Tint Background with 3D Magnetic Cards & Waterfall Flow) */}
          <HowItWorksTimeline />

          {/* SECTION 3: CTA BAND (Crisp White Canvas Background) */}
          <section className="w-full py-18 md:py-28 bg-white border-b border-[#E5EAE5] relative transition-colors overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: EASE }}
                className="group relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#145C43] via-[#0E4935] to-[#0B3D2E] text-white p-10 md:p-16 text-center shadow-panel hover:shadow-[0_28px_70px_-15px_rgba(20,92,67,0.45)] transition-all duration-500 border border-[#145C43]"
              >
                {/* Animated aurora background orbs */}
                <div aria-hidden className="animate-float-slow absolute -top-32 -right-28 w-96 h-96 bg-[#B8D5C0]/25 rounded-full blur-3xl pointer-events-none" />
                <div aria-hidden className="animate-float-slow-reverse absolute -bottom-36 -left-24 w-96 h-96 bg-[#145C43]/50 rounded-full blur-3xl pointer-events-none" />
                <div aria-hidden className="absolute inset-0 bg-grid-fine opacity-10 pointer-events-none" />

                <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-tight mb-4 [text-wrap:balance]">
                    One Unified Operating Workflow.
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-[#DDEBE0]/90 leading-relaxed mb-10 max-w-xl mx-auto">
                    LeadLens merges sales intelligence, data enrichment, and outbound automation into a unified operating workflow.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    <Link
                      href="/signup"
                      className="group/btn relative inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold text-[#145C43] bg-white hover:bg-[#EFF6F0] transition-all duration-300 shadow-lift hover:shadow-glow cursor-pointer hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
                    >
                      <span aria-hidden className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#145C43]/10 to-transparent pointer-events-none" />
                      <span className="relative z-10">Get Started Free</span>
                      <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300 ease-out" />
                    </Link>
                    <Link
                      href="/features"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Explore Platform Features
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 4: FAQ (Soft Sage / Mint Tint Background) */}
          <FaqSection />
        </main>

        {/* SECTION 5: FOOTER (Deep Forest Emerald Background) */}
        <LandingFooter />
      </div>
    </div>
  );
}
