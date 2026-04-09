"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./HyperText.module.css";

const DOODLE_CHARS = "✦✧★☆●○◆◇△▷▽◁♡♢⊕⊗※⁂✿❀•‣⁕";

interface HyperTextProps {
  text: string;
  className?: string;
  scrambleDuration?: number;
  staggerDelay?: number;
}

export default function HyperText({
  text,
  className = "",
  scrambleDuration = 1200,
  staggerDelay = 40,
}: HyperTextProps) {
  const [displayed, setDisplayed] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const animate = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const chars = text.split("");
    const resolvedAt = chars.map((_, i) => i * staggerDelay);
    const totalDuration = scrambleDuration;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const result = chars.map((char, i) => {
        if (char === " ") return " ";
        if (elapsed > resolvedAt[i] + totalDuration * 0.6) return char;
        return DOODLE_CHARS[Math.floor(Math.random() * DOODLE_CHARS.length)];
      });
      setDisplayed(result.join(""));

      if (elapsed < totalDuration) {
        requestAnimationFrame(tick);
      } else {
        setDisplayed(text);
      }
    };

    requestAnimationFrame(tick);
  }, [text, scrambleDuration, staggerDelay, hasAnimated]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <span ref={ref} className={`${styles.hyperText} ${className}`}>
      {displayed.split("").map((char, i) => {
        if (text[i] === " ") {
          return (
            <span key={i} className={styles.space}>
              &nbsp;
            </span>
          );
        }
        return (
          <span
            key={i}
            className={char !== text[i] ? styles.scrambling : styles.resolved}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}
