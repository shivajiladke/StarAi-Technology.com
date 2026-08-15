import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StarAI Technology',
  description: 'Accelerate digital transformation through AI, Cloud Automation, and Enterprise IT Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
