import CheckoutButton from '../components/CheckoutButton';
import Cart from './Cart';
import styles from './page.module.scss';

export const metadata = {
  title: 'Cart',
  description: 'This is your cart',
};

export default function CartPage() {
  return (
    <main className={styles.cartWrapper}>
      <h1>Your Cart</h1>
      <div className={styles.tableHeader}>
        <div className={styles.product}>Item</div>
        <div className={styles.quantity}>Quantity</div>
        <div className={styles.total}>Total</div>
      </div>
      {/* @ts-expect-error Async Server Component https://github.com/vercel/next.js/issues/42292 */}
      <Cart allowChange={true} />
      <CheckoutButton />
    </main>
  );
}
