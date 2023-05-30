import { getProductById } from '../../database/products';

export async function getSubTotal(id: number, quantity: number) {
  const product = await getProductById(id);
  if (product) return Number(quantity) * Number(product.price);
}
