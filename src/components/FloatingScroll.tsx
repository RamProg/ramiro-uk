import Link from 'next/link';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FloatingScroll = () => {
  return (
    <Link href="#nav" className="absolute bottom-5 right-5 animate-bounce">
      <FontAwesomeIcon icon={faPlaneUp} rotation={180} />
    </Link>
  );
};

export default FloatingScroll;
