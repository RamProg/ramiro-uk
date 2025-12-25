import React from 'react';
import BackHome from '@/components/BackHome/BackHome';

const Bebe = () => {
  return (
    <div className='flex flex-col items-center justify-center h-dynamicScreen text-ramiro-light-orange px-4'>
      <BackHome />
      <div className='max-w-4xl text-center'>
        <h1 className='text-4xl sm:text-6xl font-bold mb-6'>You Won!</h1>
        <p className='text-lg sm:text-xl mb-4'>
          You won a gift card of 100 euros to use in one of the following stores:
        </p>
        <ol className='text-left text-sm sm:text-base space-y-3 list-decimal list-inside'>
          <li>
            <strong>La Mamavaca</strong>
            <br />
            Tienda enfocada en ropa premamá, ropa para bebés y accesorios, con
            buena atención personalizada y ambiente familiar.
          </li>
          <li>
            <strong>LIFE Premamá & Women</strong>
            <br />
            Ofrece prendas tanto para embarazadas como opciones que funcionan
            después del parto.
          </li>
          <li>
            <strong>
              Paramamá - Rambla Catalunya 88 y Paramamá - Amigó, 49
            </strong>{' '}
            – Boutique de moda premamá con estilo moderno para embarazadas.
            <br />
            Es conocida por prendas funcionales y a la moda para distintas
            etapas del embarazo.
          </li>
          <li>
            <strong>Prénatal Barcelona - L&apos;Illa Nadó</strong> – Cadena
            especializada con amplia gama de ropa premamá, accesorios y
            productos para bebé.
            <br />
            Además de moda premamá, suelen ofrecer productos de puericultura y
            asesoramiento.
          </li>
          <li>
            <strong>Mit Mat Mama</strong> – Tienda de ropa premamá
            <br />
            Tiene varias ubicaciones y ofrece moda para embarazo, aunque las
            reseñas son variadas según la sucursal.
          </li>
          <li>
            <strong>Maternity dresses</strong> – Tienda pequeña en Ciutat Vella
            especializada en vestidos de maternidad (reseñas muy buenas, aunque
            con pocas valoraciones).
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Bebe;
