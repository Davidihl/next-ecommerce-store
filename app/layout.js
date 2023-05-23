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
      </body>
    </html>
  );
}
