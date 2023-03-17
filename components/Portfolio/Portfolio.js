import React, {useState, useEffect} from 'react';
import styles from './Portfolio.module.css';
import Card from '../Card/Card';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

export default function Portfolio({data}) {
  let [limit, setLimit] = useState(6);

  useEffect(() => {
    setLimit(window.innerWidth <= 640 ? 3 : 6);
  }, []);

  return (
    <div className={styles.container} id="portfolio">
      <div className={styles.header}>
        <h2>Portfolio</h2>
        <p>Most Recent Work</p>
      </div>
      <div className={styles.contentContainer}>
        {data.slice(0, limit).map((item, idx) => (
          <Card key={idx} data={item}></Card>
        ))}
      </div>
      {limit !== 100 && (
        <button className={styles.button} onClick={() => setLimit(100)}>
          Show More
          <MdKeyboardArrowDown></MdKeyboardArrowDown>
        </button>
      )}
      {limit === 100 && (
        <button
          className={styles.button}
          onClick={() => setLimit(window.innerWidth <= 640 ? 3 : 6)}
        >
          Less
          <MdKeyboardArrowUp></MdKeyboardArrowUp>
        </button>
      )}
    </div>
  );
}
