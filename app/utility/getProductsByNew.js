import { products } from '../../database/productDb';

export default function getProductsByNew() {
  return products.filter((product) => product.attributes.new === true);
}
