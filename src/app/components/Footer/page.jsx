import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
function Footer() {
  return (
    <div>
    <div className={styles.container}>

        2023 @ lalamia All rights reserved
      </div>
    <div className={styles.socials}>
      <Image src="/1.png" width={15} height={15} className={styles.icons}></Image>
      <Image src="/2.png" width={15} height={15} className={styles.icons}></Image>
      <Image src="/3.png" width={15} height={15} className={styles.icons}></Image>
      <Image src="/4.png" width={15} height={15} className={styles.icons}></Image>
    </div>
    </div>
  )
}

export default Footer
