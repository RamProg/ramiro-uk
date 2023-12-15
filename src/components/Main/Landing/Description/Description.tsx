import Socials from './Socials';
import {
  faCode,
  faEarthEurope,
  IconDefinition,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type LinesType = {
  fontAwesomeIcon: IconDefinition;
  text: string;
};

const lines: LinesType[] = [
  {
    fontAwesomeIcon: faCode,
    text: 'Software Engineer',
  },
  {
    fontAwesomeIcon: faEarthEurope,
    text: 'UK Based',
  },
  {
    fontAwesomeIcon: faMobileScreenButton,
    text: 'Mobile First',
  },
];

const Description = () => {
  return (
    <div className='flex flex-col items-center sm:w-[24rem] sm:items-start mt-5 sm:mt-0 sm:ml-[28px]'>
      <div className='mt-5 text-3xl sm:text-5xl sm:font-bold '>
        Hi, I&apos;m{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-br from-pink-500 from-1% via-orange-400 via-40% to-yellow-300 to-90%'>
          Ramiro{' '}
        </span>
        <span className='inline-block animate-waving-hand'>👋🏻</span>
      </div>
      <p className='flex mt-1 text-lg font-bold sm:text-3xl'>
        I lead Engineering Teams
      </p>
      <ul className='flex flex-col justify-between flex-grow mt-10'>
        {lines.map(line => (
          <li
            key={line.text}
            className='ml-2 text-sm sm:text-lg sm:ml-4'>
            <FontAwesomeIcon icon={line.fontAwesomeIcon} className='w-4 mr-2' />
            {line.text}
          </li>
        ))}
      </ul>
      <Socials />
    </div>
  );
};

export default Description;
