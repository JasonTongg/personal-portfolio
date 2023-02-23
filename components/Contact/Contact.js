import React from 'react';
import styles from './Contact.module.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsInstagram, BsArrowRightShort} from 'react-icons/bs';
import {CiLinkedin} from 'react-icons/ci';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Contact Me</h2>
        <p>Get in Touch</p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentItem}>
          <HiOutlineMail></HiOutlineMail>
          <h2>Email</h2>
          <p>Aboytong123@gmail.com</p>
          <button className={styles.button}>
            Show More
            <BsArrowRightShort></BsArrowRightShort>
          </button>
        </div>
        <div className={styles.contentItem}>
          <BsInstagram></BsInstagram>
          <h2>Instagram</h2>
          <p>@Tongchenyi_</p>
          <button className={styles.button}>
            Show More
            <BsArrowRightShort></BsArrowRightShort>
          </button>
        </div>
        <div className={styles.contentItem}>
          <CiLinkedin></CiLinkedin>
          <h2>Linkedin</h2>
          <p>Jason Tong</p>
          <button className={styles.button}>
            Show More
            <BsArrowRightShort></BsArrowRightShort>
          </button>
        </div>
      </div>
    </div>
  );
}
