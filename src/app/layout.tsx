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
  icons: {
    icon: '/logo.jpg', // Para favicon
  },
  openGraph: {
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'La Teresa - Cosas de Campo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <head>
        <link rel='icon' href='/logo.jpg' />
        <link rel='apple-touch-icon' href='/logo.jpg' />
      </head>
      <body className={`${ubuntu.variable} font-sans`}>{children}</body>
    </html>
  );
}
