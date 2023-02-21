import React from 'react';
import styles from './Card.module.css';

export default function Card({data}) {
  return <div className={styles.container}>{data.title}</div>;
}
