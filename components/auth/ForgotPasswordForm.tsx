'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthInput from '@/components/auth/AuthInput';

interface FormState {
  email: string;
}

interface Errors {
  email?: string;
}

function validate(form: FormState): Errors {
  const errs: Errors = {};
  if (!form.email.trim()) {
    errs.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errs.email = 'Please enter a valid email address.';
  }
  return errs;
}

export default function ForgotPasswordForm() {
  const [form, setForm] = useState<FormState>({ email: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ email: e.target.value });
    if (submitted) {
      const next = validate({ email: e.target.value });
      setErrors(next);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Placeholder: connect to your password reset backend
    await new Promise((r) => setTimeout(r, 1600));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-6"
        >
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-[#EFF6F0] border border-[#D5E3D8] flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-[#145C43]" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#10251D] mb-2">Check your inbox</h2>
          <p className="text-sm text-[#52635A] leading-relaxed mb-6 [text-wrap:balance]">
            We&apos;ve sent a secure password reset link to{' '}
            <span className="font-semibold text-[#10251D]">{form.email}</span>.
            <br />
            The link expires in 30 minutes.
          </p>
          <Link
            href="/signin"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#145C43] hover:text-[#0B3D2E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Sign In
          </Link>
        </motion.div>
      ) : (
        <>
          {/* Heading */}
          <div className="mb-4">
            <h1 className="text-xl sm:text-2xl font-bold text-[#10251D] mb-1">Reset your password</h1>
            <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
              Enter your email and we&apos;ll send you a secure password reset link.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
            <AuthInput
              id="forgot-email"
              label="Email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              disabled={loading}
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.01, boxShadow: '0 6px 18px -4px rgba(20,92,67,0.35)' } : {}}
              whileTap={!loading ? { scale: 0.99 } : {}}
              className="mt-1 w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg bg-[#145C43] text-white text-sm font-semibold transition-all duration-200 hover:bg-[#0B3D2E] disabled:opacity-65 disabled:cursor-not-allowed cursor-pointer group"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending reset link...
                </>
              ) : (
                <>
                  Send Reset Link
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/signin"
              className="inline-flex items-center gap-1.5 text-xs text-[#52635A] hover:text-[#145C43] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Back to Sign In
            </Link>
          </div>
        </>
      )}
    </motion.div>
  );
}
