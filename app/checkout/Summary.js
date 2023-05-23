import Cart from '../cart/Cart';
import styles from './Summary.module.scss';

export default function Summary({ item }) {
  return (
    <div>
      <Cart allowChange={false} />
    </div>
  );
}
