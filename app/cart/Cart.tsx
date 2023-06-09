import { Fragment } from 'react';
import { getAllProducts } from '../../database/products'; // import getProductsInCart if fetching from database instead of mapping through all products
import { Product } from '../../migrations/1684957255-createTableProducts';
// import type { CartItemType } from '../products/[id]/actions';
import { checkCookie } from '../utility/checkCookie';
import { getCookie } from '../utility/cookie';
import { getTotalCartValue } from '../utility/getTotalCartValue';
import styles from './Cart.module.scss';
import CartItem from './CartItem';

export type ProductWithQuantityAndPrice = Product & {
  quantity: number;
  subTotal: number;
};

export type ProductWithQuantity = Product & {
  quantity: number;
};

type Props = {
  allowChange: boolean;
};

export default async function Cart(props: Props) {
  const cartCookie = getCookie('cart'); // Get cookie from client as string
  const cart = checkCookie(cartCookie); // Check cookie and return array of objects
  // const cartIds = cart.map((cartItem: CartItemType) => cartItem.id);

  // Get all products from database and transform it for drone
  const allProducts = await getAllProducts();
  const allProductsWithQuantity: ProductWithQuantity[] = allProducts.map(
    (product) => {
      const matchingCookie = cart.find(
        (item: { id: number; quantity: number }) => item.id === product.id,
      );
      const quantity = matchingCookie ? matchingCookie.quantity : 0;
      return { ...product, quantity };
    },
  );
  const onlyProductsWithQuantity: ProductWithQuantity[] =
    allProductsWithQuantity.filter((product) => product.quantity > 0);

  // Get all products from database that are in my cart
  // const products = await getProductsInCart(cartIds);

  // Transform the array that the product data contain quantity
  // const productsWithQuantity = products.map((product: Product) => ({
  //   ...product,
  //   ...cart.find((cartItem: CartItemType) => cartItem.id === product.id),
  // }));

  // Transform the array again to store the subtotal in the object
  const productsWithQuantityAndPrice = onlyProductsWithQuantity.map(
    (product: ProductWithQuantity) => ({
      ...product,
      subTotal: Number(product.price) * Number(product.quantity),
    }),
  );

  const totalValue = getTotalCartValue(productsWithQuantityAndPrice);

  return (
    <>
      {cart.length > 0
        ? productsWithQuantityAndPrice.map(
            (product: ProductWithQuantityAndPrice) => (
              <CartItem
                key={`cartItem-div-${product.id}`}
                product={product}
                allowChange={props.allowChange}
              />
            ),
          )
        : ''}
      {cart.length > 0 ? (
        <div data-test-id="cart-total" className={styles.totalSumContainer}>
          <span className={styles.totalSumText}>Total:</span>
          <span className={styles.totalSumValue}>{totalValue}</span>
          <span className={styles.totalSumCurrency}>EUR</span>
        </div>
      ) : (
        <div className={styles.noCart}>Your cart is empty</div>
      )}
    </>
  );
}
