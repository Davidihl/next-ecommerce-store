import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/Pulse_logo.svg';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <Image src={logo} className={styles.logo} />
      </Link>
      <div className={styles.menu}>
        <Link href="/products">Catalog</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}
