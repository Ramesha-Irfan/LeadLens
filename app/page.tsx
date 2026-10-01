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
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';

import LandingNavbar from '@/components/landing/LandingNavbar';
import HeroSection from '@/components/landing/HeroSection';
import FaqSection from '@/components/landing/FaqSection';
import LandingFooter from '@/components/landing/LandingFooter';
import AnimatedNumber from '@/components/landing/AnimatedNumber';

const STEPS = [
  {
    number: '01',
    title: 'Define Your ICP',
    icon: Target,
    kicker: 'Precision Targeting',
    description:
      'Set exact demographic and firmographic boundaries or type your criteria in natural language. Specify company headcount, tech stack, funding status, geography, and active hiring velocity.',
    features: ['140M+ B2B entity graph', 'Hiring signal detectors', 'Custom headcount & ARR filters']
  },
  {
    number: '02',
    title: 'Discover Global Leads',
    icon: Globe2,
    kicker: 'Cross-Border Reach',
    description:
      'Pinpoint decision-makers across 180+ countries. Filter by seniority (C-Suite, VP, Director) and functional department with real-time org-chart mapping.',
    features: ['Instant regional hubs mapping', 'Seniority & decision authority', 'Live talent mobility detection']
  },
  {
    number: '03',
    title: 'Enrich & Verify Data',
    icon: ShieldCheck,
    kicker: 'Waterfall Recovery',
    description:
      'Never lose a prospect to missing contact info. Our cascading multi-source waterfall checks primary registries, social graphs, and executes direct SMTP handshakes to ensure zero bounces.',
    features: ['Multi-source cascading lookups', 'SMTP zero-bounce verification', 'Direct dials & mobile recovery']
  },
  {
    number: '04',
    title: 'Launch Personalized Outreach',
    icon: Send,
    kicker: 'Autonomous Execution',
    description:
      'Generate highly personalized, multi-step email sequences based on prospect research. Connect your sending inboxes, set smart daily ramp limits, and track meetings booked.',
    features: ['AI research-backed tone matching', 'Multi-inbox rotation & warmup', 'Unified reply & meeting inbox']
  }
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HomePage() {
  const scrollToSteps = () => {
    const el = document.getElementById('hiw-steps');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStep = (idx: number) => {
    const el = document.getElementById(`hiw-step-${idx + 1}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="pricing-gradient-bg relative text-[#10251D] font-sans antialiased selection:bg-[#DDEBE0] selection:text-[#145C43]">
      <div className="relative z-10">
        {/* Top Navbar */}
        <LandingNavbar />

        <main className="space-y-0">
          {/* Hero Section */}
          <HeroSection
            onExploreClick={() => {
              const el = document.getElementById('hiw-steps');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* ============================ HOW IT WORKS (UNIFIED) ============================ */}
          <section id="hiw-steps" className="w-full py-16 md:py-28 bg-white border-b border-[#E5EAE5] relative transition-colors">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-grid-fine fade-mask-b opacity-70" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[300px] bg-[#DDEBE0]/50 blur-3xl rounded-full" />
              <div className="absolute top-0 right-0 w-[420px] h-[320px] bg-dots-fine fade-mask-radial opacity-60" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: EASE }}
                className="max-w-3xl mx-auto text-center mb-14 md:mb-16"
              >

                <h2 className="text-4xl sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08] font-bold tracking-[-0.02em] text-[#10251D] mb-5 [text-wrap:balance]">
                  From Raw Global Data to Closed Deals in{' '}
                  <span className="text-gradient-brand">Four Steps</span>
                </h2>
                <p className="text-[#52635A] text-base sm:text-lg leading-relaxed [text-wrap:balance]">
                  LeadLens merges sales intelligence, data enrichment, and outbound automation into a unified operating workflow.
                </p>
              </motion.div>

              {/* Step overview strip */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-16 md:mb-20">
                {STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.button
                      key={step.number}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: EASE }}
                      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToStep(idx)}
                      className="group text-left p-4 sm:p-5 rounded-2xl border border-[#E5EAE5] bg-[#F8FAF6]/90 backdrop-blur-sm hover:border-[#145C43]/40 hover:shadow-[0_12px_32px_-8px_rgba(20,92,67,0.14)] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-bold text-[#7A887F] group-hover:text-[#145C43] transition-colors duration-300">
                          {step.number}
                        </span>
                        <span className="w-8 h-8 rounded-lg bg-[#EFF6F0] text-[#145C43] flex items-center justify-center group-hover:bg-[#145C43] group-hover:text-white transition-all duration-300">
                          <Icon className="w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6" />
                        </span>
                      </div>
                      <p className="text-sm font-bold text-[#10251D] tracking-tight leading-snug group-hover:text-[#145C43] transition-colors duration-300">
                        {step.title}
                      </p>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#145C43] mt-1">
                        {step.kicker}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              {/* Step Timeline */}
              <div className="relative max-w-6xl mx-auto">
                {/* Spine */}
                <motion.div
                  aria-hidden
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originY: 0 }}
                  className="absolute left-[21px] top-4 bottom-4 w-px bg-gradient-to-b from-[#145C43] via-[#B8D5C0] to-transparent lg:left-1/2 lg:-translate-x-1/2"
                />

                <div className="space-y-6 lg:space-y-10">
                  {STEPS.map((step, idx) => {
                    const Icon = step.icon;
                    const onLeft = idx % 2 === 0;

                    return (
                      <motion.div
                        key={step.number}
                        id={`hiw-step-${idx + 1}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.55, delay: idx * 0.12, ease: EASE }}
                        className="relative pl-14 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-16"
                      >
                        {/* Number node on the spine */}
                        <motion.span
                          initial={{ scale: 0.6, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                          className="absolute left-0 top-8 lg:left-1/2 lg:-translate-x-1/2 w-[42px] h-[42px] rounded-full flex items-center justify-center font-mono text-xs font-bold bg-[#145C43] border border-[#145C43] text-white shadow-glow z-10 transition-transform duration-300 hover:scale-110"
                        >
                          {step.number}
                        </motion.span>

                        <motion.div
                          whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
                          className={`group relative p-6 sm:p-8 rounded-2xl border border-[#E5EAE5] bg-white shadow-soft hover:shadow-[0_16px_40px_-12px_rgba(20,92,67,0.15)] hover:border-[#145C43]/35 transition-all duration-300 overflow-hidden ${onLeft ? 'lg:col-start-1' : 'lg:col-start-2'}`}
                        >
                          <div className="flex items-start justify-between gap-4 mb-4 relative">
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#145C43]">
                                {step.kicker}
                              </span>
                              <h3 className="text-xl sm:text-2xl font-bold text-[#10251D] mt-1.5 tracking-tight group-hover:text-[#145C43] transition-colors duration-300">
                                {step.title}
                              </h3>
                            </div>
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#EFF6F0] text-[#145C43] group-hover:bg-[#145C43] group-hover:text-white transition-all duration-300">
                              <Icon className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6" />
                            </div>
                          </div>

                          <p className="text-sm sm:text-[15px] text-[#52635A] leading-relaxed mb-6 relative">
                            {step.description}
                          </p>

                          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5EAE5] relative">
                            {step.features.map((feat) => (
                              <span
                                key={feat}
                                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#52635A] bg-[#F8FAF6] border border-[#E5EAE5] rounded-full px-2.5 py-1 hover:border-[#B8D5C0] hover:bg-[#EFF6F0] transition-colors duration-200"
                              >
                                <CheckCircle2 className="w-3 h-3 text-[#145C43] shrink-0" />
                                {feat}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ============================ CTA BAND ============================ */}
          <section className="w-full py-16 md:py-24 bg-[#F8FAF6] border-b border-[#E5EAE5] relative transition-colors">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE }}
                className="group relative rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-[#145C43] via-[#0E4935] to-[#0B3D2E] text-white p-10 md:p-16 text-center shadow-panel hover:shadow-[0_24px_60px_-15px_rgba(20,92,67,0.4)] transition-all duration-500"
              >
                <div aria-hidden className="absolute -top-28 -right-24 w-96 h-96 bg-[#B8D5C0]/20 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />
                <div aria-hidden className="absolute -bottom-32 -left-20 w-80 h-80 bg-[#145C43]/40 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />

                <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-tight mb-4 [text-wrap:balance]">
                    One Unified Operating Workflow.
                  </h2>
                  <p className="text-sm sm:text-base text-[#DDEBE0]/90 leading-relaxed mb-9">
                    LeadLens merges sales intelligence, data enrichment, and outbound automation into a unified operating workflow.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/signup"
                      className="group/btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#145C43] bg-white hover:bg-[#EFF6F0] transition-all duration-300 shadow-lift hover:shadow-glow cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
                    >
                      <span>Get Started Free</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300 ease-out" />
                    </Link>
                    <Link
                      href="/features"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Explore Platform Features
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION: FAQ */}
          <FaqSection />
        </main>

        {/* Landing Footer */}
        <LandingFooter />
      </div>
    </div>
  );
}
