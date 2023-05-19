import Image from 'next/image';
import styles from './ProductImage.module.scss';

export default function ProductImage(props) {
  return (
    <>
      <div className={styles.smallImage}>
        <Image
          src={props.product.image}
          alt={props.product.name}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.bigImage}>
        <Image
          src={props.product.image}
          alt={props.product.name}
          width={400}
          height={400}
        />
      </div>
    </>
  );
}
