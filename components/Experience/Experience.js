import React, {useEffect, useState} from 'react';
import styles from './Experience.module.css';
import {MdOutlineSchool, MdOutlineWorkOutline} from 'react-icons/md';
import {VscOrganization} from 'react-icons/vsc';
import {IoCalendarOutline} from 'react-icons/io5';

export default function Experience({data, mode}) {
  let {education, exp, organization} = data;
  let showOrganization = mode !== 'web3';
  let [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    if (!showOrganization && activeTab === 'organization') {
      setActiveTab('education');
    }
  }, [showOrganization, activeTab]);

  let experience = {education, organization, exp}[activeTab] ?? education;
  return (
    <div className={styles.container} id="experience">
      <div className={styles.header}>
        <h2>Experience</h2>
        <p>My Personal Journey</p>
      </div>
      <div className={styles.buttons}>
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
        {showOrganization && (
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
        )}
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
      </div>
      <div className={styles.content}>
        <div
          className={styles.line}
          style={{
            height: `calc(${
              experience.length - 2 <= 0 ? 1 : experience.length - 2
            } * 80px + ${
              experience.length <= 2 ? experience.length - 1 : experience.length
            } * 20px)`,
          }}
        ></div>
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
              {idx % 2 === 0 && <div className={styles.circle}></div>}
              {idx % 2 === 1 && (
                <div className={styles.circle} style={{gridColumn: '2'}}></div>
              )}
              {idx % 2 === 1 && (
                <div
                  className={styles.contentItem}
                  key={idx}
                  style={{gridColumn: '3'}}
                >
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
