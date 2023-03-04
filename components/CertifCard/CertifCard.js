import React from 'react';
import styles from './CertifCard.module.css';
import tempPhoto from '../../public/Assets/temp-photo.png';
import Image from 'next/image';
import {BsArrowRightShort} from 'react-icons/bs';
import Link from 'next/link';
import Udemy from '../../public/Assets/udemy.png';
import FreeCodeCamp from '../../public/Assets/FreeCodeCamp.png';
import Binar from '../../public/Assets/Binar.png';
import COdingStudio from '../../public/Assets/codingstudio.png';
import TimedoorAcademy from '../../public/Assets/timedoor.svg';
import SoloLearn from '../../public/Assets/SoloLearn.png';
import Harisenin from '../../public/Assets/harisenin.png';
import dicoding from '../../public/Assets/dicoding.png';
import progate from '../../public/Assets/progate.png';
import bncclnt from '../../public/Assets/bncclnt.png';
import bncctiket from '../../public/Assets/bncctiket.png';
import anakteknik from '../../public/Assets/anakteknik.png';

export default function CertifCard({data, small, data2}) {
  let image;
  if (data.company === 'Udemy') {
    image = Udemy;
  } else if (data.company === 'Sololearn') {
    image = SoloLearn;
  } else if (data.company === 'FreeCodeCamp') {
    image = FreeCodeCamp;
  } else if (data.company === 'Binar Academy') {
    image = Binar;
  } else if (data.company === 'Coding Studio') {
    image = COdingStudio;
  } else if (data.company === 'Timedoor Academy') {
    image = TimedoorAcademy;
  } else if (data.company === 'Harisenin.com') {
    image = Harisenin;
  } else if (data.company === 'Dicoding') {
    image = dicoding;
  } else if (data.company === 'Progate') {
    image = progate;
  } else if (data.company === 'Bina Nusantara Computer Club') {
    image = bncclnt;
  } else if (data.company === 'BNCC x Tiket.com') {
    image = bncctiket;
  } else if (data.company === 'Anak Teknik Indonesia') {
    image = anakteknik;
  } else {
    image = tempPhoto;
  }
  return (
    <div
      className={`${styles.container} ${styles.showAnimation} ${
        data2?.length ? styles.maxWidth : ''
      }`}
    >
      <Image
        src={image}
        alt="Certificate photo"
        width={200}
        height={200}
        quality={100}
        style={
          image === FreeCodeCamp || image === Harisenin
            ? {marginTop: '.5rem', height: '18px'}
            : {marginTop: '.5rem'}
        }
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
