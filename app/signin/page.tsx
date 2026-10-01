import type { Metadata } from 'next';
import AuthLayout from '@/components/auth/AuthLayout';
import SignInForm from '@/components/auth/SignInForm';

export const metadata: Metadata = {
  title: 'Sign In | LeadLens',
  description: 'Sign in to your LeadLens workspace to access global B2B lead intelligence and outbound campaign tools.',
};

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}
