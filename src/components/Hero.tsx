"use client";

import { motion } from "framer-motion";
import { DoodleStar, DoodleCircle, DoodleSquiggle, DoodleSpiral, DoodlePlus, DoodleTriangle, DoodleCross, CoffeeRing } from "./DoodleSVGs";
import SparkleText from "./SparkleText";
import MorphingRoles from "./MorphingRoles";
import SpinningBadge from "./SpinningBadge";
import InteractiveGrid from "./InteractiveGrid";
import { getLenis } from "./SmoothScroll";
import styles from "./Hero.module.css";

const roles = [
  "Front End Developer",
  "ML Enthusiast",
  "Graphic Designer",
  "Automation Enthusiast",
  "Tech Enthusiast",
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Interactive graph paper background */}
      <InteractiveGrid cellSize={45} />

      {/* Floating doodles */}
      <div className={styles.doodleField}>
        <DoodleStar size={45} className="animate-bob" style={{ position: "absolute", top: "15%", left: "10%", animationDelay: "0s" }} />
        <DoodleCircle size={60} className="animate-bob-reverse" style={{ position: "absolute", bottom: "25%", right: "12%", animationDelay: "1s" }} />
        <DoodleSquiggle width={100} className="animate-wiggle" style={{ position: "absolute", top: "30%", right: "20%", animationDelay: "0.5s" }} />
        <DoodleSpiral size={55} className="animate-bob" style={{ position: "absolute", bottom: "35%", left: "15%", animationDelay: "2s" }} />
        <DoodlePlus size={25} className="animate-pulse-soft" style={{ position: "absolute", top: "20%", right: "35%", animationDelay: "1.5s" }} />
        <DoodleTriangle size={40} className="animate-bob-reverse" style={{ position: "absolute", top: "60%", left: "8%", animationDelay: "3s" }} />
        <DoodleCross size={20} className="animate-spin-slow" style={{ position: "absolute", top: "45%", right: "8%", animationDelay: "0s" }} />
        <DoodlePlus size={35} className="animate-bob" style={{ position: "absolute", bottom: "15%", left: "30%", animationDelay: "2.5s" }} />
        <DoodleStar size={25} className="animate-pulse-soft" style={{ position: "absolute", top: "70%", right: "30%", animationDelay: "1s" }} />
        <CoffeeRing size={90} style={{ position: "absolute", bottom: "10%", right: "5%", opacity: 0.3 }} className="animate-bob-reverse" />
      </div>

      {/* Spinning badge */}
      <motion.div
        className={styles.spinningBadge}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <SpinningBadge text="AVAILABLE FOR WORK · OPEN TO COLLAB · " size={130} />
      </motion.div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.tagline}
        >
          <span className="font-doodle" style={{ fontSize: "1.25rem", color: "var(--pencil-gray)" }}>
            {"// welcome to my sketchbook"}
          </span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Hello, I&apos;m{" "}
          <SparkleText sparkleInterval={500}>
            <span className={styles.nameHighlight}>
              Samrat
              <svg className={styles.underlineSvg} viewBox="0 0 200 20" preserveAspectRatio="none">
                <motion.path
                  d="M5 15 C 50 5, 150 25, 195 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </SparkleText>
        </motion.h1>

        <motion.div
          className={styles.subtitle}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <MorphingRoles roles={roles} interval={2500} className={styles.typewriterText} />
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#projects" className="btn-sketch" aria-label="View My Projects" onClick={(e) => { e.preventDefault(); const el = document.querySelector("#projects"); if (el) { const lenis = getLenis(); if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.8 }); else el.scrollIntoView({ behavior: "smooth" }); } }}>
            <span>View My Work</span>
            <span style={{ position: "relative", zIndex: 1 }}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
