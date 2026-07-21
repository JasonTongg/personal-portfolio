import React from 'react';
import styles from './ModeToggle.module.css';
import {CgWebsite} from 'react-icons/cg';
import {SiEthereum} from 'react-icons/si';

export default function ModeToggle({mode, setMode}) {
  return (
    <div className={styles.container}>
      <div
        className={styles.thumb}
        style={{
          transform: mode === 'web2' ? 'translateX(100%)' : 'translateX(0%)',
        }}
      ></div>
      <div
        className={`${styles.option} ${mode === 'web3' ? styles.active : ''}`}
        onClick={() => setMode('web3')}
      >
        <SiEthereum></SiEthereum>
        <p>Web3</p>
      </div>
      <div
        className={`${styles.option} ${mode === 'web2' ? styles.active : ''}`}
        onClick={() => setMode('web2')}
      >
        <CgWebsite></CgWebsite>
        <p>Web2</p>
      </div>
    </div>
  );
}
