import { getSubTotal } from './getSubtotal';

export function getTotalCartValue(cart) {
  const subTotals = cart.map((cartItem) =>
    getSubTotal(cartItem.id, cartItem.quantity),
  );
  return subTotals.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
