import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'; // Importing CSS module for Navbar
import ToggleButton from '../Toggle/ToggleButton'; // Updated component name

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/Portfolio" },
  { id: 3, title: "Blog", url: "/Blog" },
  { id: 4, title: "About", url: "/About" },
  { id: 5, title: "Contact", url: "/Contact" },
  { id: 6, title: "Dashboard", url: "/Dashboard" }
];

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>lalamia</Link> {/* Apply logo class here */}
      <div className={styles.links}>
        <ToggleButton></ToggleButton>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.navLink}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
