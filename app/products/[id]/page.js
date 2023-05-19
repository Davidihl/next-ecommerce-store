import Image from 'next/image';
import { getProductById, products } from '../../../database/products';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const product = getProductById(Number(params.id));

  return (
    <main>
      <h1>{product.name}</h1>
      <Image src={product.image} width="300" height="300" />
    </main>
  );
}
