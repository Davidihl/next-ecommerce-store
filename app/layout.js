import './globals.scss';
import { Heebo } from 'next/font/google';
import Navigation from './Navigation';

const heebo = Heebo({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Pulse | Redefining Sound Excellence',
    template: 'Pulse | %s ',
  },
  description: 'Redefining Sound Excellence',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <div className="topMessage">Free shipping worldwide!</div>
        <Navigation />
        {children}
        <footer>
          Created by David Ihl during UpLeveled.io bootcamp spring 2023
        </footer>
      </body>
    </html>
  );
}
