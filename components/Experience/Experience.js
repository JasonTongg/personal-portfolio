import React, {useState} from 'react';
import styles from './Experience.module.css';
import {MdOutlineSchool, MdOutlineWorkOutline} from 'react-icons/md';
import {VscOrganization} from 'react-icons/vsc';
import {FaHandsHelping} from 'react-icons/fa';
import {IoCalendarOutline} from 'react-icons/io5';

export default function Experience({data}) {
  let {education, exp, organization, volunteer} = data;
  let [activeTab, setActiveTab] = useState('exp');
  let experience = {education, organization, exp, volunteer}[activeTab];
  return (
    <div className={styles.container} id="experience">
      <div className={styles.header}>
        <h2>Experience</h2>
        <p>My Personal Journey</p>
      </div>
      <div className={styles.buttons}>
        <div
          className={`${styles.button} ${
            activeTab === 'exp' && styles.active
          }`}
          onClick={() => {
            setActiveTab('exp');
          }}
        >
          <MdOutlineWorkOutline></MdOutlineWorkOutline>
          <h3>Experience</h3>
        </div>
        <div
          className={`${styles.button} ${
            activeTab === 'education' && styles.active
          }`}
          onClick={() => {
            setActiveTab('education');
          }}
        >
          <MdOutlineSchool></MdOutlineSchool>
          <h3>Education</h3>
        </div>
        <div
          className={`${styles.button} ${
            activeTab === 'organization' && styles.active
          }`}
          onClick={() => {
            setActiveTab('organization');
          }}
        >
          <VscOrganization></VscOrganization>
          <h3>Organization</h3>
        </div>
        <div
          className={`${styles.button} ${
            activeTab === 'volunteer' && styles.active
          }`}
          onClick={() => {
            setActiveTab('volunteer');
          }}
        >
          <FaHandsHelping></FaHandsHelping>
          <h3>Volunteer</h3>
        </div>
      </div>
      <div className={styles.content}>
        {experience.map((item, idx) => {
          return (
            <div className={styles.contentItems} key={idx}>
              {idx % 2 === 0 && (
                <div
                  className={`${styles.contentItem} ${styles.contentItemsLeft}`}
                >
                  <h3>{item.degree}</h3>
                  <p>{item.location}</p>
                  <div className={styles.dateLeft}>
                    <IoCalendarOutline></IoCalendarOutline>
                    <p>{item.date}</p>
                  </div>
                </div>
              )}
              <div className={styles.node} style={{gridColumn: '2'}}>
                {idx !== 0 && <div className={styles.lineUp}></div>}
                <div className={styles.circle}></div>
                {idx !== experience.length - 1 && (
                  <div className={styles.lineDown}></div>
                )}
              </div>
              {idx % 2 === 1 && (
                <div className={styles.contentItem} style={{gridColumn: '3'}}>
                  <h3>{item.degree}</h3>
                  <p>{item.location}</p>
                  <div className={styles.date}>
                    <IoCalendarOutline></IoCalendarOutline>
                    <p>{item.date}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
