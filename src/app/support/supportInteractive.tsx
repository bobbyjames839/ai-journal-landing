"use client";
import { useState } from 'react';
import styles from './page.module.css';

const faqs = [
  { q: 'Where is my data stored?', a: 'Securely in Firebase with encryption in transit & at rest.' },
  { q: 'Do you store raw audio?', a: 'No. Only the text transcription and generated insights (mood, topics, trends, tips).' },
  { q: 'Can I export my journals?', a: 'Export tooling is coming soon. Until then, email us for a manual export.' },
  { q: 'How do I delete my account?', a: 'Email from your signup address with subject “Delete Account” or use in-app deletion (when available).' },
  { q: 'Do you fine-tune models on my entries?', a: 'No. We only use anonymized aggregate patterns to refine prompt quality.' },
  { q: 'Why do AI responses feel different sometimes?', a: 'Prompt or model version adjustments can shift tone; we audit for consistency.' },
  { q: 'Is offline mode supported?', a: 'Not yet; AI processing & transcription require connectivity.' },
  { q: 'Do you sell data?', a: 'Never. Data is only used to provide & improve the service.' },
  { q: 'How fast are insights available?', a: 'Usually within seconds as transcription finalizes.' },
];

export default function SupportInteractive() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={styles.faqGroup}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={styles.faqItem} data-open={isOpen}>
            <button
              className={styles.faqButton}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{f.q}</span>
              <span className={styles.faqChevron}>›</span>
            </button>
            {isOpen && (
              <div id={`faq-panel-${i}`} role="region" className={styles.faqPanel}>
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}