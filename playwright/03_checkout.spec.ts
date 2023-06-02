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

  // Check checkout form
  await expect(page.getByTestId('checkout-first-name')).toBeVisible();
  await page.getByTestId('checkout-first-name').fill('Luke');

  await expect(page.getByTestId('checkout-last-name')).toBeVisible();
  await page.getByTestId('checkout-last-name').fill('Skywaler');

  await expect(page.getByTestId('checkout-email')).toBeVisible();
  await page
    .getByTestId('checkout-email')
    .fill('luke.skywaler@rebellion.galaxy');

  // Try to proceed without filling out the form
  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();
  await expect(page.getByTestId('checkout-confirm-order')).toHaveAttribute(
    'disabled',
    '',
  );

  // Continue filling out the checkout
  await expect(page.getByTestId('checkout-address')).toBeVisible();
  await page.getByTestId('checkout-address').fill('Uncle Owen Farm');

  await expect(page.getByTestId('checkout-postal-code')).toBeVisible();
  await page.getByTestId('checkout-postal-code').fill('36225');

  await expect(page.getByTestId('checkout-city')).toBeVisible();
  await page.getByTestId('checkout-city').fill('Mos Eisley County');

  await expect(page.getByTestId('checkout-country')).toBeVisible();
  await page.getByTestId('checkout-country').fill('Tatooine');

  // Proceed to payment info
  await expect(page.getByTestId('checkout-credit-card')).toBeVisible();
  await page.getByTestId('checkout-credit-card').fill('4242 4242 4242 4242');

  await expect(page.getByTestId('checkout-expiration-date')).toBeVisible();
  await page.getByTestId('checkout-expiration-date').fill('12/26');

  await expect(page.getByTestId('checkout-security-code')).toBeVisible();
  await page.getByTestId('checkout-security-code').fill('404');

  // Proceed to checkout Button
  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();
  await page.getByTestId('checkout-confirm-order').click();

  // Finish
  await expect(page).toHaveURL('http://localhost:3000/checkout/thank-you');
  await expect(page).toHaveTitle('Thank you for your order');
});
