"use client";

import { useEffect, useRef, useCallback } from "react";
import styles from "./InteractiveGrid.module.css";

interface InteractiveGridProps {
  cellSize?: number;
  className?: string;
  dark?: boolean;
}

export default function InteractiveGrid({
  cellSize = 40,
  className = "",
  dark = false,
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const cols = Math.ceil(rect.width / cellSize);
    const rows = Math.ceil(rect.height / cellSize);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const baseColor = dark ? "255,255,255" : "0,0,0";
    const radius = 180;

    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        const x = c * cellSize;
        const y = r * cellSize;

        // Distance from mouse
        const dx = mouse.current.x - x;
        const dy = mouse.current.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / radius);

        // Grid lines
        const lineAlpha = 0.04 + proximity * 0.12;
        ctx.strokeStyle = `rgba(${baseColor}, ${lineAlpha})`;
        ctx.lineWidth = 0.5;

        // Horizontal
        if (c < cols) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + cellSize, y);
          ctx.stroke();
        }

        // Vertical
        if (r < rows) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + cellSize);
          ctx.stroke();
        }

        // Intersection dots
        if (proximity > 0.1) {
          const dotSize = 1.5 + proximity * 3;
          ctx.fillStyle = `rgba(${baseColor}, ${proximity * 0.4})`;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Cross marks near mouse
        if (proximity > 0.4) {
          const crossSize = 3 + proximity * 4;
          ctx.strokeStyle = `rgba(${baseColor}, ${proximity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x - crossSize, y - crossSize);
          ctx.lineTo(x + crossSize, y + crossSize);
          ctx.moveTo(x + crossSize, y - crossSize);
          ctx.lineTo(x - crossSize, y + crossSize);
          ctx.stroke();
        }
      }
    }

    // animRef.current = requestAnimationFrame(draw);
  }, [cellSize, dark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resize();

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const onLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const animate = () => {
      draw();
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(animRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.canvas} ${className}`}
    />
  );
}
