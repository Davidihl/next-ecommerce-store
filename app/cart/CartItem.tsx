import Image from 'next/image';
import { capitalizeFirstLetter } from '../utility/capitalizeFirstLetter';
import { ProductWithQuantityAndPrice } from './Cart';
import styles from './CartItem.module.scss';
import DeleteCartItem from './DeleteCartItem';
import UpdateQuantity from './UpdateQuantity';

type Props = {
  product: ProductWithQuantityAndPrice;
  allowChange: boolean;
};

export default function CartItem(props: Props) {
  // const product = await getProductById(props.item.id);

  return (
    <div
      data-test-id={`cart-product-${props.product.id}`}
      className={`${styles.cartItemWrapper} ${
        props.allowChange ? '' : styles.hideOnMobile // Only show total sum in checkout, where this component is reused.
      }`}
    >
      <div className={styles.pictureWrapper}>
        <Image
          src={props.product.image}
          alt={props.product.alt}
          width="100"
          height="100"
        />
        <div className={styles.product}>
          <p className={styles.productName}>{props.product.name}</p>
          <p>{capitalizeFirstLetter(props.product.category)}</p>
        </div>
      </div>
      {props.allowChange ? (
        <div className={styles.quantity}>
          <UpdateQuantity
            id={props.product.id}
            quantity={props.product.quantity}
          />
        </div>
      ) : (
        <div className={styles.quantity}>{props.product.quantity} x</div>
      )}
      <div className={styles.total}>
        <span>{props.product.subTotal}</span>
        <span>&nbsp;EUR</span>
      </div>
      {props.allowChange ? <DeleteCartItem id={props.product.id} /> : ''}
    </div>
  );
}
