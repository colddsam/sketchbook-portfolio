"use client";

import { useState, useEffect, useRef } from "react";
import { getLenis } from "./SmoothScroll";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
        setMobileOpen(false); // Close mobile menu on scroll down
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.8 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${hidden ? styles.hidden : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); handleClick("#hero"); }}
        >
          <svg className={styles.logoCircle} viewBox="0 0 110 45" fill="none">
            <ellipse cx="55" cy="22" rx="52" ry="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeDasharray="4 3" />
          </svg>
          SAMRAT
        </a>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${activeSection === item.href.replace("#", "") ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileOpen : ""}`}>
        {navItems.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            style={{ transitionDelay: `${i * 50}ms` }}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
