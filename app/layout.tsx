import type { Metadata } from 'next';
import './globals.css';
import './overrides.css';

export const metadata: Metadata = {
  title: 'About Me | Shipra Jha',
  description: 'Portfolio of Shipra Jha, social entrepreneur.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
