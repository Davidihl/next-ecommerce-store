import Link from 'next/link';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="/">PULSE</Link>
      <div className={styles.menu}>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}
