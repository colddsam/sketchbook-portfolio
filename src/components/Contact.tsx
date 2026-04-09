"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import HyperText from "./HyperText";
import { useConfetti } from "./DoodleConfetti";
import { DoodleSquiggle, PencilDoodle } from "./DoodleSVGs";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { burst } = useConfetti();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger confetti from center of submit button
    const btn = (e.target as HTMLFormElement).querySelector('button[type="submit"]');
    if (btn) {
      const rect = btn.getBoundingClientRect();
      burst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.section} id="contact">
      <div className={`${styles.bgPattern} doodle-dots-dark`} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left - CTA */}
          <ScrollReveal>
            <div className={styles.ctaCol}>
              <span className="font-doodle" style={{ fontSize: "1rem", opacity: 0.4 }}>{"// let's connect"}</span>
              <h2 className={styles.heading}>
                <HyperText text="Let's" /><br /><HyperText text="Scribble" scrambleDuration={1400} /><span style={{ opacity: 0.3 }}>.</span>
              </h2>
              <p className={styles.description}>
                Have a project in mind? Or just want to chat about creative ideas? Drop a note and let&apos;s create something amazing together.
              </p>

              {/* Pencil doodle decoration */}
              <PencilDoodle size={80} style={{ opacity: 0.3, marginTop: "1rem" }} className="animate-wiggle" />

              {/* Social links */}
              <div className={styles.socialLinks}>
                {[
                  { label: "Email", icon: "M4 4h16v14H4V4zm0 0l8 7 8-7", rotate: 3, href: "mailto:dassamratkumar772@gmail.com" },
                  { label: "GitHub", icon: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.338 1.91-1.293 2.75-1.024 2.75-1.024.55 1.375.2 2.394.1 2.644.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.001 10.001 0 0022 12c0-5.52-4.48-10-10-10z", rotate: -6, href: "https://github.com/colddsam" },
                  { label: "LinkedIn", icon: "M20.45 20.45H16.9v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z", rotate: 12, href: "https://www.linkedin.com/in/colddsam" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    whileHover={{ scale: 1.1, rotate: social.rotate }}
                    transition={{ duration: 0.3 }}
                    aria-label={social.label}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d={social.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Paper airplane doodle */}
              <div className={styles.paperPlane}>
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                  <path
                    d="M10 40 L100 10 L70 75 L55 45 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.2"
                  />
                  <path
                    d="M55 45 L100 10"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.15"
                  />
                  {/* Trail */}
                  <path
                    d="M10 40 C 0 45, -5 50, -10 55"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                    opacity="0.1"
                  />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal delay={200}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your Name</label>
                <input
                  suppressHydrationWarning
                  type="text"
                  className={styles.formInput}
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
                <DoodleSquiggle width={60} style={{ position: "absolute", bottom: "0", right: "0", opacity: 0.15 }} />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email</label>
                <input
                  suppressHydrationWarning
                  type="email"
                  className={styles.formInput}
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your Message</label>
                <textarea
                  suppressHydrationWarning
                  className={styles.formTextarea}
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                />
              </div>

              <motion.button
                suppressHydrationWarning
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.submitBtnText}>
                  {submitted ? "Message Sent! ✨" : "Send the Sketch"}
                </span>
                <div className={styles.submitBtnFill} />
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
