'use client'

import FloatingScroll from '@/components/Main/FloatingScroll';
import Landing from '@/components/Main/Landing/Landing';
import Nav from '@/components/Main/Nav';
import { useEffect, useState } from 'react';

export default function Main() {
  const [scrollY, setScrollY] = useState(0);
  const isBrowser = () => typeof window !== "undefined"
  const windowHeight = isBrowser() ? window.innerHeight : 0;

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Landing />
      <Nav />
      <FloatingScroll direction={scrollY > windowHeight / 2 ? 'up' : 'down'} />
    </div>
  );
}
