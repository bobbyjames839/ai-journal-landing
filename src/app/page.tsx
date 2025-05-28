'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setSubmitted(true);
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <img src="/logooo.png" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.description}>
Discover insights about yourself through the power of AI. Bobee helps you reflect, grow, and understand the person behind the words. Be the first to experience it.
        </p>
        {submitted ? (
          <p className={styles.success}>Thanks for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Notify Me
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
