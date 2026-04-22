import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'AKKI CreatorHub - Asosiasi Konten Kreator Indonesia',
  description: 'Marketplace resmi Asosiasi Konten Kreator Indonesia (AKKI) untuk mencari dan mengelola konten kreator.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} min-h-screen flex flex-col bg-[#fcfcfc] text-slate-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
