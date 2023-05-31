import { ProductWithQuantityAndPrice } from '../cart/Cart';

export function getTotalCartValue(cart: ProductWithQuantityAndPrice[]) {
  const subTotals = cart.map((cartItem) => Number(cartItem.subTotal));

  return subTotals.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
