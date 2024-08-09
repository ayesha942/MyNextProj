import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

function Button({ text, url }) {
  return (
    <div className={styles.container}>
      <Link href={url} passHref>
        <button className={styles.button}>{text}</button>
      </Link>
    </div>
  );
}

export default Button;
