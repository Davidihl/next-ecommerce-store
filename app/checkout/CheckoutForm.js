import styles from './CheckoutForm.module.scss';

export default function CheckoutForm() {
  return (
    <form className={styles.form}>
      <label>
        First name
        <input data-test-id="checkout-first-name" />
      </label>
      <label>
        Last name
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
    </form>
  );
}
