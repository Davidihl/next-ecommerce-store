'use client';
import { useEffect, useState } from 'react';
import styles from './Badge.module.scss';

export default function Badge({ value }) {
  return (
    <div className={`${styles.badge} ${value === 0 ? styles.noItems : ''}`}>
      <div className={styles.value} data-test-id="cart-count">
        {value}
      </div>
    </div>
  );
}
