import { expect, test } from '@jest/globals';
import { capitalizeFirstLetter } from '../capitalizeFirstLetter';

test('pass a string with Capital letter', () => {
  const testValue1 = 'UpLeveled';
  const testValue2 = 'headphone';
  const testValue3 = 'KABOOM';
  const testValue4 = { id: 1, name: 'pulse Pro' };

  expect(capitalizeFirstLetter(testValue1)).toBe('UpLeveled');
  expect(capitalizeFirstLetter(testValue2)).toBe('Headphone');
  expect(capitalizeFirstLetter(testValue3)).toBe('KABOOM');
  expect(capitalizeFirstLetter(testValue4.name)).toBe('Pulse Pro');
});

test('Passing invalid arguments', () => {
  // @ts-expect-error passing a number
  expect(() => capitalizeFirstLetter(42)).toThrow('Argument is not a string');
  // @ts-expect-error passing an object
  expect(() => capitalizeFirstLetter({ id: 1, quantity: 1 })).toThrow(
    'Argument is not a string',
  );
  // @ts-expect-error passing an object
  expect(() => capitalizeFirstLetter([1, 2, 3])).toThrow(
    'Argument is not a string',
  );
});
