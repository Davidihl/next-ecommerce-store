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
  const product = await getProductById(props.item.id);

  if (product) {
    return (
      <div
        data-test-id={`cart-product-${product.id}`}
        className={`${styles.cartItemWrapper} ${
          props.allowChange ? '' : styles.hideOnMobile // Only show total sum in checkout, where this component is reused.
        }`}
      >
        <div className={styles.pictureWrapper}>
          <Image
            src={product.image}
            alt={product.alt}
            width="100"
            height="100"
          />
          <div className={styles.product}>
            <p className={styles.productName}>{product.name}</p>
            <p>{capitalizeFirstLetter(product.category)}</p>
          </div>
        </div>
        {props.allowChange ? (
          <div className={styles.quantity}>
            <UpdateQuantity id={product.id} quantity={props.item.quantity} />
          </div>
        ) : (
          <div className={styles.quantity}>{props.item.quantity} x</div>
        )}
        <div className={styles.total}>
          <span>{getSubTotal(product.id, props.item.quantity)}</span>
          <span>&nbsp;EUR</span>
        </div>
        {props.allowChange ? <DeleteCartItem id={props.item.id} /> : ''}
      </div>
    );
  }
  throw new Error(`Product with id ${props.item.id} not found`);
}
