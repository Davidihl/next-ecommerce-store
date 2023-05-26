import Image from 'next/image';
import Link from 'next/link';
import thanks from '../../../public/images/thanks.png';
import styles from './page.module.scss';

export const metadata = {
  title: 'Animals page',
  description: 'My favorite animals',
};

export default function ThankYouPage() {
  return (
    <main className={styles.wrapper}>
      <div>
        <h1 className={styles.thankYou}>Thank you for your purchase!</h1>
        <p>Your order has been confirmed</p>
      </div>
      <Image src={thanks} styles={styles.image} width={300} height={300} />
      <Link href="/">Back to shopping</Link>
    </main>
  );
}
