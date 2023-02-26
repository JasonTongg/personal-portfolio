import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container} id="navbarContainer">
      <p className={styles.navbarHeader}>Jason</p>
      <ul className={styles.navbarItem}>
        <li
          onClick={() => {
            document
              .getElementById('navbarContainer')
              .scrollIntoView({behavior: 'smooth', block: 'start'});
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            document
              .getElementById('about')
              .scrollIntoView({behavior: 'smooth', block: 'center'});
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            document
              .getElementById('skills')
              .scrollIntoView({behavior: 'smooth', block: 'center'});
          }}
        >
          Skills
        </li>
        <li
          onClick={() => {
            document
              .getElementById('experience')
              .scrollIntoView({behavior: 'smooth', block: 'center'});
          }}
        >
          Experience
        </li>
        <li
          onClick={() => {
            document
              .getElementById('portfolio')
              .scrollIntoView({behavior: 'smooth', block: 'start'});
          }}
        >
          Portfolio
        </li>
        <li
          onClick={() => {
            document
              .getElementById('contact')
              .scrollIntoView({behavior: 'smooth', block: 'center'});
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}
