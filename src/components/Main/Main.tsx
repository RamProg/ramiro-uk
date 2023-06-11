'use client';

import FloatingScroll from '@/components/Main/Landing/FloatingScroll';
import Landing from '@/components/Main/Landing/Landing';
import Nav from '@/components/Main/Landing/Nav';
import { useEffect, useState } from 'react';

export default function Main() {
  const [scrollY, setScrollY] = useState(0);
  const isBrowser = () => typeof window !== 'undefined';
  const windowHeight = isBrowser() ? window.innerHeight : 0;
  const [hasReachedSecondScreen, setHasReachedSecondScreen] = useState(false);
  const [isMoving, setIsMoving] = useState(false)

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const handleTouchMove = (event: Event) => {
      console.log('handleTouchMove');
      
      if (!event || isMoving) {
        return;
      }

      setIsMoving(true)
      event.stopPropagation();
      event.preventDefault();
      window.scroll({
        top: hasReachedSecondScreen ? 0 : window.innerHeight,
        behavior: 'smooth',
      });
      setHasReachedSecondScreen(prev => !prev);
      setIsMoving(false)
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.addEventListener('scroll', handleScroll);
    };
  }, [hasReachedSecondScreen]);

  return (
    <div>
      <Landing />
      <Nav />
      <FloatingScroll direction={hasReachedSecondScreen ? 'up' : 'down'} />
    </div>
  );
}
