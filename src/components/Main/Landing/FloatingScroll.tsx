'use client';

import useScroll from '@/hooks/useScroll';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { isDesktop } from 'react-device-detect';

const FloatingScroll = () => {
  const [isDirectionUp, setIsDirectionUp] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [hidden, setHidden] = useState(true);
  const { scrollToNext } = useScroll();
  const searchParams = useSearchParams();
  const menu = searchParams?.get('menu');
  const router = useRouter();

  const handlePress = useCallback(() => {
    setEnabled(false);

    setTimeout(() => {
      if (menu) {
        router.replace('/', undefined, { shallow: true });
      }
      setEnabled(true);
    }, 750);
    scrollToNext();
  }, [scrollToNext, router, menu]);

  useEffect(() => {
    const handleScroll = () => {
      setIsDirectionUp(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setHidden(isDesktop);
  }, []);

  return (
    <i
      onClick={enabled ? handlePress : () => {}}
      hidden={hidden}
      className='fixed w-12 h-12 p-2 bg-transparent bottom-5 right-5 animate-bounce'>
      <FontAwesomeIcon
        icon={faPlaneUp}
        color={isDirectionUp ? '#292929' : '#D8D8D8'}
        className={`${!isDirectionUp && 'transform rotate-180'}`}
      />
    </i>
  );
};

export default FloatingScroll;
