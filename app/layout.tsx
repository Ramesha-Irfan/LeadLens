import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LeadLens | AI-Powered Global B2B Lead Intelligence & Outbound OS',
  description: 'Find verified companies and decision-makers globally, enrich missing data, personalize outreach with AI, and launch targeted campaigns from one intelligent workspace.',
  openGraph: {
    title: 'LeadLens | AI-Powered Global B2B Lead Intelligence',
    description: 'Find verified companies and decision-makers globally, enrich missing data, personalize outreach with AI, and launch targeted campaigns from one intelligent workspace.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadLens | AI-Powered Global B2B Lead Intelligence',
    description: 'Find verified companies and decision-makers globally, enrich missing data, personalize outreach with AI, and launch targeted campaigns from one intelligent workspace.',
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
