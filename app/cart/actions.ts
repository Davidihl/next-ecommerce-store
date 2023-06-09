'use server';
import { cookies } from 'next/headers';
import { CartItemType } from '../products/[id]/actions';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import stayPositive from '../utility/stayPositive';

export async function removeItem(id: number) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects

  const newCart = cart.filter((cartItem: CartItemType) => cartItem.id !== id); // Create a new array excluding the one to be removed

  await cookies().set('cart', JSON.stringify(newCart));
}

export async function decreaseQuantity(id: number) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects

  const updateProductInCart = cart.find((cartItem: CartItemType) => {
    return cartItem.id === id;
  });

  updateProductInCart.quantity = stayPositive(updateProductInCart.quantity - 1);

  await cookies().set('cart', JSON.stringify(cart));
}

export async function increaseQuantity(id: number) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects

  const updateProductInCart = cart.find((cartItem: CartItemType) => {
    return cartItem.id === id;
  });

  updateProductInCart.quantity = stayPositive(updateProductInCart.quantity + 1);

  await cookies().set('cart', JSON.stringify(cart));
}

export async function clearCart() {
  await cookies().set('cart', '');
}
