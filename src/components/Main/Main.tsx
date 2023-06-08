import Image from 'next/image';
import Description from './Description/Description';
import { isMobile } from 'react-device-detect';

const Main = () => {
  const imageSize = isMobile ? 0 : 320;
  return (
    <main className="flex justify-center sm:items-center h-screen bg-gray-950">
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch mt-10 sm:mt-0 h-64 sm:h-80">
        <Image
          className="rounded-full shadow-[15px_15px_60px_-15px_rgba(255,87,51,0.5)] bg-gradient-to-br from-pink-500 from-1% via-orange-400 via-40% to-yellow-300 to-90% sm:w-1/2 border-8 border-red-500"
          src="/nobg1.png"
          width={256}
          height={256}
          alt="Me"
        />
        <div className="w-5 h-5" />
        <Description />
      </div>
    </main>
  );
};

export default Main;