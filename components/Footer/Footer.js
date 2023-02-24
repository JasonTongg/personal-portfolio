import React from 'react';
import styles from './Footer.module.css';
import {BsInstagram} from 'react-icons/bs';
import {RiLinkedinFill} from 'react-icons/ri';
import {FiGithub} from 'react-icons/fi';

export default function Footer() {
  return (
    <div className={styles.container} id="footerContainer">
      <h2>Jason</h2>
      <ul className={styles.navbar}>
        <li>Experience</li>
        <li>Skills</li>
        <li>Portfolio</li>
      </ul>
      <div className={styles.sosmed}>
        <BsInstagram></BsInstagram>
        <RiLinkedinFill></RiLinkedinFill>
        <FiGithub></FiGithub>
      </div>
      <p>
        <span>Copyright</span> &copy; 2022, Make with &hearts; by{' '}
        <span>Jason</span>
      </p>
    </div>
  );
}
