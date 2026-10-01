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
  name: string;
  email: string;
  company: string;
  password: string;
}

interface Errors {
  name?: string;
  email?: string;
  company?: string;
  password?: string;
}

function validate(form: FormState): Errors {
  const errs: Errors = {};
  if (!form.name.trim()) errs.name = 'Full name is required.';
  if (!form.email.trim()) {
    errs.email = 'Work email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errs.email = 'Please enter a valid email address.';
  }
  if (!form.company.trim()) errs.company = 'Company name is required.';
  if (!form.password) {
    errs.password = 'Password is required.';
  } else if (form.password.length < 8) {
    errs.password = 'Must be at least 8 characters.';
  }
  return errs;
}

export default function SignUpForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', password: '' });
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
    await new Promise((r) => setTimeout(r, 2000));
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
      <div className="mb-3">
        <h1 className="text-xl sm:text-2xl font-bold text-[#10251D] mb-1">Build your next pipeline.</h1>
        <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
          Create your LeadLens workspace and start finding decision-makers.
        </p>
      </div>

      {/* Social auth */}
      <SocialAuthButtons loading={loading} />

      {/* Divider */}
      <AuthDivider />

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          <AuthInput
            id="signup-name"
            label="Full Name"
            type="text"
            placeholder="Alex Morgan"
            autoComplete="name"
            value={form.name}
            onChange={handleChange('name')}
            error={errors.name}
            disabled={loading}
          />

          <AuthInput
            id="signup-company"
            label="Company"
            type="text"
            placeholder="Acme Corp"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange('company')}
            error={errors.company}
            disabled={loading}
          />
        </div>

        <AuthInput
          id="signup-email"
          label="Work Email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          value={form.email}
          onChange={handleChange('email')}
          error={errors.email}
          disabled={loading}
        />

        <PasswordInput
          id="signup-password"
          label="Password"
          placeholder="Create a strong password"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange('password')}
          error={errors.password}
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
              Creating account...
            </>
          ) : (
            <>
              Create Account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </motion.button>
      </form>

      {/* Legal */}
      <p className="mt-2 text-center text-[10px] sm:text-[11px] text-[#7A887F] leading-tight">
        By creating an account, you agree to our Terms and Privacy Policy.
      </p>

      {/* Footer link */}
      <p className="mt-2.5 text-center text-xs text-[#52635A]">
        Already have an account?{' '}
        <Link href="/signin" className="font-semibold text-[#145C43] hover:text-[#0B3D2E] transition-colors">
          Sign in
        </Link>
      </p>
    </motion.div>
  );
}
