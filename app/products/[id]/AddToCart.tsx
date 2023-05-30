'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import stayPositive from '../../utility/stayPositive';
import { updateCart } from './actions';
import styles from './AddToCart.module.scss';

type Props = {
  id: number;
};

export default function AddToCart(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  return (
    <form className={styles.addToCart}>
      <input
        value={quantity}
        type="number"
        className={styles.quantity}
        min="1"
        data-test-id="product-quantity"
        onChange={(event) =>
          setQuantity(Number(stayPositive(event.currentTarget.value)))
        }
      />
      <button
        data-test-id="product-add-to-cart"
        className={styles.addButton}
        formAction={async () => {
          router.refresh();
          await updateCart(props.id, quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
