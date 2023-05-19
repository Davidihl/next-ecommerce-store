'use client';
import { useState } from 'react';
import styles from './AddToCart.module.scss';

export default function AddToCart() {
  const [quantity, setQuantity] = useState(1);

  return (
    <form className={styles.addToCart}>
      <input
        value={quantity}
        type="number"
        className={styles.quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <button className={styles.addButton}>Add to cart</button>
    </form>
  );
}
