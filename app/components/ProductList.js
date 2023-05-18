import Image from 'next/image';
import Link from 'next/link';
// import { products } from '../../database/productDb';
import getAllProducts from '../utility/getAllProducts';
import getProductsByNew from '../utility/getProductsByNew';
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
  console.log(products);

  return (
    <div>
      {products.map((product) => {
        return <div key={`product-${product.id}`}>{product.name}</div>;
      })}
    </div>
  );
}
