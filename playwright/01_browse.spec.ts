import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  // Open webpage
  await page.goto('http://localhost:3000/');

  // Expect a h1
  await expect(
    page.getByRole('heading', { name: 'Pulse. Redefining Sound Excellence.' }),
  ).toBeVisible();

  // Click on "catalog"
  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // Expect a h1
  await expect(
    page.getByRole('heading', { name: 'Explore our products' }),
  ).toBeVisible();

  // Expect 5 product links with an image
  await expect(page.locator('[data-test-id^="product-"] >> img')).toHaveCount(
    5,
  );

  // Click on the first product
  await page.getByTestId('product-1').click();
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  // Expect a h1
  await expect(page.getByRole('heading', { name: 'Pulse Pro' })).toBeVisible();

  // Expect a product picture
  await expect(page.getByTestId('product-image')).toBeVisible();

  // Expect a price
  await expect(
    page.getByTestId('product-price').getByText('349'),
  ).toBeVisible();

  // Expect a quantity input field
  await expect(page.getByTestId('product-quantity')).toBeVisible();

  // Expect an add to cart button
  await expect(page.getByTestId('product-add-to-cart')).toBeVisible();

  // Click on "catalog" again
  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // Click on the second product
  await page.getByTestId('product-2').click();
  await expect(page).toHaveURL('http://localhost:3000/products/2');

  // Expect a h1
  await expect(page.getByRole('heading', { name: 'Pulse Lite' })).toBeVisible();

  // Expect a product picture
  await expect(page.getByTestId('product-image')).toBeVisible();

  // Expect a price
  await expect(
    page.getByTestId('product-price').getByText('149'),
  ).toBeVisible();

  // Expect a quantity input field
  await expect(page.getByTestId('product-quantity')).toBeVisible();

  // Expect an add to cart button
  await expect(page.getByTestId('product-add-to-cart')).toBeVisible();

  // Click on cart icon
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Expect a text: your cart is empty
  await expect(
    page.getByRole('main').getByText('Your cart is empty'),
  ).toBeVisible();

  // Go back to homepage
  await page.getByRole('link', { name: 'Pulse Logo' }).click();
  await expect(page).toHaveURL('http://localhost:3000');
});
