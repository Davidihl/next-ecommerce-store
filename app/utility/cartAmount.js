export function cartAmount(cart) {
  const amounts = cart.map((cartItem) => cartItem.quantity);

  return amounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
