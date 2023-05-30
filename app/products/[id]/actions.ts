'use server';
import { cookies } from 'next/headers';
import { checkCookie } from '../../utility/checkCookie';
import { getCookie } from '../../utility/cookie';

export type Cart = {
  id: number;
  quantity: number;
};

export async function updateCart(id: number, quantity: number) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects

  // Find item in cart, if it doesnt exist -> return undefined
  const updateProductInCart = cart.find((product: Cart) => {
    return product.id === id;
  });

  if (updateProductInCart) {
    updateProductInCart.quantity =
      Number(updateProductInCart.quantity) + Number(quantity); // If item already in cart, update it
  } else {
    cart.push({ id, quantity }); // If item don't exists, add it to cart
  }

  await cookies().set('cart', JSON.stringify(cart));
}
