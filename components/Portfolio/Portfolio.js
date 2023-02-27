import React, {useState, useEffect} from 'react';
import styles from './Portfolio.module.css';
import Card from '../Card/Card';
import data from '../../Data/Portfolio';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import Popup from '../PortfolioPopup/Popup';

export default function Portfolio() {
  // let count = (document.body.innerWidth * 60) / 30000;
  // console.log(count);
  let [limit, setLimit] = useState(6);
  let [model, setModel] = useState(false);
  let [modelIndex, setModelIndex] = useState(0);

  useEffect(() => {
    setLimit(
      Math.round(
        (window.innerWidth * 70 -
          16 * (Math.round((window.innerWidth * 70) / 30000) - 1)) /
          30000
      ) * 2
    );
  }, []);

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
      {limit !== 100 && (
        <button className={styles.button} onClick={() => setLimit(100)}>
          Show More
          <MdKeyboardArrowDown></MdKeyboardArrowDown>
        </button>
      )}
      {limit === 100 && (
        <button
          className={styles.button}
          onClick={() =>
            setLimit(
              Math.round(
                (window.innerWidth * 70 -
                  16 * (Math.round((window.innerWidth * 70) / 30000) - 1)) /
                  30000
              ) * 2
            )
          }
        >
          Less
          <MdKeyboardArrowUp></MdKeyboardArrowUp>
        </button>
      )}
      {model && <Popup setModel={setModel} data={data[modelIndex]}></Popup>}
    </div>
  );
}
