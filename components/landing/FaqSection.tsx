'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="section-faq" className="w-full py-20 md:py-28 bg-white border-b border-[#E5EAE5] relative transition-colors">
      {/* Subtle dot lattice accent */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[420px] h-[300px] bg-dots-fine fade-mask-radial opacity-50" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] font-bold tracking-[-0.02em] text-[#10251D] mb-4 [text-wrap:balance]">
              Got Questions? <span className="text-gradient-brand">We've Got Answers.</span>
            </h2>
            <p className="text-[#52635A] text-base sm:text-lg leading-relaxed">
              Everything you need to know about the product, data, and billing.
            </p>
          </motion.div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: isOpen ? 0 : -3, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className={`rounded-2xl border transition-all duration-300 ${isOpen
                      ? 'bg-white border-[#B8D5C0] shadow-lift ring-1 ring-[#145C43]/10'
                      : 'bg-[#F8FAF6] border-[#E5EAE5] hover:border-[#145C43]/30 hover:bg-white hover:shadow-soft'
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer active:scale-[0.99] transition-transform duration-150"
                  >
                    <span className={`text-base font-bold tracking-tight transition-colors duration-200 ${isOpen ? 'text-[#145C43]' : 'text-[#10251D]'}`}>
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ease-out ${isOpen ? 'bg-[#145C43] text-white rotate-180 shadow-soft' : 'bg-[#EFF6F0] text-[#52635A]'
                        }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'
                      }`}
                  >
                    <p className="text-[#52635A] text-sm leading-relaxed border-t border-[#E5EAE5] pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
