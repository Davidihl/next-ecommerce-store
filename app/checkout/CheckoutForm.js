'use client';

import Link from 'next/link';
import styles from './CheckoutForm.module.scss';

export default function CheckoutForm() {
  return (
    <form className={styles.form}>
      <div>Please fill out the checkout form:</div>
      <div className={styles.name}>
        <label>
          First Name
          <input data-test-id="checkout-first-name" />
        </label>
        <label>
          Last Name
          <input data-test-id="checkout-last-name" />
        </label>
      </div>
      <label>
        Email:
        <input data-test-id="checkout-email" />
      </label>
      <label>
        Adress:
        <input data-test-id="checkout-adress" />
      </label>
      <div className={styles.city}>
        <label>
          Postal Code:
          <input data-test-id="checkout-postal-code" />
        </label>
        <label>
          City:
          <input data-test-id="checkout-city" />
        </label>
      </div>
      <label>
        Country:
        <input data-test-id="checkout-country" />
      </label>
      <div className={styles.creditCard}>
        <label>
          Credit Cart Number:
          <input
            placeholder="11112222333444"
            className={styles.ccInput}
            data-test-id="checkout-credit-card"
          />
        </label>
        <div className={styles.creditCardExpCvc}>
          <label>
            Expiration Date:
            <input
              className={styles.ccInput}
              data-test-id="checkout-expiration-date"
              placeholder="02/25"
            />
          </label>
          <label>
            Security Code:
            <input
              className={styles.ccInput}
              data-test-id="checkout-security-code"
              placeholder="123"
            />
          </label>
        </div>
      </div>
      <div className={styles.confirmWrapper}>
        <Link
          className={styles.checkoutButton}
          data-test-id="checkout-confirm-order"
          href="/checkout/thank-you"
        >
          Confirm Order
        </Link>
      </div>
    </form>
  );
}
