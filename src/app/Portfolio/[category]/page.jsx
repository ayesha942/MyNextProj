
import { items } from './data'; // Ensure this path is correct
import styles from './page.module.css';
import Button from '@/app/components/Button/page';// Ensure this path is correct
import Image from 'next/image';
import { notFound } from 'next/navigation';

const getData = (cat) => {
    console.log('Fetching data for category:', cat); // Debugging statement
    const data = items[cat];
    if (data) {
      console.log('Data found:', data); // Debugging statement
      return data;
    }
    console.log('Category not found:', cat); // Debugging statement
    return []; // Return an empty array or handle as needed
  };
  

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.length > 0 ? (
        data.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true}
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ))
      ) : (
        <p>No items found for this category.</p> // Handle empty state
      )}
    </div>
  );
};

export default Category;
