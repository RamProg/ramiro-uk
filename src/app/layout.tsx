import '@/app/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { roboto } from '@/assets/fonts';

config.autoAddCss = false;

export const metadata = {
  title: 'Ramiro',
  description: 'Leading Engineering Teams',
  themeColor: '#ff5733',
  openGraph: {
    title: 'Ramiro',
    description: 'This is a testing for open graph',
    url: 'https://ramiro.uk',
    siteName: 'Ramiro',
    images: [
      {
        url: 'https://ramiro.uk/_next/image?url=%2Fimages%2Fme-nobg.png&w=384&q=75',
        width: 800,
        height: 600,
      },
      {
        url: 'https://ramiro.uk/_next/image?url=%2Fimages%2Fme-nobg.png&w=384&q=75',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  },};

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
      </body>
    </html>
  );
}
