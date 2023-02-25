import React from 'react';
import styles from './CertifCard.module.css';
import tempPhoto from '../../public/Assets/temp-photo.png';
import Image from 'next/image';
import {BsArrowRightShort} from 'react-icons/bs';
import Link from 'next/link';
import Udemy from '../../public/Assets/udemy.png';
import FreeCodeCamp from '../../public/Assets/FreeCodeCamp.png';
import Binar from '../../public/Assets/Binar.png';

export default function CertifCard({data}) {
  let image;
  if (data.company === 'Udemy') {
    image = Udemy;
  } else if (data.company === 'FreeCodeCamp') {
    image = FreeCodeCamp;
  } else if (data.company === 'Binar Academy') {
    image = Binar;
  } else {
    image = tempPhoto;
  }
  return (
    <div className={`${styles.container} ${styles.showAnimation}`}>
      <Image
        src={image}
        alt="Certificate photo"
        width={200}
        height={200}
        quality={100}
        style={{marginTop: '.5rem'}}
      ></Image>
      <p>{data.title}</p>
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
