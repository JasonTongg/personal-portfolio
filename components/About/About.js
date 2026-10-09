import React from 'react';
import styles from './About.module.css';
import Profile from '../../public/Assets/Profile.png';
import Image from 'next/image';
import {RiMedalLine} from 'react-icons/ri';
import {FiDownloadCloud} from 'react-icons/fi';
import {GiSpellBook} from 'react-icons/gi';
import {AiOutlineFileDone} from 'react-icons/ai';

export default function About() {
  return (
    <div className={styles.container} id="about">
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
        <div className={styles.contentContainer}>
          <div className={styles.contentItems}>
            <div className={styles.contentItem}>
              <RiMedalLine></RiMedalLine>
              <h3>Experience</h3>
              <p>3 + Years</p>
            </div>
            <div className={styles.contentItem}>
              <GiSpellBook></GiSpellBook>
              <h3>Learning</h3>
              <p>5 + Years</p>
            </div>
            <div className={styles.contentItem}>
              <AiOutlineFileDone></AiOutlineFileDone>
              <h3>Completed</h3>
              <p>20 + Projects</p>
            </div>
          </div>
          <p>
            Blockchain developer with web2 experience too, i build
            decentralized applications and smart contracts on both EVM chains
            and Solana, as well as create web pages with UI/UX user interface.
            I have hands-on experience with Solidity, Foundry, Hardhat, Rust,
            and other Web3 tooling, along with ReactJS and NextJS, and join
            several bootcamp for self improvement, such as: PBA Labs, Binar
            Academy, Timedoor Academy and many more...
          </p>
          <a
            href="/Jason_Resume.pdf"
            download="Jason_Resume.pdf"
            className={styles.button}
          >
            <p>Download CV</p>
            <FiDownloadCloud></FiDownloadCloud>
          </a>
        </div>
      </div>
    </div>
  );
}
