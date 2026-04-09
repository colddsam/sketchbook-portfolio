"use client";

import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";
import HyperText from "./HyperText";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { DoodleStar, DoodleTriangle, DoodleHeart, EraserSmudge } from "./DoodleSVGs";
import styles from "./Achievements.module.css";

const stats = [
  {
    icon: "trophy",
    value: 15,
    suffix: "+",
    label: "Projects Completed",
    doodle: <DoodleStar size={35} className="animate-bob" />,
  },
  {
    icon: "calendar",
    value: 2,
    suffix: "+",
    label: "Years Experience",
    doodle: <DoodleTriangle size={30} className="animate-wiggle" />,
  },
  {
    icon: "certificate",
    value: 5,
    suffix: "+",
    label: "Hackathons & Events",
    doodle: <DoodleStar size={28} className="animate-pulse-soft" />,
  },
  {
    icon: "code",
    value: 2,
    suffix: "",
    label: "Papers & Certs",
    doodle: <DoodleHeart size={25} className="animate-bob-reverse" />,
  },
];

function DoodleIcon({ type }: { type: string }) {
  switch (type) {
    case "trophy":
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M16 8 L32 8 L30 24 L18 24 Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 24 L24 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 32 L30 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M32 10 C 38 10, 40 16, 36 20 L 30 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M16 10 C 10 10, 8 16, 12 20 L 18 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M20 5 L22 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <path d="M28 5 L26 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <path d="M24 3 L24 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case "calendar":
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="12" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8 20 L40 20" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 8 L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M32 8 L32 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="18" cy="28" r="2" fill="currentColor" opacity="0.3" />
          <circle cx="24" cy="28" r="2" fill="currentColor" opacity="0.3" />
          <circle cx="30" cy="28" r="2" fill="currentColor" opacity="0.3" />
          <circle cx="18" cy="34" r="2" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case "certificate":
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="8" width="36" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M14 16 L34 16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d="M14 20 L30 20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d="M14 24 L26 24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <circle cx="34" cy="34" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M30 34 L33 37 L38 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "code":
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M18 16 L10 24 L18 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M30 16 L38 24 L30 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M27 12 L21 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Achievements() {
  return (
    <section className={styles.section} id="achievements">
      <div className={`${styles.bgPattern} doodle-grid-dark`} />
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className="font-doodle" style={{ fontSize: "1rem", opacity: 0.4 }}>{"// milestones"}</span>
            <h2 className={styles.heading}><HyperText text="By The Numbers" /><span style={{ opacity: 0.3 }}>.</span></h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className={styles.statsGrid} staggerDelay={0.2}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className={styles.statCard}>
                <div className={styles.doodleDecor}>{stat.doodle}</div>
                <div className={styles.iconWrapper}>
                  <DoodleIcon type={stat.icon} />
                </div>
                <div className={styles.statValue}>
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2000} />
                </div>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <EraserSmudge width={200} style={{ position: "absolute", bottom: "10%", right: "5%", opacity: 0.6 }} />
      </div>
    </section>
  );
}
