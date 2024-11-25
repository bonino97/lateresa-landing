import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GrapeIcon as Grain, Truck, Sprout } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Sprout className='h-12 w-12 text-accent' />,
      title: 'Insumos de Calidad',
      description:
        'Seleccionamos cuidadosamente los mejores insumos para maximizar el rendimiento de sus cultivos.',
    },
    {
      icon: <Grain className='h-12 w-12 text-accent' />,
      title: 'Semillas Premium',
      description:
        'Ofrecemos variedades de semillas de alto rendimiento, adaptadas a las condiciones locales.',
    },
    {
      icon: <Truck className='h-12 w-12 text-accent' />,
      title: 'Logística Eficiente',
      description:
        'Garantizamos entregas puntuales y seguras, optimizando su cadena de suministro agrícola.',
    },
  ];

  return (
    <section id='servicios' className='py-20 bg-[#243129] text-background'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12 animate-fade-in'>
          Nuestros Servicios
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <Card
              key={index}
              className='bg-background text-primary border-none hover:shadow-xl transition-all duration-300 animate-slide-up'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className='flex justify-center mb-4'>{service.icon}</div>
                <CardTitle className='text-xl text-primary'>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-primary/80'>
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
