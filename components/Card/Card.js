import React from 'react';
import styles from './Card.module.css';
import tempPhoto from '../../public/Assets/temp-photo.png';
import Image from 'next/image';
import {BsArrowRightShort} from 'react-icons/bs';
import Link from 'next/link';

export default function Card({data, setModel, setModelIndex, idx}) {
  return (
    <div className={styles.container}>
      <Image
        src={data.image || tempPhoto}
        alt="Portfolio photo"
        width={200}
        height={200}
        quality={100}
      ></Image>
      <h3>{data.title}</h3>
      <div className={styles.buttons}>
        {data.demo && (
          <Link href={data.demo} className={styles.button} target="_blank">
            <p>Demo</p>
            <BsArrowRightShort></BsArrowRightShort>
          </Link>
        )}
        {typeof data.github === 'string' && (
          <Link href={data.github} className={styles.button} target="_blank">
            <p>GitHub</p>
            <BsArrowRightShort></BsArrowRightShort>
          </Link>
        )}
        {typeof data.github !== 'string' && (
          <Link href={data.github[0]} className={styles.button} target="_blank">
            <p>GitHub</p>
            <BsArrowRightShort></BsArrowRightShort>
          </Link>
        )}
        {typeof data.github !== 'string' && (
          <Link href={data.github[1]} className={styles.button} target="_blank">
            <p>GitHub</p>
            <BsArrowRightShort></BsArrowRightShort>
          </Link>
        )}

        <div
          className={styles.button}
          onClick={() => {
            setModel(true);
            setModelIndex(idx);
          }}
        >
          <p>Details</p>
          <BsArrowRightShort></BsArrowRightShort>
        </div>
      </div>
    </div>
  );
}
