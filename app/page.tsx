import Image from 'next/image';
import Link from 'next/link';
import { getProductsByNew } from '../database/products';
import heroImage from '../public/images/hero_hd.png';
import ProductList from './components/ProductList';
import UpdateMetaData from './components/UpdateMetadata';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Pulse | Redefining Sound Excellence',
  description: 'Redefining Sound Excellence',
};

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <UpdateMetaData
          title={metadata.title}
          description={metadata.description}
        />
        <div className={styles.heroMessageContainer}>
          <div className={styles.heroMessage}>
            <h1>
              Pulse. <br /> Redefining Sound Excellence.
            </h1>
            <Link className={styles.heroButton} href="/products">
              Shop Now
            </Link>
          </div>
        </div>
        <Image
          src={heroImage}
          className={styles.heroImage}
          alt="Man wearing Pulse Headphones"
        />
      </section>
      <section className={styles.newArrival}>
        <h2>New Arrivals</h2>

        <ProductList filter={getProductsByNew} />
      </section>
      <section className={styles.about}>
        <h2>About PULSE</h2>
        <p>
          At Pulse, our brand values are at the heart of everything we do. They
          guide us in creating exceptional audio products and delivering an
          unparalleled experience to our customers.
        </p>
      </section>
    </>
  );
}
