import React from 'react';
import styles from './About.module.css';
import Profile from '../../public/Assets/Profile.png';
import Image from 'next/image';
import {RiMedalLine} from 'react-icons/ri';
import {FiDownloadCloud} from 'react-icons/fi';
import {GiSpellBook} from 'react-icons/gi';
import {AiOutlineFileDone} from 'react-icons/ai';
import {saveAs} from 'file-saver';

export default function About() {
  const saveFile = () => {
    saveAs(
      'https://drive.google.com/file/d/13Mzccb16fMMZGxVBrw9noMUDSGg59W99/view?usp=sharing',
      'example.pdf'
    );
  };

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
            decentralized applications and smart contracts as well as create
            web pages with UI/UX user interface. I have hands-on experience
            with Solidity, Foundry, Hardhat, Rust, and other Web3 tooling,
            along with ReactJS and NextJS, and join several hackathon and
            bootcamp for self improvement, such as: ETHGlobal, Binar Academy,
            Timedoor Academy and many more...
          </p>
          <a onClick={saveFile} className={styles.button}>
            <p>Download CV</p>
            <FiDownloadCloud></FiDownloadCloud>
          </a>
        </div>
      </div>
    </div>
  );
}
