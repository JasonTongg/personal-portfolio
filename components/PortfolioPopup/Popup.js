import React from 'react';
import styles from './Popup.module.css';
import Image from 'next/image';
import TempImage from '../../public/Assets/temp-photo.png';
import {IoPaperPlaneOutline} from 'react-icons/io5';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import Link from 'next/link';

export default function Popup({setModel, data}) {
  let closeModel = (e) => {
    if (
      Array.from(e.target.classList).some((item) => item === 'popupContainer')
    ) {
      setModel(false);
    }
  };

  return (
    <div className={`${styles.container} popupContainer`} onClick={closeModel}>
      <div className={styles.content}>
        <h2>{data.title}</h2>
        <div className={styles.info}>
          <Image
            src={data.image || TempImage}
            alt="portfolio thumbnail"
            width={500}
            height={300}
            quality={100}
          ></Image>
          <div className={styles.infoContent}>
            <div className={styles.tools}>
              <h2>Tools</h2>
              <div className={styles.toolsItems}>
                {data.tools.map((item, idx) => (
                  <div className={styles.toolsItem} key={idx}>
                    <BsFillPatchCheckFill></BsFillPatchCheckFill>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.buttons}>
              {typeof data.github === 'string' && (
                <Link href={data.github} target="_blank">
                  <button>
                    Github <IoPaperPlaneOutline></IoPaperPlaneOutline>
                  </button>
                </Link>
              )}
              {typeof data.github !== 'string' && (
                <Link href={data.github[0]} target="_blank">
                  <button>
                    Github <IoPaperPlaneOutline></IoPaperPlaneOutline>
                  </button>
                </Link>
              )}
              {typeof data.github !== 'string' && (
                <Link href={data.github[1]} target="_blank">
                  <button>
                    Github <IoPaperPlaneOutline></IoPaperPlaneOutline>
                  </button>
                </Link>
              )}
              {data.demo && (
                <Link href={data.demo} target="_blank">
                  <button>
                    Demo <IoPaperPlaneOutline></IoPaperPlaneOutline>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <p>&emsp; {data.desc}</p>
      </div>
    </div>
  );
}
