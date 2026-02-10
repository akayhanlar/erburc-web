import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar, Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://erburcyapi.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Er Burç Yapı ve Dekorasyon | TOKİ Ahşap İşleri Uzmanı',
  description: 'TOKİ projelerinde ahşap doğrama, kapı, dolap ve dekorasyon işlerinde 55 yılı aşkın tecrübemizle hizmetinizdeyiz. Erzurum merkezli, Türkiye genelinde kaliteli hizmet.',
  keywords: 'TOKİ, ahşap işleri, doğrama, kapı, dolap, dekorasyon, Erzurum, inşaat, taşeron',
  authors: [{ name: 'Er Burç Yapı ve Dekorasyon' }],
  icons: {
    icon: '/images/favicon.png?v=2',
  },
  openGraph: {
    title: 'Er Burç Yapı ve Dekorasyon',
    description: 'TOKİ projelerinde ahşap işleri uzmanı',
    url: SITE_URL,
    siteName: 'Er Burç Yapı ve Dekorasyon',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
