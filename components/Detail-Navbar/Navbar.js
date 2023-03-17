import React from 'react';
import styles from './Navbar.module.css';
import Router from 'next/router';

export default function Navbar() {
  return (
    <div className={styles.container} id="navbarContainer">
      <p
        className={styles.navbarHeader}
        onClick={() => {
          Router.push('/');
        }}
      >
        Jason
      </p>
      <ul className={styles.navbarItem}>
        <li
          onClick={() => {
            Router.push('/');
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            document
              .getElementById('hero')
              .scrollIntoView({behavior: 'smooth', block: 'center'});
          }}
        >
          Detail
        </li>
        <li
          onClick={() => {
            document
              .getElementById('tools')
              .scrollIntoView({behavior: 'smooth', block: 'center'});
          }}
        >
          Tools
        </li>
      </ul>
    </div>
  );
}
