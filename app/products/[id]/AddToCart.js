'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import stayPositive from '../../utility/stayPositive';
import { updateCart } from './actions';
import styles from './AddToCart.module.scss';

export default function AddToCart({ id }) {
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
          setQuantity(stayPositive(event.currentTarget.value))
        }
      />
      <button
        data-test-id="product-add-to-cart"
        className={styles.addButton}
        formAction={async () => {
          router.refresh();
          await updateCart(id, quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
