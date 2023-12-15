import { cedarville } from '@/assets/fonts';
import { Review } from '@/types/review';
import Image from 'next/image';
import Link from 'next/link';

type ReviewProps = {
  review: Review;
};

const Review = ({ review }: ReviewProps) => {
  return (
    <div className='flex flex-col max-w-sm p-4 rounded-lg bg-ramiro-light-orange text-ramiro-background'>
      <div className='flex'>
        <Link
          target={'_blank'}
          href={review.author.linkedin ?? review.author.email ?? ''}>
          <Image
            className='rounded-full'
            src={review.author.picture}
            alt={review.author.name}
            width={75}
            height={75}
            style={{ minWidth: '75px', minHeight: '75px' }}
          />
        </Link>
        <div className='flex flex-col justify-center ml-3 align-middle'>
          <Link
            target={'_blank'}
            href={review.author.linkedin ?? review.author.email ?? ''}>
            {review.author.name}
          </Link>
          <span className='text-xs'>{review.author.role}</span>
        </div>
      </div>
      <span className={`mt-4 text-justify`}>{review.review}</span>
    </div>
  );
};

export default Review;
