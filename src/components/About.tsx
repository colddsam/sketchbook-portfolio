"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import HyperText from "./HyperText";
import SkillMarquee from "./SkillMarquee";
import SketchProgressBar from "./SketchProgressBar";
import { DoodleStar, DoodleSquiggle, DoodlePlus, CoffeeRing, PaperClip } from "./DoodleSVGs";
import styles from "./About.module.css";

const skillsRow1 = [
  "React", "Java", "Spring Boot", "JavaScript", "HTML/CSS", "Node.js", "Python",
];

const skillsRow2 = [
  "C/C++", "SQL", "Machine Learning", "FastAPI", "Graphic Design", "Git", "Video Editing",
];

const proficiency = [
  { label: "Fullstack Development", value: 90 },
  { label: "Backend (Java/Spring Boot)", value: 85 },
  { label: "Graphic Designing", value: 80 },
  { label: "Machine Learning", value: 75 },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.grid}>
            {/* Image side */}
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                {/* Paper clip decoration */}
                <PaperClip size={50} style={{ position: "absolute", top: "-15px", right: "20px", zIndex: 5 }} className="animate-bob" />
                <div className={styles.imageFrame}>
                  <div className={styles.imageContainer}>
                    <Image 
                      src="/images/profile_v2.png" 
                      alt="Samrat - Full Stack Developer and Graphic Designer Profile Picture" 
                      fill 
                      priority
                      sizes="(max-width: 900px) 100vw, 45vw"
                      className={styles.profileImage}
                    />
                  </div>
                </div>
                {/* Coffee ring decoration */}
                <CoffeeRing size={100} style={{ position: "absolute", bottom: "-20px", left: "-20px", zIndex: -1 }} />
                {/* Annotation */}
                <div className={styles.annotation}>
                  <DoodleStar size={20} style={{ display: "inline" }} />
                  <span className="font-doodle">Usually seen with coffee ☕</span>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className={styles.textCol}>
              <div className={styles.sectionLabel}>
                <DoodleSquiggle width={60} />
                <span className="font-doodle" style={{ fontSize: "1rem", color: "var(--pencil-gray)" }}>{"// about me"}</span>
              </div>

              <h2 className={styles.heading}>
                <HyperText text="Who I Am" />
                <span className={styles.period}>.</span>
              </h2>

              <p className={styles.description}>
                I&apos;m a <span className="marker-highlight">BTech survivor</span> (Electronics & Communication Engineering) who somehow turned a passion for pixels and logic into a professional journey at <span className="marker-highlight">Accenture</span> as a <strong>Packaged Associate Software Developer</strong>.
              </p>

              <p className={styles.description}>
                When I&apos;m not busy brewing <strong>Java</strong> (both the drink and the language) or wrangling <strong>Spring Boot</strong>{' '}
                microservices, I&apos;m probably designing graphics that make people say &quot;Wait, did you doodle that?&quot; Yes, yes I did. I believe in building digital experiences that are as sharp as my pencil and as smooth as my coffee.
              </p>

              {/* Proficiency bars */}
              <div className={styles.proficiencySection}>
                <h3 className={styles.skillsTitle}>
                  <DoodlePlus size={20} />
                  proficiency
                </h3>
                {proficiency.map((skill) => (
                  <SketchProgressBar
                    key={skill.label}
                    label={skill.label}
                    value={skill.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skill Marquee */}
        <ScrollReveal delay={300}>
          <div className={styles.marqueeSection}>
            <h3 className={styles.skillsTitle} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <DoodlePlus size={20} />
              my toolkit
            </h3>
            <SkillMarquee skills={skillsRow1} speed={25} />
            <div style={{ height: "0.75rem" }} />
            <SkillMarquee skills={skillsRow2} reverse speed={30} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
