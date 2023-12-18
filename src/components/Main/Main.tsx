'use client';

import FloatingScroll from '@/components/Main/Landing/FloatingScroll';
import Landing from '@/components/Main/Landing/Landing';
import Nav from '@/components/Main/Landing/Nav';
import useScroll from '@/hooks/useScroll';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function Main() {
  const [isMoving, setIsMoving] = useState(false);
  const searchParams = useSearchParams();
  const showMenuParam = searchParams?.get('menu') === 'true';
  const [showOnlyMenu, setShowOnlyMenu] = useState(showMenuParam);
  const { scrollToNext } = useScroll();

  useEffect(() => {
    if (isMobile) setShowOnlyMenu(false);
  }, []);

  useEffect(() => {
    if (isMobile && showMenuParam && !showOnlyMenu) {
      scrollTo(0, document.documentElement.scrollHeight);
    }
  }, [showOnlyMenu]);

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
      <FloatingScroll />
      {!showOnlyMenu && <Landing />}
      <Nav />
    </div>
  );
}
