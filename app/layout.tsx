import type { Metadata } from 'next';
import './globals.css';
import './overrides.css';
import './satyam.css';

export const metadata: Metadata = {
  title: 'Satyam Jha — Conversational Portfolio',
  description: 'A conversational portfolio of Satyam Jha: builder, strategist and curious human.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
