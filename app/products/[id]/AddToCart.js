'use client';
import { useState } from 'react';
import stayPositive from '../../utility/stayPositive';
import styles from './AddToCart.module.scss';

export default function AddToCart() {
  const [quantity, setQuantity] = useState(1);

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
      <button data-test-id="product-add-to-cart" className={styles.addButton}>
        Add to cart
      </button>
    </form>
  );
}
