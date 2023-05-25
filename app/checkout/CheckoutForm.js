'use client';

import styles from './CheckoutForm.module.scss';

export default function CheckoutForm() {
  return (
    <form className={styles.form}>
      <label>
        First Name
        <input data-test-id="checkout-first-name" />
      </label>
      <label>
        Last Name
        <input data-test-id="checkout-last-name" />
      </label>
      <label>
        Email:
        <input data-test-id="checkout-email" />
      </label>
      <label>
        Adress:
        <input data-test-id="checkout-adress" />
      </label>
      <label>
        City:
        <input data-test-id="checkout-city" />
      </label>
      <label>
        Postal Code:
        <input data-test-id="checkout-postal-code" />
      </label>
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
      <button
        className={styles.checkoutButton}
        data-test-id="checkout-confirm-order"
      >
        Confirm!
      </button>
    </form>
  );
}
