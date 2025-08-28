"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface FAQ { q: string; a: string; }
const faqs: FAQ[] = [
  { q: 'How do I join Bobee?', a: 'Add your email on the homepage waitlist. Invites roll out in batches so keep an eye on your inbox.' },
  { q: 'When will I get access?', a: 'We release access waves weekly based on capacity and feedback cycles.' },
  { q: 'Do you store my audio?', a: 'No. We store only the text transcription of your spoken entry plus derived insights.' },
  { q: 'What insights are generated?', a: 'Mood trajectory, topic clustering, sentiment slices, personality style indicators, streak/progress metrics, and gentle habit tips.' },
  { q: 'Can I export my data?', a: 'Yes—export requests can be initiated via support. A secure download link will be emailed.' },
  { q: 'How do I delete my account?', a: 'Email support@bobee.co.uk from your registered address requesting deletion. Removal usually completes within 48 hours.' },
  { q: 'Is my data used to train public models?', a: 'No. Aggregated anonymized stats may inform product direction; raw journals are never used to train external foundation models.' },
  { q: 'Which AI provider do you use?', a: 'Currently OpenAI for certain linguistic analyses plus in-house heuristics for journaling structure and streak logic.' },
  { q: 'Do you plan an Android or web app?', a: 'Yes—Android is on the roadmap after iOS stabilization; a web dashboard is being prototyped.' },
  { q: 'Why transcription instead of raw audio storage?', a: 'Text enables lightweight encrypted storage, faster querying, lower costs, and easier privacy management.' },
  { q: 'Can I correct an incorrect insight?', a: 'You will be able to flag or dismiss insights. Feedback loops refine future outputs.' },
  { q: 'What if a prompt feels off or inaccurate?', a: 'Use the forthcoming “Improve” action to regenerate with alternate framing or report quality issues.' },
  { q: 'Do you support offline journaling?', a: 'Offline capture is planned; entries will sync and process when a connection resumes.' },
  { q: 'Will there be pricing tiers?', a: 'Yes—core journaling will have a generous free tier; advanced analytics and deeper AI conversation modes will be part of Pro.' },
  { q: 'How do I contact support?', a: 'Email support@bobee.co.uk. We typically respond within one business day (Mon–Fri UTC).' }
];

export default function SupportContent() {
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (i: number) => setOpen(prev => prev === i ? null : i);

  return (
    <div className={styles.supportWrap}>
      <Link href="/" className={styles.homeLink} aria-label="Back to home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m3 11 9-8 9 8"/><path d="M4 10v10a1 1 0 0 0 1 1h5v-6h4v6h5a1 1 0 0 0 1-1V10"/></svg>
        Home
      </Link>
      <h1 className={styles.title}>Support</h1>
      <p className={styles.lead}>Find answers and guidance. If you still need help email <a href="mailto:support@bobee.co.uk">contact@bobee.co.uk</a>.</p>

      <h2 className={styles.sectionHead}>Frequently Asked Questions</h2>
      <ul className={styles.faqList}>
        {faqs.map((f, i) => (
          <li key={i} className={styles.faqItem} data-open={open===i}>
            <button onClick={() => toggle(i)} className={styles.faqButton} aria-expanded={open===i} aria-controls={`faq-panel-${i}`}>
              <svg className={styles.iconChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
              <span className={styles.qText}>{f.q}</span>
            </button>
            <div id={`faq-panel-${i}`} className={styles.answer} role="region" aria-hidden={open!==i}>{f.a}</div>
          </li>
        ))}
      </ul>
      <div className={styles.note}>More questions? Reach out any time.</div>
    </div>
  );
}
