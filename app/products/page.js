import Link from 'next/link';
import { products } from '../../database/productDb';

export const metadata = {
  title: 'Animals page',
  description: 'My favorite animals',
};

export default function ProductsPage() {
  return (
    <main>
      <h1>ProductList</h1>
      {products.map((product) => {
        return (
          <div key={`animal-div-${product.id}`}>
            <Link href={`/products/${product.name}`}>{product.name}</Link>
            <div>{product.price}</div>
          </div>
        );
      })}
    </main>
  );
}
