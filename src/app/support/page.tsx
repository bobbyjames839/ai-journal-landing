import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import SupportInteractive from './supportInteractive';

export const metadata: Metadata = {
  title: 'Support | Bobee',
  description: 'Get help, contact support, and learn how to use Bobee effectively.',
};

export default function SupportPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.content}>
        <h1>Support</h1>
        <p className={styles.subtitle}>Need help with Bobee? Start here or reach out directly.</p>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Contact</h3>
            <p>Email us anytime at <a href="mailto:contact@bobee.co.uk">contact@bobee.co.uk</a>.</p>
          </div>
          <div className={styles.card}>
            <h3>Data Requests</h3>
            <p>Request export / deletion via email subject: <em>Data Request</em>.</p>
          </div>
            <div className={styles.card}>
            <h3>Privacy</h3>
            <p>Review our practices on the <Link href="/privacy">Privacy page</Link>.</p>
          </div>
          <div className={styles.card}>
            <h3>Status</h3>
            <p>Status page coming soon. For outages, email us.</p>
          </div>
        </div>
        <div className={styles.sectionDivider} />
        <h2>FAQs</h2>
        <SupportInteractive />
        <Link href="/" className={styles.backLink}>← Back to home</Link>
      </section>
    </main>
  );
}