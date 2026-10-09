import React, {useEffect, useRef} from 'react';
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
import Solana from '../../public/Assets/solana.png';
import Anchor from '../../public/Assets/anchor.png';
import Rust from '../../public/Assets/rust.png';
import Solidity from '../../public/Assets/solidity.png';
import Tailwind from '../../public/Assets/tailwind.png';
import Nextjs from '../../public/Assets/nextjs.png';
import Foundry from '../../public/Assets/foundry.png';
import RainbowKit from '../../public/Assets/rainbowKit.png';
import Uniswap from '../../public/Assets/uniswap.png';
import Chainlink from '../../public/Assets/chainlink.png';
import Image from 'next/image';

// Web3 tool logos, keyed by lowercase tool name; sizes keep each logo's aspect ratio
const web3Logos = {
  solana: {src: Solana, width: 53, height: 53},
  anchor: {src: Anchor, width: 53, height: 53},
  rust: {src: Rust, width: 53, height: 53},
  solidity: {src: Solidity, width: 34, height: 53},
  'tailwind css': {src: Tailwind, width: 62, height: 37},
  'next.js': {src: Nextjs, width: 66, height: 40},
  foundry: {src: Foundry, width: 53, height: 53},
  rainbowkit: {src: RainbowKit, width: 53, height: 53},
  uniswap: {src: Uniswap, width: 49, height: 53},
  chainlink: {src: Chainlink, width: 53, height: 53},
};

export default function Detail({data}) {
  let previewRef = useRef(null);
  let browserRef = useRef(null);

  // Scroll-driven reveal: the preview starts tilted back and slightly smaller,
  // then stands up to full size as it scrolls into view. It ends with no
  // transform at all so the screenshot renders at its native sharpness.
  useEffect(() => {
    let preview = previewRef.current;
    let browser = browserRef.current;
    if (!preview || !browser) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = null;
    let updatePreview = () => {
      frame = null;
      let windowHeight = window.innerHeight;
      let top = preview.getBoundingClientRect().top + window.scrollY;
      let start = top - windowHeight;
      let end = Math.min(
        top - windowHeight * 0.2,
        document.documentElement.scrollHeight - windowHeight
      );
      let progress = (window.scrollY - start) / Math.max(end - start, 1);
      progress = Math.min(Math.max(progress, 0), 1);
      let eased = 1 - Math.pow(1 - progress, 2);

      if (eased >= 0.999) {
        browser.style.transform = 'none';
        browser.style.opacity = '1';
        return;
      }
      browser.style.transform = `perspective(1200px) rotateX(${
        (1 - eased) * 25
      }deg) scale(${0.85 + eased * 0.15})`;
      browser.style.opacity = `${0.4 + eased * 0.6}`;
    };

    let requestUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updatePreview);
    };

    updatePreview();
    window.addEventListener('scroll', requestUpdate);
    window.addEventListener('resize', requestUpdate);
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [data.background]);

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
          {Array.isArray(data.github) &&
            data.github.map((repo, idx) => (
              <Link
                key={idx}
                href={repo.url}
                target="_blank"
                className={styles.button}
              >
                <p>{repo.label}</p>
                <IoPaperPlaneOutline></IoPaperPlaneOutline>
              </Link>
            ))}
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
                  {web3Logos[item.toLowerCase()] && (
                    <Image
                      src={web3Logos[item.toLowerCase()].src}
                      alt={item}
                      width={web3Logos[item.toLowerCase()].width}
                      height={web3Logos[item.toLowerCase()].height}
                    />
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
        <div className={styles.preview} ref={previewRef}>
          <div className={styles.browser} ref={browserRef}>
            <div className={styles.browserBar}>
              <span></span>
              <span></span>
              <span></span>
              <p>
                {data.demo
                  ? data.demo.replace(/^https?:\/\//, '').replace(/\/$/, '')
                  : data.title}
              </p>
            </div>
            <Image
              src={data.background}
              alt={`${data.title} preview`}
              width={1190}
              height={560}
              sizes="1036px"
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}
