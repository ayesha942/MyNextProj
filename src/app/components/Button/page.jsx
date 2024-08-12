import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

// Set default values for props
const Button = ({ text = 'Default Text', url = '#' }) => {
  return (
    <div className={styles.container}>
      <Link href={url} passHref>
        <button className={styles.button}>{text}</button>
      </Link>
    </div>
  );
};

export default Button;
