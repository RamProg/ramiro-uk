import Link from 'next/link';
import { cedarville } from '@/assets/fonts';

type LinkType = {
  url: string;
  text: string;
};

type LinksType = LinkType[];

const links: LinksType = [
  {
    url: '/cv',
    text: 'my CV',
  },
  {
    url: '/message',
    text: 'Message me',
  },
  {
    url: '/meet',
    text: 'book a call',
  },
  {
    url: '/projects',
    text: 'my Projects',
  },
];

const Nav = () => {
  return (
    <nav
      id='nav'
      className='flex justify-center p-10 bg-orange-700 h-dynamicScreen sm:absolute sm:top-0 sm:left-0 sm:h-12 sm:p-0 sm:w-screen sm:bg-transparent sm:items-center'>
      <ul className='flex flex-col items-center content-around justify-around sm:justify-between sm:flex-row sm:w-[48rem]'>
        {links.map((link, i) => {
          return (
            <Link
              target='_blank'
              href={link.url}
              className='text-white'
              key={link.text}>
              <li
                className={`flex items-center justify-center w-48 p-2 border-2 rounded-md h-14 sm:h-8 sm:w-auto sm:border-0 text-ramiro-font sm:mt-8 sm:hover:text-orange-200 sm:hover:shadow-orange-200 ${cedarville.variable} sm:font-cedarville sm:text-2xl`}>
                {link.text.toLocaleLowerCase()}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
