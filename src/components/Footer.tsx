"use client";

import { DoodleHeart, WavyDivider } from "./DoodleSVGs";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <WavyDivider />
      <div className={styles.container}>
        <div className={styles.links}>
          {[
            { label: "GitHub", href: "https://github.com/colddsam" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/colddsam" },
            { label: "Portfolio", href: "https://colddsam.com" }
          ].map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.dividerLine}>
          <div className={styles.heartWrapper}>
            <DoodleHeart size={20} className="animate-pulse-soft" />
          </div>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} SAMRAT — <span className="font-doodle">hand-crafted with passion</span>
        </p>

        <p className={styles.builtWith}>
          <span className="font-doodle" style={{ fontSize: "0.85rem", opacity: 0.3 }}>
            sketched ✦ coded ✦ deployed
          </span>
        </p>
      </div>
    </footer>
  );
}
