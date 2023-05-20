'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import stayPositive from '../utility/stayPositive';
import { updateCart } from './actions';

export default function UpdateCartItem({ id, quantity }) {
  const router = useRouter();

  return (
    <form>
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await updateCart(id, quantity);
        }}
      >
        remove
      </button>
    </form>
  );
}
