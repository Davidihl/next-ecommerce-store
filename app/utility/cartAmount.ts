import { Cart } from '../products/[id]/actions';

export function cartAmount(cart: Cart[]) {
  const amounts = cart.map((cartItem) => cartItem.quantity);

  return amounts.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0,
  );
}
