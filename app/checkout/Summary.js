import Cart from '../cart/Cart';
import styles from './Summary.module.scss';

// import styles from './Summary.module.scss';

export default function Summary() {
  return (
    <div className={styles.summary}>
      <h2>Summary</h2>
      <Cart allowChange={false} />
    </div>
  );
}
