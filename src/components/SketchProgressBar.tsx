"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SketchProgressBar.module.css";

interface SketchProgressBarProps {
  label: string;
  value: number; // 0–100
  className?: string;
}

export default function SketchProgressBar({
  label,
  value,
  className = "",
}: SketchProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.bar} ${className}`}>
      <div className={styles.labelRow}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}%</span>
      </div>
      <div className={styles.track}>
        {/* Wobbly SVG track */}
        <svg className={styles.trackSvg} viewBox="0 0 400 12" preserveAspectRatio="none">
          <path
            d="M2 6 C 50 3, 100 9, 150 6 C 200 3, 250 9, 300 6 C 350 3, 380 9, 398 6"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        {/* Fill */}
        <div
          className={styles.fill}
          style={{ width: isVisible ? `${value}%` : "0%" }}
        >
          <svg className={styles.fillSvg} viewBox="0 0 400 12" preserveAspectRatio="none">
            <path
              d="M2 6 C 50 3, 100 9, 150 6 C 200 3, 250 9, 300 6 C 350 3, 380 9, 398 6"
              stroke="var(--ink-black)"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
