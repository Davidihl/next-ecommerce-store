import Image from 'next/image';
import { base64Images } from '../../database/importProducts';
import styles from './ProductImage.module.scss';

// function shimmer(w, h) {
//   return (
//     <svg width={w} height={h}>
//       <defs>
//         <linearGradient id="a">
//           <stop offset="20%" stopColor="#333" />
//           <stop offset="50%" stopColor="#222" />
//           <stop offset="70%" stopColor="#333" />
//         </linearGradient>
//       </defs>
//       <rect width={w} height={h} fill="#333" />
//       <rect id="b" width={w} height={h} fill="url(#a)" />
//       <animate
//         xlinkHref="#b"
//         attributeName="x"
//         dur="1s"
//         from={`-${w}`}
//         repeatCount="indefinite"
//         to={w}
//       />
//     </svg>
//   );
// }

// function toBase64(str) {
//   typeof window === 'undefined'
//     ? Buffer.from(str).toString('base64')
//     : window.btoa(str);
// }

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
          blurDataURL={getBase64Image(props.baseId)}
          priority={true}
        />
      </div>
    </div>
  );
}
