import { getProductById } from '../../database/products.js';

export function getSubTotal(id, quantity) {
  const item = getProductById(id);
  return Number(quantity) * Number(item.price);
}
