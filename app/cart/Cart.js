import { Fragment } from 'react';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import styles from './Cart.module.scss';
import CartItem from './CartItem';
import { getTotalCartValue } from './utility/getTotalCartValue';

export default function Cart(props) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects
  const totalValue = getTotalCartValue(cart);

  return (
    <>
      {cart.map((cartItem) => (
        <Fragment key={`cartItem-div-${cartItem.id}`}>
          <CartItem item={cartItem} allowChange={props.allowChange} />
        </Fragment>
      ))}
      <div data-test-id="cart-total" className={styles.totalSumContainer}>
        <span className={styles.totalSumText}>Total:</span>
        <span className={styles.totalSumValue}>{totalValue}</span>
        <span className={styles.totalSumCurrency}>EUR</span>
      </div>
    </>
  );
}
