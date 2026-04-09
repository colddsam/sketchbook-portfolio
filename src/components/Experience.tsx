"use client";

import ScrollReveal from "./ScrollReveal";
import HyperText from "./HyperText";
import { DoodleCircle, DoodleStar, StickyNote } from "./DoodleSVGs";
import styles from "./Experience.module.css";

const experiences = [
  {
    period: "Dec 2022 — Jun 2023",
    role: "Campus Ambassador",
    company: "IIT Madras",
    description: "Successfully appointed as a campus ambassador of IIT Madras in our college campus.",
    highlights: ["Leadership", "Community Building", "Event Promotion"],
  },
  {
    period: "June 2023 — July 2023",
    role: "Machine Learning Intern",
    company: "Suvidha Foundation",
    description: "Created unique machine learning models like social media contents sentiment analysis during the internship.",
    highlights: ["Sentiment Analysis", "Fundraising Initiatives", "Voluntary Support"],
  },
  {
    period: "Aug 2023 — Sep 2023",
    role: "Graphics Intern",
    company: "Asiana Times",
    description: "Aware about the graphical content use in a news agency and created info graphical content.",
    highlights: ["Social Media Illustration", "Infographics", "News Agency Content"],
  },
  {
    period: "Nov 2023 — June 2024",
    role: "Graphics Lead",
    company: "Hack4Bengal 3.0",
    description: "Led a graphics team to successfully accomplish the graphics works needed for the community.",
    highlights: ["Team Collaboration", "Community Standards", "Illustration for Community"],
  },
  {
    period: "Nov 2025 — Present",
    role: "Packaged Associate Software Developer",
    company: "Accenture",
    description: "Started the professional journey with intensive training and development in Java and Spring Boot frameworks.",
    highlights: ["Java", "Spring Boot", "Software Development"],
  },
];

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className="font-doodle" style={{ display: "block", marginBottom: "0.5rem", fontSize: "1rem", color: "var(--pencil-gray)" }}>{"// journey so far"}</span>
            <h2 className={styles.heading}>
              <HyperText text="The Timeline" />
              <span className={styles.period}>.</span>
              <DoodleStar size={30} className="animate-pulse-soft" style={{ position: "absolute", top: "-1rem", right: "-2.5rem" }} />
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.timeline}>
          {/* Wavy timeline line */}
          <div className={styles.timelineLine}>
            <svg width="4" height="100%" viewBox="0 0 4 100" preserveAspectRatio="none" style={{ width: "4px", height: "100%" }}>
              <path
                d="M2 0 Q 4 25, 2 50 T 2 100"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="6 4"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </div>

          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.period} delay={i * 200}>
              <div className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                {/* Sticky note on last item */}
                {i === experiences.length - 1 && (
                  <StickyNote size={45} style={{ position: "absolute", top: "-10px", right: i % 2 === 0 ? "-25px" : "auto", left: i % 2 !== 0 ? "-25px" : "auto", transform: "rotate(12deg)", opacity: 0.4 }} />
                )}
                {/* Timeline dot */}
                <div className={styles.timelineDot}>
                  <DoodleCircle size={12} />
                </div>

                {/* Card */}
                <div className={styles.card}>
                  <span className={styles.period2}>{exp.period}</span>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <p className={styles.description}>{exp.description}</p>
                  <div className={styles.highlights}>
                    {exp.highlights.map((h) => (
                      <span key={h} className={styles.highlight}>✦ {h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
