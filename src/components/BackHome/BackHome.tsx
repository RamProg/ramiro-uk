import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { isMobile as isMobileDetect } from 'react-device-detect';

const BackHome = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    setIsMobile(isMobileDetect);
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <Link
      href={{ pathname: '/', query: { menu: true } }}
      shallow={true}
      scroll={false}
      className='fixed p-2 bottom-5 left-5 animate-bounce-x'>
      <FontAwesomeIcon
        icon={faBackward}
        className='w-8 h-8 text-ramiro-light-grey icon-border'
      />
    </Link>
  );
};

export default BackHome;
