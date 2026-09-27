import type { Metadata } from 'next';
import { Raleway, Lobster_Two } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { description, title } from '@/lib/constants';
import WhatsAppButton from '@/components/WhatsAppButton';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

const lobsterTwo = Lobster_Two({
  variable: '--font-lobster-two',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  keywords: [
    'Website Design',
    'Website Design for Small Businesses',
    'Website Design for Businesses',
    'Ecommerce Website Development',
    'Business Automation Services',
    'Website Design for Companies',
    'Digital Agency for Nigerian SMBs',
    'Website Design and SEO Services',
    'Custom Web Design and Development',
    'CRM Software for Businesses',
    'Website Design for NGOs',
    'Business Website with WhatsApp Integration',
    'Website Redesign Services',
    'Website Maintenance Services',
    'Affordable Website Development for Startups',
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  openGraph: {
    title: title,
    description: description,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: 'TechSis Consult',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/website-logo.png',
        width: 1200,
        height: 630,
        alt: title,
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${lobsterTwo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6a329f93c770bc1d46b1f7a3/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
