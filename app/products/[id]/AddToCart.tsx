'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import stayPositive from '../../utility/stayPositive';
import { updateCart } from './actions';
import styles from './AddToCart.module.scss';

type Props = {
  id: number;
};

export default function AddToCart(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showNotification]);

  return (
    <div>
      <form className={styles.addToCart}>
        <input
          value={quantity}
          type="number"
          className={styles.quantity}
          min="1"
          data-test-id="product-quantity"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setQuantity(stayPositive(parseInt(event.currentTarget.value)))
          }
        />
        <button
          data-test-id="product-add-to-cart"
          className={styles.addButton}
          formAction={async () => {
            router.refresh();
            await updateCart(props.id, quantity);
            setShowNotification(true);
          }}
        >
          Add to cart
        </button>
      </form>
      <div
        className={`${styles.notification} ${
          showNotification ? styles.show : ''
        } ${!showNotification ? styles.transition : ''}`}
      >
        {quantity} item{quantity > 1 ? 's' : ''} added to cart
      </div>
    </div>
  );
}
