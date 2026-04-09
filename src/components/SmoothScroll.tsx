"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Global ref so other components can access the Lenis instance
let globalLenis: Lenis | null = null;

export function getLenis() {
  return globalLenis;
}

/**
 * SmoothScroll — Lenis-powered buttery smooth scrolling.
 * Provides a natural, slightly springy feel with momentum.
 * Automatically disabled on touch devices.
 */
export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Skip on touch devices — native scroll is better there
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const lenis = new Lenis({
      lerp: 0.08,             // Linear interpolation for smooth, lag-free scrolling
      smoothWheel: true,       // Smooth mouse wheel scrolling
      touchMultiplier: 1,      // Keep touch native
    });

    lenisRef.current = lenis;
    globalLenis = lenis;

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      globalLenis = null;
    };
  }, []);

  return null;
}
