'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './CheckoutForm.module.scss';

export default function CheckoutForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [postal, setPostal] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const router = useRouter();

  return (
    <form className={styles.form}>
      <div>Please fill out the checkout form:</div>
      <div className={styles.name}>
        <label>
          First Name
          <input
            data-test-id="checkout-first-name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
        </label>
        <label>
          Last Name
          <input
            data-test-id="checkout-last-name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
        </label>
      </div>
      <label>
        Email:
        <input
          data-test-id="checkout-email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
      </label>
      <label>
        Adress:
        <input
          data-test-id="checkout-adress"
          value={adress}
          onChange={(event) => setAdress(event.currentTarget.value)}
        />
      </label>
      <div className={styles.city}>
        <label>
          Postal Code:
          <input
            data-test-id="checkout-postal-code"
            value={postal}
            onChange={(event) => setPostal(event.currentTarget.value)}
          />
        </label>
        <label>
          City:
          <input
            data-test-id="checkout-city"
            value={city}
            onChange={(event) => setCity(event.currentTarget.value)}
          />
        </label>
      </div>
      <label>
        Country:
        <input
          data-test-id="checkout-country"
          value={country}
          onChange={(event) => setCountry(event.currentTarget.value)}
        />
      </label>
      <div className={styles.creditCard}>
        <label>
          Credit Cart Number:
          <input
            placeholder="11112222333444"
            className={styles.ccInput}
            data-test-id="checkout-credit-card"
            value={creditCard}
            onChange={(event) => setCreditCard(event.currentTarget.value)}
          />
        </label>
        <div className={styles.creditCardExpCvc}>
          <label>
            Expiration Date:
            <input
              className={styles.ccInput}
              data-test-id="checkout-expiration-date"
              placeholder="02/25"
              value={expiration}
              onChange={(event) => setExpiration(event.currentTarget.value)}
            />
          </label>
          <label>
            Security Code:
            <input
              className={styles.ccInput}
              data-test-id="checkout-security-code"
              placeholder="123"
              value={securityCode}
              onChange={(event) => setSecurityCode(event.currentTarget.value)}
            />
          </label>
        </div>
      </div>
      <div className={styles.confirmWrapper}>
        <button
          className={styles.checkoutButton}
          data-test-id="checkout-confirm-order"
          formAction={() => router.push('/checkout/thank-you')}
        >
          Confirm Order
        </button>
      </div>
    </form>
  );
}
