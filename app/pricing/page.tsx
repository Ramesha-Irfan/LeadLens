'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Sliders,
  HelpCircle,
  ChevronDown,
  Building2,
  TrendingUp,
  Mail,
  CheckCircle2,
  Database,
  ArrowUpRight
} from 'lucide-react';
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import AnimatedNumber from '@/components/landing/AnimatedNumber';

/* ------------------------------------------------------------------ */
/*  Plans Data                                                        */
/* ------------------------------------------------------------------ */

interface PlanTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  leadsQuota: string;
  emailsPerMonth: string;
  mailboxes: string;
  highlight: boolean;
  badge?: string;
  cta: string;
  ctaLink: string;
  ctaNote: string;
  features: string[];
  specs: {
    enrichmentSources: string;
    aiSequences: string;
    support: string;
    apiAccess: boolean;
  };
}

const PLANS: PlanTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal for solo founders & boutique consultants testing new markets.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    leadsQuota: '1,500',
    emailsPerMonth: '10,000',
    mailboxes: '2 Mailboxes',
    highlight: false,
    cta: 'Start Free Forever',
    ctaLink: '/signup?plan=starter',
    ctaNote: 'No credit card required',
    features: [
      'Global lead discovery across 180+ countries',
      '5-source cascading waterfall enrichment',
      'Real-time SMTP email verification handshake',
      'AI email sequence generator (3 variants)',
      '2 connected sending mailboxes with warmup',
      'CSV export & CRM webhook triggers',
      'Community support & knowledge base',
    ],
    specs: {
      enrichmentSources: '5 Sources',
      aiSequences: 'Standard AI',
      support: 'Community',
      apiAccess: false,
    },
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Engineered for scaling B2B sales teams demanding maximum pipeline velocity.',
    monthlyPrice: 199,
    yearlyPrice: 159,
    leadsQuota: '8,500',
    emailsPerMonth: '120,000',
    mailboxes: '10 Mailboxes',
    highlight: true,
    badge: 'Most Popular · 3x ROI',
    cta: 'Start 14-Day Free Trial',
    ctaLink: '/signup?plan=growth',
    ctaNote: 'Full access · Instant setup',
    features: [
      'Full 140M+ global B2B entity graph access',
      '8-source priority waterfall recovery & mobile dials',
      'Continuous hiring & funding intent signals',
      'Autonomous multi-stage sequence orchestrator',
      '10 connected mailboxes with automated warmup',
      'Unified reply inbox with AI sentiment detection',
      'Live meeting booking intelligence & calendar sync',
      'Priority live chat & onboarding engineer',
    ],
    specs: {
      enrichmentSources: '8+ Sources',
      aiSequences: 'Unlimited Pro AI',
      support: 'Priority Live Chat',
      apiAccess: true,
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Custom orchestration, dedicated infrastructure, and unlimited data scale.',
    monthlyPrice: 499,
    yearlyPrice: 399,
    leadsQuota: '35,000+',
    emailsPerMonth: '600,000+',
    mailboxes: 'Unlimited',
    highlight: false,
    badge: 'Custom Scale',
    cta: 'Contact Enterprise Team',
    ctaLink: '/signup?plan=enterprise',
    ctaNote: 'Custom contracts & SLAs',
    features: [
      'Unlimited user seats & role-based governance',
      'Full REST API access & Snowflake / BigQuery sync',
      'Dedicated IP rotation pool & deliverability guard',
      '12+ registry priority waterfall cascade',
      'Unlimited connected sending accounts',
      'Dedicated Customer Success Manager & SLA',
      'SOC2 Type II, GDPR & CCPA compliant architecture',
      'Custom AI prompt tuning & outbound workflows',
    ],
    specs: {
      enrichmentSources: '12+ Full Graph',
      aiSequences: 'Custom Vector Model',
      support: 'Dedicated CSM & SLA',
      apiAccess: true,
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Feature Comparison Matrix                                          */
/* ------------------------------------------------------------------ */

const COMPARISON_CATEGORIES = [
  {
    category: 'Lead Discovery & Graph Intelligence',
    items: [
      { name: '140M+ Global B2B Companies & Contacts', starter: '1,500 / mo', growth: '8,500 / mo', enterprise: 'Custom 35K+' },
      { name: 'Natural Language ICP Query Synthesis', starter: true, growth: true, enterprise: true },
      { name: 'Technographic & Hiring Intent Filters', starter: 'Basic', growth: 'Advanced', enterprise: 'Full Real-Time' },
      { name: 'Funding & Executive Change Triggers', starter: false, growth: true, enterprise: true },
    ],
  },
  {
    category: 'Waterfall Enrichment & Verification',
    items: [
      { name: 'Cascading Data Source Registries', starter: '5 Sources', growth: '8+ Sources', enterprise: '12+ Full Graph' },
      { name: 'Real-Time SMTP & MX Deliverability Handshake', starter: true, growth: true, enterprise: true },
      { name: 'Direct Mobile Dial Recovery', starter: false, growth: true, enterprise: true },
      { name: 'Catch-All Email Verification Engine', starter: false, growth: true, enterprise: true },
    ],
  },
  {
    category: 'Outbound Campaigns & AI Outreach',
    items: [
      { name: 'Connected Sending Mailboxes', starter: '2 Accounts', growth: '10 Accounts', enterprise: 'Unlimited' },
      { name: 'AI Sequence & Personalization Studio', starter: '3 Variants', growth: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Automated Mailbox Warmup & Health Monitor', starter: true, growth: true, enterprise: true },
      { name: 'Unified Reply Inbox & Sentiment Classifier', starter: false, growth: true, enterprise: true },
    ],
  },
  {
    category: 'Security, Infrastructure & Support',
    items: [
      { name: 'CRM Sync (HubSpot, Salesforce, Pipedrive)', starter: 'Webhooks', growth: 'Native 2-Way', enterprise: 'Native + Custom' },
      { name: 'REST API & Snowflake Sync', starter: false, growth: 'Standard', enterprise: 'Dedicated High-Rate' },
      { name: 'Dedicated Deliverability IP Pool', starter: false, growth: false, enterprise: true },
      { name: 'SLA Guarantee & SOC2 Compliance', starter: 'Standard', growth: '99.9%', enterprise: '99.98% Custom SLA' },
      { name: 'Customer Support Tier', starter: 'Community', growth: 'Priority Live Chat', enterprise: 'Dedicated CSM' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ Items                                                         */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'How does the 14-day free trial work?',
    a: 'You get full, unrestricted access to the Growth plan features for 14 days with zero risk. You can discover leads, test waterfall enrichment, and connect mailboxes immediately.',
  },
  {
    q: 'What happens if I exceed my monthly lead quota?',
    a: 'You can upgrade your plan at any time with prorated billing, or purchase affordable top-up credit packs directly from your dashboard without service interruption.',
  },
  {
    q: 'Do unused lead credits roll over?',
    a: 'Yes! On Annual plans, unused search and enrichment credits roll over month-to-month so you never lose the capacity you paid for.',
  },
  {
    q: 'How is LeadLens different from ZoomInfo or Apollo?',
    a: 'Unlike legacy vendors that charge steep per-seat fees with outdated databases, LeadLens combines live 12-source waterfall data recovery with native AI outreach in a single unified system, saving teams over 70% in software costs.',
  },
  {
    q: 'Can I cancel or change my plan anytime?',
    a: 'Yes, you have complete control over your subscription from the billing settings. No long-term lock-in contracts on standard monthly plans.',
  },
  {
    q: 'Are your contacts GDPR and CCPA compliant?',
    a: 'Yes, 100%. LeadLens aggregates only publicly available business contact information and processes data strictly under legitimate interest compliance guidelines with instant opt-out handling.',
  },
];

/* ------------------------------------------------------------------ */
/*  Main Pricing Page Component                                        */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sliderLeads, setSliderLeads] = useState<number>(5000);

  // ROI Calculator Calculations
  const calculatedSavings = Math.round((sliderLeads * 0.45) - (isAnnual ? 159 : 199));
  const estimatedHoursSaved = Math.round(sliderLeads * 0.04);

  return (
    <div className="pricing-gradient-bg relative text-[#10251D] font-sans antialiased selection:bg-[#DDEBE0] selection:text-[#145C43]">

      <div className="relative z-10">
        {/* Navigation Bar */}
        <LandingNavbar />

        <main className="pt-8 pb-20 md:pt-12 md:pb-28">
          {/* ========================================================= */}
          {/* HERO SECTION                                              */}
          {/* ========================================================= */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#10251D] leading-[1.08] mb-6 max-w-4xl mx-auto [text-wrap:balance]">
                Simple, High-Velocity Pricing for{' '}
                <span className="relative inline-block text-[#145C43]">
                  Modern Outbound
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 text-[#145C43]/35"
                    viewBox="0 0 200 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M2 9C40 3 80 2 198 8"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#52635A] max-w-2xl mx-auto leading-relaxed mb-10 [text-wrap:balance]">
                Access 140M+ verified global contacts, cascading 12-source enrichment, and autonomous AI campaigns without paying exorbitant per-seat markups.
              </p>

              {/* Billing Cycle Switch */}
              <div className="inline-flex items-center justify-center p-1.5 rounded-2xl bg-[#EFF6F0] border border-[#D5E3D8] shadow-inner mb-12">
                <button
                  type="button"
                  onClick={() => setIsAnnual(false)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${!isAnnual
                      ? 'bg-white text-[#10251D] shadow-sm'
                      : 'text-[#52635A] hover:text-[#10251D]'
                    }`}
                >
                  Monthly Billing
                </button>
                <button
                  type="button"
                  onClick={() => setIsAnnual(true)}
                  className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${isAnnual
                      ? 'bg-[#145C43] text-white shadow-md shadow-[#145C43]/20'
                      : 'text-[#52635A] hover:text-[#10251D]'
                    }`}
                >
                  <span>Annual Billing</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase transition-colors ${isAnnual ? 'bg-[#DDEBE0] text-[#145C43]' : 'bg-[#145C43]/15 text-[#145C43]'
                      }`}
                  >
                    Save 20%
                  </span>
                </button>
              </div>

              {/* Value metrics strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-6">
                {[
                  { label: 'Verified Contacts', val: '140M+' },
                  { label: 'Deliverability Rate', val: '99.4%' },
                  { label: 'Enrichment Sources', val: '12+ Cascade' },
                  { label: 'Per-Seat Fees', val: '$0 Zero' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-xl bg-white/70 border border-[#D5E3D8]/80 backdrop-blur-md text-center transition-colors duration-200 hover:bg-white"
                  >
                    <p className="text-base sm:text-lg font-bold text-[#145C43]">
                      <AnimatedNumber value={stat.val} />
                    </p>
                    <p className="text-[11px] font-medium text-[#7A887F] uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* ========================================================= */}
          {/* PRICING CARDS GRID                                        */}
          {/* ========================================================= */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {PLANS.map((plan, idx) => {
                const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice;
                const isHighlight = plan.highlight;

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.12 }}
                    whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
                    className={`relative rounded-3xl flex flex-col transition-all duration-300 ${isHighlight
                        ? 'bg-gradient-to-b from-[#145C43] to-[#0B3D2E] text-white shadow-2xl shadow-[#145C43]/30 border-2 border-[#145C43] scale-[1.02] lg:-translate-y-2 hover:shadow-[0_24px_60px_-15px_rgba(20,92,67,0.45)]'
                        : 'bg-white/80 backdrop-blur-xl text-[#10251D] border border-[#D5E3D8] hover:border-[#145C43]/40 shadow-lg hover:shadow-[0_20px_50px_-15px_rgba(20,92,67,0.18)]'
                      }`}
                  >
                    {/* Badge */}
                    {plan.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#DDEBE0] text-[#145C43] border border-[#B8D5C0] shadow-md uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#145C43] animate-pulse" />
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div className="p-7 sm:p-8 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold">{plan.name}</h3>
                          <span
                            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isHighlight
                                ? 'bg-white/15 text-[#DDEBE0]'
                                : 'bg-[#EFF6F0] text-[#145C43]'
                              }`}
                          >
                            {plan.mailboxes}
                          </span>
                        </div>
                        <p
                          className={`text-xs leading-relaxed min-h-[36px] ${isHighlight ? 'text-[#DDEBE0]/90' : 'text-[#52635A]'
                            }`}
                        >
                          {plan.tagline}
                        </p>
                      </div>

                      {/* Pricing Amount */}
                      <div className="mb-7 pb-6 border-b border-current/10">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                            ${price}
                          </span>
                          <span
                            className={`text-sm font-medium ${isHighlight ? 'text-[#DDEBE0]' : 'text-[#7A887F]'
                              }`}
                          >
                            / month
                          </span>
                        </div>
                        <p
                          className={`text-xs mt-1.5 font-medium ${isHighlight ? 'text-[#B8D5C0]' : 'text-[#145C43]'
                            }`}
                        >
                          {price === 0
                            ? 'Free forever · Upgrade anytime'
                            : isAnnual
                              ? 'Billed annually ($' + price * 12 + '/yr)'
                              : 'Billed monthly · Cancel anytime'}
                        </p>
                      </div>

                      {/* Quota Highlights */}
                      <div
                        className={`p-4 rounded-2xl mb-7 space-y-2.5 ${isHighlight ? 'bg-white/10' : 'bg-[#F8FAF6] border border-[#E5EAE5]'
                          }`}
                      >
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className={isHighlight ? 'text-[#DDEBE0]' : 'text-[#52635A]'}>
                            Verified Leads:
                          </span>
                          <span className="font-bold">{plan.leadsQuota} / mo</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className={isHighlight ? 'text-[#DDEBE0]' : 'text-[#52635A]'}>
                            Monthly Outreach:
                          </span>
                          <span className="font-bold">{plan.emailsPerMonth}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className={isHighlight ? 'text-[#DDEBE0]' : 'text-[#52635A]'}>
                            Data Enrichment:
                          </span>
                          <span className="font-bold">{plan.specs.enrichmentSources}</span>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="flex-1 space-y-3 mb-8">
                        <p
                          className={`text-xs font-bold uppercase tracking-wider mb-3 ${isHighlight ? 'text-[#DDEBE0]' : 'text-[#10251D]'
                            }`}
                        >
                          Included Capabilities:
                        </p>
                        {plan.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2.5 text-xs leading-relaxed">
                            <div
                              className={`mt-0.5 rounded-full p-0.5 shrink-0 ${isHighlight
                                  ? 'bg-[#DDEBE0] text-[#145C43]'
                                  : 'bg-[#EFF6F0] text-[#145C43]'
                                }`}
                            >
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className={isHighlight ? 'text-[#F5F1E6]' : 'text-[#52635A]'}>
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={plan.ctaLink}
                        className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md group cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${isHighlight
                            ? 'bg-white text-[#145C43] hover:bg-[#F5F1E6] shadow-lg hover:shadow-xl'
                            : 'bg-[#145C43] text-white hover:bg-[#0B3D2E] hover:shadow-glow'
                          }`}
                      >
                        <span>{plan.cta}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
                      </Link>
                      <p
                        className={`text-[11px] text-center mt-2.5 ${isHighlight ? 'text-[#DDEBE0]/80' : 'text-[#7A887F]'
                          }`}
                      >
                        {plan.ctaNote}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ========================================================= */}
          {/* INTERACTIVE ROI & SAVINGS CALCULATOR                      */}
          {/* ========================================================= */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="bg-gradient-to-br from-[#EFF6F0] via-white to-[#F5F1E6] rounded-3xl border border-[#D5E3D8] p-8 sm:p-10 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Controls */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D5E3D8] text-xs font-semibold text-[#145C43]">
                    <Sliders className="w-3.5 h-3.5" />
                    Interactive Cost-Efficiency Estimator
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#10251D]">
                    Calculate your software savings with LeadLens
                  </h3>
                  <p className="text-sm text-[#52635A] leading-relaxed">
                    Compare LeadLens all-in-one waterfall intelligence against fragmented stacks (ZoomInfo, Apollo, Clay + Instantly).
                  </p>

                  <div className="pt-2">
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                      <span>Monthly Target Verified Leads:</span>
                      <span className="text-[#145C43] text-lg tabular-nums">
                        {sliderLeads.toLocaleString()} leads
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={25000}
                      step={500}
                      value={sliderLeads}
                      onChange={(e) => setSliderLeads(Number(e.target.value))}
                      className="w-full h-2.5 bg-[#D5E3D8] rounded-lg appearance-none cursor-pointer accent-[#145C43]"
                    />
                    <div className="flex justify-between text-[11px] text-[#7A887F] mt-1 font-medium">
                      <span>1,000 leads</span>
                      <span>10,000 leads</span>
                      <span>25,000+ leads</span>
                    </div>
                  </div>
                </div>

                {/* Right: ROI Readout Card */}
                <div className="lg:col-span-5 bg-[#145C43] text-white p-7 rounded-2xl shadow-xl space-y-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DDEBE0]">
                    Estimated Value Output
                  </p>
                  <div>
                    <span className="text-4xl sm:text-5xl font-extrabold tabular-nums tracking-tight">
                      ${Math.max(250, calculatedSavings).toLocaleString()}
                    </span>
                    <span className="text-xs text-[#DDEBE0] block mt-1">
                      Estimated Monthly Savings vs Separate Data Vendors
                    </span>
                  </div>
                  <div className="pt-4 border-t border-[#DDEBE0]/20 space-y-2.5 text-xs text-[#F5F1E6]">
                    <div className="flex justify-between">
                      <span>Manual SDR Research Hours Saved:</span>
                      <span className="font-bold text-white tabular-nums">
                        ~{estimatedHoursSaved} hrs / mo
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Live Waterfall Enrichment:</span>
                      <span className="font-bold text-[#DDEBE0]">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Sequence Generator:</span>
                      <span className="font-bold text-[#DDEBE0]">Included</span>
                    </div>
                  </div>
                  <Link
                    href="/signup"
                    className="block w-full text-center py-3 bg-white text-[#145C43] font-bold rounded-xl text-xs hover:bg-[#EFF6F0] transition-colors shadow"
                  >
                    Claim These Savings Now
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* COMPLETE FEATURE COMPARISON TABLE                         */}
          {/* ========================================================= */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#10251D] mb-3">
                Full Plan Capability Breakdown
              </h2>
              <p className="text-sm text-[#52635A]">
                Deep-dive into the architectural features, data sources, and governance across all tiers.
              </p>
            </div>

            <div className="bg-white/85 backdrop-blur-xl border border-[#D5E3D8] rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#D5E3D8] bg-[#F5F1E6]/50">
                      <th className="py-4 px-6 text-sm font-bold text-[#10251D] w-2/5">Capabilities</th>
                      <th className="py-4 px-6 text-sm font-bold text-[#10251D] text-center w-1/5">Starter</th>
                      <th className="py-4 px-6 text-sm font-bold text-[#145C43] text-center w-1/5 bg-[#EFF6F0]/60">
                        Growth (Popular)
                      </th>
                      <th className="py-4 px-6 text-sm font-bold text-[#10251D] text-center w-1/5">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_CATEGORIES.map((cat) => (
                      <React.Fragment key={cat.category}>
                        <tr className="bg-[#EFF6F0]/40 border-y border-[#D5E3D8]">
                          <td
                            colSpan={4}
                            className="py-3 px-6 text-xs font-extrabold uppercase tracking-wider text-[#145C43]"
                          >
                            {cat.category}
                          </td>
                        </tr>
                        {cat.items.map((item, i) => (
                          <tr
                            key={item.name}
                            className={`border-b border-[#E5EAE5] text-xs hover:bg-[#F8FAF6] transition-colors ${i % 2 === 1 ? 'bg-white' : 'bg-[#FAFCFA]/60'
                              }`}
                          >
                            <td className="py-3.5 px-6 font-semibold text-[#10251D]">{item.name}</td>
                            <td className="py-3.5 px-6 text-center text-[#52635A]">
                              {typeof item.starter === 'boolean' ? (
                                item.starter ? (
                                  <Check className="w-4 h-4 text-[#145C43] mx-auto" />
                                ) : (
                                  <span className="text-[#A1AEA5] font-bold">—</span>
                                )
                              ) : (
                                item.starter
                              )}
                            </td>
                            <td className="py-3.5 px-6 text-center font-semibold text-[#145C43] bg-[#EFF6F0]/30">
                              {typeof item.growth === 'boolean' ? (
                                item.growth ? (
                                  <Check className="w-4 h-4 text-[#145C43] mx-auto" />
                                ) : (
                                  <span className="text-[#A1AEA5] font-bold">—</span>
                                )
                              ) : (
                                item.growth
                              )}
                            </td>
                            <td className="py-3.5 px-6 text-center font-medium text-[#10251D]">
                              {typeof item.enterprise === 'boolean' ? (
                                item.enterprise ? (
                                  <Check className="w-4 h-4 text-[#145C43] mx-auto" />
                                ) : (
                                  <span className="text-[#A1AEA5] font-bold">—</span>
                                )
                              ) : (
                                item.enterprise
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* FAQ ACCORDION                                             */}
          {/* ========================================================= */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#10251D]">
                Everything you need to know about pricing
              </h2>
            </div>

            <div className="space-y-3">
              {FAFAQS_RENDER(FAQS, openFaq, setOpenFaq)}
            </div>
          </section>

          {/* ========================================================= */}
          {/* BOTTOM HIGH-IMPACT CTA BANNER                             */}
          {/* ========================================================= */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#145C43] via-[#0E4935] to-[#0B3D2E] text-white p-8 sm:p-12 md:p-16 shadow-2xl">
              {/* Radial glow */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B8D5C0]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#DDEBE0] mb-3">
                  Ready to accelerate outbound?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
                  Turn verified global intelligence into pipeline today.
                </h2>
                <p className="text-sm sm:text-base text-[#DDEBE0] leading-relaxed mb-8 max-w-xl">
                  Join hundreds of high-growth revenue teams finding buyers worldwide with 12-source waterfall data recovery.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/signup"
                    className="px-6 py-3.5 rounded-xl bg-white text-[#145C43] font-bold text-sm hover:bg-[#F5F1E6] transition-all shadow-lg flex items-center gap-2 group"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/features"
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all backdrop-blur-sm"
                  >
                    Explore Platform Features
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <LandingFooter />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Helper Component                                               */
/* ------------------------------------------------------------------ */

function FAFAQS_RENDER(
  faqs: typeof FAQS,
  openFaq: number | null,
  setOpenFaq: React.Dispatch<React.SetStateAction<number | null>>
) {
  return faqs.map((faq, idx) => {
    const isOpen = openFaq === idx;
    return (
      <div
        key={faq.q}
        className="rounded-2xl border border-[#D5E3D8] bg-white/80 backdrop-blur-md overflow-hidden transition-all"
      >
        <button
          type="button"
          onClick={() => setOpenFaq(isOpen ? null : idx)}
          className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
        >
          <span className="text-sm sm:text-base font-bold text-[#10251D]">{faq.q}</span>
          <ChevronDown
            className={`w-4 h-4 text-[#145C43] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''
              }`}
          />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <div className="px-5 pb-5 text-xs sm:text-sm text-[#52635A] leading-relaxed border-t border-[#E5EAE5]/60 pt-3">
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  });
}
