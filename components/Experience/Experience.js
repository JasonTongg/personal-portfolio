import React, {useState} from 'react';
import styles from './Experience.module.css';
import {MdOutlineSchool, MdOutlineWorkOutline} from 'react-icons/md';
import {VscOrganization} from 'react-icons/vsc';
import {IoCalendarOutline} from 'react-icons/io5';

let education = [
  {
    degree: 'Computer Science and Mathematics',
    location: 'Binus University',
    date: '2019 - Present',
  },
  {
    degree: 'Front-end Developer',
    location: 'Timedoor Academy',
    date: 'Nov 2022 - Mar 2023',
  },
  {
    degree: 'Front-end Engineer',
    location: 'Binar Academy',
    date: 'Jun 2022 - Nov 2022',
  },
  {
    degree: 'Fullstack Web Developer',
    location: 'Harisenin Millenial School',
    date: 'Nov 2021 - Apr 2022',
  },
  {
    degree: 'Front-end Developer (ReactJS)',
    location: 'Bina Nusantara Computer Club x Tiket.com',
    date: 'Nov 2021 - Feb 2022',
  },
];

let organization = [
  {
    degree: 'Tech Event Organizer',
    location: 'Bina Nusantara Computer Club',
    date: 'Jan 2021 - Jan 2022',
  },
  {
    degree: 'Activist',
    location: 'Bina Nusantara Computer Club',
    date: 'Aug 2019 - Jan 2021',
  },
];

let exp = [
  {
    degree: 'Mentor Ambassador',
    location: 'Binus Student Learning Community',
    date: 'Feb 2022 - Jul 2022',
  },
  {
    degree: 'Activist',
    location: 'Bina Nusantara Computer Club',
    date: 'Apl 2022 - Jun 2022',
  },
  {
    degree: 'Tech Event Organizer',
    location: 'Bina Nusantara Computer Club',
    date: 'Jan 2021 - May 2021',
  },
  {
    degree: 'Activist',
    location: 'Bina Nusantara Computer Club',
    date: 'Sep 2020 - Feb 2021',
  },
];

export default function Experience() {
  let [experience, setExperience] = useState(education);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Experience</h2>
        <p>My Personal Journey</p>
      </div>
      <div className={styles.buttons}>
        <div
          className={styles.button}
          onClick={() => {
            setExperience(education);
          }}
        >
          <MdOutlineSchool></MdOutlineSchool>
          <h3>Education</h3>
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setExperience(organization);
          }}
        >
          <VscOrganization></VscOrganization>
          <h3>Organization</h3>
        </div>
        <div
          className={styles.button}
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
