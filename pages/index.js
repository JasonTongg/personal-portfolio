import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import styles from '../styles/Home.module.css';
import FixedNavbar from '@/components/FixedNavbar/FixedNavbar';
import About from '@/components/About/About';

export default function index() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <About />
      <FixedNavbar />
    </div>
  );
}
