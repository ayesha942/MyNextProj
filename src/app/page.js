import Image from "next/image";
import styles from "./page.module.css";
//import Hero from 'public/hero.png';
export default function Home() {
  return (
   <div className={styles.container}>
   <div className={styles.item}>
    <div className={styles.title}>
    <h1>Better design for your digital products</h1>
    </div>
    <div className={styles.desc}>
    <p>Turning your ideas in reality. We bring together the teams from the 
      global ttech industry</p>
      </div>
     <button className={styles.btn}>See our works</button>
   </div>
   <div className={styles.item}></div>
   <Image src={'/hero.png'} width={340} height={345} className={styles.imag}></Image>
   </div>

  );
}
