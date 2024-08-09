import React from 'react';
import Link from 'next/link';
import styles from './port.module.css';
import Image from 'next/image';

function Portfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
          <Image
            src="/illustration.png"
            alt="Illustrations Overview"
            width={500}
            height={300}
          />
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
