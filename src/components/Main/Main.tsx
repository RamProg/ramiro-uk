'use client';

import FloatingScroll from '@/components/Main/Landing/FloatingScroll';
import Landing from '@/components/Main/Landing/Landing';
import Nav from '@/components/Main/Landing/Nav';
import { useEffect, useState } from 'react';

export default function Main() {
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleTouchMove = (event: Event) => {
      event.stopPropagation();
      event.preventDefault();

      if (isMoving) return;

      setIsMoving(true);
      setTimeout(() => {
        setIsMoving(false);
      }, 750);

      window.scroll({
        top: window.scrollY > 50 ? 0 : window.innerHeight,
        behavior: 'smooth',
      });
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMoving]);

  return (
    <div>
      <Landing />
      <Nav />
      <FloatingScroll />
    </div>
  );
}
