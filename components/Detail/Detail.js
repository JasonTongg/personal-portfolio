import React from 'react';
import styles from './Detail.module.css';
import {IoPaperPlaneOutline} from 'react-icons/io5';
import Link from 'next/link';
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiAuth0,
  SiRedux,
  SiNuxtdotjs,
} from 'react-icons/si';
// import {SiAxios} from 'react-icons/si'
import {IoLogoSass} from 'react-icons/io5';
import {DiCss3} from 'react-icons/di';
import {TbBrandNextjs} from 'react-icons/tb';
import {FaVuejs} from 'react-icons/fa';

export default function Detail({data}) {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <div className={styles.buttons}>
          {data.demo && (
            <Link href={data.demo} className={styles.button} target="_blank">
              <p>Demo</p>
              <IoPaperPlaneOutline></IoPaperPlaneOutline>
            </Link>
          )}
          {typeof data.github === 'string' && (
            <Link href={data.github} target="_blank" className={styles.button}>
              <p>Github</p>
              <IoPaperPlaneOutline></IoPaperPlaneOutline>
            </Link>
          )}
          {typeof data.github !== 'string' && (
            <Link
              href={data.github[0]}
              target="_blank"
              className={styles.button}
            >
              <p>Github</p>
              <IoPaperPlaneOutline></IoPaperPlaneOutline>
            </Link>
          )}
          {typeof data.github !== 'string' && (
            <Link
              href={data.github[1]}
              target="_blank"
              className={styles.button}
            >
              <p>Github</p>
              <IoPaperPlaneOutline></IoPaperPlaneOutline>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tools}>
          {data.tools.map((item, idx) => (
            <div className={styles.toolItem} key={idx}>
              <div>
                {item.toLowerCase() === 'javascript' && (
                  <SiJavascript></SiJavascript>
                )}
                {item.toLowerCase() === 'html' && (
                  <SiHtml5 style={{color: '#FF4B00'}}></SiHtml5>
                )}
                {item.toLowerCase() === 'scss/sass' && (
                  <IoLogoSass style={{color: '#CD6699'}}></IoLogoSass>
                )}
                {item.toLowerCase() === 'css' && (
                  <DiCss3 style={{color: '#2196F3'}}></DiCss3>
                )}
                {item.toLowerCase() === 'reactjs' && (
                  <SiReact style={{color: '#00D1F2'}}></SiReact>
                )}
                {/* {item.toLowerCase() === 'axios' && (
                  <SiAxios style={{color: '#6222DD'}}></SiAxios>
                )} */}
                {item.toLowerCase() === 'auth0' && (
                  <SiAuth0 style={{color: '#DF5022'}}></SiAuth0>
                )}
                {item.toLowerCase() === 'nuxtjs' && (
                  <SiNuxtdotjs style={{color: '#00838F'}}></SiNuxtdotjs>
                )}
                {item.toLowerCase() === 'vuejs' && <FaVuejs></FaVuejs>}
                {item.toLowerCase() === 'nextjs' && (
                  <TbBrandNextjs></TbBrandNextjs>
                )}
                {(item.toLowerCase() === 'redux' ||
                  item.toLowerCase() === 'redux-thunk' ||
                  item.toLowerCase() === 'redux-persist') && (
                  <SiRedux style={{color: '#835EC3'}}></SiRedux>
                )}
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className={styles.account}></div>
      </div>
    </div>
  );
}
