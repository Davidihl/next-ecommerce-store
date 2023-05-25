import { getProductById } from '../../database/products.ts';

export async function getSubTotal(id, quantity) {
  const item = await getProductById(id);
  return Number(quantity) * Number(item.price);
}
