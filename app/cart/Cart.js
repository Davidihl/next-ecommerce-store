import Link from 'next/link';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import styles from './Cart.module.scss';
import CartItem from './CartItem';
import { getTotalCartValue } from './utility/getTotalCartValue';

export default function Cart() {
  const cartCookie = getCookie('yourCart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects
  const totalValue = getTotalCartValue(cart);

  return (
    <main>
      <h1>Your Cart</h1>
      {cart.map((cartItem) => (
        <CartItem item={cartItem} key={cartItem.id} />
      ))}
      <div data-test-id="cart-total">{totalValue}</div>
      <Link data-test-id="cart-checkout" href="/checkout">
        Checkout
      </Link>
    </main>
  );
}
