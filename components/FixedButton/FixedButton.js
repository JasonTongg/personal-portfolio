import React from 'react';
import styles from './FixedButton.module.css';
import {BiUpArrowAlt} from 'react-icons/bi';

export default function FixedButton() {
  return (
    <div
      className={styles.container}
      onClick={() => {
        document
          .getElementById('navbarContainer')
          .scrollIntoView({behavior: 'smooth', block: 'start'});
      }}
    >
      <BiUpArrowAlt></BiUpArrowAlt>
    </div>
  );
}
