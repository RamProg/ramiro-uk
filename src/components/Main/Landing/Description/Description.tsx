import Socials from './Socials';
import { faCode, faEarthEurope, IconDefinition, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
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
    <div className="flex flex-col items-center sm:w-1/2 sm:items-start">
      <p className="mt-5 text-3xl text-slate-200">
        Hi! I&apos;m Ramiro
      </p>
      <p className="flex text-lg text-slate-200">
        I lead Engineering Teams
      </p>
      <ul className="flex flex-col justify-between flex-grow mt-10">
        {lines.map(line => (
          <li
            key={line.text}
            className="ml-2 text-sm text-slate-200">
            <FontAwesomeIcon
              icon={line.fontAwesomeIcon}
              className="w-4 mr-2"
            />
            {line.text}
          </li>
        ))}
      </ul>
      <Socials />
    </div>
  );
};

export default Description;
