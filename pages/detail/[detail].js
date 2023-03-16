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
import Details from '@/components/Detail/Detail';
import portfolioData from '../../Data/Portfolio';

export async function getStaticProps(context) {
  return {
    props: {
      data: portfolioData.filter(
        (item) => item.title === context.params.detail
      )[0],
    },
  };
}

export async function getStaticPaths() {
  let param = portfolioData.map((item) => ({
    params: {
      detail: item.title,
    },
  }));
  return {
    paths: param,
    fallback: 'blocking',
  };
}

export default function Detail({data}) {
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

    let speed =
      (scroll /
        (document.body?.getBoundingClientRect().height - window.innerHeight)) *
      100;
    rocket.style.top = `calc(${speed}% - ${
      rocket.querySelector('img').getBoundingClientRect().height
    }px)`;
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
      <Details data={data} />
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
