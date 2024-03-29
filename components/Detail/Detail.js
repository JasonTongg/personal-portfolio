import React from 'react';
import styles from './Detail.module.css';
import Link from 'next/link';
import {SiHtml5, SiReact, SiAuth0, SiRedux} from 'react-icons/si';
import {IoLogoSass, IoBicycleSharp, IoPaperPlaneOutline} from 'react-icons/io5';
import {DiCss3} from 'react-icons/di';
import {TbBrandNextjs, TbSofa, TbCookie, TbShoe} from 'react-icons/tb';
import {CiPizza} from 'react-icons/ci';
import {RiMovie2Line, RiGithubLine, RiHotelLine} from 'react-icons/ri';
import {AiOutlineCar, AiOutlineYoutube} from 'react-icons/ai';
import {MdWorkOutline, MdOutlineLocalHotel} from 'react-icons/md';
import {BsPiggyBank, BsBank} from 'react-icons/bs';
import {SlPlane} from 'react-icons/sl';
import Axios from '../../public/Assets/axios.png';
import StyledComponents from '../../public/Assets/styled-components.png';
import MaterialUI from '../../public/Assets/materialUI.png';
import Javascript from '../../public/Assets/Javascript.png';
import Vuejs from '../../public/Assets/vuejs.png';
import Nuxtjs from '../../public/Assets/nuxtjs.png';
import Parcel from '../../public/Assets/parcel.svg';
import Image from 'next/image';

export default function Detail({data}) {
  return (
    <div className={styles.container}>
      <div className={styles.hero} id="hero">
        <h2>
          {data.title}
          {data.title.toLowerCase() === 'pizzaria' && <CiPizza></CiPizza>}
          {data.title.toLowerCase() === 'j-movie' && (
            <RiMovie2Line></RiMovie2Line>
          )}
          {data.title.toLowerCase() === 'binar rental car' && (
            <AiOutlineCar></AiOutlineCar>
          )}
          {data.title.toLowerCase() === 'j-youtube' && (
            <AiOutlineYoutube></AiOutlineYoutube>
          )}
          {data.title.toLowerCase() === 'comfy sloth' && <TbSofa></TbSofa>}
          {data.title.toLowerCase() === 'github user' && (
            <RiGithubLine></RiGithubLine>
          )}
          {data.title.toLowerCase() === 'jobster' && (
            <MdWorkOutline></MdWorkOutline>
          )}
          {data.title.toLowerCase() === 'forkify' && <TbCookie></TbCookie>}
          {data.title.toLowerCase() === 'workout mapty' && (
            <IoBicycleSharp></IoBicycleSharp>
          )}
          {data.title.toLowerCase() === 'bank app' && (
            <BsPiggyBank></BsPiggyBank>
          )}
          {data.title.toLowerCase() === 'traveling compro' && (
            <SlPlane></SlPlane>
          )}
          {data.title.toLowerCase() === 'bankist' && <BsBank></BsBank>}
          {data.title.toLowerCase() === 'trillo' && (
            <MdOutlineLocalHotel></MdOutlineLocalHotel>
          )}
          {data.title.toLowerCase() === 'nexter' && <RiHotelLine></RiHotelLine>}
          {data.title.toLowerCase() === 'j-shoe' && <TbShoe></TbShoe>}
        </h2>
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
      <div className={styles.content} id="tools">
        <div className={styles.header}>
          <h1>Tools</h1>
          <p>Project Equipments</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.tools}>
            {data.tools.map((item, idx) => (
              <div className={styles.toolItem} key={idx}>
                <div>
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
                  {item.toLowerCase() === 'parceljs' && (
                    <Image src={Parcel} alt="parceljs" width={65} height={49} />
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
                  {item.toLowerCase() === 'vuejs' ||
                    (item.toLowerCase() === 'vuex' && (
                      <Image src={Vuejs} alt="Vuejs" width={53} height={53} />
                    ))}
                  {item.toLowerCase() === 'nextjs' && (
                    <TbBrandNextjs></TbBrandNextjs>
                  )}
                  {(item.toLowerCase() === 'redux' ||
                    item.toLowerCase() === 'redux thunk' ||
                    item.toLowerCase() === 'redux persist') && (
                    <SiRedux style={{color: '#835EC3'}}></SiRedux>
                  )}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          {data.account && <div className={styles.line}></div>}
          <div className={styles.accountContainer}>
            {data.account &&
              data.account.map((item, idx) => (
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
        </div>
      </div>
      {data.background && (
        <div
          className={styles.parallax}
          style={{backgroundImage: `url(${data.background})`}}
        ></div>
      )}
    </div>
  );
}
