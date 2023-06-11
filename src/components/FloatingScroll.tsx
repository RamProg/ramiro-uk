import Link from 'next/link';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FloatingScrollProps = {
  direction: 'up' | 'down';
};

const FloatingScroll = ({ direction }: FloatingScrollProps) => {
  return (
    <Link href='#nav' className='absolute bottom-5 right-5 animate-bounce'>
      <FontAwesomeIcon
        icon={faPlaneUp}
        rotation={direction === 'down' ? 180 : undefined}
        size='2x'
        color='white'
      />
    </Link>
  );
};

export default FloatingScroll;
