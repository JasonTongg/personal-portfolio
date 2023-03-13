import React, {useEffect, useState, useCallback} from 'react';
import {useRouter} from 'next/router';
import Navbar from '@/components/Navbar/Navbar';
import styles from '../../styles/Home.module.css';
import FixedNavbar from '@/components/FixedNavbar/FixedNavbar';
import Footer from '@/components/Footer/Footer';
import FixedButton from '@/components/FixedButton/FixedButton';
import Head from 'next/head';
import Image from 'next/image';
import Rocket from '../../public/Assets/rocket.png';

export default function Detail() {
  let router = useRouter();
  let [navbar, setNavbar] = useState(false);
  let [button, setButton] = useState(false);
  let {detail} = router.query;

  let checkScroll = useCallback(() => {
    let navbar = document.querySelector('#navbarContainer');
    let height = navbar?.getBoundingClientRect().height;
    let y = navbar?.getBoundingClientRect().y;
    let footer = document.querySelector('#footerContainer');
    let footerY = footer?.getBoundingClientRect().y;
    let windowHeight = window.innerHeight;
    let rocket = document.querySelector('#rocket');
    let scroll = window.scrollY;

    if (height * -1 >= y && footerY >= windowHeight - 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

    if (height * -1 >= y) {
      setButton(true);
    } else {
      setButton(false);
    }

    let speed = (scroll / document.body?.getBoundingClientRect().height) * 100;
    rocket.style.top = `${speed + 5}%`;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jason Portfolio</title>
      </Head>
      <Navbar />
      <h1>{detail}</h1>
      <Footer />
      {navbar && <FixedNavbar />}
      {button && <FixedButton />}
      <div className={styles.background}></div>
      <div className={styles.rocket} id="rocket">
        <Image src={Rocket} alt="rocket" width={100} height={50}></Image>
      </div>
    </div>
  );
}
