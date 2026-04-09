"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./SketchScrollProgress.module.css";

export default function SketchScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Springy smooth-follow with slight delay
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      {/* Background track — dotted notebook line */}
      <div className={styles.trackLine} />

      {/* Active ink stroke progress */}
      <motion.div className={styles.inkFill} style={{ scaleX: smoothProgress }} />

      {/* Glowing dot at the tip */}
      <motion.div className={styles.tipDot} style={{ left: smoothProgress as unknown as string }}>
        <span className={styles.dotInner} />
        <span className={styles.dotPulse} />
      </motion.div>

      {/* Percentage label */}
      <motion.div className={styles.percentLabel} style={{ left: smoothProgress as unknown as string }}>
        <motion.span
          className={styles.percentText}
          style={{
            opacity: smoothProgress,
          }}
        >
          ✎
        </motion.span>
      </motion.div>
    </div>
  );
}
