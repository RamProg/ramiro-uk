import Link from 'next/link';

type LinkType = {
  url: string;
  text: string;
};

type LinksType = LinkType[];

const Nav = () => {
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

  return (
    <>
      <nav id='nav' className='flex h-dynamicScreen justify-center p-10 bg-orange-700'>
        <ul className='flex flex-col items-center justify-evenly'>
          {links.map((link, i) => {
            return (
              <li
                id={'link' + i}
                className='flex justify-center items-center border-2 p-2 rounded-md w-48 h-14'
                key={link.text}>
                <Link target='_blank' href={link.url} className='text-white'>
                  {link.text.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
