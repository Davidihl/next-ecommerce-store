import Image from 'next/image';
import Link from 'next/link';
import cart from '../public/cart.svg';
import logo from '../public/Pulse_logo.svg';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <Image src={logo} className={styles.logo} alt="Pulse Logo" />
      </Link>
      <div className={styles.menu}>
        <Link href="/products" data-test-id="products-link">
          Catalog
        </Link>
        <Link href="/cart">
          <Image src={cart} alt="Cart Icon" />
        </Link>
      </div>
    </nav>
  );
}
