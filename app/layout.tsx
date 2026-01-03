import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: 'InnoHealth Solutions & Consulting',
  description: 'Health research and regulatory consulting organization dedicated to supporting evidence generation, regulatory preparedness, and high-quality research execution.',
  icons: {
    icon: '/innohealth-logo.jpeg',
    shortcut: '/innohealth-logo.jpeg',
    apple: '/innohealth-logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
