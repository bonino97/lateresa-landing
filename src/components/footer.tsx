import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='bg-[#243129] text-background'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='animate-fade-in'>
            <Image
              src='/logo.jpg'
              alt='La Teresa Logo'
              width={80}
              height={80}
              className='mb-4 rounded-md'
            />
            <p className='text-sm opacity-80'>
              Innovación y tradición en cada grano. Cultivamos el futuro del
              agro argentino.
            </p>
          </div>
          <div className='animate-fade-in' style={{ animationDelay: '100ms' }}>
            <h3 className='text-lg font-semibold mb-4'>Enlaces Rápidos</h3>
            <nav className='space-y-2'>
              <Link
                href='#inicio'
                className='block hover:text-accent transition-colors duration-300'
              >
                Inicio
              </Link>
              <Link
                href='#nosotros'
                className='block hover:text-accent transition-colors duration-300'
              >
                Nosotros
              </Link>
              <Link
                href='#servicios'
                className='block hover:text-accent transition-colors duration-300'
              >
                Servicios
              </Link>
              <Link
                href='#contacto'
                className='block hover:text-accent transition-colors duration-300'
              >
                Contacto
              </Link>
            </nav>
          </div>
          <div className='animate-fade-in' style={{ animationDelay: '200ms' }}>
            <h3 className='text-lg font-semibold mb-4'>Síguenos</h3>
            <div className='flex space-x-4'>
              <Link
                href='#'
                className='hover:text-accent transition-colors duration-300'
              >
                <Facebook className='h-6 w-6' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                href='#'
                className='hover:text-accent transition-colors duration-300'
              >
                <Instagram className='h-6 w-6' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link
                href='#'
                className='hover:text-accent transition-colors duration-300'
              >
                <Twitter className='h-6 w-6' />
                <span className='sr-only'>Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-background/10 text-center text-sm opacity-80'>
          <p>
            &copy; {new Date().getFullYear()} La Teresa - Cosas de Campo. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
