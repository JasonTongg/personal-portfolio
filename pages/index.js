import React, {useCallback, useEffect, useState} from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import styles from '../styles/Home.module.css';
import FixedNavbar from '@/components/FixedNavbar/FixedNavbar';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Portfolio from '@/components/Portfolio/Portfolio';
import Certification from '@/components/Certification/Certification';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import FixedButton from '@/components/FixedButton/FixedButton';
import Head from 'next/head';
import {frontEndSkills, otherSkill} from '../Data/Skills';
import CertificationData from '../Data/Certification';
import {education, exp, organization} from '../Data/Experience';
import portfolio from '../Data/Portfolio';
import Image from 'next/image';
import Rocket from '../public/Assets/rocket.png';
import RocketCloud from '../public/Assets/cloud-5.png';

export async function getStaticProps(context) {
  return {
    props: {
      skills: {
        frontEndSkills,
        otherSkill,
      },
      Certification: CertificationData,
      experience: {
        education,
        exp,
        organization,
      },
      portfolio,
    },
  };
}

export default function Index({
  skills,
  Certification: certifications,
  experience,
  portfolio,
}) {
  let [navbar, setNavbar] = useState(false);
  let [button, setButton] = useState(false);

  let checkScroll = useCallback(() => {
    let navbar = document.querySelector('#navbarContainer');
    let height = navbar?.getBoundingClientRect().height;
    let y = navbar?.getBoundingClientRect().y;
    let footer = document.querySelector('#footerContainer');
    let footerY = footer?.getBoundingClientRect().y;
    let windowHeight = window.innerHeight;
    let rocket = document.querySelector('#rocket');
    let cloud = document.querySelector('#cloud');
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
      rocket.getBoundingClientRect().height
    }px)`;
    cloud.style.opacity = `${(speed / 100) * 2}`;
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
      <Hero />
      <About />
      <Skills data={skills} />
      <Experience data={experience} />
      <Portfolio data={portfolio} />
      <Certification data={certifications} />
      <Contact />
      <Footer />
      {navbar && <FixedNavbar />}
      {button && <FixedButton />}
      <div className={styles.background}></div>
      <div className={styles.rocket}>
        <Image
          src={Rocket}
          alt="rocket"
          width={100}
          height={50}
          className={styles.rocketImage}
          id="rocket"
        ></Image>
        <Image
          src={RocketCloud}
          alt="Cloud"
          width={100}
          height={80}
          className={styles.cloud}
          id="cloud"
        ></Image>
      </div>
    </div>
  );
}
