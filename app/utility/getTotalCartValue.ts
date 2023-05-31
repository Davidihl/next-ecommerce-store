import { ProductWithQuantityAndPrice } from '../cart/Cart';

export function getTotalCartValue(cart: ProductWithQuantityAndPrice[]) {
  if (!Array.isArray(cart)) {
    throw new Error('Argument is not the expected array');
  }
  const subTotals = cart.map((cartItem) => Number(cartItem.subTotal));

  return subTotals.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
