import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getAllProducts } from '../../../database/products';
import { Product } from '../../../migrations/1684957255-createTableProducts';

export type Error = {
  error: string;
};

type ProductsResponseBodyGet = { products: Product[] } | Error;
// type ProductsResponseBodyPost = { product: Product } | Error;

export async function GET(
  request: NextRequest,
): Promise<NextResponse<ProductsResponseBodyGet>> {
  // query the database to get all the animals
  const products = await getAllProducts();

  return NextResponse.json({ products: products });
}
