import Image from 'next/image';
import styles from './ProductImage.module.scss';

export default function ProductImage(props) {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.responsiveImage}
          src={props.product.image}
          alt={props.product.alt}
          data-test-id="product-image"
          width={600}
          height={600}
          // priority={true}
        />
      </div>
    </div>
  );
}
