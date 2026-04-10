"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HyperText from "./HyperText";
import TiltCard from "./TiltCard";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import { DoodleSquiggle, PaperClip, InkSplatter } from "./DoodleSVGs";
import ScrollReveal from "./ScrollReveal";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Cold Scout",
    category: "AI B2B Lead Gen",
    description: "Autonomous AI-powered B2B lead generation SaaS. Discovers local businesses via Google Places, qualifies them with Llama 3, and sends cold emails.",
    tech: ["React", "PostgreSQL", "Docker"],
    year: "2024",
    image: "/images/cold_scout_v2.webp",
    link: "https://github.com/colddsam/coldscout"
  },
  {
    title: "Truth Guardian",
    category: "AI & Web Extension",
    description: "An advanced AI-powered fake news detection system that verifies text, images, and social media posts using Gemini AI, FastAPI, and Next.js.",
    tech: ["Next.js", "FastAPI", "Gemini AI"],
    year: "2024",
    image: "/images/truth_guardian_v2.webp",
    link: "https://github.com/colddsam/Truth-Guardian"
  },
  {
    title: "Health Mate",
    category: "Health Tech",
    description: "Health Mate is your personal emergency support system and all-in-one health monitoring platform built with React and FastAPI.",
    tech: ["React", "FastAPI", "Python"],
    year: "2024",
    image: "/images/health_mate_v2.webp",
    link: "https://github.com/colddsam/Health-Care-Website"
  },
  {
    title: "Blog Automation",
    category: "AI Automation",
    description: "Futuristic AI content generation pipeline that transforms data into structured web articles and blogs using Llama/Gemini and robust automation.",
    tech: ["Python", "AI", "Automation"],
    year: "2023",
    image: "/images/blog_automation_v2.webp",
    link: "https://github.com/colddsam"
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={`${styles.bgPattern} doodle-dots-dark`} />
      
      {/* Ink splatter decoration */}
      <InkSplatter size={120} style={{ position: "absolute", top: "5%", right: "3%", opacity: 0.4 }} className="animate-bob-reverse" />
      
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div>
              <span className="font-doodle" style={{ fontSize: "1rem", opacity: 0.4, display: "block", marginBottom: "1rem" }}>
                {"// selected works"}
              </span>
              <h2 className={styles.heading}>
                <HyperText text="Recent" /><br />
                <HyperText text="Studies" scrambleDuration={1400} staggerDelay={50} />
                <span className={styles.period}>.</span>
              </h2>
            </div>
            <p className={styles.headerText}>
              A curated selection of projects that define my current design philosophy and technical capabilities.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className={styles.grid} staggerDelay={0.15}>
          {projects.map((project, i) => (
            <StaggerItem key={project.title} direction={i % 2 === 0 ? "left" : "right"}>
              <TiltCard>
                <motion.div
                  className={styles.card}
                  whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Paper clip on first card */}
                  {i === 0 && (
                    <PaperClip size={35} style={{ position: "absolute", top: "-12px", left: "20px", zIndex: 10, transform: "rotate(-15deg)" }} />
                  )}

                  {/* Project visual */}
                  <div className={styles.cardVisual}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      priority={i === 0}
                      style={{ objectFit: "cover", opacity: 0.8 }} 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <a className={styles.cardOverlay} href={project.link} target="_blank" rel="noopener noreferrer">
                      <span className={styles.viewProject}>View Project →</span>
                    </a>
                  </div>

                  {/* Project info */}
                  <div className={styles.cardInfo}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardYear}>{project.year}</span>
                      <DoodleSquiggle width={40} />
                      <span className={styles.cardCategory}>{project.category}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardDescription}>{project.description}</p>
                    <div className={styles.techTags}>
                      {project.tech.map((t) => (
                        <span key={t} className={styles.techTag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
