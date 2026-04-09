"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./MorphingRoles.module.css";

interface MorphingRolesProps {
  roles: string[];
  interval?: number;
  className?: string;
}

export default function MorphingRoles({
  roles,
  interval = 3000,
  className = "",
}: MorphingRolesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % roles.length);
  }, [roles.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return (
    <span className={`${styles.container} ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[currentIndex]}
          className={styles.text}
          initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(8px)", y: -10 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
