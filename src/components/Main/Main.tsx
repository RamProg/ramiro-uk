import Image from 'next/image';
import Description from './Description/Description';

const Main = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-950">
      <div className="flex flex-col sm:flex-row items-stretch">
        <Image
          className="rounded-full h-fit shadow-[15px_15px_60px_-15px_rgba(255,87,51,0.5)] bg-orange-400 w-1/2"
          src="/mebg.png"
          width={300}
          height={300}
          alt="Me"
        />
        <div className="w-5" />
        <Description />
      </div>
    </main>
  );
};

export default Main;