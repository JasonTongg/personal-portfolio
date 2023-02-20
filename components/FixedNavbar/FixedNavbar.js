import React from 'react';
import styles from './FixedNavbar.module.css';
import {AiOutlineHome} from 'react-icons/ai';
import {RxPerson} from 'react-icons/rx';
import {RiPencilRuler2Line} from 'react-icons/ri';
import {MdWorkOutline} from 'react-icons/md';
import {IoNewspaperOutline} from 'react-icons/io5';
import {HiOutlineMail} from 'react-icons/hi';

export default function FixedNavbar() {
  return (
    <div className={styles.container}>
      <AiOutlineHome className={styles.active}></AiOutlineHome>
      <RxPerson></RxPerson>
      <RiPencilRuler2Line></RiPencilRuler2Line>
      <MdWorkOutline></MdWorkOutline>
      <IoNewspaperOutline></IoNewspaperOutline>
      <HiOutlineMail></HiOutlineMail>
    </div>
  );
}
