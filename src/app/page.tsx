import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Bobee – Info Hub',
  description: 'Central information hub with links to Privacy and Support for Bobee.',
};

export default function HomeHub() {
  return (
    <main className={styles.heroWrap}>
      <div className={styles.centerBox}>
        <img src="/logooo.png" alt="Bobee Logo" className={styles.logo} />
        <h1 className={styles.heading}>Bobee</h1>
        <p className={styles.tagline}>AI-powered voice journaling & personal insight companion.</p>
        <div className={styles.linksRow}>
          <Link href="/privacy" className={styles.navCard}>
            <span className={styles.navTitle}>Privacy</span>
            <span className={styles.navDesc}>How we handle your data</span>
          </Link>
          <Link href="/support" className={styles.navCard}>
            <span className={styles.navTitle}>Support</span>
            <span className={styles.navDesc}>Get help & contact us</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
