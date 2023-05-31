import CartItem from '../cart/CartItem';
import { CartItemType } from '../products/[id]/actions';

export function cartAmount(cart: CartItemType[]) {
  if (!Array.isArray(cart)) {
    throw new Error('Argument is not the expected array');
  }

  if (
    cart.some(
      (item) => !item.hasOwnProperty('id') || !item.hasOwnProperty('quantity'),
    )
  ) {
    throw new Error('Invalid cart item');
  }

  const amounts = cart.map((cartItem) => cartItem.quantity);

  return amounts.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0,
  );
}
