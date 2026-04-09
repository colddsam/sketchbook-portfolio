"use client";

import styles from "./SkillMarquee.module.css";

interface SkillMarqueeProps {
  skills: string[];
  reverse?: boolean;
  speed?: number;
}

export default function SkillMarquee({
  skills,
  reverse = false,
  speed = 30,
}: SkillMarqueeProps) {
  // Double the array for seamless loop
  const doubled = [...skills, ...skills];
  const duration = `${skills.length * speed / 10}s`;

  return (
    <div className={styles.marqueeWrapper}>
      <div
        className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ""}`}
        style={{ animationDuration: duration }}
      >
        {doubled.map((skill, i) => (
          <span key={`${skill}-${i}`} className={styles.tag}>
            <span className={styles.tagIcon}>✦</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
