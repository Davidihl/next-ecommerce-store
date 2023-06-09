import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts } from '../../database/products';
import type { Product } from '../../migrations/1684957255-createTableProducts';
import styles from './ProductList.module.scss';

function getProducts(filter?: () => any) {
  if (filter) {
    return filter();
  } else {
    return getAllProducts();
  }
}

export default async function ProductList(props: any | undefined) {
  const products = await getProducts(props.filter);

  return (
    <div className={styles.productList}>
      {products.map((product: Product) => {
        return (
          <Link
            key={`product-${product.id}`}
            href={`/products/${product.id}`}
            data-test-id={`product-${product.id}`}
          >
            <Image
              src={product.image}
              width="300"
              height="300"
              alt={product.alt}
              unoptimized
            />
            <h3>{product.name}</h3>
            <p>
              <span data-test-id="product-price">{product.price}</span>
              <span> EUR</span>
            </p>
          </Link>
        );
      })}
    </div>
  );
}
