import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    {
      path: '../../../public/fonts/Roboto-Medium.ttf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Roboto-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-roboto',
});
