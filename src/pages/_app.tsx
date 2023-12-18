import { roboto } from '@/assets/fonts';
import '../app/globals.css';
import type { AppProps } from 'next/app';
import Nav from '@/components/Main/Landing/Nav';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.variable} font-sans bg-ramiro-background`}>
      <Component {...pageProps} />
      <Nav />
    </main>
  );
}
