import { Ubuntu } from 'next/font/google';
import { Metadata } from 'next';
import '@/app/globals.css';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '300',
});

export const metadata: Metadata = {
  title: 'La Teresa - Cosas de Campo',
  description: 'Soluciones integrales para el sector agropecuario',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={`${ubuntu.variable} font-sans`}>{children}</body>
    </html>
  );
}
