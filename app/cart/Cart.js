import Image from 'next/image';
import { getProductById } from '../../database/products';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import styles from './Cart.module.scss';
import { getSubTotal } from './utility/getSubtotal';
import { getTotalCartValue } from './utility/getTotalCartValue';

function renderCartItem(item) {
  const productInCart = getProductById(item.id);

  return (
    <div
      key={`cartItem-div-${productInCart.id}`}
      data-test-id={`cart-product-${productInCart.id}`}
      className={styles.cartItemWrapper}
    >
      <Image
        src={productInCart.image}
        alt={productInCart.alt}
        width="75"
        height="75"
      />
      {productInCart.name}
      {productInCart.price}
      {getSubTotal(productInCart.id, item.quantity)}
    </div>
  );
}

export default function Cart() {
  const cartCookie = getCookie('yourCart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects
  const totalValue = getTotalCartValue(cart);

  return (
    <main>
      <h1>Your Cart</h1>
      {cart.map((cartItem) => renderCartItem(cartItem))}
      <div>{totalValue}</div>
    </main>
  );
}
