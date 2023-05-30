import Image from 'next/image';
import { getProductById } from '../../database/products';
import { CartItemType } from '../products/[id]/actions';
import { capitalizeFirstLetter } from '../utility/capitalizeFirstLetter';
import { getSubTotal } from '../utility/getSubtotal';
import styles from './CartItem.module.scss';
import DeleteCartItem from './DeleteCartItem';
import UpdateQuantity from './UpdateQuantity';

type Props = {
  item: CartItemType;
  allowChange: boolean;
};

export default async function CartItem(props: Props) {
  const cartItem = await getProductById(props.item.id);

  return (
    <div
      data-test-id={`cart-product-${cartItem?.id}`}
      className={`${styles.cartItemWrapper} ${
        props.allowChange ? '' : styles.hideOnMobile // Only show total sum in checkout, where this component is reused.
      }`}
    >
      <div className={styles.pictureWrapper}>
        <Image
          src={cartItem ? cartItem.image : ''}
          alt={cartItem ? cartItem.alt : ''}
          width="100"
          height="100"
        />
        <div className={styles.product}>
          <p className={styles.productName}>{cartItem?.name}</p>
          <p>{capitalizeFirstLetter(cartItem ? cartItem.category : '')}</p>
        </div>
      </div>
      {props.allowChange ? (
        <div className={styles.quantity}>
          {/* @ts-expect-error Async Server Component */}
          <UpdateQuantity id={cartItem?.id} quantity={props.item.quantity} />
        </div>
      ) : (
        <div className={styles.quantity}>{props.item.quantity} x</div>
      )}
      <div className={styles.total}>
        <span>{getSubTotal(cartItem?.id, props.item.quantity)}</span>
        <span>&nbsp;EUR</span>
      </div>
      {props.allowChange ? <DeleteCartItem id={props.item.id} /> : ''}
    </div>
  );
}
