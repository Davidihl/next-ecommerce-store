import { expect, test } from '@jest/globals';
import stayPositive from '../stayPositive';

test('Pass numbers', () => {
  expect(stayPositive(1)).toBe(1);
  expect(stayPositive(2)).toBe(2);
  expect(stayPositive(0)).toBe(1);
  expect(stayPositive(-1)).toBe(1);
});

test('Pass invalid arguments', () => {
  // @ts-expect-error passing a string
  expect(() => stayPositive('1')).toThrow('Argument is not a number');
  // @ts-expect-error passing an object
  expect(() => stayPositive({ id: 1 })).toThrow('Argument is not a number');
  // @ts-expect-error passing a boolean
  expect(() => stayPositive(true)).toThrow('Argument is not a number');
  // @ts-expect-error passing an array
  expect(() => stayPositive([1, 2])).toThrow('Argument is not a number');
});
