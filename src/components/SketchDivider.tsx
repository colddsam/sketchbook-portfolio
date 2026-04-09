"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./SketchDivider.module.css";

type DividerStyle = "wave" | "zigzag" | "scribble" | "dots" | "crosshatch";

const paths: Record<DividerStyle, string> = {
  wave: "M0 25 C 80 5, 160 45, 240 25 C 320 5, 400 45, 480 25 C 560 5, 640 45, 720 25 C 800 5, 880 45, 960 25 C 1040 5, 1120 45, 1200 25",
  zigzag: "M0 25 L 40 8 L 80 42 L 120 8 L 160 42 L 200 8 L 240 42 L 280 8 L 320 42 L 360 8 L 400 42 L 440 8 L 480 42 L 520 8 L 560 42 L 600 8 L 640 42 L 680 8 L 720 42 L 760 8 L 800 42 L 840 8 L 880 42 L 920 8 L 960 42 L 1000 8 L 1040 42 L 1080 8 L 1120 42 L 1160 8 L 1200 42",
  scribble: "M0 25 C 20 10, 40 40, 60 25 C 80 10, 100 40, 120 20 C 140 0, 160 50, 200 25 C 220 10, 260 35, 300 25 C 340 15, 380 40, 420 20 C 460 0, 500 50, 540 25 C 580 5, 620 45, 660 25 C 700 5, 740 45, 780 25 C 820 5, 860 45, 900 25 C 940 5, 980 45, 1020 25 C 1060 5, 1100 45, 1140 25 C 1160 15, 1180 35, 1200 25",
  dots: "M15 25 L 15 25 M 55 25 L 55 25 M 95 25 L 95 25 M 135 25 L 135 25 M 175 25 L 175 25 M 215 25 L 215 25 M 255 25 L 255 25 M 295 25 L 295 25 M 335 25 L 335 25 M 375 25 L 375 25 M 415 25 L 415 25 M 455 25 L 455 25 M 495 25 L 495 25 M 535 25 L 535 25 M 575 25 L 575 25 M 615 25 L 615 25 M 655 25 L 655 25 M 695 25 L 695 25 M 735 25 L 735 25 M 775 25 L 775 25 M 815 25 L 815 25 M 855 25 L 855 25 M 895 25 L 895 25 M 935 25 L 935 25 M 975 25 L 975 25 M 1015 25 L 1015 25 M 1055 25 L 1055 25 M 1095 25 L 1095 25 M 1135 25 L 1135 25 M 1175 25 L 1175 25",
  crosshatch: "M0 15 L 1200 15 M0 35 L 1200 35 M0 25 L 30 10 M40 25 L 70 10 M80 25 L 110 10 M120 25 L 150 10 M160 25 L 190 10 M200 25 L 230 10 M240 25 L 270 10 M280 25 L 310 10 M320 25 L 350 10 M360 25 L 390 10 M400 25 L 430 10 M440 25 L 470 10 M480 25 L 510 10 M520 25 L 550 10 M560 25 L 590 10 M600 25 L 630 10 M640 25 L 670 10 M680 25 L 710 10 M720 25 L 750 10 M760 25 L 790 10 M800 25 L 830 10",
};

interface SketchDividerProps {
  variant?: DividerStyle;
  inverted?: boolean;
  className?: string;
}

export default function SketchDivider({
  variant = "wave",
  inverted = false,
  className = "",
}: SketchDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const pathData = paths[variant];
  const color = inverted ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.15)";
  const strokeWidth = variant === "dots" ? 6 : variant === "crosshatch" ? 0.8 : 2;
  const lineCap = variant === "dots" ? "round" as const : "round" as const;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <svg
        ref={svgRef}
        className={styles.svg}
        viewBox="0 0 1200 50"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={pathData}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={lineCap}
          strokeLinejoin="round"
          fill="none"
          className={`${styles.path} ${isVisible ? styles.drawn : ""}`}
        />
      </svg>
    </div>
  );
}
