import React from 'react';
import styles from './Footer.module.css';
import {BsInstagram} from 'react-icons/bs';
import {RiLinkedinFill} from 'react-icons/ri';
import {FiGithub} from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.container} id="footerContainer">
      <h2>Jason</h2>
      <ul className={styles.navbar}>
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
              .getElementById('skills')
              .scrollIntoView({behavior: 'smooth', block: 'center'});
          }}
        >
          Skills
        </li>
        <li
          onClick={() => {
            document
              .getElementById('portfolio')
              .scrollIntoView({behavior: 'smooth', block: 'center'});
          }}
        >
          Portfolio
        </li>
      </ul>
      <div className={styles.sosmed}>
        <Link href="https://www.instagram.com/tongchenyi_/" target="_blank">
          <BsInstagram></BsInstagram>
        </Link>
        <Link
          href="https://www.linkedin.com/in/jason-tong-42600319a/"
          target="_blank"
        >
          <RiLinkedinFill></RiLinkedinFill>
        </Link>
        <Link href="https://github.com/JasonTongg" target="_blank">
          <FiGithub></FiGithub>
        </Link>
      </div>
      <p>
        <span>Copyright</span> &copy; 2022, Make with &hearts; by{' '}
        <span>
          <Link
            href="https://www.linkedin.com/in/jason-tong-42600319a/"
            target="_blank"
          >
            Jason
          </Link>
        </span>
      </p>
    </div>
  );
}
