import React from "react";
import styles from "./post.module.css"
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const post = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.body}</p>
          <div className={styles.author}>
            <Image
              src="https://via.placeholder.com/40" // Placeholder image URL
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Author</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://via.placeholder.com/800x600" // Placeholder image URL
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{post.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
//dn