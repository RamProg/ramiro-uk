import '@/app/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { roboto } from '@/assets/fonts';
import { metadata } from './metadata';
import Nav from '@/components/Main/Landing/Nav';

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} font-sans`}
        suppressHydrationWarning={true}>
        {children}
        <Nav />
      </body>
    </html>
  );
}

export { metadata };
