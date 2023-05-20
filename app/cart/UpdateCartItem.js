'use client';
import { useRouter } from 'next/navigation';
import { removeItem } from './actions';

export default function UpdateCartItem({ id }) {
  const router = useRouter();

  return (
    <form>
      <button
        data-test-id={`cart-product-remove-${id}`}
        formAction={async () => {
          router.refresh();
          await removeItem(id);
        }}
      >
        remove
      </button>
    </form>
  );
}
