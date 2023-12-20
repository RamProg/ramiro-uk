'use client';

import useScroll from '@/hooks/useScroll';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const FloatingScroll = () => {
  const [isDirectionUp, setIsDirectionUp] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const { scrollToNext } = useScroll();

  const { replace, asPath } = useRouter();

  const handlePress = () => {
    setEnabled(false);

    setTimeout(() => {
      setEnabled(true);
    }, 750);
    scrollToNext(isDirectionUp);
  };

  useEffect(() => {
    if (asPath === '/#nav') {
      setIsDirectionUp(true);
      replace('/', undefined, { shallow: true, scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsDirectionUp(window.scrollY > 50);
    };

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
