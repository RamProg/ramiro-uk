'use client';

import FloatingScroll from '@/components/Main/Landing/FloatingScroll';
import Landing from '@/components/Main/Landing/Landing';
import Nav from '@/components/Main/Landing/Nav';
import { useEffect, useState } from 'react';

export default function Main() {
  const [hasReachedSecondScreen, setHasReachedSecondScreen] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [floatDown, setFloatDown] = useState(true);

  useEffect(() => {
    const handleTouchMove = (event: Event) => {
      console.log('handleTouchMove');

      if (!event || isMoving) {
        return;
      }
      setIsMoving(true);
      setTimeout(() => {
        setIsMoving(false);
      }, 1000);
      console.log('movimiento siendo procesado');
      
      event.stopPropagation();
      event.preventDefault();
      window.scroll({
        top: window.scrollY > 10 ? 0 : window.innerHeight,
        behavior: 'smooth',
      });
      setHasReachedSecondScreen(prev => !prev);
      setFloatDown(prev => !prev);
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [hasReachedSecondScreen, isMoving]);

  return (
    <div>
      <Landing />
      <Nav />
      <FloatingScroll
        direction={floatDown ? 'down' : 'up'}
        handleFloatPress={setFloatDown}
      />
    </div>
  );
}
