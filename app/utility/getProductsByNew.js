import products from '../../database/productDb';

export function getProductsByNew() {
  return products.filter((product) => product.attributes.new === true);
}
