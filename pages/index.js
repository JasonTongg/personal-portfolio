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

export default function index() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Certification />
      <Contact />
      {/* <FixedNavbar /> */}
    </div>
  );
}
