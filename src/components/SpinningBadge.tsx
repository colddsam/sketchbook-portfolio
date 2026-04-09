"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SpinningBadge.module.css";

interface SpinningBadgeProps {
  text: string;
  size?: number;
  className?: string;
}

export default function SpinningBadge({
  text,
  size = 120,
  className = "",
}: SpinningBadgeProps) {
  const [mounted, setMounted] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const radius = size / 2 - 14;
  const circumference = 2 * Math.PI * radius;

  // Repeat text to fill the circle
  const textRepeated = (text + " \u00B7 ").repeat(Math.ceil(circumference / (text.length * 7)));

  return (
    <div className={`${styles.badge} ${className}`} style={{ width: size, height: size }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${size} ${size}`}
        className={styles.svg}
      >
        <defs>
          <path
            id="spinTextPath"
            d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="none"
          />
        </defs>
        <text className={styles.circleText}>
          <textPath href="#spinTextPath" textLength={circumference}>
            {textRepeated.slice(0, Math.floor(circumference / 7))}
          </textPath>
        </text>
      </svg>

      {/* Center doodle */}
      <div className={styles.center}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    </div>
  );
}
