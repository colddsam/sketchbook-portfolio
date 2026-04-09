"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";
import styles from "./SparkleText.module.css";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  type: "star" | "plus" | "diamond" | "dot";
}

let sparkleId = 0;

interface SparkleTextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  sparkleInterval?: number;
}

export default function SparkleText({
  children,
  className = "",
  style,
  sparkleInterval = 400,
}: SparkleTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const newSparkle: Sparkle = {
        id: sparkleId++,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: 8 + Math.random() * 14,
        rotation: Math.random() * 360,
        type: (["star", "plus", "diamond", "dot"] as const)[
          Math.floor(Math.random() * 4)
        ],
      };

      setSparkles((prev) => [...prev.slice(-8), newSparkle]);
    }, sparkleInterval);

    return () => clearInterval(interval);
  }, [sparkleInterval]);

  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 800);
    return () => clearTimeout(timer);
  }, [sparkles]);

  return (
    <span ref={containerRef} className={`${styles.container} ${className}`} style={style}>
      {children}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className={styles.sparkle}
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            transform: `rotate(${s.rotation}deg)`,
          }}
        >
          <SparkleShape type={s.type} />
        </span>
      ))}
    </span>
  );
}

function SparkleShape({ type }: { type: Sparkle["type"] }) {
  switch (type) {
    case "star":
      return (
        <svg viewBox="0 0 20 20" fill="none" width="100%" height="100%">
          <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      );
    case "plus":
      return (
        <svg viewBox="0 0 20 20" fill="none" width="100%" height="100%">
          <path d="M10 3 L10 17 M3 10 L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 20 20" fill="none" width="100%" height="100%">
          <path d="M10 2 L18 10 L10 18 L2 10 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      );
    case "dot":
      return (
        <svg viewBox="0 0 20 20" fill="none" width="100%" height="100%">
          <circle cx="10" cy="10" r="4" fill="currentColor" opacity="0.5" />
        </svg>
      );
  }
}
