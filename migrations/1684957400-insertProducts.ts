import { Sql } from 'postgres';
import { products } from '../database/importProducts.js';

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, price, new, description, image, alt, category_id, type_id)
    VALUES
      (
      ${product.name},
      ${product.price},
      ${product.new},
      ${product.description},
      ${product.image},
      ${product.alt},
      (SELECT id FROM categories WHERE name = ${product.category}),
      (SELECT id FROM types WHERE name = ${product.type})
      )
  `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products WHERE id = ${product.id}
  `;
  }
}
