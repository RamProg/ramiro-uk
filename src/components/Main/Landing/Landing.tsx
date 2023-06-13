'use client';

import Image from 'next/image';
import Description from './Description/Description';
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';

const env = process.env.NODE_ENV;
const __DEV__ = env === 'development';

const Landing = () => {
  const [imageSize, setImageSize] = useState<256 | 384>(256);

  useEffect(() => {
    const IS_DEV_ON_PHONE = __DEV__ && window.innerWidth < 768;
    setImageSize(isMobile || IS_DEV_ON_PHONE ? 256 : 384);
  }, []);

  return (
    <main
      className={
        'flex justify-center sm:items-center h-minimalScreen sm:h-screen bg-ramiro-background'
      }>
      <div className='flex flex-col sm:flex-row items-center sm:items-stretch mt-10 sm:mt-0 h-64 sm:h-96 sm:w-[48rem]'>
        <Image
          className='rounded-full shadow-[15px_15px_60px_-15px_rgba(255,87,51,0.5)] bg-gradient-to-br from-pink-500 from-1% via-orange-400 via-40% to-yellow-300 to-90% sm:w-1/2 border-transparent p-3'
          src='/images/me-nobg.png'
          width={imageSize}
          height={imageSize}
          alt='Me'
          placeholder='empty'
          priority={true}
        />
        <div className='w-8 h-5' />
        <Description />
      </div>
    </main>
  );
};

export default Landing;
