import Socials from "./Socials";

const Description = () => {
  return (
    <div className="ml-5">
      <p className="text-3xl mt-5 font-serif text-slate-200">
        Hey! I&apos;m Ramiro
      </p>
      <p className="text-lg font-serif text-slate-200">
        I&apos;m a Software Engineer
      </p>
      <ul className="mt-10">
        <li className="ml-2 text-sm font-serif text-slate-200">- UK Based</li>
        <li className="mt-5 ml-2 text-sm font-serif text-slate-200">
          - Mobile Development
        </li>
        <li className="mt-5 ml-2 text-sm font-serif text-slate-200">
          - ramiro@ramiro.uk
        </li>
      </ul>
      <Socials />
    </div>
  );
};

export default Description;
