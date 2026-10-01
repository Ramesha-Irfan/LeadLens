'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Building,
  Users,
  Database,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Flame
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

const PIPELINE_STAGES = [
  { id: 'icp', name: 'Understanding ICP', detail: 'Parsing semantics, tech keywords, and employee boundaries', icon: Sparkles },
  { id: 'companies', name: 'Searching Companies', detail: 'Scanning 140M+ global enterprise entity registry', icon: Building },
  { id: 'decision', name: 'Finding Decision Makers', detail: 'Filtering CTO, VP, and Engineering leadership', icon: Users },
  { id: 'enrich', name: 'Enriching Data', detail: 'Cascading public filings & corporate websites', icon: Database },
  { id: 'verify', name: 'Verifying Contacts', detail: 'Real-time MX checks & SMTP handshake ping', icon: ShieldCheck },
  { id: 'score', name: 'Scoring Leads', detail: 'Ranking by intent signals & ICP vector cosine match', icon: Flame }
];

export default function AiDiscoverySection() {
  const [prompt, setPrompt] = useState('Find CTOs at AI startups in Europe.');
  const [visibleStagesCount, setVisibleStagesCount] = useState(6);
  const [runningStage, setRunningStage] = useState<number | null>(null);
  const [completedStages, setCompletedStages] = useState<number>(6);
  const [isRunning, setIsRunning] = useState(false);
  const [finalResultCount, setFinalResultCount] = useState(2841);

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleRunPipeline = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setVisibleStagesCount(0);
    setCompletedStages(0);
    setRunningStage(null);

    // Initial brief initialization pause
    await sleep(250);

    for (let i = 0; i < PIPELINE_STAGES.length; i++) {
      // Stage i appears and starts running
      setVisibleStagesCount(i + 1);
      setRunningStage(i);

      // Run duration for current stage
      await sleep(600);

      // Stage i completes
      setCompletedStages(i + 1);
      setRunningStage(null);

      // Pause before next stage appears
      await sleep(150);
    }

    setIsRunning(false);
    setFinalResultCount(prompt.includes('Europe') ? 2841 : prompt.includes('Sales') ? 3920 : 1840);
  };

  return (
    <section id="section-discovery" className="w-full py-20 md:py-28 bg-white border-b border-[#E5EAE5] text-[#10251D] relative transition-colors">
      {/* Subtle grid accent */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[460px] h-[340px] bg-grid-fine fade-mask-radial opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] font-bold tracking-[-0.02em] text-[#10251D] mb-4 [text-wrap:balance]">
            AI Lead Discovery in Real-Time
          </h2>
          <p className="text-[#52635A] text-base sm:text-lg leading-relaxed">
            Input natural language parameters. Watch the engine deconstruct the brief into high-fidelity entity matches, verified contact data, and ranked prospects.
          </p>
        </motion.div>

        {/* 2-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Side: Describe who you want to reach */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 rounded-2xl border border-[#E5EAE5] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-soft"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#145C43] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#145C43]" />
                </span>
                <h3 className="text-lg font-bold text-[#10251D] tracking-tight">Describe Who You Want to Reach</h3>
              </div>
              <p className="text-sm text-[#52635A] mb-6 leading-relaxed">
                Describe target industries, seniority titles, company sizes, geographic regions, or specific technology requirements in natural language.
              </p>

              <div className="space-y-5 flex-1 flex flex-col">
                <div className="relative flex-1 flex flex-col">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#52635A] block mb-2">
                    Target ICP Brief Prompt
                  </label>
                  <textarea
                    rows={4}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full flex-1 min-h-[10rem] rounded-xl border border-[#D5E3D8] bg-[#F8FAF6] p-4 text-sm text-[#10251D] placeholder-[#7A887F]/60 focus:border-[#145C43] focus:ring-2 focus:ring-[#145C43]/15 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Quick Presets */}
                <div className="space-y-2">
                  <span className="text-[11px] text-[#52635A] font-semibold">Try prompt variations:</span>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setPrompt('Find CTOs at AI startups in Europe.')}
                      className="text-left text-xs p-2.5 rounded-lg bg-[#F8FAF6] border border-[#E5EAE5] text-[#52635A] hover:text-[#10251D] hover:border-[#B8D5C0] hover:bg-[#EFF6F0]/60 transition-colors cursor-pointer"
                    >
                      • CTOs at AI startups in Europe
                    </button>
                    <button
                      onClick={() => setPrompt('Find Heads of Sales at B2B SaaS in US & Canada with recent funding.')}
                      className="text-left text-xs p-2.5 rounded-lg bg-[#F8FAF6] border border-[#E5EAE5] text-[#52635A] hover:text-[#10251D] hover:border-[#B8D5C0] hover:bg-[#EFF6F0]/60 transition-colors cursor-pointer"
                    >
                      • Heads of Sales at B2B SaaS in US & Canada
                    </button>
                    <button
                      onClick={() => setPrompt('Find FinTech Founders in Dubai & Singapore using AWS and Stripe.')}
                      className="text-left text-xs p-2.5 rounded-lg bg-[#F8FAF6] border border-[#E5EAE5] text-[#52635A] hover:text-[#10251D] hover:border-[#B8D5C0] hover:bg-[#EFF6F0]/60 transition-colors cursor-pointer"
                    >
                      • FinTech Founders in Dubai & Singapore
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5EAE5]">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRunPipeline}
                disabled={isRunning}
                className="w-full py-3.5 px-4 rounded-full text-xs font-semibold text-white bg-[#145C43] hover:bg-[#0B3D2E] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-soft hover:shadow-glow disabled:opacity-60 disabled:hover:shadow-soft"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Processing Global Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Trigger AI Discovery Pipeline</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: AI Processing Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 rounded-2xl border border-[#E5EAE5] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-soft"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5EAE5] mb-6">
                <div>
                  <h3 className="text-sm font-bold text-[#10251D] uppercase tracking-[0.14em]">
                    Pipeline Execution Hierarchy
                  </h3>
                  <p className="text-xs text-[#7A887F] mt-1">Multi-layer discovery & verification graph</p>
                </div>
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border font-semibold whitespace-nowrap transition-colors duration-300 ${isRunning
                  ? 'bg-[#145C43]/10 border-[#145C43]/30 text-[#145C43]'
                  : 'bg-[#EFF6F0] border-[#D5E3D8] text-[#145C43]'
                  }`}>
                  {isRunning ? `Status: Stage ${Math.min(completedStages + 1, 6)}/6 Active` : 'Status: Pipeline Complete'}
                </span>
              </div>

              {/* Pipeline Stages Vertical Tree */}
              <div className="space-y-2.5 relative min-h-[380px]">
                {visibleStagesCount === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center text-[#52635A]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6F0] border border-[#D5E3D8] flex items-center justify-center text-[#145C43] mb-3 shadow-soft">
                      <Sparkles className="w-5 h-5 animate-spin text-[#145C43]" />
                    </div>
                    <p className="text-xs font-bold text-[#10251D]">Initializing Autonomous Prospecting Engine...</p>
                    <p className="text-[11px] text-[#7A887F] mt-1">Connecting to verified 140M+ B2B entity graph</p>
                  </motion.div>
                )}

                {PIPELINE_STAGES.slice(0, visibleStagesCount).map((stg, sIdx) => {
                  const isDone = completedStages > sIdx;
                  const isCurrent = runningStage === sIdx;
                  const Icon = stg.icon;

                  return (
                    <motion.div
                      key={stg.id}
                      initial={{ opacity: 0, y: 16, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between group hover:border-[#145C43]/40 hover:shadow-soft ${isDone
                        ? 'border-[#D5E3D8] bg-[#F8FAF6] text-[#10251D]'
                        : isCurrent
                          ? 'border-[#145C43] bg-[#EFF6F0]/80 text-[#10251D] shadow-soft'
                          : 'border-[#E5EAE5] bg-white text-[#7A887F]/60 opacity-60'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${isDone
                            ? 'bg-[#DDEBE0] text-[#145C43] group-hover:bg-[#145C43] group-hover:text-white'
                            : isCurrent
                              ? 'bg-[#145C43] text-white shadow-soft'
                              : 'bg-[#F8FAF6] text-[#7A887F]'
                            }`}
                        >
                          <Icon className={`w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 ${isCurrent ? 'animate-pulse' : ''}`} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold flex items-center gap-2">
                            <span className={`transition-colors ${isCurrent ? 'text-[#145C43] font-bold' : 'text-[#10251D] group-hover:text-[#145C43]'}`}>
                              {stg.name}
                            </span>
                            {isCurrent && (
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#145C43]/10 text-[10px] text-[#145C43] font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#145C43] animate-ping" />
                                Running...
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#52635A]">{stg.detail}</p>
                        </div>
                      </div>

                      <div className="shrink-0 pl-2">
                        {isDone ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#145C43]" />
                          </motion.div>
                        ) : isCurrent ? (
                          <RefreshCw className="w-4 h-4 text-[#145C43] animate-spin" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-[#D5E3D8]" />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Final Result Card */}
            <div className="mt-6 pt-5 border-t border-[#E5EAE5]">
              <div className="p-5 rounded-xl border border-[#B8D5C0] bg-[#EFF6F0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#145C43] block">
                    Verified Pipeline Result
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold tracking-tight text-[#10251D] tabular-nums">
                      {isRunning ? 'Calculating...' : <AnimatedNumber key={finalResultCount} value={finalResultCount.toLocaleString()} />}
                    </span>
                    <span className="text-xs font-medium text-[#52635A]">Qualified Prospects</span>
                  </div>
                  <p className="text-[11px] text-[#52635A] mt-1">
                    99.4% Deliverable · Seniority match verified · Ready to outreach
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
