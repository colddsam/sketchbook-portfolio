"use client";

import { useCallback, useRef } from "react";
import styles from "./DoodleConfetti.module.css";

const SHAPES = ["star", "circle", "triangle", "heart", "plus", "diamond"] as const;
const COLORS = ["#0A0A0A", "#333333", "#666666", "#999999"];

function createSVG(type: typeof SHAPES[number]): string {
  switch (type) {
    case "star":
      return `<svg width="16" height="16" viewBox="0 0 20 20"><path d="M10 1L12 7L18 7L13 11L15 17L10 13L5 17L7 11L2 7L8 7Z" stroke="currentColor" fill="none" stroke-width="1"/></svg>`;
    case "circle":
      return `<svg width="14" height="14" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="currentColor" fill="none" stroke-width="1.5"/></svg>`;
    case "triangle":
      return `<svg width="14" height="14" viewBox="0 0 20 20"><path d="M10 2L19 18L1 18Z" stroke="currentColor" fill="none" stroke-width="1.5"/></svg>`;
    case "heart":
      return `<svg width="14" height="14" viewBox="0 0 20 20"><path d="M10 17C7 14 2 11 2 7C2 4 4 2 7 3.5C8.5 4 9.5 5 10 6.5C10.5 5 11.5 4 13 3.5C16 2 18 4 18 7C18 11 13 14 10 17Z" stroke="currentColor" fill="none" stroke-width="1"/></svg>`;
    case "plus":
      return `<svg width="12" height="12" viewBox="0 0 20 20"><path d="M10 3V17M3 10H17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
    case "diamond":
      return `<svg width="12" height="12" viewBox="0 0 20 20"><path d="M10 2L18 10L10 18L2 10Z" stroke="currentColor" fill="none" stroke-width="1.5"/></svg>`;
  }
}

export default function DoodleConfetti() {
  const containerRef = useRef<HTMLDivElement>(null);

  const burst = useCallback((e?: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const originX = e ? e.clientX - rect.left : rect.width / 2;
    const originY = e ? e.clientY - rect.top : rect.height / 2;

    const count = 24;
    for (let i = 0; i < count; i++) {
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const particle = document.createElement("div");
      particle.className = styles.particle;
      particle.innerHTML = createSVG(shape);
      particle.style.color = color;
      particle.style.left = `${originX}px`;
      particle.style.top = `${originY}px`;

      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const velocity = 80 + Math.random() * 120;
      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity - 40;
      const rotation = Math.random() * 720 - 360;

      particle.style.setProperty("--dx", `${dx}px`);
      particle.style.setProperty("--dy", `${dy}px`);
      particle.style.setProperty("--rot", `${rotation}deg`);
      particle.style.setProperty("--scale", `${0.5 + Math.random() * 0.8}`);

      container.appendChild(particle);
      setTimeout(() => particle.remove(), 1200);
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <button className={styles.trigger} onClick={burst} type="button">
        {/* This is just the container — the actual button is passed as children */}
      </button>
    </div>
  );
}

// Export the burst function as a hook for external use
export function useConfetti() {
  const containerRef = useRef<HTMLDivElement>(null);

  const burst = useCallback((originX?: number, originY?: number) => {
    const body = document.body;
    const count = 28;

    for (let i = 0; i < count; i++) {
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const particle = document.createElement("div");
      
      particle.style.position = "fixed";
      particle.style.zIndex = "99999";
      particle.style.pointerEvents = "none";
      particle.style.left = `${originX ?? window.innerWidth / 2}px`;
      particle.style.top = `${originY ?? window.innerHeight / 2}px`;
      particle.innerHTML = createSVG(shape);
      particle.style.color = color;
      
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const velocity = 100 + Math.random() * 150;
      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity - 60;
      const rotation = Math.random() * 720 - 360;
      const duration = 800 + Math.random() * 400;
      
      particle.animate([
        { transform: "translate(0, 0) rotate(0deg) scale(1)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) rotate(${rotation}deg) scale(0.3)`, opacity: 0 },
      ], {
        duration,
        easing: "cubic-bezier(0, 0.9, 0.57, 1)",
        fill: "forwards",
      });

      body.appendChild(particle);
      setTimeout(() => particle.remove(), duration);
    }
  }, []);

  return { containerRef, burst };
}
