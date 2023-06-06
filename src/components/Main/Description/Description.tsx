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
    <div className="flex flex-col sm:w-1/2 items-center sm:items-start">
      <p className="text-3xl mt-5 font-serif text-slate-200">
        Hi! I&apos;m Ramiro
      </p>
      <p className="flex text-lg font-serif text-slate-200">
        I lead Engineering Teams to success
      </p>
      <ul className="flex flex-col flex-grow justify-between mt-10">
        {lines.map(line => (
          <li
            key={line.text}
            className="ml-2 text-sm font-serif text-slate-200">
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
