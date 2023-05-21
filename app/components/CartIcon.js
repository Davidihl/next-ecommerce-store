import Image from 'next/image';
import Link from 'next/link';
import cartIcon from '../../public/cart.svg';
import { cartAmount } from '../utility/cartAmount';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import Badge from './Badge';

export default function CartIcon() {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects
  const cartItemAmount = cartAmount(cart);

  return (
    <Link href="/cart" className="cart" data-test-id="cart-link">
      <Badge value={cartItemAmount} />
      <Image src={cartIcon} alt="Cart Icon" />
    </Link>
  );
}
