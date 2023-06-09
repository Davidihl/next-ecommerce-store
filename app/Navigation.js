import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/Pulse_logo.svg';
import CartIcon from './components/CartIcon';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <header className={styles.navigation}>
      <Link href="/">
        <Image
          src={logo}
          className={styles.logo}
          alt="Pulse Logo"
          unoptimized
        />
      </Link>
      <nav className={styles.menu}>
        <Link href="/products" data-test-id="products-link">
          Catalog
        </Link>
        <CartIcon />
      </nav>
    </header>
  );
}
