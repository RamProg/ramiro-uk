'use client';

import FloatingScroll from '@/components/Main/Landing/FloatingScroll';
import Landing from '@/components/Main/Landing/Landing';
import useScroll from '@/hooks/useScroll';
import { useEffect, useState } from 'react';
import { isDesktop } from 'react-device-detect';

export default function Main() {
  const [isMoving, setIsMoving] = useState(false);
  const { scrollToNext } = useScroll();
  const [isMobile, setIsMobile] = useState<boolean>();

useEffect(() => {
  if (!isDesktop) {
    setIsMobile(true);
  }
}, [])


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

    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMoving, scrollToNext]);

  return (
    <div>
      {isMobile && <FloatingScroll />}
      <Landing />
    </div>
  );
}
