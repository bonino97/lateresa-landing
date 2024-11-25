'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section id='contacto' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-primary mb-12 animate-fade-in'>
          Conecta con Nosotros
        </h2>
        <div className='grid lg:grid-cols-2 gap-12'>
          <Card className='shadow-xl animate-slide-up'>
            <CardHeader>
              <CardTitle className='text-2xl text-primary'>
                Envíanos un Mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className='space-y-4'>
                <div>
                  <Input placeholder='Nombre' className='bg-background/50' />
                </div>
                <div>
                  <Input
                    type='email'
                    placeholder='Correo electrónico'
                    className='bg-background/50'
                  />
                </div>
                <div>
                  <Textarea
                    placeholder='Mensaje'
                    className='min-h-[120px] bg-background/50'
                  />
                </div>
                <Button
                  type='submit'
                  className='w-full bg-primary text-background hover:bg-primary/90 transition-colors duration-300'
                >
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
          <div
            className='space-y-8 animate-slide-up'
            style={{ animationDelay: '200ms' }}
          >
            <div className='flex items-start space-x-4'>
              <MapPin className='h-6 w-6 text-accent flex-shrink-0' />
              <div>
                <h3 className='font-medium text-primary text-lg'>Dirección</h3>
                <p className='text-primary/80'>
                  Córdoba 145, Corral de Bustos, Córdoba, Argentina
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-4'>
              <Phone className='h-6 w-6 text-accent flex-shrink-0' />
              <div>
                <h3 className='font-medium text-primary text-lg'>Teléfono</h3>
                <p className='text-primary/80'>+54 3468 41-8099</p>
              </div>
            </div>
            <div className='flex items-start space-x-4'>
              <Clock className='h-6 w-6 text-accent flex-shrink-0' />
              <div>
                <h3 className='font-medium text-primary text-lg'>Horario</h3>
                <p className='text-primary/80'>
                  Lunes a sábado: 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className='aspect-video w-full rounded-lg overflow-hidden shadow-xl'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.7503503462946!2d-62.18459799999999!3d-33.282222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c8f9a4b2b20a6d%3A0x8f0c4f7d1a7c7b0a!2sC%C3%B3rdoba%20145%2C%20Corral%20de%20Bustos%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1637234567890!5m2!1
ses!2sar'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
