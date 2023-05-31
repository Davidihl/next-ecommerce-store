import { expect, test } from '@jest/globals';
import { capitalizeFirstLetter } from '../capitalizeFirstLetter';

test('pass a string with Capital letter', () => {
  const testValue1 = 'UpLeveled';
  const testValue2 = 'headphone';
  const testValue3 = 'KABOOM';

  expect(capitalizeFirstLetter('UpLeveled')).toBe('Upleveled');
});
