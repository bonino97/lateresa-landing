'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:lateresacosasdecampo@gmail.com?subject=Nuevo mensaje de contacto de ${formData.name}&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATeléfono: ${formData.phone}%0D%0AMensaje: ${formData.message}`;

    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className='py-16 px-4 md:px-6 bg-background' id='contacto'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-primary mb-4'>
            Conecta con Nosotros
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <Card className='animate-slide-up'>
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='space-y-2'>
                  <Input
                    name='name'
                    placeholder='Nombre completo'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Input
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Input
                    name='phone'
                    type='tel'
                    placeholder='Teléfono'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Textarea
                    name='message'
                    placeholder='Tu mensaje'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='min-h-[120px]'
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
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.106309767633!2d-62.18475644383093!3d-33.28344138042843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c9023cc2f7a6df%3A0x8a54cb71b6b97bd7!2sC%C3%B3rdoba%20145%2C%20X2645%20Corral%20de%20Bustos-Ifflinger%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses-419!2ses!4v1732561248404!5m2!1ses-419!2ses'
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
