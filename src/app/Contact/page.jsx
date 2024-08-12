import React from 'react';
import styles from './contact.module.css';
import Image from 'next/image';
import Button from '../components/Button/page';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <h1>Let&apos;s keep in touch</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill={true} alt="Contact Image" className={styles.img} />
        </div>
        <div className={styles.form}>
          <form>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="text" placeholder="Email" className={styles.input} />
            <textarea
              className={styles.textArea}
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <Button text="Send" url="#" className={styles.btn} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
