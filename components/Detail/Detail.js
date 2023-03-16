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
import {IoLogoSass} from 'react-icons/io5';
import {DiCss3} from 'react-icons/di';
import {TbBrandNextjs} from 'react-icons/tb';
import {FaVuejs} from 'react-icons/fa';
import Axios from '../../public/Assets/axios.png';
import StyledComponents from '../../public/Assets/styled-components.png';
import MaterialUI from '../../public/Assets/materialUI.png';
import Javascript from '../../public/Assets/Javascript.png';
import Vuejs from '../../public/Assets/vuejs.png';
import Nuxtjs from '../../public/Assets/nuxtjs.png';
import Image from 'next/image';

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
                {item.toLowerCase() === 'axios' && (
                  <Image src={Axios} alt="axios" width={72} height={38} />
                )}
                {item.toLowerCase() === 'material ui' && (
                  <Image
                    src={MaterialUI}
                    alt="material ui"
                    width={53}
                    height={53}
                  />
                )}
                {item.toLowerCase() === 'styled components' && (
                  <Image
                    src={StyledComponents}
                    alt="styled components"
                    width={53}
                    height={53}
                  />
                )}
                {item.toLowerCase() === 'javascript' && (
                  <Image
                    src={Javascript}
                    alt="javascript"
                    width={53}
                    height={53}
                  />
                )}
                {item.toLowerCase() === 'auth0' && (
                  <SiAuth0 style={{color: '#DF5022'}}></SiAuth0>
                )}
                {item.toLowerCase() === 'nuxtjs' && (
                  <Image src={Nuxtjs} alt="Nuxtjs" width={53} height={53} />
                )}
                {item.toLowerCase() === 'vuejs' && (
                  <Image src={Vuejs} alt="Vuejs" width={53} height={53} />
                )}
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
