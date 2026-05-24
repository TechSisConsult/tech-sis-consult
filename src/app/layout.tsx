import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

const geistInstrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
});

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Tech Sis Consult',
  description: 'Smart Tech for Modern Business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistInstrumentSerif.variable} h-full antialiased`}
    >
      <body
        className={`${geistInstrumentSerif.variable} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
