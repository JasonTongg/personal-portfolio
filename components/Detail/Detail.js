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
          <Link href={data.demo} className={styles.button} target="_blank">
            <p>Demo</p>
            <IoPaperPlaneOutline></IoPaperPlaneOutline>
          </Link>
          <Link href={data.github} className={styles.button} target="_blank">
            <p>Github</p>
            <IoPaperPlaneOutline></IoPaperPlaneOutline>
          </Link>
        </div>
      </div>
    </div>
  );
}
