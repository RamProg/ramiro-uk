import Link from 'next/link';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FloatingScrollProps = {
  direction: 'up' | 'down';
};

const FloatingScroll = ({ direction }: FloatingScrollProps) => {
  const isDirectionUp = direction === 'up';
  return (
    <Link
      href={isDirectionUp ? '' : '#link0'}
      className='fixed bottom-5 right-5 animate-bounce p-2'>
      <FontAwesomeIcon
        icon={faPlaneUp}
        rotation={isDirectionUp ? undefined : 180}
        size='2x'
        color='white'
      />
    </Link>
  );
};

export default FloatingScroll;
