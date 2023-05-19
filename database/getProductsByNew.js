import { products } from './productDb';

export default function getProductsByNew() {
  return products.filter((product) => product.attributes.new === true);
}
