import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import BackHome from '@/components/BackHome/BackHome';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-start py-5 text-xl sm:py-5 sm:justify-center sm:flex-row text-ramiro-light-orange h-dynamicScreen'>
      <BackHome />
      <div className='flex flex-col items-center'>
        <Link
          href={'/meet'}
          target='_blank'
          className='underline hover:text-ramiro-coral'>
          <div className='flex justify-center'>
            <Image
              src='/images/calendly.png'
              alt='calendly'
              width={100}
              height={100}
            />
          </div>
          <p className='mt-6 mb-4'>Schedule a meeting</p>
        </Link>
        <p className='p-2 text-sm text-justify rounded w-52 sm:w-48 sm:text-xs bg-ramiro-light-orange text-ramiro-background'>
          Here you can book a short meeting with me, feel free to do it if you
          have something you wish to discuss. Please, share relevant information
          in advance.
        </p>
      </div>
      <div className='self-center my-10 sm:my-0 sm:mx-20'>
        <div className='w-80 h-[1px] sm:w-[1px] sm:h-64 bg-ramiro-light-orange'></div>
      </div>
      <div className='flex flex-col items-center'>
        <Link
          href={'/message'}
          target='_blank'
          className='underline hover:text-ramiro-coral'>
          <div className='flex justify-center'>
            <Image
              src='/images/google-form.png'
              alt='calendly'
              width={100}
              height={100}
            />
          </div>
          <p className='mt-6 mb-4'>Send me a message</p>
        </Link>
        <p className='p-2 text-sm text-justify rounded w-52 sm:w-48 sm:text-xs bg-ramiro-light-orange text-ramiro-background'>
          Here you can drop me a message, don&apos;t worry I&apos;ll receive it
          and read it as it goes straight to my mailbox. Please leave your
          contact information.
        </p>
      </div>
    </div>
  );
};

export default Contact;
