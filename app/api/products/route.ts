import { NextResponse } from 'next/server';
// import { z } from 'zod';
import { getAllProducts } from '../../../database/products';
import { Product } from '../../../migrations/1684957255-createTableProducts';

export const dynamic = 'force-dynamic';

export type Error = {
  error: string;
};

type ProductsResponseBodyGet = { products: Product[] } | Error;
// type ProductsResponseBodyPost = { product: Product } | Error;

export async function GET(): Promise<NextResponse<ProductsResponseBodyGet>> {
  const products = await getAllProducts();

  return NextResponse.json({ products: products });
}
