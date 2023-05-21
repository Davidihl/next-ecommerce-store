'use server';
import { cookies } from 'next/headers';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import stayPositive from '../utility/stayPositive';

export async function removeItem(id) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects

  const newCart = cart.filter((cartItem) => cartItem.id !== id); // Create a new array excluding the one to be removed

  await cookies().set('cart', JSON.stringify(newCart));
}

export async function decreaseQuantity(id) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects

  const updateProductInCart = cart.find((product) => {
    return product.id === id;
  });

  updateProductInCart.quantity = stayPositive(updateProductInCart.quantity - 1);

  await cookies().set('cart', JSON.stringify(cart));
}

export async function increaseQuantity(id) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects

  const updateProductInCart = cart.find((product) => {
    return product.id === id;
  });

  updateProductInCart.quantity = stayPositive(updateProductInCart.quantity + 1);

  await cookies().set('cart', JSON.stringify(cart));
}
