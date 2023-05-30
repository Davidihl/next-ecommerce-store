'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import deleteIcon from '../../public/delete.svg';
import { removeItem } from './actions';
import styles from './DeleteCartItem.module.scss';

type Props = {
  id: number;
};

export default function UpdateCartItem(props: Props) {
  const router = useRouter();

  return (
    <form className={styles.wrapper}>
      <button
        className={styles.removeButton}
        data-test-id={`cart-product-remove-${props.id}`}
        formAction={async () => {
          router.refresh();
          await removeItem(props.id);
        }}
      >
        <Image src={deleteIcon} alt="Delete Item from Cart Icon" />
      </button>
    </form>
  );
}
