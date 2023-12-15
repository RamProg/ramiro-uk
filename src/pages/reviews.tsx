import React from 'react';
import reviews from '../data/reviews';
import Review from '@/components/Review/Review';
import Link from 'next/link';
import BackHome from '@/components/BackHome/BackHome';

const Reviews = () => {
  return (
    <>
      <BackHome />
      <div className='flex flex-col items-center p-3 sm:p-0 sm:mt-20'>
        <span className='p-5 sm:p-4 text-justify text:sm sm:text-xl sm:text-center leading-[1.5] border rounded-lg border-ramiro-light-orange  text-ramiro-light-orange max-w-[384px] md:max-w-[788px] lg:max-w-screen-lg my-2'>
          {
            "In this section, you'll find testimonials from various professionals I've had the pleasure of working with over the years. They have generously shared their insights regarding my skills and work ethic. If you are considering my services, please feel free to contact them for further verification of their experiences."
          }
        </span>
        <div className='grid max-w-screen-lg grid-cols-1 gap-5 my-4 md:grid-cols-2 lg:grid-cols-3'>
          {reviews.map(review => {
            return <Review key={review.author.name} review={review} />;
          })}
        </div>
        <span className='p-5 sm:p-4 text:sm sm:text-xl text-justify sm:text-center leading-[1.5] border rounded-lg border-ramiro-light-orange  text-ramiro-light-orange  max-w-[384px] md:max-w-[788px] lg:max-w-screen-lg mt-2 mb-4'>
          If we&apos;ve had the opportunity to work together in the past, I
          would greatly appreciate your feedback. Please feel free to leave a
          review{' '}
          <Link
            href={'/message'}
            className='underline hover:text-ramiro-coral'
            target='_blank'>
            here
          </Link>
          . Your insights are invaluable to me, and I&apos;d love to hear about
          your experience!
        </span>
      </div>
    </>
  );
};

export default Reviews;
