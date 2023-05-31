import { expect, test } from '@jest/globals';
import { getTotalCartValue } from '../getTotalCartValue';

test('calculate total card value', () => {
  const cart = [
    {
      id: 1,
      name: 'Pulse Pro',
      price: 349,
      new: true,
      description:
        'Experience unparalleled audio quality and crystal-clear communication with the Pulse Pro high-end headset. Immerse yourself in a world of premium sound as the Pro delivers rich, immersive audio that brings your music, movies, and games to life. With its built-in high-performance microphone, you can engage in seamless voice chats and experience clear, precise communication. Crafted with precision and attention to detail, the Pulse Pro redefines what it means to have a top-tier audio experience.',
      image: '/images/products/pulsepro.png',
      alt: 'Pulse Pro Headset',
      category: 'headset',
      type: 'wireless',
      quantity: 1,
      subTotal: 349,
    },
    {
      id: 2,
      name: 'Pulse Lite',
      price: 149,
      new: false,
      description:
        "Step into the world of quality audio without compromising on functionality with the Pulse Lite entry-level headset. Designed for those seeking an affordable option without sacrificing performance, the Lite delivers impressive sound quality for your everyday needs. Whether you're listening to music, watching videos, or engaging in voice chats, the Lite ensures a balanced audio experience. Equipped with an integrated microphone, it allows you to communicate effortlessly with clarity and precision.",
      image: '/images/products/pulselite.png',
      alt: 'Pulse Lite Headset',
      category: 'headset',
      type: 'with cords',
      quantity: 5,
      subTotal: 745,
    },
  ];

  expect(getTotalCartValue(cart)).toBe(1094);
});

test('Passing invalid arguments', () => {
  // @ts-expect-error passing a number
  expect(() => getTotalCartValue(42)).toThrow(
    'Argument is not the expected array',
  );
  // @ts-expect-error passing a string
  expect(() => getTotalCartValue('42')).toThrow(
    'Argument is not the expected array',
  );
  // @ts-expect-error passing a boolean
  expect(() => getTotalCartValue(true)).toThrow(
    'Argument is not the expected array',
  );
  // @ts-expect-error passing an object
  expect(() => getTotalCartValue({ id: 1, quantity: 3 })).toThrow(
    'Argument is not the expected array',
  );
  // @ts-expect-error passing undefined
  expect(() => getTotalCartValue()).toThrow(
    'Argument is not the expected array',
  );
});
