import { getProductById } from '../../database/products';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';

function renderCartItem(item) {
  const productInCart = getProductById(item.id);
  return (
    <div
      key={`cartItem-div-${productInCart.id}`}
      data-test-id={`cart-product-${productInCart.id}`}
    >
      {productInCart.name}
    </div>
  );
}

export default function Cart() {
  const cartCookie = getCookie('yourCart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects

  return (
    <main>
      <h1>Your Cart</h1>
      {cart.map((cartItem) => renderCartItem(cartItem))}
    </main>
  );
}
