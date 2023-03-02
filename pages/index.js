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

export default function Index() {
  let [navbar, setNavbar] = useState(false);
  let [button, setButton] = useState(false);

  let checkScroll = useCallback(() => {
    let navbar = document.querySelector('#navbarContainer');
    let height = navbar.getBoundingClientRect().height;
    let y = navbar.getBoundingClientRect().y;
    let footer = document.querySelector('#footerContainer');
    let footerY = footer.getBoundingClientRect().y;
    let windowHeight = window.innerHeight;
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
      <Skills />
      <Experience />
      <Portfolio />
      <Certification />
      <Contact />
      <Footer />
      {navbar && <FixedNavbar />}
      {button && <FixedButton />}
    </div>
  );
}
