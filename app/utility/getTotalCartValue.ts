import { CartItemType } from '../products/[id]/actions';
import { getSubTotal } from './getSubtotal';

export async function getTotalCartValue(cart: CartItemType[]) {
  const subTotals = await Promise.all(
    cart.map(async (cartItem) =>
      Number(await getSubTotal(cartItem.id, cartItem.quantity)),
    ),
  );

  return subTotals.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
