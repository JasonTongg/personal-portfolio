import React, {useState} from 'react';
import styles from './Experience.module.css';
import {MdOutlineSchool, MdOutlineWorkOutline} from 'react-icons/md';
import {VscOrganization} from 'react-icons/vsc';
import {IoCalendarOutline} from 'react-icons/io5';
import {education, exp, organization} from '../../Data/Experience';

export default function Experience() {
  let [experience, setExperience] = useState(education);
  return (
    <div className={styles.container} id="experience">
      <div className={styles.header}>
        <h2>Experience</h2>
        <p>My Personal Journey</p>
      </div>
      <div className={styles.buttons}>
        <div
          className={`${styles.button} ${
            experience === education && styles.active
          }`}
          onClick={() => {
            setExperience(education);
          }}
        >
          <MdOutlineSchool></MdOutlineSchool>
          <h3>Education</h3>
        </div>
        <div
          className={`${styles.button} ${
            experience === organization && styles.active
          }`}
          onClick={() => {
            setExperience(organization);
          }}
        >
          <VscOrganization></VscOrganization>
          <h3>Organization</h3>
        </div>
        <div
          className={`${styles.button} ${experience === exp && styles.active}`}
          onClick={() => {
            setExperience(exp);
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
