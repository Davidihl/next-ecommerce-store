import { expect, test } from '@playwright/test';

test('add product / change quantity / remove product from cart test', async ({
  page,
}) => {
  // Open webpage
  await page.goto('http://localhost:3000/');

  // Click on "catalog"
  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // Click on a product
  await page.getByTestId('product-5').click();
  await expect(page).toHaveURL('http://localhost:3000/products/5');

  // Click on add to cart button
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('1')).toBeVisible();

  // Click on quantity field
  await page.getByTestId('product-quantity').click();

  // Change quantity in input field and click on cart
  await page.getByTestId('product-quantity').fill('2');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('3')).toBeVisible();

  // Click on "catalog"
  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // Click on a product
  await page.getByTestId('product-3').click();
  await expect(page).toHaveURL('http://localhost:3000/products/3');

  // Click on add to cart button
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('4')).toBeVisible();

  // Go to the cart page
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Expect 2 cart items
  await expect(
    page.locator('main >> [data-test-id^="cart-product-image-"]'),
  ).toHaveCount(2);

  // Check for quantities
  await expect(
    page.locator('main >> [data-test-id^="cart-product-quantity-"]'),
  ).toHaveCount(2);

  // Check for remove button
  await expect(
    page.locator('main >> [data-test-id^="cart-product-remove-"]'),
  ).toHaveCount(2);

  // Change quantity
  await page
    .getByTestId('cart-product-5')
    .getByRole('button', { name: 'Decrease Quantity Icon' })
    .click();
  await page

    .getByTestId('cart-product-5')
    .getByRole('button', { name: 'Decrease Quantity Icon' })
    .click();
  await page

    .getByTestId('cart-product-5')
    .getByRole('button', { name: 'Decrease Quantity Icon' })
    .click();

  // Check if quantity is as expected
  await expect(
    page.getByTestId('cart-product-quantity-5').getByText('1'),
  ).toBeVisible();

  // Change other quantity
  await page

    .getByTestId('cart-product-3')
    .getByRole('button', { name: 'Increase Quantity Icon' })
    .click();

  // Check if quantity is as expected
  await expect(
    page.getByTestId('cart-product-quantity-3').getByText('2'),
  ).toBeVisible();

  // Remove item
  await page.getByRole('main').getByTestId('cart-product-remove-5').click();

  // Expect one remaining cart item
  // Expect 2 cart items
  await expect(
    page.locator('main >> [data-test-id^="cart-product-image-"]'),
  ).toHaveCount(1);

  // Check total sum
  await expect(
    page.getByRole('main').getByTestId('cart-total').getByText('498'),
  ).toBeVisible();
});
