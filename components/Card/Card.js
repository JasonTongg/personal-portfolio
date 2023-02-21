import React from 'react';
import styles from './Card.module.css';
import tempPhoto from '../../public/Assets/temp-photo.png';
import Image from 'next/image';
import {BsArrowRightShort} from 'react-icons/bs';

export default function Card({data}) {
  return (
    <div className={styles.container}>
      <Image
        src={tempPhoto}
        alt="Portfolio photo"
        width={200}
        height={200}
      ></Image>
      <h3>{data.title}</h3>
      <div className={styles.buttons}>
        {data.demo && (
          <div className={styles.button}>
            <p>Demo</p>
            <BsArrowRightShort></BsArrowRightShort>
          </div>
        )}
        <div className={styles.button}>
          <p>GitHub</p>
          <BsArrowRightShort></BsArrowRightShort>
        </div>
        <div className={styles.button}>
          <p>Details</p>
          <BsArrowRightShort></BsArrowRightShort>
        </div>
      </div>
    </div>
  );
}
