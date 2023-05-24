// export const products = [
//  {
//    id: 1,
//    name: 'Pulse Pro',
//    category: 'headset',
//    price: 349,
//    type: 'wireless',
//    new: true,
//    description:
//      'Experience unparalleled audio quality and crystal-clear communication with the Pulse Pro high-end headset. Immerse yourself in a world of premium sound as the Pro delivers rich, immersive audio that brings your music, movies, and games to life. With its built-in high-performance microphone, you can engage in seamless voice chats and experience clear, precise communication. Crafted with precision and attention to detail, the Pulse Pro redefines what it means to have a top-tier audio experience.',
//    image: '/images/products/pulsepro.png',
//    alt: 'Pulse Pro Headset',
//  },
//  {
//    id: 2,
//    name: 'Pulse Lite',
//    category: 'headset',
//    price: 149,
//    type: 'wireless',
//    new: false,
//    description:
//      "Step into the world of quality audio without compromising on functionality with the Pulse Lite entry-level headset. Designed for those seeking an affordable option without sacrificing performance, the Lite delivers impressive sound quality for your everyday needs. Whether you're listening to music, watching videos, or engaging in voice chats, the Lite ensures a balanced audio experience. Equipped with an integrated microphone, it allows you to communicate effortlessly with clarity and precision.",
//    image: '/images/products/pulselite.png',
//    alt: 'Pulse Lite Headset',
//  },
//  {
//    id: 3,
//    name: 'Pulse Pure',
//    category: 'headphone',
//    price: 249,
//    type: 'wireless',
//    new: false,
//    description:
//      'Elevate your audio experience with the Pulse Pure high-end headset. Immerse yourself in rich, detailed sound that captivates your senses and transports you into the heart of the action. With its premium audio drivers and advanced acoustic engineering, the Pure delivers exceptional clarity and precision across the entire frequency range. Designed for true audio enthusiasts, this headset is the epitome of pure audio excellence, without the need for a built-in microphone.',
//    image: '/images/products/pulsepure.png',
//    alt: 'Pulse Pure Headphone',
//  },
//  {
//    id: 4,
//    name: 'Pulse Sound',
//    category: 'headphone',
//    price: 99,
//    type: 'wireless',
//    new: true,
//    description:
//      'Discover the perfect blend of affordability and performance with the Pulse Sound entry-level headset. Let the rhythmic beats flow through your ears as you enjoy a dynamic and immersive audio experience. With its sleek design and comfortable fit, the Sound is ideal for extended listening sessions. While it does not include a built-in microphone, its focus on audio quality makes it the perfect choice for those who prioritize a rich sound experience at an accessible price point.',
//    image: '/images/products/pulsesound.png',
//    alt: 'Pulse Sound Headphone',
//  },
//  {
//    id: 5,
//    name: 'Pulse Go',
//    category: 'earplug',
//    price: 49,
//    type: 'wireless',
//    new: true,
//    description:
//      'Introducing PulseBeat Go: your portable audio companion that combines convenience, quality, and affordability. Immerse yourself in your favorite tunes wherever you go, thanks to these easy-to-transport in-ear plugs. With their sleek design and comfortable fit, PulseBeat Go ensures that your music accompanies you on every adventure, providing a dynamic and enjoyable audio experience on the move. Let the pulse of your favorite beats ignite your passion for music with PulseBeat Go.',
//
//    image: '/images/products/pulsego.png',
//    alt: 'Pulse Go Headphone',
//  },
// ];
//
// export function getAllProducts() {
//   return products;
// }
//
// export function getProductsByNew() {
//   return products.filter((product) => product.new === true);
// }
//
// export function getProductById(id) {
//   return products.find((product) => product.id === id);
// }

import { cache } from 'react';
import { Product } from '../migrations/1684957255-createTableProducts';
import { sql } from './connect';

export const getAllProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      products.id AS id,
      products.name AS name,
      products.price AS price,
      products.new AS new,
      products.description AS description,
      products.image AS image,
      products.alt AS alt,
      categories.name AS category,
      types.name AS type
    FROM
      products
    INNER JOIN
      categories
    ON
      products.category_id = categories.id
    INNER JOIN
      types
    ON
      products.type_id = types.id

 `;
  return products;
});

export const getProductsById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
  SELECT
    products.id AS id,
    products.name AS name,
    products.price AS price,
    products.new AS new,
    products.description AS description,
    products.image AS image,
    products.alt AS alt,
    categories.name AS category,
    types.name AS type
  FROM
    products
  INNER JOIN
    categories
  ON
    products.category_id = categories.id
  INNER JOIN
    types
  ON
    products.type_id = types.id
  WHERE
    products.id = ${id}
`;
  return product;
});

export const getProductsByNew = cache(async () => {
  const [product] = await sql<Product[]>`
  SELECT
    products.id AS id,
    products.name AS name,
    products.price AS price,
    products.new AS new,
    products.description AS description,
    products.image AS image,
    products.alt AS alt,
    categories.name AS category,
    types.name AS type
  FROM
    products
  INNER JOIN
    categories
  ON
    products.category_id = categories.id
  INNER JOIN
    types
  ON
    products.type_id = types.id
  WHERE
    products.new = true
`;
  return product;
});
