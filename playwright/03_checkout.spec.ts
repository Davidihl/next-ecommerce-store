import { expect, test } from '@playwright/test';

test('test checkout flow', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click on "catalog"
  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // Click on a product
  await page.getByTestId('product-2').click();
  await expect(page).toHaveURL('http://localhost:3000/products/2');

  // Click on add to cart button
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('1')).toBeVisible();

  // Go to the cart page
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Go to the checkout page
  await page.getByTestId('cart-checkout').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
});
