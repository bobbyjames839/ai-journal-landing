"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import logo from '../images/logo.png';
import imageBottom from '../images/bottom.png';
import imageMiddle from '../images/middle.png';
import imageTop from '../images/top.png';
import qrCode from '../images/qr-code.png';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // delay to ensure styles applied then animate next frame
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
  <div className={`${styles.main} ${mounted ? styles.ready : ''}`}>
      <span className={styles.wave} aria-hidden="true" />
      <Image src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.left}>
        <h1 className={styles.title}>Bobee</h1>
        <p className={styles.description}>Your AI journaling experience. Download now on the AppStore</p>
        <Image src={qrCode} alt="QR Code" className={styles.qrCode} />

        <a href="https://apps.apple.com/us/app/bobee/id6751124802?itscg=30200&itsct=apps_box_badge&mttnsubad=6751124802" className={styles.appStoreLink}>
        <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/en-us?releaseDate=1756425600" alt="Download on the App Store" style={{width: '200px', height: '82px', verticalAlign: 'middle', objectFit: 'contain'}} />
        </a>
    
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