import styles from './Badge.module.scss';

export default function Badge({ value }) {
  return (
    <div className={`${styles.badge} ${value === 0 ? styles.noItems : ''}`}>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
