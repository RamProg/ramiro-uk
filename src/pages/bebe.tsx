import React from 'react';
import BackHome from '@/components/BackHome/BackHome';

const Bebe = () => {
  return (
    <div className='flex flex-col items-center justify-center h-dynamicScreen text-ramiro-light-orange'>
      <BackHome />
      <h1 className='text-4xl sm:text-6xl font-bold'>You Won!</h1>
    </div>
  );
};

export default Bebe;
