import Link from 'next/link';
import { Fragment } from 'react';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import styles from './Cart.module.scss';
import CartItem from './CartItem';
import { getTotalCartValue } from './utility/getTotalCartValue';

export default function Cart() {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects
  const totalValue = getTotalCartValue(cart);

  return (
    <main className={styles.cartWrapper}>
      <h1>Your Cart</h1>
      <div className={styles.tableHeader}>
        <div className={styles.product}>Item</div>
        <div className={styles.quantity}>Quantity</div>
        <div className={styles.total}>Total</div>
      </div>
      {cart.map((cartItem) => (
        <Fragment key={`cartItem-div-${cartItem.id}`}>
          <CartItem item={cartItem} />
        </Fragment>
      ))}
      <div data-test-id="cart-total">{totalValue}</div>
      <Link data-test-id="cart-checkout" href="/checkout">
        Checkout
      </Link>
    </main>
  );
}
