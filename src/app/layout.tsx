import { Ubuntu } from 'next/font/google';
import { Metadata } from 'next';
import '@/app/globals.css';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Incluye todos los pesos que necesites
  variable: '--font-ubuntu', // Cambiamos el nombre de la variable
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'La Teresa - Cosas de Campo',
  description: 'Soluciones integrales para el sector agropecuario',
  icons: {
    icon: '/logo.jpg',
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
    <html lang='es' suppressHydrationWarning>
      <body className={`${ubuntu.variable} font-ubuntu antialiased`}>
        {children}
      </body>
    </html>
  );
}
