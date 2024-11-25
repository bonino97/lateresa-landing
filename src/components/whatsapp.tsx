import React from 'react';

const WhatsAppFloat = () => {
  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end'>
      {/* Botón principal */}
      <a
        href='https://wa.me/+543468418099'
        target='_blank'
        rel='noopener noreferrer'
        className='group relative bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
        aria-label='Contactar por WhatsApp'
      >
        {/* Logo de WhatsApp */}
        <div className='relative w-12 h-12'>
          <svg viewBox='0 0 24 24' className='w-full h-full'>
            <path
              d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
              className='fill-[#415837]'
            />
          </svg>

          {/* Efecto de pulso */}
          <span className='absolute top-0 left-0 w-full h-full bg-[#415837] rounded-full animate-ping opacity-25'></span>
        </div>

        {/* Tooltip */}
        <div className='absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 whitespace-nowrap'>
          <div className='font-medium text-[#415837]'>¿Necesitás ayuda?</div>
          <div className='text-sm text-[#415837] opacity-90'>
            Chateá con nosotros
          </div>
          {/* Flecha del tooltip */}
          <div className='absolute top-1/2 right-0 -mt-2 -mr-1 w-0 h-0 transform translate-x-1/2 -translate-y-1/2 border-8 border-transparent border-l-white'></div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppFloat;