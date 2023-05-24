import { unique } from 'next/dist/build/utils.js';
import { Sql } from 'postgres';
import { products } from '../database/importProducts.js';

// map through fake database object and create an array with only the categories
const onlyTypes = products.map((product) => product.type);

// eliminate duplicates
const uniqueTypes = [...new Set(onlyTypes)];

export async function up(sql: Sql) {
  for (const type of uniqueTypes) {
    await sql`
    INSERT INTO types
      (name)
    VALUES
      (${type})
  `;
  }
}

export async function down(sql: Sql) {
  for (const type of onlyTypes) {
    await sql`
      DELETE FROM types WHERE name = ${type}
  `;
  }
}
