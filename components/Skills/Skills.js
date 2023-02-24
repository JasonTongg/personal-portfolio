import React, {useState} from 'react';
import styles from './Skills.module.css';
import {BsCodeSlash, BsFillPatchCheckFill} from 'react-icons/bs';
import {CgWebsite} from 'react-icons/cg';

let frontEndSkills = [
  {
    skill: 'HTML',
    level: 'Advanced',
  },
  {
    skill: 'CSS',
    level: 'Intermediate',
  },
  {
    skill: 'Javascript',
    level: 'Intermediate',
  },
  {
    skill: 'Git/GitHub',
    level: 'Basic',
  },
  {
    skill: 'Bootstrap',
    level: 'Intermediate',
  },
  {
    skill: 'SASS',
    level: 'Intermediate',
  },
  {
    skill: 'Redux',
    level: 'Intermediate',
  },
  {
    skill: 'Vuex',
    level: 'Intermediate',
  },
  {
    skill: 'ReactJS',
    level: 'Intermediate',
  },
  {
    skill: 'NextJS',
    level: 'Intermediate',
  },
  {
    skill: 'VueJS',
    level: 'Intermediate',
  },
  {
    skill: 'NuxtJS',
    level: 'Intermediate',
  },
];

let otherSkill = [
  {
    skill: 'OOP',
    level: 'Intermediate',
  },
  {
    skill: 'C Language',
    level: 'Intermediate',
  },
  {
    skill: 'Python',
    level: 'Intermediate',
  },
  {
    skill: 'Java',
    level: 'Intermediate',
  },
  {
    skill: 'ExpressJS',
    level: 'Basic',
  },
  {
    skill: 'NodeJS',
    level: 'Basic',
  },
  {
    skill: 'PHP',
    level: 'Basic',
  },
  {
    skill: 'MySQL',
    level: 'Basic',
  },
];

export default function Skills() {
  let [skill, setSkill] = useState(true);

  return (
    <div className={styles.container} id="skills">
      <div className={styles.header}>
        <h2>Skills</h2>
        <p>My Technical Level</p>
      </div>
      <div className={styles.buttons}>
        <div
          className={styles.button}
          onClick={() => {
            setSkill(true);
          }}
        >
          <CgWebsite></CgWebsite>
          <h3>Front-end</h3>
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setSkill(false);
          }}
        >
          <BsCodeSlash></BsCodeSlash>
          <h3>Others</h3>
        </div>
      </div>
      {skill === true && (
        <div className={styles.content}>
          <h2>Front-end Developer</h2>
          <div className={styles.skillContainer}>
            {frontEndSkills.map((item, idx) => (
              <div className={styles.skill} key={idx}>
                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                <div className={styles.skillInfo}>
                  <h3>{item.skill}</h3>
                  <p>{item.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {skill === false && (
        <div className={styles.contents}>
          <h2>Other Programming Skills</h2>
          <div className={styles.skillContainer}>
            {otherSkill.map((item, idx) => (
              <div className={styles.skill} key={idx}>
                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                <div className={styles.skillInfo}>
                  <h3>{item.skill}</h3>
                  <p>{item.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
