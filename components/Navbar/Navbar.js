import React from 'react';
import styles from './Navbar.module.css';
import {TbChevronsUpRight} from 'react-icons/tb';

export default function Navbar() {
  return (
    <div className={styles.container} id="navbarContainer">
      <p
        className={styles.navbarHeader}
        onClick={() => {
          document
            .getElementById('navbarContainer')
            .scrollIntoView({behavior: 'smooth', block: 'start'});
        }}
      >
        Jason
      </p>
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
      </ul>
      <p
        onClick={() => {
          document
            .getElementById('contact')
            .scrollIntoView({behavior: 'smooth', block: 'center'});
        }}
        className={styles.contact}
      >
        Contact
        <TbChevronsUpRight></TbChevronsUpRight>
      </p>
    </div>
  );
}
