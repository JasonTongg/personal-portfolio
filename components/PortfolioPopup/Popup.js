import React, {useState} from 'react';
import styles from './Popup.module.css';
import Image from 'next/image';
import TempImage from '../../public/Assets/temp-photo.png';
import {IoPaperPlaneOutline} from 'react-icons/io5';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import {AiOutlineTool} from 'react-icons/ai';
import {SiOpenaccess} from 'react-icons/si';
import {VscEye} from 'react-icons/vsc';
import Link from 'next/link';

export default function Popup({setModel, data}) {
  let [category, setCategory] = useState(0);
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
        <div className={styles.info}>
          <Image
            src={data.image || TempImage}
            alt="portfolio thumbnail"
            width={500}
            height={300}
            quality={100}
          ></Image>
          <div className={styles.infoContent}>
            <h2>{data.title}</h2>
            <p>&emsp; {data.desc}</p>
            <div className={styles.buttons}>
              <button onClick={() => setCategory(0)}>
                <AiOutlineTool></AiOutlineTool>Tools
              </button>
              <button onClick={() => setCategory(1)}>
                <SiOpenaccess></SiOpenaccess>Account
              </button>
              <button onClick={() => setCategory(2)}>
                <VscEye></VscEye>View
              </button>
            </div>
            {category === 0 && (
              <div className={styles.toolsItems}>
                {data.tools.map((item, idx) => (
                  <div className={styles.toolsItem} key={idx}>
                    <BsFillPatchCheckFill></BsFillPatchCheckFill>
                    {item}
                  </div>
                ))}
              </div>
            )}
            {category === 2 && (
              <div className={styles.views}>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
