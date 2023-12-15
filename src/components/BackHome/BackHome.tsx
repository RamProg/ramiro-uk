import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const BackHome = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
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
