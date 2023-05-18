import Link from 'next/link';
import { products } from '../../database/productDb';
import ProductList from '../components/ProductList';

export const metadata = {
  title: 'Animals page',
  description: 'My favorite animals',
};

export default function ProductsPage() {
  return (
    <section>
      <h1>ProductList</h1>
      <ProductList />
    </section>
  );
}
