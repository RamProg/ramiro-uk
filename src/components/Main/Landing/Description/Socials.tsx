'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faMedium,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { isDesktop } from 'react-device-detect';
import { colors } from '@/constants/colors';

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
  const [iconsSize, setIconsSize] = useState<'2x' | '3x'>('3x');
  const handleIconClick = (url: string) => {
    window.open(url, '_blank', 'noreferrer');
  };

  const handleMouseEnter = (icon: string) => {
    setHoverIcons(prev => ({ ...prev, [icon]: true }));
  };

  const handleMouseLeave = () => setHoverIcons(allOff);

  const isHovered = (text: IconText) => hoverIcons[text];

  useEffect(() => {
    setIconsSize(isDesktop ? '3x' : '2x');
  }, []);

  return (
    <div className='flex flex-row justify-start mt-10'>
      {icons.map(icon => (
        <FontAwesomeIcon
          key={icon.text}
          onClick={() => handleIconClick(icon.url)}
          onMouseEnter={() => handleMouseEnter(icon.text)}
          onMouseLeave={handleMouseLeave}
          icon={icon.fontAwesomeIcon}
          size={iconsSize}
          color={isHovered(icon.text) ? colors.lightOrange : colors.lightGrey}
          className='w-8 p-1 ml-2 mr-2 sm:ml-0 sm:mr-7 sm:w-11 hover:cursor-pointer'
        />
      ))}
    </div>
  );
};

export default Socials;
