import { getSubTotal } from './getSubtotal';

export async function getTotalCartValue(cart) {
  const subTotals = await Promise.all(
    cart.map(
      async (cartItem) => await getSubTotal(cartItem.id, cartItem.quantity),
    ),
  );
  return subTotals.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
