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
import {
  frontEndSkills,
  otherSkill,
  web3FrontEndSkills,
  web3OtherSkill,
} from '../Data/Skills';
import CertificationData, {web3Data as web3CertificationData} from '../Data/Certification';
import {
  education,
  exp,
  organization,
  volunteer,
  web3Education,
  web3Exp,
} from '../Data/Experience';
import portfolio, {web3Portfolio} from '../Data/Portfolio';
import Image from 'next/image';
import Rocket from '../public/Assets/rocket.png';
import RocketCloud from '../public/Assets/cloud-5.png';

export async function getStaticProps() {
  return {
    props: {
      skills: {
        frontEndSkills,
        otherSkill,
        web3FrontEndSkills,
        web3OtherSkill,
      },
      Certification: CertificationData,
      web3Certification: web3CertificationData,
      experience: {
        education,
        exp,
        organization,
        volunteer,
        web3Education,
        web3Exp,
      },
      portfolio,
      web3Portfolio,
    },
  };
}

export default function Index({
  skills,
  Certification: certifications,
  web3Certification,
  experience,
  portfolio,
  web3Portfolio,
}) {
  let [navbar, setNavbar] = useState(false);
  let [button, setButton] = useState(false);
  let [mode, setMode] = useState('web3');

  let activeSkills =
    mode === 'web3'
      ? {
          frontEndSkills: skills.web3FrontEndSkills,
          otherSkill: skills.web3OtherSkill,
        }
      : {frontEndSkills: skills.frontEndSkills, otherSkill: skills.otherSkill};

  let combinedExperience = {
    education: [...experience.web3Education, ...experience.education],
    exp: [...experience.web3Exp, ...experience.exp],
    organization: experience.organization,
    volunteer: experience.volunteer,
  };

  let combinedPortfolio = [...web3Portfolio, ...portfolio];

  let activeCertification = mode === 'web3' ? web3Certification : certifications;

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
      <Skills data={activeSkills} mode={mode} setMode={setMode} />
      <Experience data={combinedExperience} />
      <Portfolio data={combinedPortfolio} />
      <Certification data={activeCertification} />
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
