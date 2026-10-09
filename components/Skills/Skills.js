import React, {useState} from 'react';
import styles from './Skills.module.css';
import {BsCodeSlash, BsFillPatchCheckFill, BsServer} from 'react-icons/bs';
import {CgWebsite} from 'react-icons/cg';
import ModeToggle from '../ModeToggle/ModeToggle';

export default function Skills({data, mode, setMode}) {
  let {frontEndSkills, backEndSkills, otherSkill} = data;
  let isWeb3 = mode === 'web3';
  let [active, setActive] = useState(0);

  let tabs = isWeb3
    ? [
        {
          label: 'Web3 Dev',
          title: 'Web3 Developer',
          icon: <CgWebsite></CgWebsite>,
          skills: frontEndSkills,
        },
        {
          label: 'Blockchain',
          title: 'Blockchain Concepts',
          icon: <BsCodeSlash></BsCodeSlash>,
          skills: otherSkill,
        },
      ]
    : [
        {
          label: 'Front-end',
          title: 'Front-end Developer',
          icon: <CgWebsite></CgWebsite>,
          skills: frontEndSkills,
        },
        {
          label: 'Back-end',
          title: 'Back-end Developer',
          icon: <BsServer></BsServer>,
          skills: backEndSkills,
        },
        {
          label: 'Others',
          title: 'Other Programming Skills',
          icon: <BsCodeSlash></BsCodeSlash>,
          skills: otherSkill,
        },
      ];

  // Web3 has fewer tabs, so fall back to the first one when switching modes
  let current = active < tabs.length ? active : 0;
  let tab = tabs[current];

  return (
    <div className={styles.container} id="skills">
      <div className={styles.header}>
        <h2>Skills</h2>
        <p>My Technical Level</p>
      </div>
      <ModeToggle mode={mode} setMode={setMode}></ModeToggle>
      <div className={styles.buttons}>
        {tabs.map((item, idx) => (
          <div
            key={item.label}
            className={`${styles.button} ${
              current === idx ? styles.active : ''
            }`}
            onClick={() => setActive(idx)}
          >
            {item.icon}
            <h3>{item.label}</h3>
          </div>
        ))}
      </div>
      {/* key remounts the panel so the show animation replays on tab change */}
      <div className={styles.content} key={tab.label}>
        <h2>{tab.title}</h2>
        <div className={styles.skillContainer}>
          {tab.skills.map((item, idx) => (
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
    </div>
  );
}
