'use client';

import FloatingScroll from '@/components/Main/Landing/FloatingScroll';
import Landing from '@/components/Main/Landing/Landing';
import Nav from '@/components/Main/Landing/Nav';
import useScroll from '@/hooks/useScroll';
import { useEffect, useState } from 'react';

export default function Main() {
  const [isMoving, setIsMoving] = useState(false);
  const { scrollToNext } = useScroll();

  useEffect(() => {
    const handleTouchMove = (event: Event) => {
      event.stopPropagation();
      event.preventDefault();

      if (isMoving) return;

      setIsMoving(true);
      setTimeout(() => {
        setIsMoving(false);
      }, 750);

      scrollToNext();
    };

    const handlePrevent = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();      
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchstart', handlePrevent, { passive: false });
    window.addEventListener('touchend', handlePrevent, { passive: false });
    window.addEventListener('touchcancel', handlePrevent, { passive: false });


    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handlePrevent);
      window.removeEventListener('touchend', handlePrevent);
      window.removeEventListener('touchcancel', handlePrevent);

    };
  }, [isMoving, scrollToNext]);

  return (
    <div>
      <Landing />
      <Nav />
      <FloatingScroll />
    </div>
  );
}
