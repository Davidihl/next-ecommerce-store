import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  price: number;
  new: boolean;
  description: string;
  image: string;
  alt: string;
  category: string;
  type: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      category_id integer NOT NULL REFERENCES categories (id) ON DELETE CASCADE,
      type_id integer NOT NULL REFERENCES types (id) ON DELETE CASCADE,
      name varchar(30) NOT NULL,
      price numeric NOT NULL,
      new boolean NOT NULL,
      description text NOT NULL,
      image varchar(255) NOT NULL,
      alt text NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE products
  `;
}
