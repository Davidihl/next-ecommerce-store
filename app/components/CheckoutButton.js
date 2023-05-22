import Link from 'next/link';
import styles from './CheckoutButton.module.scss';

export default function CheckoutButton() {
  return (
    <div className={styles.checkoutContainer}>
      <Link
        data-test-id="cart-checkout"
        href="/checkout"
        className={styles.checkoutButton}
      >
        Checkout
      </Link>
    </div>
  );
}
