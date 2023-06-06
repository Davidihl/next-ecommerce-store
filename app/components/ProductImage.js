import Image from 'next/image';
import { base64Images } from '../../database/importProducts';
import styles from './ProductImage.module.scss';

function shimmer(w, h) {
  return (
    <svg
      width="${w}"
      height="${h}"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate
        xlink:href="#r"
        attributeName="x"
        from="-${w}"
        to="${w}"
        dur="1s"
        repeatCount="indefinite"
      />
    </svg>
  );
}

function toBase64(str) {
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
}

export default function ProductImage(props) {
  function getBase64Image(id) {
    return base64Images.find((baseImage) => baseImage.id === Number(id)).path;
  }

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
          placeholder="blur"
          blurDataURL={`${getBase64Image(props.baseId)},${toBase64(
            shimmer(600, 600),
          )}`}
          priority={true}
        />
      </div>
    </div>
  );
}
