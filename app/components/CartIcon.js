import Image from 'next/image';
import Link from 'next/link';
import cart from '../../public/cart.svg';
import Badge from './Badge';

export default function CartIcon({ value }) {
  return (
    <Link href="/cart" className="cart">
      <Badge value={value} />
      <Image src={cart} alt="Cart Icon" />
    </Link>
  );
}
