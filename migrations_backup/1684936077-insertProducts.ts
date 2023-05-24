import { Sql } from 'postgres';
import { products } from '../database/importProducts.js';

export async function up(sql: Sql) {
    INSERT INTO products
      (name)
    VALUES
      (${product.name}, ${product.price}, ${product.new}, ${product.description}, ${product.image}, ${product.alt})
  `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM animals WHERE id = ${product.id}
  `;
  }
}
