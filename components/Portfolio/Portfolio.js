import React, {useState} from 'react';
import styles from './Portfolio.module.css';
import Card from '../Card/Card';
import data from '../../Data/Portfolio';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import Popup from '../PortfolioPopup/Popup';

export default function Portfolio() {
  let [limit, setLimit] = useState(6);
  let [model, setModel] = useState(false);
  let [modelIndex, setModelIndex] = useState(0);
  return (
    <div className={styles.container} id="portfolio">
      <div className={styles.header}>
        <h2>Portfolio</h2>
        <p>Most Recent Work</p>
      </div>
      <div className={styles.contentContainer}>
        {data.slice(0, limit).map((item, idx) => (
          <Card
            key={idx}
            data={item}
            setModel={setModel}
            setModelIndex={setModelIndex}
            idx={idx}
          ></Card>
        ))}
      </div>
      {limit === 6 && (
        <button className={styles.button} onClick={() => setLimit(100)}>
          Show More
          <MdKeyboardArrowDown></MdKeyboardArrowDown>
        </button>
      )}
      {limit === 100 && (
        <button className={styles.button} onClick={() => setLimit(6)}>
          Less
          <MdKeyboardArrowUp></MdKeyboardArrowUp>
        </button>
      )}
      {model && <Popup setModel={setModel} data={data[modelIndex]}></Popup>}
    </div>
  );
}
