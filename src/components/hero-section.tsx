import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section
      id='inicio'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      <Image
        src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8ZmFybXxlbnwwfHx8fDE2OTk5MDU5Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080'
        alt='Campo al atardecer'
        layout='fill'
        objectFit='cover'
        quality={100}
        className='z-0'
      />
      <div className='absolute inset-0 bg-primary/40 z-10' />
      <div className='container relative z-20 px-4 py-32 flex flex-col items-center text-center'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight text-background animate-fade-in'>
          La Teresa
          <br />
          <span className='text-accent'>Cosas de Campo</span>
        </h1>
        <p className='text-xl md:text-2xl mb-8 max-w-2xl text-background/90 animate-slide-up'>
          Innovación y tradición en cada grano. Cultivamos el futuro del agro
          argentino.
        </p>
        <Button
          asChild
          size='lg'
          className='bg-primary text-white hover:bg-primary/90 transition-colors duration-300 animate-slide-up'
        >
          <Link href='#nosotros'>Descubre Nuestra Pasión</Link>
        </Button>
      </div>
    </section>
  );
}
