import UpdateMetaData from '../components/UpdateMetadata';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import { getTotalCartValue } from '../utility/getTotalCartValue';
import CheckoutForm from './CheckoutForm';
import styles from './page.module.scss';
import Summary from './Summary';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout your cart with PULSE products',
};

export default function CheckoutPage() {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects
  const totalValue = getTotalCartValue(cart);

  return (
    <main className={styles.checkout}>
      <UpdateMetaData
        title={metadata.title}
        description={metadata.description}
      />
      <h1>Checkout</h1>
      <div className={styles.formWrapper}>
        <div className={styles.form}>
          <h2>Your Order</h2>
          <CheckoutForm orderValue={totalValue} />
        </div>
        <div className={styles.summary}>
          <Summary />
        </div>
      </div>
    </main>
  );
}
