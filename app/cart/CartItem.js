import Image from 'next/image';
import { getProductById } from '../../database/products';
import styles from './CartItem.module.scss';
import UpdateCartItem from './UpdateCartItem';
import { getSubTotal } from './utility/getSubtotal';

export default function CartItem({ item, key }) {
  const productInCart = getProductById(item.id);

  return (
    <div
      key={`cartItem-div-${key}`}
      data-test-id={`cart-product-${productInCart.id}`}
      className={styles.cartItemWrapper}
    >
      <Image
        src={productInCart.image}
        alt={productInCart.alt}
        width="100"
        height="100"
      />
      <h2>{productInCart.name}</h2>
      <div data-test-id={`cart-product-quantity-${item.id}`}>
        {item.quantity}
      </div>
      <div>{productInCart.price}</div>
      <div>{getSubTotal(productInCart.id, item.quantity)}</div>
      <UpdateCartItem id={item.id} />
    </div>
  );
}
