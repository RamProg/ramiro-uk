import Link from 'next/link';

type LinkType = {
  url: string;
  text: string;
};

type LinksType = LinkType[];

const links: LinksType = [
  {
    url: 'https://drive.google.com/file/d/1huO-gbsx88v5zIhoA1DmPvQ5OOiAPTUl/view?usp=sharing',
    text: 'Download my CV',
  },
  {
    url: 'https://calendly.com/ramirodlp/15min',
    text: 'Book a Meeting',
  },
  {
    url: 'https://forms.gle/MwpUZgpCzjuMxAGo6',
    text: 'Drop me a Message',
  },
  {
    url: 'https://www.linkedin.com/in/ramirodlp/details/projects/',
    text: 'Check my Projects',
  },
];

const Nav = () => {
  return (
    <nav
      id='nav'
      className='flex justify-center p-10 bg-orange-700 h-dynamicScreen sm:absolute sm:bottom-0 sm:left-0 sm:h-12 sm:w-screen sm:bg-orange-400'>
      <ul className='flex flex-col items-center justify-evenly sm:flex-row'>
        {links.map((link, i) => {
          return (
            <li
              className='flex items-center justify-center w-48 p-2 border-2 rounded-md h-14 sm:h-10 sm:w-44 sm:border-slate-900 sm:border-2 sm:text-white'
              key={link.text}>
              <Link target='_blank' href={link.url} className='text-white'>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
