import ProductList from '../components/ProductList';
import UpdateMetaData from '../components/UpdateMetadata';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Product Overview',
  description: 'Explore the products of PULSE',
};

export default function ProductsPage() {
  return (
    <section className={styles.productWrapper}>
      <UpdateMetaData
        title={metadata.title}
        description={metadata.description}
      />
      <h1>Explore our products</h1>

      <ProductList />
    </section>
  );
}
