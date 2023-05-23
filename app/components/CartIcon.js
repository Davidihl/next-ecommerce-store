import Image from 'next/image';
import Link from 'next/link';
import cartIcon from '../../public/cart.svg';
import Cart from '../cart/Cart';
import { cartAmount } from '../utility/cartAmount';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import Badge from './Badge';
import styles from './CartIcon.module.scss';
import CheckoutButton from './CheckoutButton';

export default function CartIcon() {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects
  const cartItemAmount = cartAmount(cart);

  return (
    <div className={styles.cartWrapper}>
      <Link href="/cart" data-test-id="cart-link">
        <Badge value={cartItemAmount} />
        <Image src={cartIcon} alt="Cart Icon" />
      </Link>
      <div className={styles.hoverCart}>
        <div className={styles.cart}>
          <h2 className={styles.hoverCartHeadline}>Your Cart</h2>
          <div className={styles.tableHeader}>
            <div className={styles.product}>Item</div>
            <div className={styles.quantity}>Quantity</div>
            <div className={styles.total}>Total</div>
          </div>
          <div className={styles.itemWrapper}>
            <Cart />
          </div>
          <CheckoutButton className={styles.hoverMenuClose} />
        </div>
      </div>
    </div>
  );
}
