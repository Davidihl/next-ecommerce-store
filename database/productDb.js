export const products = [
  { id: 1, name: 'product', price: 1000, attributes: { attribute1: 'tbd' } },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
