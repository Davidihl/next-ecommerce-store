'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import addIcon from '../../public/add.svg';
import removeIcon from '../../public/remove.svg';
import { decreaseQuantity, increaseQuantity } from './actions';
import styles from './UpdateQuantity.module.scss';

type Props = {
  id: number;
  quantity: number;
};

export default function UpdateQuantity(props: Props) {
  const router = useRouter();

  return (
    <form className={styles.updateQuantity}>
      <button
        className={styles.decrease}
        formAction={async () => {
          router.refresh();
          await decreaseQuantity(props.id);
        }}
      >
        <Image src={removeIcon} alt="Decrease Quantity Icon" />
      </button>
      <div
        className={styles.quantity}
        data-test-id={`cart-product-quantity-${props.id}`}
      >
        {props.quantity}
      </div>
      <button
        className={styles.increase}
        formAction={async () => {
          router.refresh();
          await increaseQuantity(id);
        }}
      >
        <Image src={addIcon} alt="Increase Quantity Icon" />
      </button>
    </form>
  );
}
