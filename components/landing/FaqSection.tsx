'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    question: "How accurate is LeadLens data?",
    answer: "Our data goes through a real-time SMTP verification process and a cascading waterfall enrichment across 10+ premium vendors. This guarantees a 99.2% zero-bounce rate on all emails provided in your campaigns."
  },
  {
    question: "Do you charge for unverified emails?",
    answer: "Never. We operate on predictable data economics. You only consume quota for emails that pass our strict 100% deliverability checks. Catch-all or unknown emails are returned for free."
  },
  {
    question: "Which countries and industries do you cover?",
    answer: "Our 140M+ B2B entity graph covers 180+ countries worldwide. We have robust data across SaaS, Financial Services, Healthcare, Manufacturing, Real Estate, and hundreds of niche industries."
  },
  {
    question: "Can I connect my own email accounts?",
    answer: "Yes, you can connect your existing Google, Microsoft, or SMTP/IMAP mailboxes. The Starter plan includes 2 mailboxes, while Growth gives you 10, complete with automated warmup and deliverability protection."
  },
  {
    question: "Does the AI actually write good emails?",
    answer: "Yes. Our Semantic Query Synthesis engine analyzes the prospect's company data, recent news, and your value proposition to craft highly personalized, non-robotic emails that perform 3x better than standard templates."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. We don't lock you into restrictive contracts unless you explicitly choose an annual Enterprise SLA. You can cancel, upgrade, or downgrade your monthly plan at any time."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="section-faq" className="w-full py-20 md:py-32 bg-[#EFF6F0] border-b border-[#D5E3D8] relative transition-colors overflow-hidden">
      {/* Subtle dot lattice accent & ambient glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[460px] h-[340px] bg-dots-fine fade-mask-radial opacity-40" />
        <div className="animate-float-slow absolute top-1/2 left-0 w-80 h-80 bg-[#B8D5C0]/35 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem] lg:leading-[1.12] font-bold tracking-[-0.025em] text-[#10251D] mb-4 [text-wrap:balance]">
            Got Questions? <span className="text-gradient-brand">We've Got Answers.</span>
          </h2>
          <p className="text-[#52635A] text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Everything you need to know about the product, data, and billing.
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#145C43] shadow-lift ring-2 ring-[#145C43]/20'
                    : 'bg-white/90 backdrop-blur-sm border-[#D5E3D8] hover:border-[#145C43]/40 hover:bg-white hover:shadow-soft'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer select-none group"
                >
                  <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                    isOpen ? 'text-[#145C43]' : 'text-[#10251D] group-hover:text-[#145C43]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#145C43] text-white rotate-180 shadow-soft'
                        : 'bg-[#EFF6F0] text-[#52635A] group-hover:bg-[#145C43] group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1">
                        <p className="text-[#52635A] text-sm sm:text-[15px] leading-relaxed border-t border-[#E5EAE5] pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
