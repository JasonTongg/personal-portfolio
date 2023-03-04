import React from 'react';
import styles from './Contact.module.css';
import {TbMail} from 'react-icons/tb';
import {BsInstagram, BsArrowRightShort} from 'react-icons/bs';
import {RiLinkedinFill} from 'react-icons/ri';
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
          href="mailto:aboytong123@gmail.com"
          className={styles.contentItem}
        >
          <TbMail></TbMail>
          <h2>Email</h2>
          <p>Aboytong123@gmail.com</p>
          <button className={styles.button}>
            Show More
            <BsArrowRightShort></BsArrowRightShort>
          </button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/jason-tong-42600319a/"
          className={styles.contentItem}
        >
          <RiLinkedinFill></RiLinkedinFill>
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
