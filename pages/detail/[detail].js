import React, {useEffect, useState, useCallback} from 'react';
import Navbar from '@/components/Detail-Navbar/Navbar';
import styles from '../../styles/Home.module.css';
import FixedNavbar from '@/components/Detail-FixedNavbar/FixedNavbar';
import Footer from '@/components/Footer/Footer';
import Rocket from '@/components/Rocket/Rocket';
import Head from 'next/head';
import Details from '@/components/Detail/Detail';
import portfolioData, {web3Portfolio} from '../../Data/Portfolio';

let allPortfolioData = [...portfolioData, ...web3Portfolio];

export async function getStaticProps(context) {
  return {
    props: {
      data: allPortfolioData.filter(
        (item) => item.title === context.params.detail
      )[0],
    },
  };
}

export async function getStaticPaths() {
  let param = allPortfolioData.map((item) => ({
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
  let [navbar, setNavbar] = useState(false);

  let checkScroll = useCallback(() => {
    let navbar = document.querySelector('#navbarContainer');
    let height = navbar?.getBoundingClientRect().height;
    let y = navbar?.getBoundingClientRect().y;
    let footer = document.querySelector('#footerContainer');
    let footerY = footer?.getBoundingClientRect().y;
    let windowHeight = window.innerHeight;

    if (height * -1 >= y && footerY >= windowHeight - 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
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
      <div className={styles.background}>
        <div className={styles.sky}>
          <div className={`${styles.skyCloud} cloud-drift`}></div>
          <div className={`${styles.skyCloud} cloud-drift`}></div>
          <div className={`${styles.skyCloud} cloud-drift`}></div>
        </div>
      </div>
      <Rocket />
    </div>
  );
}
