import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  getProductById,
  updateProductImageById,
} from '../../../../database/products';
import { Product } from '../../../../migrations/1684957255-createTableProducts';
import { Error } from '../route';

type ProductResponseBodyPut =
  | {
      product: {
        id: number;
        categoryId: number;
        typeId: number;
        name: string;
        price: number;
        new: boolean;
        description: string;
        image: string;
        alt: string;
      };
    }
  | Error;
type ProductResponseBodyGet = { product: Product } | Error;

const productSchema = z.object({
  // name: z.string(),
  // price: z.number(),
  // new: z.boolean(),
  // description: z.string(),
  image: z.string(),
  // alt: z.string(),
  // category: z.string(),
  // type: z.string(),
});

export async function GET(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<ProductResponseBodyGet>> {
  const productId = Number(params.id);

  if (!productId) {
    return NextResponse.json(
      {
        error: 'Product id is not valid',
      },
      { status: 400 },
    );
  }
  // query the database to get all the animals
  const product = await getProductById(productId);

  if (!product) {
    return NextResponse.json(
      {
        error: 'Product Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({ product: product });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Record<string, string | string[]> },
): Promise<NextResponse<ProductResponseBodyPut>> {
  const productId = Number(params.id);
  const body = await request.json();

  if (!productId) {
    return NextResponse.json(
      {
        error: 'Product id is not valid',
      },
      { status: 400 },
    );
  }

  // zod please verify the body matches my schema
  const result = productSchema.safeParse(body);

  if (!result.success) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'The data is incomplete',
      },
      { status: 400 },
    );
  }
  // query the database to update the animal
  const product = await updateProductImageById(productId, result.data.image);

  if (!product) {
    return NextResponse.json(
      {
        error: 'Product Not Found',
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    product: product,
  });
}
