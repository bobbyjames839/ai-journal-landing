"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import logo from '../images/logo.png';
import imageBottom from '../images/bottom.png';
import imageMiddle from '../images/middle.png';
import imageTop from '../images/top.png';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // delay to ensure styles applied then animate next frame
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      } else {
        setStatus('success');
        setMessage(data.message || 'You are on the list!');
        setEmail('');
      }
    } catch {
      setStatus('error');
      setMessage('Network error');
    }
  };

  return (
  <div className={`${styles.main} ${mounted ? styles.ready : ''}`}>
      <span className={styles.wave} aria-hidden="true" />
      <Image src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.left}>
        <h1 className={styles.title}>Bobee</h1>
        <p className={styles.description}>Join the waitlist to get early access to the AI journaling experience.</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button type="submit" className={styles.button} disabled={status==='loading'}>
            {status === 'loading' ? 'Subscribing...' : 'Join Waitlist'}
          </button>
        </form>
        {status === 'success' && <div className={styles.success}>{message}</div>}
        {status === 'error' && <div className={styles.error}>{message}</div>}
      </div>

      <div className={styles.right}>
        <Image src={imageBottom} alt="App image" className={`${styles.image} ${styles.imageLeft}`} />
        <Image src={imageMiddle} alt="App image" className={`${styles.image} ${styles.imageMiddle}`} />
        <Image src={imageTop} alt="App image" className={`${styles.image} ${styles.imageRight}`} />
      </div>
      <div className={styles.footerLinks}>
        <Link href="/support" className={styles.footerLink}>Support</Link>
        <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
      </div>
    </div>
  );
}