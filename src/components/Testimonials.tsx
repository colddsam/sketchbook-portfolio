"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import HyperText from "./HyperText";
import { InkSplatter } from "./DoodleSVGs";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "Samrat doesn't just write code; he crafts digital experiences. His attention to detail and creative problem-solving in frontend development brought a warmth to our project we didn't know we needed.",
    name: "Arijit",
    role: "Project Manager",
    initials: "AR",
  },
  {
    quote: "Working with Samrat was a game-changer. He transformed our vague ideas into a beautiful, performant application and handled the machine learning integration flawlessly.",
    name: "Arindam",
    role: "Tech Lead",
    initials: "AR",
  },
  {
    quote: "The level of craftsmanship Samrat brings to every project is remarkable. From the graphic design to the smallest UI detail, everything is intentional and polished.",
    name: "Manish",
    role: "UX Designer",
    initials: "MA",
  },
  {
    quote: "An absolute pleasure to collaborate with. Samrat demonstrated excellent communication skills and an uncanny ability to turn complex requirements into elegant code.",
    name: "Suze",
    role: "Senior Developer",
    initials: "SU",
  },
  {
    quote: "I've rarely seen a developer who can bridge the gap between design and deep technical logic so seamlessly. His work elevated our product to another level entirely.",
    name: "Daniel",
    role: "CTO",
    initials: "DA",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className="font-doodle" style={{ fontSize: "1rem", color: "var(--pencil-gray)" }}>{"// kind words"}</span>
            <h2 className={styles.heading}><HyperText text="Testimonials" /><span style={{ opacity: 0.3 }}>.</span></h2>
            <InkSplatter size={50} style={{ position: "absolute", top: "-10px", right: "-30px" }} className="animate-bob" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.cardWrapper}>
            {/* Big quote mark */}
            <div className={styles.quoteMark}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M10 35 C 10 25 15 18 25 15 L 25 20 C 20 22 18 26 18 30 L 25 30 L 25 42 L 10 42 Z"
                  fill="currentColor"
                  opacity="0.08"
                />
                <path
                  d="M35 35 C 35 25 40 18 50 15 L 50 20 C 45 22 43 26 43 30 L 50 30 L 50 42 L 35 42 Z"
                  fill="currentColor"
                  opacity="0.08"
                />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={styles.testimonial}
              >
                <p className={styles.quoteText}>
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <span className="font-doodle" style={{ fontSize: "1.25rem" }}>
                      {testimonials[current].initials}
                    </span>
                  </div>
                  <div>
                    <h4 className={styles.authorName}>{testimonials[current].name}</h4>
                    <p className={styles.authorRole}>{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className={styles.navigation}>
              <button suppressHydrationWarning onClick={prev} className={styles.navBtn} aria-label="Previous testimonial">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18 L9 12 L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={styles.dots}>
                {testimonials.map((_, i) => (
                  <button
                    suppressHydrationWarning
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button suppressHydrationWarning onClick={next} className={styles.navBtn} aria-label="Next testimonial">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18 L15 12 L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
