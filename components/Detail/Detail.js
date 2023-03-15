import React, {useState, useEffect} from 'react';
import styles from './Detail.module.css';
import portfolioData from '../../Data/Portfolio';
import {FiDownloadCloud} from 'react-icons/fi';
import Link from 'next/link';

export default function Detail(props) {
  let [title, setTitle] = useState(props.title);
  useEffect(() => {
    console.log(props.title);
    if (!props.title) {
      setTitle(window.localStorage.getItem('title'));
    }
  }, [props.title]);
  let detailData = portfolioData.filter((item) => item.title === title);
  let data = detailData[0];
  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
          <div className={styles.buttons}>
            <Link href={data.demo} className={styles.button} target="_blank">
              <p>Demo</p>
              <FiDownloadCloud></FiDownloadCloud>
            </Link>
            <Link href={data.github} className={styles.button} target="_blank">
              <p>Github</p>
              <FiDownloadCloud></FiDownloadCloud>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>Loading.........</h2>;
  }
}
