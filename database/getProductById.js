import { products } from './productDb';

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
