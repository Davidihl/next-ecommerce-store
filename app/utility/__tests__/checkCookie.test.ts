import { expect, test } from '@jest/globals';
import { checkCookie } from '../checkCookie';

test('pass valid arguments', () => {
  const cart = [
    { id: 1, quantity: 1 },
    { id: 2, quantity: 2 },
    { id: 3, quantity: 3 },
  ];

  const cartString = JSON.stringify(cart);

  expect(checkCookie(cartString)).toStrictEqual(cart);
  expect(checkCookie(undefined)).toStrictEqual([]);
});

test('pass invalid arguments', () => {
  // @ts-expect-error passing a number
  expect(checkCookie(1)).toStrictEqual(undefined);
});
