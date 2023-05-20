import { getProductById } from '../../../database/products';
import ProductImage from '../../components/ProductImage';
import AddToCart from './AddToCart';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const product = getProductById(Number(params.id));

  return (
    <main className={styles.wrapper}>
      <h1>{product.name}</h1>
      <div className={styles.productDetail}>
        <ProductImage product={product} />
        <div className={styles.description}>
          <h2>Description</h2>
          <p>{product.attributes.description}</p>
          <p className={styles.price}>{product.price} EUR</p>
          <AddToCart />
        </div>
      </div>
    </main>
  );
}
