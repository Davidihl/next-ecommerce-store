import { Sql } from 'postgres';

export type Type = {
  id: number;
  name: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE types (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(30) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE types
  `;
}
