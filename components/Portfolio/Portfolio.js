import React from 'react';
import styles from './Portfolio.module.css';
import Card from '../Card/Card';

let data = [
  {
    title: 'Binar Rental Car',
    demo: 'Demo Link',
    github: 'github link',
    image: 'image link / path',
    desc: 'desc',
    tools: ['html', 'html'],
  },
  {
    title: 'Binar Rental Car',
    demo: 'Demo Link',
    github: 'github link',
    image: 'image link / path',
    desc: 'desc',
    tools: ['html', 'html'],
  },
  {
    title: 'Binar Rental Car',
    demo: 'Demo Link',
    github: 'github link',
    image: 'image link / path',
    desc: 'desc',
    tools: ['html', 'html'],
  },
  {
    title: 'Binar Rental Car',
    demo: 'Demo Link',
    github: 'github link',
    image: 'image link / path',
    desc: 'desc',
    tools: ['html', 'html'],
  },
  {
    title: 'Binar Rental Car',
    demo: 'Demo Link',
    github: 'github link',
    image: 'image link / path',
    desc: 'desc',
    tools: ['html', 'html'],
  },
  {
    title: 'Binar Rental Car',
    // demo: 'Demo Link',
    github: 'github link',
    image: 'image link / path',
    desc: 'desc',
    tools: ['html', 'html'],
  },
];

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Portfolio</h2>
        <p>Most Recent Work</p>
      </div>
      <div className={styles.contentContainer}>
        {data.slice(0, 6).map((item, idx) => (
          <Card key={idx} data={item}></Card>
        ))}
      </div>
      <button className={styles.button}>Show More...</button>
    </div>
  );
}
