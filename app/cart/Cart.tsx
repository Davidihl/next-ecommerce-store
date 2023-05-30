import { Fragment } from 'react';
import type { CartItemType } from '../products/[id]/actions';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import { getTotalCartValue } from '../utility/getTotalCartValue';
import styles from './Cart.module.scss';
import CartItem from './CartItem';

type Props = {
  allowChange: boolean;
};

export default function Cart(props: Props) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects
  const totalValue = getTotalCartValue(cart);

  return (
    <>
      {cart.map((cartItem: CartItemType) => (
        <Fragment key={`cartItem-div-${cartItem.id}`}>
          {/* @ts-expect-error Async Server Component */}
          <CartItem item={cartItem} allowChange={props.allowChange} />
        </Fragment>
      ))}
      {cart.length > 0 ? (
        <div data-test-id="cart-total" className={styles.totalSumContainer}>
          <span className={styles.totalSumText}>Total:</span>
          <span className={styles.totalSumValue}>{totalValue}</span>
          <span className={styles.totalSumCurrency}>EUR</span>
        </div>
      ) : (
        <div className={styles.noCart}>Your cart is empty</div>
      )}
    </>
  );
}
