import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import ProductImage from '../../components/ProductImage';
import AddToCart from './AddToCart';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export function generateMetadata({ params }) {
  const product = getProductById(Number(params.id));

  return {
    title: product.name,
    description: product.attributes.description,
  };
}

export default function ProductPage({ params }) {
  const product = getProductById(Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.wrapper}>
      <h1>{product.name}</h1>
      <div className={styles.productDetail}>
        <ProductImage product={product} />
        <div className={styles.description}>
          <h2>Description</h2>
          <p>{product.attributes.description}</p>
          <p className={styles.price}>
            <span data-test-id="product-price">{product.price}</span>
            <span> EUR</span>
          </p>
          <AddToCart id={product.id} />
        </div>
      </div>
    </main>
  );
}
