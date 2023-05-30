import { Fragment } from 'react';
import { getProductsInCart } from '../../database/products';
import { Product } from '../../migrations/1684957255-createTableProducts';
import type { CartItemType } from '../products/[id]/actions';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import { getTotalCartValue } from '../utility/getTotalCartValue';
import styles from './Cart.module.scss';
import CartItem from './CartItem';

export type ProductWithQuantity = Product & {
  quantity: number;
};

type Props = {
  allowChange: boolean;
};

export default async function Cart(props: Props) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects
  const cartIds = cart.map((cartItem: CartItemType) => cartItem.id);

  const totalValue = getTotalCartValue(cart);

  const products = await getProductsInCart(cartIds);
  const productsWithQuantity = products.map((product) => ({
    ...product,
    ...cart.find((cartItem: CartItemType) => cartItem.id === product.id),
  }));

  return (
    <>
      {cart.length > 0
        ? productsWithQuantity.map((product) => (
            <Fragment key={`cartItem-div-${product.id}`}>
              <CartItem product={product} allowChange={props.allowChange} />
            </Fragment>
          ))
        : ''}
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
