import React, {useState} from 'react';
import styles from './FixedNavbar.module.css';
import {AiOutlineHome} from 'react-icons/ai';
import {RiPencilRuler2Line} from 'react-icons/ri';
import {TbListDetails} from 'react-icons/tb';
import Router from 'next/router';

export default function FixedNavbar() {
  let [active, setActive] = useState('about');
  return (
    <div className={styles.container}>
      <AiOutlineHome
        className={active === 'home' && styles.active}
        onClick={() => {
          Router.push('/');
          setActive('home');
        }}
      ></AiOutlineHome>
      <TbListDetails
        className={active === 'about' && styles.active}
        onClick={() => {
          document
            .getElementById('hero')
            .scrollIntoView({behavior: 'smooth', block: 'center'});
          setActive('about');
        }}
      ></TbListDetails>
      <RiPencilRuler2Line
        className={active === 'skills' && styles.active}
        onClick={() => {
          document
            .getElementById('tools')
            .scrollIntoView({behavior: 'smooth', block: 'center'});
          setActive('skills');
        }}
      ></RiPencilRuler2Line>
    </div>
  );
}
