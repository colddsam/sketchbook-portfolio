"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
  rotation: number;
  type: "dot" | "circle" | "cross" | "dash";
  vx: number;
  vy: number;
}

const shapes = ["dot", "circle", "cross", "dash"] as const;

export default function PencilCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const animFrameRef = useRef<number>(0);
  const lastSpawnRef = useRef(0);

  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, p: Particle) => {
    const alpha = (p.life / p.maxLife) * 0.4;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = "#0A0A0A";
    ctx.fillStyle = "#0A0A0A";
    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    switch (p.type) {
      case "dot":
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        break;
      case "circle":
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.stroke();
        break;
      case "cross":
        ctx.beginPath();
        ctx.moveTo(-p.size, -p.size);
        ctx.lineTo(p.size, p.size);
        ctx.moveTo(p.size, -p.size);
        ctx.lineTo(-p.size, p.size);
        ctx.stroke();
        break;
      case "dash":
        ctx.beginPath();
        ctx.moveTo(-p.size, 0);
        ctx.lineTo(p.size, 0);
        ctx.stroke();
        break;
    }

    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.prevX = mouse.current.x;
      mouse.current.prevY = mouse.current.y;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const dx = mouse.current.x - mouse.current.prevX;
      const dy = mouse.current.y - mouse.current.prevY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      const now = Date.now();
      if (speed > 3 && now - lastSpawnRef.current > 40) {
        lastSpawnRef.current = now;
        const count = Math.min(Math.floor(speed / 8), 3);
        for (let i = 0; i < count; i++) {
          particles.current.push({
            x: e.clientX + (Math.random() - 0.5) * 12,
            y: e.clientY + (Math.random() - 0.5) * 12,
            life: 1,
            maxLife: 1,
            size: 2 + Math.random() * 4,
            rotation: Math.random() * Math.PI * 2,
            type: shapes[Math.floor(Math.random() * shapes.length)],
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.life -= 0.018;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += 0.01;
        if (p.life <= 0) return false;
        drawParticle(ctx, p);
        return true;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [drawParticle]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
