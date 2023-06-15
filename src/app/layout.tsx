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
    description: 'Leading Engineering Teams',
    url: 'https://www.ramiro.uk',
    siteName: 'Ramiro',
    images: [
      {
        url: '/images/opengraph.png',
        width: 854,
        height: 425,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

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
