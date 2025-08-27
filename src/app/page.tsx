import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Bobee Privacy Statement',
  description: 'Official Bobee Privacy Statement – how we collect, use, store and protect your data.',
};

export default function PrivacyHome() {
  return (
    <main className={styles.wrapper}>
      <article className={styles.content}>
        <h1>Bobee Privacy Statement</h1>
        <p><strong>Last Updated:</strong> 10 August 2025</p>
        <section>
          <h2>Overview</h2>
          <p>At Bobee, your privacy is a priority. This statement explains the information we collect, how we use it, and the steps we take to protect it.</p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <p>We store transcriptions of your spoken journal entries — audio recordings are not saved — along with AI-generated insights such as mood analysis, personality metrics, topic breakdowns, daily tips, and progress data like trends and streaks. We do not collect unrelated usage or background activity data.</p>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>Your information is used to provide accurate and meaningful insights from your journals, help you track progress over time, and enhance the model prompts that power your personal AI chatbot. Aggregated and anonymized data may also be used to improve our AI systems.</p>
        </section>
        <section>
          <h2>Data Storage &amp; Security</h2>
          <p>All data is stored securely in Firebase and protected with its default encryption both in transit and at rest. Insights are generated in real time during journaling sessions and may also be drawn from your stored entries. API calls to OpenAI are used to process your transcriptions; to the best of our knowledge, OpenAI does not retain the content of these calls.</p>
        </section>
        <section>
          <h2>Third-Party Services</h2>
          <p>We use Firebase for authentication and data storage, and OpenAI for AI processing. We do not sell your personal information, and any sharing is limited to anonymized data for the sole purpose of improving AI functionality.</p>
        </section>
        <section>
          <h2>Your Rights</h2>
          <p>You can request a copy of your stored data at any time by contacting us at <a href="mailto:contact@bobee.co.uk">contact@bobee.co.uk</a>. You may also delete your account and associated data. Data is retained until such a request or action is made.</p>
        </section>
        <section>
          <h2>Cookies &amp; Tracking</h2>
          <p>The Bobee mobile app does not use cookies or tracking technologies. Our website may use basic analytics tools for performance and security monitoring.</p>
        </section>
        <section>
          <h2>Policy Updates</h2>
          <p>We may update this statement periodically to reflect changes in our practices. Any updates will be posted in the app with the date of the latest revision.</p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>For privacy-related questions or requests, please email us at <a href="mailto:contact@bobee.co.uk">contact@bobee.co.uk</a>.</p>
        </section>
      </article>
    </main>
  );
}
