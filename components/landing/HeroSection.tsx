'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import HeroVisual from './HeroVisual';
import AnimatedNumber from './AnimatedNumber';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HERO_STATS = [
  { value: '140M+', label: 'Verified B2B Decision Makers', accent: false },
  { value: '99.2%', label: 'SMTP Zero-Bounce Guarantee', accent: true },
  { value: '89.4%', label: 'Waterfall Data Recovery Rate', accent: false },
  { value: '180+', label: 'Global Countries Covered', accent: true }
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const reduce = useReducedMotion();

  // One page-load sequence: headline block -> product frame -> stats
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.16 } }
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 30 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.8, ease: EASE } }
  };

  return (
    <section className="w-full relative overflow-hidden bg-white border-b border-[#E5EAE5] text-[#10251D] pt-16 pb-14 md:pt-24 md:pb-20">
      {/* Background: centered glow + fine grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine fade-mask-b opacity-70" />
        <div className="absolute left-1/2 top-[-18rem] h-[38rem] w-[70rem] max-w-none -translate-x-1/2 rounded-full bg-[#DDEBE0]/70 blur-3xl" />
        <div className="absolute left-1/2 top-[-10rem] h-[26rem] w-[40rem] max-w-none -translate-x-1/2 rounded-full bg-[#EFF6F0] blur-3xl" />
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Centered copy */}
          <motion.div variants={item} className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-[2.6rem] font-bold leading-[1.06] tracking-[-0.04em] text-[#10251D] [text-wrap:balance] sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              Turn Global Data Into Your{' '}
              <span className="text-gradient-brand">Next Customer.</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-[1.7] text-[#52635A] [text-wrap:pretty] sm:text-lg md:text-xl md:leading-[1.65]">
              Find verified companies and decision-makers, enrich missing data, personalize outreach with AI, and launch targeted campaigns from one intelligent workspace.
            </p>

            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/signup"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-full bg-[#145C43] pl-8 pr-2.5 text-[0.95rem] font-semibold text-white shadow-soft transition-all duration-300 hover:bg-[#0B3D2E] hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#145C43] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                <span>Start Generating Leads</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-white/25">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#D5E3D8] bg-white px-8 text-[0.95rem] font-semibold text-[#0B3D2E] transition-all duration-300 hover:border-[#145C43]/40 hover:bg-[#F8FAF6] hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#145C43] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                Explore Platform
              </button>
            </div>
          </motion.div>

          {/* Product frame */}
          <motion.div variants={item} className="relative mx-auto mt-14 max-w-5xl md:mt-20">
            <div
              aria-hidden
              className="absolute -inset-x-6 -top-6 -bottom-4 rounded-[2.5rem] bg-gradient-to-b from-[#DDEBE0]/70 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#D5E3D8] bg-white shadow-soft ring-1 ring-[#145C43]/5">
              {/* Window bar (decorative) */}
              <div aria-hidden className="flex items-center gap-1.5 border-b border-[#E5EAE5] bg-[#F8FAF6] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D5E3D8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D5E3D8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D5E3D8]" />
                <span className="ml-3 h-5 w-40 rounded-full bg-[#EFF6F0] sm:w-64" />
              </div>
              <div className="max-h-[28rem] overflow-hidden p-3 sm:p-5 md:p-6">
                <HeroVisual />
              </div>
            </div>
          </motion.div>

          {/* Stats: separate green card, all four corners rounded, small gap below the picture */}
          <motion.div variants={item} className="mx-auto mt-5 max-w-5xl md:mt-6">
            <dl className="grid grid-cols-2 overflow-hidden rounded-[1.75rem] bg-[#10251D] shadow-glow ring-1 ring-[#0B3D2E] md:grid-cols-4">
              {HERO_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={[
                    'flex flex-col-reverse items-center gap-2 border-white/10 px-4 py-7 text-center md:py-9',
                    i % 2 === 0 ? 'border-r' : '',
                    i < 2 ? 'border-b' : '',
                    'md:border-b-0 md:border-r md:last:border-r-0'
                  ].join(' ')}
                >
                  <dt className="max-w-[11rem] text-xs font-medium leading-snug text-[#DDEBE0]/70 sm:text-[0.8rem]">
                    {stat.label}
                  </dt>
                  <dd
                    className={`text-3xl font-bold tabular-nums tracking-tight md:text-[2.25rem] ${stat.accent ? 'text-[#DDEBE0]' : 'text-white'
                      }`}
                  >
                    <AnimatedNumber value={stat.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}