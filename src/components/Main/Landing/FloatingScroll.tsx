'use client';

import useScroll from '@/hooks/useScroll';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const FloatingScroll = () => {
  const [isDirectionUp, setIsDirectionUp] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const { scrollToNext } = useScroll();

  const { replace, asPath } = useRouter();

  const handlePress = useCallback(() => {
    setEnabled(false);

    setTimeout(() => {
      setEnabled(true);
    }, 750);
    scrollToNext();
  }, [scrollToNext]);

  useEffect(() => {
    if (asPath === '/#nav') {
      replace('/', undefined, { shallow: true, scroll: false });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleScroll = () => {
    setIsDirectionUp(window.scrollY > 50);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <i
      onClick={enabled ? handlePress : () => {}}
      className='fixed w-12 h-12 p-2 bg-transparent bottom-5 right-5 animate-bounce'>
      <FontAwesomeIcon
        icon={faPlaneUp}
        size='2x'
        color={isDirectionUp ? '#292929' : '#D8D8D8'}
        className={`${!isDirectionUp && 'transform rotate-180'}`}
      />
    </i>
  );
};

export default FloatingScroll;
