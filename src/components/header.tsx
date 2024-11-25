import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Users, Briefcase, Phone, Menu } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '#inicio', icon: <Home className='w-4 h-4' /> },
  { name: 'Nosotros', href: '#nosotros', icon: <Users className='w-4 h-4' /> },
  {
    name: 'Servicios',
    href: '#servicios',
    icon: <Briefcase className='w-4 h-4' />,
  },
  { name: 'Contacto', href: '#contacto', icon: <Phone className='w-4 h-4' /> },
];

export function Header() {
  return (
    <header className='fixed top-0 w-full bg-background shadow-md z-50'>
      <div className='container mx-auto flex items-center justify-between h-20 px-4'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image
            src='/logo.jpg'
            alt='La Teresa Logo'
            width={50}
            height={50}
            className='w-auto h-12 rounded-md'
          />
          <span className='text-2xl font-bold text-primary'>La Teresa</span>
        </Link>

        <nav className='hidden md:flex items-center space-x-8'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-primary hover:text-accent font-medium transition-colors duration-300 flex items-center space-x-2'
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon' className='text-primary'>
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='bg-background'>
            <nav className='flex flex-col space-y-4 mt-8'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-primary hover:text-accent font-medium transition-colors duration-300 flex items-center space-x-2'
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
