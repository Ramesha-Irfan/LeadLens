import type { Metadata } from 'next';
import AuthLayout from '@/components/auth/AuthLayout';
import SignUpForm from '@/components/auth/SignUpForm';

export const metadata: Metadata = {
  title: 'Create Account | LeadLens',
  description: 'Create your LeadLens workspace and start finding verified companies and decision-makers globally.',
};

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
