import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../public/images/hero.png';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroMessageContainer}>
          <div className={styles.heroMessage}>
            <h1>Pulse. Redefining Sound Excellence.</h1>
            <Link className={styles.heroButton} href="/#">
              Shop Now
            </Link>
          </div>
        </div>
        <Image
          src={heroImage}
          className={styles.heroImage}
          alt="Picture of the author"
        />
      </section>
      <div>
        <div>New Arrival</div>
        <div>
          <div>Image</div>
          <div>Text</div>
        </div>
      </div>
      <h2>About PULSE</h2>
      <div>
        At Pulse, our brand values are at the heart of everything we do. They
        guide us in creating exceptional audio products and delivering an
        unparalleled experience to our customers.
      </div>
    </>
  );
}
