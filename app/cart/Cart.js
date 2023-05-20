import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';

export default function Cart() {
  const cartCookie = getCookie('yourCart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects

  return (
    <main>
      <h1>Your Cart</h1>
    </main>
  );
}
