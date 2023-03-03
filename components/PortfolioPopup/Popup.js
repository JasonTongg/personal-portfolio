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
import {CgClose} from 'react-icons/cg';

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
        <CgClose
          className={styles.close}
          onClick={() => setModel(false)}
        ></CgClose>
        <div className={styles.info}>
          <Image
            src={data.image || TempImage}
            alt="portfolio thumbnail"
            width={500}
            height={300}
            quality={100}
          ></Image>
          <div className={`${styles.infoContent}`}>
            <h2>{data.title}</h2>
            <p>&emsp; {data.desc}</p>
            <div className={styles.buttons}>
              <button
                onClick={() => setCategory(0)}
                className={category === 0 && styles.active}
              >
                <AiOutlineTool></AiOutlineTool>Tools
              </button>
              {data.account && (
                <button
                  onClick={() => setCategory(1)}
                  className={category === 1 && styles.active}
                >
                  <SiOpenaccess></SiOpenaccess>Account
                </button>
              )}
              <button
                onClick={() => setCategory(2)}
                className={category === 2 && styles.active}
              >
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
            {category === 1 && (
              <div className={styles.accountContainer}>
                {data.account.map((item, idx) => (
                  <div className={styles.account} key={idx}>
                    <h3>{item.title}</h3>
                    {item.email && (
                      <div className={styles.accountItem}>
                        <p>Email</p>
                        <p>: {item.email}</p>
                      </div>
                    )}
                    {item.user && (
                      <div className={styles.accountItem}>
                        <p>User</p>
                        <p>: {item.user}</p>
                      </div>
                    )}
                    <div className={styles.accountItem}>
                      <p>Password</p>
                      <p>: {item.password}</p>
                    </div>
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
