import { expect, test } from '@jest/globals';
import { cartAmount } from '../cartAmount';

test('Calculate items in cart', () => {
  const cart = [
    { id: 1, quantity: 1 },
    { id: 2, quantity: 2 },
    { id: 3, quantity: 3 },
  ];

  expect(cartAmount(cart)).toBe(6);
});

test('Passing invalid arguments', () => {
  // @ts-expect-error passing a number
  expect(() => cartAmount(1)).toThrow('Argument is not the expected array');

  // @ts-expect-error passing a boolean
  expect(() => cartAmount(Boolean)).toThrow(
    'Argument is not the expected array',
  );
  // @ts-expect-error passing a string
  expect(() => cartAmount('Nope')).toThrow(
    'Argument is not the expected array',
  );

  // @ts-expect-error passing an invalid array
  expect(() => cartAmount([1, 2])).toThrow('Invalid cart item');

  // @ts-expect-error passing an invalid array
  expect(() => cartAmount(['Hallo', 'Lukas'])).toThrow('Invalid cart item');

  // @ts-expect-error passing an invalid array
  expect(() => cartAmount([{ id: 1, price: 200 }])).toThrow(
    'Invalid cart item',
  );
});
