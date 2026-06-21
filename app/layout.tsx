import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Mountain Valley Hydroseeding',
  description: 'Premium landscape and erosion control solutions.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
