'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faMedium,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

type IconText = 'linkedin' | 'github' | 'stackoverflow' | 'medium';

type IconsType = {
  fontAwesomeIcon: IconDefinition;
  text: IconText;
  url: string;
};

const icons: IconsType[] = [
  {
    fontAwesomeIcon: faLinkedin,
    text: 'linkedin',
    url: '/linkedin',
  },
  {
    fontAwesomeIcon: faGithub,
    text: 'github',
    url: '/github',
  },
  {
    fontAwesomeIcon: faStackOverflow,
    text: 'stackoverflow',
    url: '/stackoverflow',
  },
  {
    fontAwesomeIcon: faMedium,
    text: 'medium',
    url: '/medium',
  },
];

const allOff = {
  linkedin: false,
  github: false,
  stackoverflow: false,
  medium: false,
};

const Socials = () => {
  const [hoverIcons, setHoverIcons] = useState(allOff);
  const handleIconClick = (url: string) => {
    window.open(url, '_blank', 'noreferrer');
  };

  const handleMouseEnter = (icon: string) => {
    setHoverIcons(prev => ({ ...prev, [icon]: true }));
  };

  const handleMouseLeave = () => setHoverIcons(allOff);

  const isHovered = (text: IconText) => hoverIcons[text];

  return (
    <div className='flex flex-row justify-start mt-10'>
      {icons.map(icon => (
        <FontAwesomeIcon
          key={icon.text}
          onClick={() => handleIconClick(icon.url)}
          onMouseEnter={() => handleMouseEnter(icon.text)}
          onMouseLeave={handleMouseLeave}
          icon={icon.fontAwesomeIcon}
          size={isMobile ? '2x' : '3x'}
          color={isHovered(icon.text) ? '#fed7aa' : '#D8D8D8'}
          className='w-6 p-1 mr-4 sm:mr-7 sm:w-9 hover:cursor-pointer'
        />
      ))}
    </div>
  );
};

export default Socials;
