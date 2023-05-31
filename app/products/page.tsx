import ProductList from '../components/ProductList';
import styles from './page.module.scss';

export const metadata = {
  title: 'Product Overview',
  description: 'Explore the products of PULSE',
};

export default function ProductsPage() {
  return (
    <section className={styles.productWrapper}>
      <h1>Explore our products</h1>
      {/* @ts-expect-error Async Server Component https://github.com/vercel/next.js/issues/42292 */}
      <ProductList />
    </section>
  );
}
