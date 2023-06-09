import Image from 'next/image';
import { transformString } from '../utility/transformString';
import styles from './ProductImage.module.scss';

export default function ProductImage(props) {
  console.log(props.product.name);
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.responsiveImage}
          // src={props.product.image}
          src={`/images/products/${transformString(props.product.name)}.avif`}
          alt={props.product.alt}
          data-test-id="product-image"
          width={600}
          height={600}
          unoptimized
        />
      </div>
    </div>
  );
}
