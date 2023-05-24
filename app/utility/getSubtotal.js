import { getProductById } from '../../database/products.ts';

export function getSubTotal(id, quantity) {
  const item = getProductById(id);
  return Number(quantity) * Number(item.price);
}
