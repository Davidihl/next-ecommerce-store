import CheckoutForm from './CheckoutForm';
import styles from './page.module.scss';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout your cart with PULSE products',
};

export default function CheckoutPage() {
  return (
    <main className={styles.checkout}>
      <h1>Checkout</h1>
      <div className={styles.formWrapper}>
        <div className={styles.form}>
          <CheckoutForm />
        </div>
        <div className={styles.summary}>summary</div>
      </div>
    </main>
  );
}
