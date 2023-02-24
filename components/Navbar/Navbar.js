import React from 'react';
import styles from './Navbar.module.css';
import {BsMoon} from 'react-icons/bs';
//document.body.style.setProperty('--white', 'red');
// --background-white: #ebebeb;
//   --white: white;
//   --gray: #6a6a6a;
//   --gray-2: #626262;
//   --gray-3: #646464;
//   --gray-45: #454545;
//   --pgray: gray;
//   --black: black;
//   --boxShadow: rgba(74, 58, 255, 0.1);
//   --black-03: rgba(0, 0, 0, 0.3);
//   --black-08: rgba(0, 0, 0, 0.8);
//   --125-01: rgb(125, 125, 125, 0.1);

export default function Navbar() {
  let changeTheme = () => {
    document.body.style.setProperty('--white', '#1b1b30');
    document.body.style.setProperty('--background-white', '#131321');
    document.body.style.setProperty('--black', '#ebebeb');
    document.body.style.setProperty('--gray', '#b8b8b8');
    document.body.style.setProperty('--gray-2', '#b8b8b8');
    document.body.style.setProperty('--gray-3', '#b8b8b8');
    document.body.style.setProperty('--boxShadow', 'rgba(255,255,255,.1');
    document.body.style.setProperty('--black-03', 'rgba(255,255,255,.7');
    // document.body.style.setProperty('--white', 'black');
    // document.body.style.setProperty('--white', 'black');
    // document.body.style.setProperty('--white', 'black');
  };
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
        <li onClick={changeTheme}>
          <BsMoon></BsMoon>
          Dark
        </li>
      </ul>
    </div>
  );
}
