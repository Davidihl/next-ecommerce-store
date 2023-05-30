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
    ORDER BY
      id

 `;
  return products;
});

export const getProductById = cache(async (id: number) => {
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

export const getProductsInCart = cache(async (cartIds: number[]) => {
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
    WHERE
      products.id = any(ARRAY[${cartIds}::integer[]])

  `;
  return products;
});

export const getProductsByNew = cache(async () => {
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
  WHERE
    products.new = true
`;
  return products;
});
