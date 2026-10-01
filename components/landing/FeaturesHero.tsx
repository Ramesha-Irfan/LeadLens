'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShieldCheck,
  Database,
  Flame,
  Send,
  Activity,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

const CAPABILITIES = [
  {
    id: 'discover',
    label: 'Discover',
    desc: 'Natural-language ICP search across 140M+ companies',
    icon: Search,
    angle: -90,
  },
  {
    id: 'verify',
    label: 'Verify',
    desc: 'Live SMTP handshake and MX deliverability checks',
    icon: ShieldCheck,
    angle: -30,
  },
  {
    id: 'enrich',
    label: 'Enrich',
    desc: 'Six-source waterfall fills every missing field',
    icon: Database,
    angle: 30,
  },
  {
    id: 'score',
    label: 'Score',
    desc: 'Intent signals ranked against your ICP vector',
    icon: Flame,
    angle: 90,
  },
  {
    id: 'reach',
    label: 'Reach',
    desc: 'AI-personalized outreach ready to send',
    icon: Send,
    angle: 150,
  },
  {
    id: 'track',
    label: 'Track',
    desc: 'Pipeline execution visible in real time',
    icon: Activity,
    angle: 210,
  },
] as const;

const STATS = [
  { value: '140M+', label: 'Global entities' },
  { value: '99.4%', label: 'Deliverable emails' },
  { value: '6-stage', label: 'AI pipeline' },
  { value: '<12s', label: 'First qualified lead' },
];

function polarPercent(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radiusPct,
    y: Math.sin(rad) * radiusPct,
  };
}

export default function FeaturesHero() {
  const [active, setActive] = useState<(typeof CAPABILITIES)[number]['id']>('discover');
  const activeCap = CAPABILITIES.find((c) => c.id === active) ?? CAPABILITIES[0];
  const ActiveIcon = activeCap.icon;

  const scrollToEngine = () => {
    document.getElementById('section-discovery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-4 pb-8 md:pt-5 md:pb-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Editorial copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative z-10"
          >
            <h1 className="font-extrabold tracking-tight text-[#10251D] leading-[0.95] mb-6">
              <span className="block whitespace-nowrap text-[clamp(1.85rem,4.2vw,3.75rem)]">
                Powerful Features
              </span>
              <span className="mt-1 inline-flex items-baseline gap-3">
                <span className="text-lg sm:text-xl font-semibold tracking-normal text-[#52635A]">for</span>
                <span className="relative text-[clamp(1.85rem,4.2vw,3.75rem)] text-[#145C43]">
                  Growth
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 text-[#145C43]/40"
                    viewBox="0 0 200 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M2 9C40 3 80 2 198 8"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#52635A] font-medium leading-relaxed max-w-lg mb-8 [text-wrap:balance]">
              A single lens over discovery, verification, enrichment, and outreach — so you find, prove, and connect with the right buyers worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToEngine}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#145C43] hover:bg-[#0B3D2E] shadow-md shadow-[#145C43]/25 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Watch the engine
                <ArrowDown className="w-4 h-4" />
              </motion.button>
              <p className="text-xs text-[#7A887F] max-w-[16rem] leading-snug">
                Tap a node on the lens to inspect each capability.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[#D5E3D8]/80 bg-[#D5E3D8]/80 shadow-sm">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white/80 backdrop-blur-md px-3 py-4 text-center transition-colors duration-200 hover:bg-white">
                  <div className="text-lg sm:text-xl font-extrabold text-[#10251D] tabular-nums tracking-tight">
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#7A887F] font-semibold mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Capability lens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[480px]"
          >
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#145C43]/10 blur-3xl pointer-events-none" />

            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px]">
              <div className="absolute inset-[12%] rounded-full border border-[#145C43]/15 bg-white/35 backdrop-blur-md shadow-[inset_0_0_40px_rgba(20,92,67,0.06)]" />
              <div className="absolute inset-[22%] rounded-full border border-dashed border-[#145C43]/30" />
              <div className="absolute inset-[34%] rounded-full border border-[#145C43]/20" />

              {/* Radar sweep */}
              <div className="absolute inset-[12%] rounded-full overflow-hidden pointer-events-none">
                <div
                  className="absolute inset-0 origin-center animate-[spin_9s_linear_infinite]"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, rgba(20,92,67,0.22) 38deg, transparent 70deg)',
                  }}
                />
              </div>

              {/* Crosshair */}
              <div className="absolute left-1/2 top-[12%] bottom-[12%] w-px bg-gradient-to-b from-transparent via-[#145C43]/20 to-transparent" />
              <div className="absolute top-1/2 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#145C43]/20 to-transparent" />

              {/* Center readout */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[132px] sm:w-[148px] h-[132px] sm:h-[148px] rounded-full bg-white/90 border border-[#B8D5C0] shadow-lg flex flex-col items-center justify-center text-center px-3 z-10">
                <ActiveIcon className="w-5 h-5 text-[#145C43] mb-1.5" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCap.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-sm font-bold text-[#10251D]">{activeCap.label}</div>
                    <p className="text-[10px] leading-snug text-[#52635A] mt-1">{activeCap.desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {CAPABILITIES.map((cap, i) => {
                const pos = polarPercent(cap.angle, 40);
                const isActive = active === cap.id;
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.id}
                    className="absolute z-20"
                    style={{
                      left: `calc(50% + ${pos.x}%)`,
                      top: `calc(50% + ${pos.y}%)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <motion.button
                      type="button"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + i * 0.06, type: 'spring', stiffness: 260, damping: 18 }}
                      onMouseEnter={() => setActive(cap.id)}
                      onFocus={() => setActive(cap.id)}
                      onClick={() => setActive(cap.id)}
                      className={`flex items-center gap-2 rounded-full pl-1.5 pr-3 py-1.5 border backdrop-blur-md cursor-pointer transition-all ${isActive
                        ? 'bg-[#145C43] border-[#145C43] text-white shadow-lg shadow-[#145C43]/30'
                        : 'bg-white/90 border-[#D5E3D8] text-[#10251D] hover:border-[#145C43]/50'
                        }`}
                      aria-pressed={isActive}
                    >
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${isActive ? 'bg-white/15' : 'bg-[#EFF6F0] text-[#145C43]'
                          }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-xs font-semibold hidden sm:inline">{cap.label}</span>
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 md:mt-4 relative overflow-hidden rounded-2xl border border-[#D5E3D8]/70 bg-white/45 backdrop-blur-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/80 to-transparent z-10" />
          <div className="flex gap-8 py-3.5 w-max animate-marquee text-[11px] font-semibold uppercase tracking-[0.2em] text-[#52635A]">
            {[...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES].map((cap, idx) => (
              <span key={`${cap.id}-${idx}`} className="flex items-center gap-2 shrink-0">
                <span className="w-1 h-1 rounded-full bg-[#145C43]" />
                {cap.label} · {cap.desc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
