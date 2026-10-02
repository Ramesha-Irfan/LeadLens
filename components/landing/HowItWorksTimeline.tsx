'use client';

import React, { useState, useRef } from 'react';
import {
  Target,
  Globe2,
  ShieldCheck,
  Send,
  CheckCircle2,
  Sparkles,
  Activity
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    number: '01',
    title: 'Define Your ICP',
    icon: Target,
    kicker: 'Precision Targeting',
    description:
      'Set exact demographic and firmographic boundaries or type your criteria in natural language. Specify company headcount, tech stack, funding status, geography, and active hiring velocity.',
    features: ['140M+ B2B entity graph', 'Hiring signal detectors', 'Custom headcount & ARR filters'],
    morphDetail: {
      stats: '50-250 Employees · Series A/B',
      tags: ['React/Next.js', '+20% Eng Growth', 'US & EU Region'],
      metricLabel: 'Target Match Ratio',
      metricValue: '99.2%'
    }
  },
  {
    number: '02',
    title: 'Discover Global Leads',
    icon: Globe2,
    kicker: 'Cross-Border Reach',
    description:
      'Pinpoint decision-makers across 180+ countries. Filter by seniority (C-Suite, VP, Director) and functional department with real-time org-chart mapping.',
    features: ['Instant regional hubs mapping', 'Seniority & decision authority', 'Live talent mobility detection'],
    morphDetail: {
      stats: '180+ Countries · 42M+ Executives',
      tags: ['CTO / VP Eng', 'Direct Authority', 'Real-time Mobility'],
      metricLabel: 'Org Map Coverage',
      metricValue: '98.4%'
    }
  },
  {
    number: '03',
    title: 'Enrich & Verify Data',
    icon: ShieldCheck,
    kicker: 'Waterfall Recovery',
    description:
      'Never lose a prospect to missing contact info. Our cascading multi-source waterfall checks primary registries, social graphs, and executes direct SMTP handshakes to ensure zero bounces.',
    features: ['Multi-source cascading lookups', 'SMTP zero-bounce verification', 'Direct dials & mobile recovery'],
    morphDetail: {
      stats: 'Cascading Lookups · Real-time MX Ping',
      tags: ['SMTP Handshake', 'Direct Dials', '0% Bounce Rate'],
      metricLabel: 'Deliverability Score',
      metricValue: '99.8%'
    }
  },
  {
    number: '04',
    title: 'Launch Personalized Outreach',
    icon: Send,
    kicker: 'Autonomous Execution',
    description:
      'Generate highly personalized, multi-step email sequences based on prospect research. Connect your sending inboxes, set smart daily ramp limits, and track meetings booked.',
    features: ['AI research-backed tone matching', 'Multi-inbox rotation & warmup', 'Unified reply & meeting inbox'],
    morphDetail: {
      stats: 'AI Personalization · Smart Ramp Warmup',
      tags: ['Multi-Inbox', 'Tone Matching', 'Auto Meeting Sync'],
      metricLabel: 'Avg Reply Rate',
      metricValue: '34.6%'
    }
  }
];

// Magnetic Card Component with 3D Tilt & Magnetic Physics
function MagneticStepCard({
  step,
  idx,
  onLeft,
  isActive
}: {
  step: typeof STEPS[0];
  idx: number;
  onLeft: boolean;
  isActive: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for magnetic tilt & slight shift
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ['-8px', '8px']);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ['-8px', '8px']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.55, delay: 0.1 + idx * 0.05, ease: EASE }}
      className={`group relative p-7 sm:p-9 rounded-[1.75rem] border transition-all duration-500 overflow-hidden ${
        onLeft ? 'lg:col-start-1' : 'lg:col-start-2'
      } ${
        isActive
          ? 'border-[#145C43] bg-white ring-2 ring-[#145C43]/20 shadow-[0_25px_65px_-12px_rgba(20,92,67,0.28)]'
          : 'border-[#D5E3D8] bg-white/90 backdrop-blur-sm shadow-lift hover:shadow-[0_20px_50px_-15px_rgba(20,92,67,0.22)] hover:border-[#145C43]/50 hover:bg-white'
      }`}
    >
      {/* Subtle ambient light glow */}
      <div
        aria-hidden
        className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-2xl transition-all duration-500 pointer-events-none ${
          isActive ? 'bg-[#145C43]/15 scale-150' : 'bg-[#DDEBE0]/50 group-hover:bg-[#B8D5C0]/40 group-hover:scale-125'
        }`}
      />

      {/* Header section */}
      <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#145C43] bg-[#EFF6F0] px-2.5 py-1 rounded-full mb-1">
            {step.kicker}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#10251D] mt-2 tracking-tight group-hover:text-[#145C43] transition-colors duration-300">
            {step.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${
              isActive
                ? 'bg-[#145C43] text-white shadow-glow scale-105'
                : 'bg-[#EFF6F0] text-[#145C43] group-hover:bg-[#145C43] group-hover:text-white'
            }`}
          >
            <Icon className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6" />
          </div>
        </div>
      </div>

      <p className="text-sm sm:text-[15px] text-[#52635A] leading-relaxed mb-6 relative z-10">
        {step.description}
      </p>

      {/* Features list */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5EAE5] relative z-10">
        {step.features.map((feat) => (
          <span
            key={feat}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#52635A] bg-[#F8FAF6] border border-[#E5EAE5] rounded-full px-3 py-1.5 hover:border-[#B8D5C0] hover:bg-[#EFF6F0] hover:text-[#145C43] transition-all duration-200"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#145C43] shrink-0" />
            {feat}
          </span>
        ))}
      </div>

      {/* AUTO REVEAL ON SCROLL: Opacity + Height + Y + Scale animation */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 15, scale: 0.97, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', y: 0, scale: 1, marginTop: 20 }}
            exit={{ opacity: 0, height: 0, y: 10, scale: 0.97, marginTop: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden border-t border-[#D5E3D8] pt-5 relative z-10"
          >
            <div className="p-4 rounded-xl bg-[#EFF6F0] border border-[#B8D5C0] space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#145C43]">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#145C43] animate-pulse" /> Live Execution Preview
                </span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-[#B8D5C0]">
                  {step.morphDetail.metricLabel}: <strong className="text-[#10251D]">{step.morphDetail.metricValue}</strong>
                </span>
              </div>

              <p className="text-xs text-[#52635A] font-medium">
                {step.morphDetail.stats}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {step.morphDetail.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-[#145C43] bg-white border border-[#D5E3D8] px-2.5 py-0.5 rounded-full"
                  >
                    • {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HowItWorksTimeline() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  return (
    <section id="hiw-steps" className="w-full py-20 md:py-32 bg-[#EFF6F0] border-b border-[#D5E3D8] relative transition-colors overflow-hidden">
      {/* Ambient Background Grid & Glows */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-fine fade-mask-b opacity-45" />
        <div className="animate-float-slow absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[340px] bg-[#B8D5C0]/35 blur-3xl rounded-full" />
        <div className="animate-float-slow-reverse absolute top-1/3 right-0 w-[450px] h-[350px] bg-white/60 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-dots-fine fade-mask-radial opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: EASE }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[3.8rem] lg:leading-[1.06] font-bold tracking-[-0.03em] text-[#10251D] mb-6 [text-wrap:balance]">
            From Raw Global Data to Closed Deals in{' '}
            <span className="text-gradient-brand">Four Steps</span>
          </h2>
          <p className="text-[#52635A] text-base sm:text-lg lg:text-xl leading-relaxed [text-wrap:balance] max-w-2xl mx-auto">
            LeadLens merges sales intelligence, data enrichment, and outbound automation into a unified operating workflow.
          </p>
        </motion.div>

        {/* Step Timeline with Scroll-Linked Connected Spine & Waterfall Flow Data Packets */}
        <div className="relative max-w-6xl mx-auto">
          {/* Background Track Spine */}
          <div
            aria-hidden
            className="absolute left-[21px] top-8 bottom-8 w-[2px] bg-[#D5E3D8] lg:left-1/2 lg:-translate-x-1/2"
          />

          {/* Animated Scroll-Linked Drawing Spine */}
          <motion.div
            aria-hidden
            style={{ originY: 0 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.6, ease: EASE }}
            className="absolute left-[21px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#145C43] via-[#237A5B] to-[#4E9C79] shadow-[0_0_12px_rgba(20,92,67,0.5)] lg:left-1/2 lg:-translate-x-1/2 z-0"
          />

          {/* WATERFALL FLOW ANIMATION: Data Packets Traveling Down the Spine */}
          <div aria-hidden className="absolute left-[21px] top-8 bottom-8 w-[2px] lg:left-1/2 lg:-translate-x-1/2 z-10 pointer-events-none overflow-hidden">
            {[0, 1.8, 3.6].map((delay, pIdx) => (
              <motion.div
                key={pIdx}
                initial={{ top: '-10%', opacity: 0 }}
                animate={{
                  top: ['0%', '100%'],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  delay: delay,
                  ease: 'easeInOut'
                }}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-4 rounded-full bg-gradient-to-b from-white via-[#4E9C79] to-[#145C43] shadow-[0_0_14px_#145C43]"
              />
            ))}
          </div>

          <div className="space-y-12 lg:space-y-16 relative z-10">
            {STEPS.map((step, idx) => {
              const onLeft = idx % 2 === 0;
              const isActive = activeStepIdx === idx;

              return (
                <motion.div
                  key={step.number}
                  id={`hiw-step-${idx + 1}`}
                  onViewportEnter={() => setActiveStepIdx(idx)}
                  viewport={{ margin: '-25% 0px -35% 0px' }}
                  className="relative pl-14 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-16 items-center"
                >
                  {/* Spine Node Badge */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0.5 }}
                    animate={{ scale: isActive ? 1.15 : 1, opacity: isActive ? 1 : 0.7 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="absolute left-0 top-8 lg:left-1/2 lg:-translate-x-1/2 z-20 pointer-events-none"
                  >
                    <span
                      className={`w-[44px] h-[44px] rounded-full flex items-center justify-center font-mono text-xs font-bold border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#145C43] border-white text-white shadow-[0_0_22px_rgba(20,92,67,0.65)] scale-110'
                          : 'bg-[#145C43] border-white text-white shadow-glow'
                      }`}
                    >
                      {step.number}
                    </span>
                  </motion.div>

                  {/* 3D Magnetic Card with Auto Reveal on Scroll */}
                  <MagneticStepCard
                    step={step}
                    idx={idx}
                    onLeft={onLeft}
                    isActive={isActive}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
