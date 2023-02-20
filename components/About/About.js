import React from 'react';
import styles from './About.module.css';
import Profile from '../../public/Assets/Profile.png';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>About Me</h2>
        <p>My Introduction</p>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={Profile}
            alt="profile image"
            width={200}
            height={200}
          ></Image>
          <div></div>
        </div>
      </div>
    </div>
  );
}
