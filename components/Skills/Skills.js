import React, {useState} from 'react';
import styles from './Skills.module.css';
import {BsCodeSlash, BsFillPatchCheckFill} from 'react-icons/bs';
import {CgWebsite} from 'react-icons/cg';

export default function Skills({data}) {
  let {frontEndSkills, otherSkill} = data;
  let [skill, setSkill] = useState(true);
  let [active, setActive] = useState(0);

  return (
    <div className={styles.container} id="skills">
      <div className={styles.header}>
        <h2>Skills</h2>
        <p>My Technical Level</p>
      </div>
      <div className={styles.buttons}>
        <div
          className={`${styles.button} ${active === 0 && styles.active}`}
          onClick={() => {
            setSkill(true);
            setActive(0);
          }}
        >
          <CgWebsite></CgWebsite>
          <h3>Front-end</h3>
        </div>
        <div
          className={`${styles.button} ${active === 1 && styles.active}`}
          onClick={() => {
            setSkill(false);
            setActive(1);
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
