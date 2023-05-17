import './globals.scss';
import Navigation from './Navigation';

// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] }); => className={inter.className}

export const metadata = {
  title: { default: 'Next Example | UpLeveled', template: '%s | UpLeveled' },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
