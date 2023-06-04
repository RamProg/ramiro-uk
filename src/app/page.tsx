import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen bg-gray-950">
      <div className="flex flex-col sm:flex-row items-stretch">
        <Image
          className="rounded-full h-fit shadow-[15px_15px_60px_-15px_rgba(255,87,51,0.5)]"
          src="/mebg.png"
          width={300}
          height={300}
          alt="Me"
        />
        <div className="ml-5">
        <p className="text-3xl mt-5 font-serif text-slate-200">Hey! I&apos;m Ramiro</p>
        <p className="text-lg font-serif text-slate-200">I&apos;m a Software Engineer</p>
        <ul className="mt-14">
          <li className="ml-2 text-sm font-serif text-slate-200">- UK Based</li>
          <li className="mt-5 ml-2 text-sm font-serif text-slate-200">- Mobile Development</li>
          <li className="mt-5 ml-2 text-sm font-serif text-slate-200">- ramiro@ramiro.uk</li>
        </ul>
        </div>
      </div>
    </main>
  );
}
