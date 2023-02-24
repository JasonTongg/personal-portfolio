import React, {useState} from 'react';
import styles from './FixedNavbar.module.css';
import {AiOutlineHome} from 'react-icons/ai';
import {RxPerson} from 'react-icons/rx';
import {RiPencilRuler2Line} from 'react-icons/ri';
import {MdWorkOutline} from 'react-icons/md';
import {IoNewspaperOutline} from 'react-icons/io5';
import {HiOutlineMail} from 'react-icons/hi';

export default function FixedNavbar() {
  let [active, setActive] = useState('home');
  return (
    <div className={styles.container}>
      <AiOutlineHome
        className={active === 'home' && styles.active}
        onClick={() => {
          document
            .getElementById('navbarContainer')
            .scrollIntoView({behavior: 'smooth', block: 'start'});
          setActive('home');
        }}
      ></AiOutlineHome>
      <RxPerson
        className={active === 'about' && styles.active}
        onClick={() => {
          document
            .getElementById('about')
            .scrollIntoView({behavior: 'smooth', block: 'center'});
          setActive('about');
        }}
      ></RxPerson>
      <RiPencilRuler2Line
        className={active === 'skills' && styles.active}
        onClick={() => {
          document
            .getElementById('skills')
            .scrollIntoView({behavior: 'smooth', block: 'center'});
          setActive('skills');
        }}
      ></RiPencilRuler2Line>
      <MdWorkOutline
        className={active === 'experience' && styles.active}
        onClick={() => {
          document
            .getElementById('experience')
            .scrollIntoView({behavior: 'smooth', block: 'center'});
          setActive('experience');
        }}
      ></MdWorkOutline>
      <IoNewspaperOutline
        className={active === 'portfolio' && styles.active}
        onClick={() => {
          document
            .getElementById('portfolio')
            .scrollIntoView({behavior: 'smooth', block: 'start'});
          setActive('portfolio');
        }}
      ></IoNewspaperOutline>
      <HiOutlineMail
        className={active === 'contact' && styles.active}
        onClick={() => {
          document
            .getElementById('contact')
            .scrollIntoView({behavior: 'smooth', block: 'center'});
          setActive('contact');
        }}
      ></HiOutlineMail>
    </div>
  );
}
