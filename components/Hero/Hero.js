import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import Profile from '../../public/Assets/Profile.png';
import Wave from '../../public/Assets/wave.png';
import {BsInstagram} from 'react-icons/bs';
import {RiLinkedinFill} from 'react-icons/ri';
import {FiGithub} from 'react-icons/fi';
import {IoPaperPlaneOutline} from 'react-icons/io5';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
        <div className={styles.contentInfo}>
          <div className={styles.contentHeader}>
            <h1>Jason</h1>
            <Image src={Wave} alt="wave" width={100} height={100} />
          </div>
          <div className={styles.contentHeader}>
            <div className={styles.line}></div>
            <h2>Front-end Developer</h2>
          </div>
          <p>
            I{"'"}m active Binus University student in Jakarta. I{"'"}m very
            passion in frontend development and dedicated to creating visually
            appealing and user-friendly websites and applications. I{"'"}m
            skilled in languages such as ReactJS, and NextJS, and are constantly
            seeking new ways to improve my skills and stay up-to-date with the
            latest technologies.
          </p>
          <div className={styles.button}>
            <p>Say Hello</p>
            <IoPaperPlaneOutline></IoPaperPlaneOutline>
          </div>
        </div>
      </div>
      <div className={styles.imageProfile}></div>
    </div>
  );
}
