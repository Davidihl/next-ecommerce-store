'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import deleteIcon from '../../public/delete.svg';
import { removeItem } from './actions';
import styles from './DeleteCartItem.module.scss';

export default function UpdateCartItem({ id }) {
  const router = useRouter();

  return (
    <form className={styles.wrapper}>
      <button
        className={styles.removeButton}
        data-test-id={`cart-product-remove-${id}`}
        formAction={async () => {
          router.refresh();
          await removeItem(id);
        }}
      >
        <Image src={deleteIcon} alt="Delete Item from Cart Icon" />
      </button>
    </form>
  );
}
