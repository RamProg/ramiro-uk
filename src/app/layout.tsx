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
    images: ['/apple-touch-icon.png'],
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
