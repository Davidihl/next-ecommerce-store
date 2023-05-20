import styles from './Badge.module.scss';

export default function Badge({ value }) {
  return (
    <div className={styles.badge}>
      <div className={styles.value}>1</div>
    </div>
  );
}
