import { Sql } from 'postgres';
import { products } from '../database/importProducts.js';

// map through fake database object and create an array with only the categories
const onlyCategories = products.map((product) => product.category);

// eliminate duplicates
const uniqueCategories = [...new Set(onlyCategories)];

export async function up(sql: Sql) {
  for (const category of uniqueCategories) {
    await sql`
    INSERT INTO categories
      (name)
    VALUES
      (${category})
  `;
  }
}

export async function down(sql: Sql) {
  for (const category of onlyCategories) {
    await sql`
      DELETE FROM categories WHERE name = ${category}
  `;
  }
}
