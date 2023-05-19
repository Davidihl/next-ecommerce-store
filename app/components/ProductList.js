import Image from 'next/image';
import Link from 'next/link';
// import getAllProducts from '../../database/getAllProducts';
import { getAllProducts } from '../../database/products';
import styles from './ProductList.module.scss';

function getProducts(filter) {
  if (filter) {
    return filter();
  } else {
    return getAllProducts();
  }
}

export default function ProductList(props) {
  const products = getProducts(props.filter);

  return (
    <div className={styles.productList}>
      {products.map((product) => {
        return (
          <Link key={`product-${product.id}`} href={`/products/${product.id}`}>
            <Image src={product.image} width="300" height="300" />
            <h3>{product.name}</h3>
            <p>{product.price} EUR</p>
          </Link>
        );
      })}
    </div>
  );
}
