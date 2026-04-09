"use client";

import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  autoStart?: boolean;
}

export default function Typewriter({
  text,
  speed = 80,
  delay = 500,
  className = "",
  cursor = true,
  autoStart = false,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(autoStart);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (autoStart) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Reduced threshold to ensure it triggers
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [autoStart]);

  useEffect(() => {
    if (!started) return;
    
    let interval: NodeJS.Timeout;
    const timer = setTimeout(() => {
      let idx = 0;
      interval = setInterval(() => {
        idx++;
        setDisplayed(text.slice(0, idx));
        if (idx >= text.length) clearInterval(interval);
      }, speed);
    }, delay);
    
    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [started, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {cursor && (
        <span
          style={{
            display: "inline-block",
            width: "3px",
            height: "1em",
            background: "currentColor",
            marginLeft: "2px",
            animation: "pulse-soft 1s ease-in-out infinite",
            verticalAlign: "text-bottom",
          }}
        />
      )}
    </span>
  );
}
