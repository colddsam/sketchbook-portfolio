"use client";

import { CSSProperties } from "react";

/* Hand-drawn SVG doodle elements used throughout the portfolio */

export function DoodleStar({ size = 40, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" className={className} style={style}>
      <path
        d="M25 2 L29 18 L45 18 L32 28 L36 44 L25 34 L14 44 L18 28 L5 18 L21 18 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ opacity: 0.6 }}
      />
    </svg>
  );
}

export function DoodleCircle({ size = 50, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" className={className} style={style}>
      <path
        d="M25 5 C 38 3 48 14 46 25 C 48 38 36 48 25 46 C 12 48 3 38 5 25 C 3 12 14 3 25 5 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        style={{ opacity: 0.5 }}
      />
    </svg>
  );
}

export function DoodleSquiggle({ width = 120, style, className = "" }: { width?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={width} height="20" viewBox="0 0 120 20" fill="none" className={className} style={style}>
      <path
        d="M2 10 C 12 2, 22 18, 32 10 C 42 2, 52 18, 62 10 C 72 2, 82 18, 92 10 C 102 2, 112 18, 118 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        style={{ opacity: 0.4 }}
      />
    </svg>
  );
}

export function DoodleArrow({ size = 60, direction = "down", style, className = "" }: { size?: number; direction?: "down" | "right" | "left"; style?: CSSProperties; className?: string }) {
  const rotation = direction === "down" ? 90 : direction === "left" ? 180 : 0;
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 60 30" fill="none" className={className} style={{ ...style, transform: `rotate(${rotation}deg)` }}>
      <path
        d="M5 15 C 15 14, 25 16, 40 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M35 8 L 45 15 L 35 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodlePlus({ size = 30, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" className={className} style={style}>
      <path d="M15 5 L15 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ opacity: 0.4 }} />
      <path d="M5 15 L25 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ opacity: 0.4 }} />
    </svg>
  );
}

export function DoodleSpiral({ size = 50, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" className={className} style={style}>
      <path
        d="M25 25 C 25 20, 30 18, 32 22 C 35 26, 30 32, 25 30 C 18 28, 16 20, 22 16 C 30 12, 38 18, 36 26 C 34 36, 22 38, 16 32"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        style={{ opacity: 0.3 }}
      />
    </svg>
  );
}

export function DoodleTriangle({ size = 35, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 35 35" fill="none" className={className} style={style}>
      <path
        d="M17 4 L 32 30 L 3 30 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ opacity: 0.4 }}
      />
    </svg>
  );
}

export function DoodleHeart({ size = 30, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" className={className} style={style}>
      <path
        d="M15 26 C 10 22, 3 17, 3 11 C 3 6, 7 3, 11 5 C 13 6, 14 8, 15 10 C 16 8, 17 6, 19 5 C 23 3, 27 6, 27 11 C 27 17, 20 22, 15 26 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        style={{ opacity: 0.5 }}
      />
    </svg>
  );
}

export function DoodleCross({ size = 25, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none" className={className} style={style}>
      <path d="M5 5 L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ opacity: 0.3 }} />
      <path d="M20 5 L5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ opacity: 0.3 }} />
    </svg>
  );
}

export function DoodleDots({ count = 5, size = 4, style, className = "" }: { count?: number; size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={count * (size + 8)} height={size + 4} viewBox={`0 0 ${count * (size + 8)} ${size + 4}`} className={className} style={style}>
      {Array.from({ length: count }).map((_, i) => (
        <circle
          key={i}
          cx={size / 2 + i * (size + 8) + 4}
          cy={size / 2 + 2}
          r={size / 2}
          fill="currentColor"
          opacity={0.3 + (i * 0.1)}
        />
      ))}
    </svg>
  );
}

export function InkSplatter({ size = 60, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={className} style={style}>
      <path d="M30 10 C 35 8, 42 12, 40 18 C 50 15, 52 22, 48 28 C 55 30, 52 38, 45 38 C 48 45, 42 48, 35 45 C 35 52, 28 52, 25 46 C 18 50, 12 46, 15 40 C 8 38, 8 32, 14 28 C 8 24, 12 16, 18 15 C 16 10, 22 8, 28 12 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" />
      <circle cx="32" cy="28" r="3" fill="currentColor" opacity="0.08" />
      <circle cx="24" cy="35" r="2" fill="currentColor" opacity="0.06" />
    </svg>
  );
}

export function CoffeeRing({ size = 80, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={className} style={style}>
      <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="3" opacity="0.04" strokeDasharray="2 8" />
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1.5" opacity="0.06" />
      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="0.8" opacity="0.03" />
      <path d="M20 35 C 22 30, 28 28, 32 32" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
    </svg>
  );
}

export function PaperClip({ size = 40, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size * 0.6} height={size} viewBox="0 0 24 40" fill="none" className={className} style={style}>
      <path d="M8 36 L8 10 C 8 5, 16 5, 16 10 L16 30 C 16 33, 12 33, 12 30 L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.25" />
    </svg>
  );
}

export function StickyNote({ size = 60, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={className} style={style}>
      <path d="M5 5 L55 5 L55 45 L45 55 L5 55 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" />
      <path d="M45 55 L45 45 L55 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.1" />
      <line x1="12" y1="18" x2="48" y2="18" stroke="currentColor" strokeWidth="0.8" opacity="0.08" />
      <line x1="12" y1="28" x2="42" y2="28" stroke="currentColor" strokeWidth="0.8" opacity="0.08" />
      <line x1="12" y1="38" x2="38" y2="38" stroke="currentColor" strokeWidth="0.8" opacity="0.08" />
    </svg>
  );
}

export function PencilDoodle({ size = 50, style, className = "" }: { size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size * 0.3} viewBox="0 0 50 15" fill="none" className={className} style={style}>
      <path d="M3 8 L35 8 L38 5 L42 11 L38 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M42 11 L45 8 L47 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />
      <circle cx="47" cy="9" r="1" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

export function EraserSmudge({ width = 100, style, className = "" }: { width?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg width={width} height={width * 0.4} viewBox="0 0 100 40" fill="none" className={className} style={style}>
      <ellipse cx="50" cy="20" rx="45" ry="15" fill="currentColor" opacity="0.02" />
      <ellipse cx="45" cy="18" rx="35" ry="10" fill="currentColor" opacity="0.03" />
      <ellipse cx="55" cy="22" rx="30" ry="8" fill="currentColor" opacity="0.02" />
    </svg>
  );
}

export function WavyDivider({ color = "currentColor", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      width="100%"
      height="20"
      viewBox="0 0 1200 20"
      preserveAspectRatio="none"
      className={className}
      style={{ display: "block" }}
    >
      <path
        d="M0 10 C 100 0, 200 20, 300 10 C 400 0, 500 20, 600 10 C 700 0, 800 20, 900 10 C 1000 0, 1100 20, 1200 10"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
