import React from 'react';
import styles from './Detail.module.css';
import {IoPaperPlaneOutline} from 'react-icons/io5';
import Link from 'next/link';

export default function Detail({data}) {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <div className={styles.buttons}>
          {data.demo && (
            <Link href={data.demo} className={styles.button} target="_blank">
              <p>Demo</p>
              <IoPaperPlaneOutline></IoPaperPlaneOutline>
            </Link>
          )}
          {typeof data.github === 'string' && (
            <Link href={data.github} target="_blank" className={styles.button}>
              <p>Github</p>
              <IoPaperPlaneOutline></IoPaperPlaneOutline>
            </Link>
          )}
          {typeof data.github !== 'string' && (
            <Link
              href={data.github[0]}
              target="_blank"
              className={styles.button}
            >
              <p>Github</p>
              <IoPaperPlaneOutline></IoPaperPlaneOutline>
            </Link>
          )}
          {typeof data.github !== 'string' && (
            <Link
              href={data.github[1]}
              target="_blank"
              className={styles.button}
            >
              <p>Github</p>
              <IoPaperPlaneOutline></IoPaperPlaneOutline>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
