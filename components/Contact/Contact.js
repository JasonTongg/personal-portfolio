import React from 'react';
import styles from './Contact.module.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsInstagram, BsArrowRightShort} from 'react-icons/bs';
import {CiLinkedin} from 'react-icons/ci';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.header}>
        <h2>Contact</h2>
        <p>Get in Touch</p>
      </div>
      <div className={styles.contentContainer}>
        <Link
          href="mailto:aboytong123@gmail.com"
          className={styles.contentItem}
        >
          <HiOutlineMail></HiOutlineMail>
          <h2>Email</h2>
          <p>Aboytong123@gmail.com</p>
          <button className={styles.button}>
            Show More
            <BsArrowRightShort></BsArrowRightShort>
          </button>
        </Link>
        <Link
          href="https://www.instagram.com/tongchenyi_/"
          className={styles.contentItem}
        >
          <BsInstagram></BsInstagram>
          <h2>Instagram</h2>
          <p>@Tongchenyi_</p>
          <button className={styles.button}>
            Show More
            <BsArrowRightShort></BsArrowRightShort>
          </button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/jason-tong-42600319a/"
          className={styles.contentItem}
        >
          <CiLinkedin></CiLinkedin>
          <h2>Linkedin</h2>
          <p>Jason Tong</p>
          <button className={styles.button}>
            Show More
            <BsArrowRightShort></BsArrowRightShort>
          </button>
        </Link>
      </div>
    </div>
  );
}
