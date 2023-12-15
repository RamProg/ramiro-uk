import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import { isMobile as isMobileDetect } from 'react-device-detect';

const BackHome = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean>();
  
  useLayoutEffect(() => {
    setIsMobile(isMobileDetect);
  }, []);
  

  const handleGoBack = () => {
    router.back();
  };

  if (!isMobile) {
    return null;
  }

  return (
    <div
      onClick={handleGoBack}
      className='fixed p-2 bottom-5 left-5 animate-bounce-x '>
      <FontAwesomeIcon
        icon={faBackward}
        size='2x'
        className='text-ramiro-light-grey icon-border'
      />
    </div>
  );
};

export default BackHome;
