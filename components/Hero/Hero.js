import React, {useEffect} from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import Wave from '../../public/Assets/wave.png';
import {BsInstagram} from 'react-icons/bs';
import {RiLinkedinFill} from 'react-icons/ri';
import {FiGithub} from 'react-icons/fi';
import {IoPaperPlaneOutline} from 'react-icons/io5';
import Link from 'next/link';
import {TypeAnimation} from 'react-type-animation';
import cloud1 from '../../public/Assets/cloud-1.png';
import cloud2 from '../../public/Assets/cloud-2.png';
import cloud3 from '../../public/Assets/cloud-3.png';
import cloud4 from '../../public/Assets/cloud-4.png';

export default function Hero() {
  useEffect(() => {
    let cloud1 = document.querySelector('#cloud1');
    let cloud2 = document.querySelector('#cloud2');
    let cloud3 = document.querySelector('#cloud3');
    let cloud4 = document.querySelector('#cloud4');

    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      cloud1.style.left = `calc(${value * 0.2}px + 60%)`;
      cloud2.style.right = `calc(${value * 0.2}px + 70%)`;
      cloud3.style.right = `calc(${value * 0.2}px + 90%)`;
      cloud4.style.left = `calc(${value * 0.2}px + 90%)`;

      return window.removeEventListener('scroll', () => {
        cloud1.style.left = `calc(${value * 0.2}px + 60%)`;
        cloud2.style.right = `calc(${value * 0.2}px + 70%)`;
        cloud3.style.right = `calc(${value * 0.2}px + 90%)`;
        cloud4.style.left = `calc(${value * 0.2}px + 90%)`;
      });
    });
  }, []);
  return (
    <div className={styles.container}>
      <Image
        src={cloud1}
        alt="cloud"
        className={styles.cloud1}
        height={100}
        width={500}
        id="cloud1"
      ></Image>
      <Image
        src={cloud2}
        alt="cloud"
        className={styles.cloud2}
        height={100}
        width={500}
        id="cloud2"
      ></Image>
      <Image
        src={cloud3}
        alt="cloud"
        className={styles.cloud3}
        height={100}
        width={500}
        id="cloud3"
      ></Image>
      <Image
        src={cloud4}
        alt="cloud"
        className={styles.cloud4}
        height={100}
        width={500}
        id="cloud4"
      ></Image>
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
            <TypeAnimation
              sequence={[
                'Front-end Developer',
                1000,
                'Web Developer',
                1000,
                'Tech Enthusiast',
                1000,
              ]}
              speed={50}
              wrapper="h2"
              repeat={Infinity}
            />
          </div>
          <p className={styles.contentP}>
            I{"'"}m active Binus University student in Jakarta. I{"'"}m very
            passion in frontend development and dedicated to creating visually
            appealing and user-friendly websites and applications. I{"'"}m
            skilled in languages such as ReactJS, and NextJS, and are constantly
            seeking new ways to improve my skills and stay up-to-date with the
            latest technologies.
          </p>
          <Link
            href="https://www.linkedin.com/in/jason-tong-42600319a/"
            target="_blank"
          >
            <div className={styles.button}>
              <p>Say Hello</p>
              <IoPaperPlaneOutline></IoPaperPlaneOutline>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.imageProfile}></div>
    </div>
  );
}
