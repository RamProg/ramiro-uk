import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction } from 'react';

type FloatingScrollProps = {
  direction: 'up' | 'down';
  handleFloatPress: Dispatch<SetStateAction<boolean>>;
};

const FloatingScroll = ({
  direction,
  handleFloatPress,
}: FloatingScrollProps) => {
  const isDirectionUp = direction === 'up';

  const handlePress = () => {
    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({
      behavior: 'smooth',
      top: isDirectionUp ? 0 : window.innerHeight,
    });

    handleFloatPress(prev => !prev);
  };

  return (
    <div
      onClick={handlePress}
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
