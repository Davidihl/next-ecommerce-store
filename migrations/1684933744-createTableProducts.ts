import { Sql } from 'postgres';

export type Product = {
  id: number;
  category: number;
  type: number;
  name: string;
  price: number;
  new: boolean;
  description: string;
  image: string;
  alt: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      category integer NOT NULL,
      type integer NOT NULL,
      name varchar(30) NOT NULL,
      price integer NOT NULL,
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
