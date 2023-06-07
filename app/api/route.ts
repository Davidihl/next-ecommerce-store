import { NextResponse } from 'next/server';

export function GET(): NextResponse<{ products: string }> {
  return NextResponse.json({
    products: '/api/products',
    product: '/api/products/:id',
  });
}
