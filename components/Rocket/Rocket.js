import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import styles from './Rocket.module.css';
import RocketImage from '../../public/Assets/rocket.png';
import RocketCloud from '../../public/Assets/cloud-5.png';

// Spring that pulls the rocket toward the scroll position: it accelerates,
// cruises, then eases in with a tiny overshoot (damping ratio ~0.87).
// Capping the acceleration (px/s²) makes big jumps lift off gradually like
// thrust instead of snapping away; lower caps can't brake in time and overshoot.
const STIFFNESS = 40;
const DAMPING = 11;
const MAX_THRUST = 5000;

let clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function Rocket() {
  let rocketRef = useRef(null);
  let cloudRef = useRef(null);

  useEffect(() => {
    let rocket = rocketRef.current;
    let cloud = cloudRef.current;
    if (!rocket || !cloud) return;

    let reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let y = null;
    let velocity = 0;
    let angle = 180;
    let targetAngle = 180;
    let lastScroll = window.scrollY;
    let lastTime = null;
    let idle = 0;
    let frame;

    let animate = (time) => {
      let dt = lastTime === null ? 1 / 60 : Math.min((time - lastTime) / 1000, 1 / 30);
      lastTime = time;

      let height = rocket.offsetHeight;
      let maxScroll =
        document.body.getBoundingClientRect().height - window.innerHeight;
      let progress = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0;
      let target = progress * window.innerHeight - height;

      // Point the rocket in the direction of travel; ignore tiny jitters
      let scrollDelta = window.scrollY - lastScroll;
      if (Math.abs(scrollDelta) > 3) {
        targetAngle = scrollDelta > 0 ? 180 : 0;
        lastScroll = window.scrollY;
      }

      if (y === null || reduceMotion) {
        y = target;
        velocity = 0;
        angle = targetAngle;
      } else {
        let thrust = STIFFNESS * (target - y) - DAMPING * velocity;
        velocity += clamp(thrust, -MAX_THRUST, MAX_THRUST) * dt;
        y += velocity * dt;
        angle += (targetAngle - angle) * (1 - Math.exp(-dt * 8));
      }

      // Hover gently once the rocket has settled, and rumble while thrusting
      let speed = Math.abs(velocity);
      let settled = speed < 20 && !reduceMotion ? 1 : 0;
      idle += (settled - idle) * (1 - Math.exp(-dt * 3));
      let seconds = time / 1000;
      let onScreen = clamp((y + height) / height, 0, 1);
      let bob = Math.sin(seconds * 2.2) * 5 * idle * onScreen;
      let sway = Math.sin(seconds * 1.4) * 3 * idle;
      let rumble = reduceMotion
        ? 0
        : Math.min(speed / 600, 1) * Math.sin(seconds * 90) * 1.2;

      rocket.style.transform = `translate(${rumble}px, ${y + bob}px) rotate(${
        angle + sway
      }deg)`;
      cloud.style.opacity = `${progress * 2}`;

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div>
      <Image
        src={RocketImage}
        alt="rocket"
        width={100}
        height={50}
        className={styles.rocket}
        ref={rocketRef}
      ></Image>
      <Image
        src={RocketCloud}
        alt="Cloud"
        width={100}
        height={80}
        className={`${styles.cloud} cloud-drift`}
        ref={cloudRef}
      ></Image>
    </div>
  );
}
