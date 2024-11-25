import Image from 'next/image';

export function AboutSection() {
  return (
    <section id='nosotros' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6 animate-fade-in'>
            <h2 className='text-4xl font-bold text-primary mb-6'>
              Nuestra Pasión, El Campo
            </h2>
            <p className='text-lg text-primary/80'>
              En La Teresa, no solo trabajamos la tierra, la comprendemos. Con
              décadas de experiencia, hemos perfeccionado el arte de la
              agricultura sostenible, combinando sabiduría tradicional con
              tecnología de vanguardia.
            </p>
            <p className='text-lg text-primary/80'>
              Nuestro compromiso va más allá de la cosecha; nos dedicamos a
              nutrir comunidades, preservar ecosistemas y forjar un futuro
              agrícola resiliente para las generaciones venideras.
            </p>
          </div>
          <div className='relative h-[500px] rounded-lg overflow-hidden shadow-2xl animate-fade-in'>
            <Image
              src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8ZmFybSUyMHdvcmtlcnxlbnwwfHx8fDE2OTk5MDYwMzd8MA&ixlib=rb-4.0.3&q=80&w=1080'
              alt='Trabajador en el campo'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
