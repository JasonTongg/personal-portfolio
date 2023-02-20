import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <p className={styles.navbarHeader}>Jason</p>
      <ul className={styles.navbarItem}>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
