'use client';

import useScroll from '@/hooks/useScroll';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { isDesktop } from 'react-device-detect';

const FloatingScroll = () => {
  const [isDirectionUp, setIsDirectionUp] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [hidden, setHidden] = useState(true);
  const { scrollToNext } = useScroll();

  const handlePress = useCallback(() => {
    setEnabled(false);
    setTimeout(() => {
      setEnabled(true);
    }, 750);
    scrollToNext();
  }, [scrollToNext]);

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
    <button
      onClick={handlePress}
      disabled={!enabled}
      hidden={hidden}
      className='fixed p-2 bg-transparent bottom-5 right-5 animate-bounce'>
      <FontAwesomeIcon
        icon={faPlaneUp}
        rotation={isDirectionUp ? undefined : 180}
        size='2x'
        color='white'
      />
    </button>
  );
};

export default FloatingScroll;
