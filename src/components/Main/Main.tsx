import Image from 'next/image';
import Description from './Description/Description';

const Main = () => {
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
        <Description />
      </div>
    </main>
  );
};

export default Main;