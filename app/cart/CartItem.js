import Image from 'next/image';
import { getProductById } from '../../database/products';
import { capitalizeFirstLetter } from '../utility/capitalizeFirstLetter';
import styles from './CartItem.module.scss';
import DeleteCartItem from './DeleteCartItem';
import UpdateQuantity from './UpdateQuantity';
import { getSubTotal } from './utility/getSubtotal';

export default function CartItem({ item }) {
  const cartItem = getProductById(item.id);

  return (
    <div
      data-test-id={`cart-product-${cartItem.id}`}
      className={styles.cartItemWrapper}
    >
      <div className={styles.pictureWrapper}>
        <Image
          src={cartItem.image}
          alt={cartItem.alt}
          width="100"
          height="100"
        />
        <div className={styles.product}>
          <h2>{cartItem.name}</h2>
          <p>{capitalizeFirstLetter(cartItem.category)}</p>
        </div>
      </div>
      <div className={styles.quantity}>
        <UpdateQuantity id={cartItem.id} quantity={item.quantity} />
      </div>
      <div className={styles.total}>
        <span className={styles.totalNumber}>
          {getSubTotal(cartItem.id, item.quantity)}
        </span>
        <span>&nbsp;EUR</span>
      </div>
      <DeleteCartItem id={item.id} />
    </div>
  );
}
