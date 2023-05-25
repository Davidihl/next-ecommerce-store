import Image from 'next/image';
import { getProductById } from '../../database/products.ts';
import { capitalizeFirstLetter } from '../utility/capitalizeFirstLetter';
import { getSubTotal } from '../utility/getSubtotal';
import styles from './CartItem.module.scss';
import DeleteCartItem from './DeleteCartItem';
import UpdateQuantity from './UpdateQuantity';

export default async function CartItem({ item, allowChange }) {
  const cartItem = await getProductById(item.id);

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
          <p className={styles.productName}>{cartItem.name}</p>
          <p>{capitalizeFirstLetter(cartItem.category)}</p>
        </div>
      </div>
      {allowChange ? (
        <div className={styles.quantity}>
          <UpdateQuantity id={cartItem.id} quantity={item.quantity} />
        </div>
      ) : (
        <div className={styles.quantity}>{item.quantity} x</div>
      )}
      <div className={styles.total}>
        <span>{getSubTotal(cartItem.id, item.quantity)}</span>
        <span>&nbsp;EUR</span>
      </div>
      {allowChange ? <DeleteCartItem id={item.id} /> : ''}
    </div>
  );
}
