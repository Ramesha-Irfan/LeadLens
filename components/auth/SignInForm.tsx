'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthInput from '@/components/auth/AuthInput';
import PasswordInput from '@/components/auth/PasswordInput';
import AuthDivider from '@/components/auth/AuthDivider';
import SocialAuthButtons from '@/components/auth/SocialAuthButtons';

interface FormState {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

function validate(form: FormState): Errors {
  const errs: Errors = {};
  if (!form.email.trim()) {
    errs.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errs.email = 'Please enter a valid email address.';
  }
  if (!form.password) {
    errs.password = 'Password is required.';
  } else if (form.password.length < 8) {
    errs.password = 'Password must be at least 8 characters.';
  }
  return errs;
}

export default function SignInForm() {
  const [form, setForm] = useState<FormState>({ email: '', password: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (submitted) {
      setErrors((prev) => {
        const next = validate({ ...form, [field]: e.target.value });
        return { ...prev, [field]: next[field] };
      });
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
    // Placeholder: connect to your auth backend
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    // TODO: redirect on success
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Heading */}
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-[#10251D] mb-1">Welcome back</h1>
        <p className="text-xs sm:text-sm text-[#52635A]">Sign in to continue building your next pipeline.</p>
      </div>

      {/* Social auth */}
      <SocialAuthButtons loading={loading} />

      {/* Divider */}
      <AuthDivider />

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
        <AuthInput
          id="signin-email"
          label="Email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          value={form.email}
          onChange={handleChange('email')}
          error={errors.email}
          disabled={loading}
        />

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#10251D] tracking-wide">Password</span>
            <Link
              href="/forgot-password"
              className="text-[11px] text-[#52635A] hover:text-[#145C43] transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <PasswordInput
            id="signin-password"
            label=""
            placeholder="Enter your password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange('password')}
            error={errors.password}
            disabled={loading}
          />
        </div>

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
              Signing in...
            </>
          ) : (
            <>
              Sign In
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </motion.button>
      </form>

      {/* Footer link */}
      <p className="mt-3.5 text-center text-xs text-[#52635A]">
        Don&apos;t have an account?{' '}
        <Link
          href="/signup"
          className="font-semibold text-[#145C43] hover:text-[#0B3D2E] transition-colors"
        >
          Create your free account
        </Link>
      </p>
    </motion.div>
  );
}
