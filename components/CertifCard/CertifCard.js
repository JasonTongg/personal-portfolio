import React from 'react';
import styles from './CertifCard.module.css';
import tempPhoto from '../../public/Assets/temp-photo.png';
import Image from 'next/image';
import {BsArrowRightShort} from 'react-icons/bs';
import Link from 'next/link';

export default function CertifCard({data}) {
  return (
    <div className={`${styles.container} ${styles.showAnimation}`}>
      <Image
        src={data.image || tempPhoto}
        alt="Certificate photo"
        width={200}
        height={200}
        quality={100}
      ></Image>
      <p style={{marginTop: '.5rem'}}>{data.company}</p>
      <h3>{data.title}</h3>
      <div className={styles.buttons}>
        {data.credentials && (
          <Link
            href={data.credentials}
            className={styles.button}
            target="_blank"
          >
            <p>Show Credential</p>
            <BsArrowRightShort></BsArrowRightShort>
          </Link>
        )}
        {data.certificate && (
          <Link
            href={data.certificate}
            className={styles.button}
            target="_blank"
          >
            <p>Show Certificate</p>
            <BsArrowRightShort></BsArrowRightShort>
          </Link>
        )}
      </div>
    </div>
  );
}
