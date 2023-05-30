'use client';
import styles from './error.module.scss';

export default function RootError() {
  return <div className={styles.error}>Ups! something went wrong</div>;
}
