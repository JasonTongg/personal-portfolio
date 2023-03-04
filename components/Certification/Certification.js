import React, {useState} from 'react';
import styles from './Certification.module.css';
import CertifCard from '../CertifCard/CertifCard';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

export default function Certification({data}) {
  let [category, setCategory] = useState('All');
  let [limit, setLimit] = useState(6);
  let filterCategory = (e) => {
    setCategory(e.target.innerHTML);
    setLimit(6);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Certifications</h2>
        <p>My Awards</p>
      </div>
      <div className={styles.buttons}>
        <button
          className={category === 'All' && styles.active}
          onClick={filterCategory}
        >
          All
        </button>
        <button
          onClick={filterCategory}
          className={category === 'Bootcamp' && styles.active}
        >
          Bootcamp
        </button>
        <button
          onClick={filterCategory}
          className={category === 'Basic Web' && styles.active}
        >
          Basic Web
        </button>
        <button
          onClick={filterCategory}
          className={category === 'Framework' && styles.active}
        >
          Framework
        </button>
        <button
          onClick={filterCategory}
          className={category === 'Awards' && styles.active}
        >
          Awards
        </button>
        <button
          onClick={filterCategory}
          className={category === 'Others' && styles.active}
        >
          Others
        </button>
      </div>
      <div className={styles.contentContainer}>
        {category === 'All'
          ? data
              .slice(0, limit)
              .map((item, idx) => (
                <CertifCard key={idx} data={item}></CertifCard>
              ))
          : data
              .filter((item) => item.type.some((item) => item === category))
              .map((item, idx) => (
                <CertifCard
                  key={idx}
                  data={item}
                  data2={data.filter((item) =>
                    item.type.some((item) => item === category)
                  )}
                ></CertifCard>
              ))}
      </div>
      {limit === 6 && category === 'All' && (
        <button
          className={styles.button}
          onClick={() => {
            setLimit(100);
          }}
        >
          Show More
          <MdKeyboardArrowDown></MdKeyboardArrowDown>
        </button>
      )}
      {limit === 100 && category === 'All' && (
        <button className={styles.button} onClick={() => setLimit(6)}>
          Less
          <MdKeyboardArrowUp></MdKeyboardArrowUp>
        </button>
      )}
    </div>
  );
}
