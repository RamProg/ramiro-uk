'use client'

import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type FloatingScrollProps = {
  direction: 'up' | 'down';
  handleFloatPress: Dispatch<SetStateAction<boolean>>;
};

const FloatingScroll = ({ handleFloatPress }: FloatingScrollProps) => {
  const [isDirectionUp, setIsDirectionUp] = useState(false);
  const [enabled, setEnabled] = useState(true);

  const handlePress = () => {
    setEnabled(false);
    setTimeout(() => {
      setEnabled(true);
    }, 750);

    window.scrollTo({
      behavior: 'smooth',
      top: isDirectionUp ? 0 : window.innerHeight,
    });

    handleFloatPress(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsDirectionUp(window.scrollY !== 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      onClick={enabled ? () => handlePress() : () => {}}
      className='fixed bottom-5 right-5 animate-bounce p-2 bg-transparent'>
      <FontAwesomeIcon
        icon={faPlaneUp}
        rotation={isDirectionUp ? undefined : 180}
        size='2x'
        color='white'
      />
    </div>
  );
};

export default FloatingScroll;
