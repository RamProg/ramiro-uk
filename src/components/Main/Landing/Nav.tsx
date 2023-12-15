'use client';

import Link from 'next/link';
import { cedarville } from '@/assets/fonts';
import { usePathname } from 'next/navigation';
import { isMobile as isMobileDetect } from 'react-device-detect';
import { useLayoutEffect, useState } from 'react';

type LinkType = {
  url: string;
  text: string;
  internal?: boolean;
};

type LinksType = LinkType[];

const links: LinksType = [
  {
    url: '/projects',
    text: 'projects',
  },
  {
    url: '/reviews',
    text: 'reviews',
    internal: true,
  },
  {
    url: '/',
    text: 'home',
    internal: true,
  },
  {
    url: '/cv',
    text: 'resume',
  },
  {
    url: '/contact',
    text: 'contact',
    internal: true,
  },
];

const mobileLinks: LinksType = links.filter(link => link.text !== 'home');

const Nav = () => {
  const [isMobile, setIsMobile] = useState<boolean>();
  const pathname = usePathname();

  useLayoutEffect(() => {
    setIsMobile(isMobileDetect);
  }, []);

  if (isMobile && pathname !== '/') {
    return null;
  }

  return (
    <nav
      id='nav'
      className='flex justify-center p-10 bg-ramiro-font h-dynamicScreen sm:absolute sm:top-0 sm:left-0 sm:h-12 sm:p-0 sm:w-screen sm:bg-transparent sm:items-center'>
      <ul className='flex flex-col items-center content-around justify-around sm:justify-between sm:flex-row sm:w-[48rem]'>
        {(isMobile ? mobileLinks : links).map(link => {
          const isTarget = link.url === pathname;
          const isHome = link.url === '/';

          return (
            <Link
              prefetch={false}
              target={link.internal ? '_parent' : '_blank'}
              href={isTarget ? '' : link.url}
              aria-disabled={isTarget}
              className={`text-white ${
                isTarget && !isHome && 'pointer-events-none'
              }`}
              suppressHydrationWarning={true}
              key={link.text}>
              {!isMobile && isHome ? (
                <NavHomeLink />
              ) : (
                <NavLink text={link.text} isTarget={isTarget} />
              )}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

const NavHomeLink = () => {
  return (
    <li className='flex items-center justify-center text-4xl transition-transform duration-300 transform border rounded-full w-14 h-14 border-ramiro-light-grey sm:mt-10 hover:bg-ramiro-light-grey text-ramiro-light-orange hover:text-ramiro-background hover:translate-y-2'>
      <span className={`font-bold ${cedarville.variable} font-cedarville`}>
        R
      </span>
    </li>
  );
};

const NavLink = ({ isTarget, text }: { isTarget: boolean; text: string }) => {
  return (
    <li
      className={`flex items-center justify-center w-48 p-2 border-2 border-ramiro-background bg-orange-200 sm:bg-transparent rounded-md h-14 sm:h-8 sm:border-0 text-ramiro-background sm:text-ramiro-font text-3xl sm:text-2xl sm:mt-8 sm:hover:text-orange-200 sm:hover:shadow-orange-200 ${cedarville.variable} font-cedarville sm:w-[80px]`}>
      <span className={`${isTarget && 'sm:text-ramiro-light-orange'}`}>
        {text.toLocaleLowerCase()}
      </span>
    </li>
  );
};
