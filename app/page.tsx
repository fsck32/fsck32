"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Animation on load
    gsap.from(logoRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(contentRef.current?.children || [], {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(footerRef.current?.children || [], {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      delay: 1.2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-background text-foreground">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        <div ref={logoRef} className="flex flex-col items-center sm:items-start gap-2">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">
            FSCK32
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Information Architecture & Security
          </p>
        </div>

        <div ref={contentRef} className="flex flex-col gap-8 w-full">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-red-400">Our Services</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Information Analysis & Structuring</li>
              <li>Data Organization & Search Solutions</li>
              <li>Information Security Consulting</li>
              <li>Managed Information Networks</li>
              <li>Custom Data Administration Systems</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-red-400">About Us</h2>
            <p className="text-muted-foreground">
              FSCK32 specializes in transforming chaotic data into structured, accessible, and secure information systems. 
              Our team of experts combines cutting-edge technology with proven methodologies to deliver solutions 
              that empower organizations to harness the full potential of their information assets.
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row pt-4">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-600 text-white gap-2 hover:bg-red-700 font-medium text-sm sm:text-base h-12 px-5 w-full sm:w-auto"
              href="#contact"
            >
              Contact Us
            </a>
            <a
              className="rounded-full border border-solid border-red-600/30 transition-colors flex items-center justify-center hover:bg-red-600/10 font-medium text-sm sm:text-base h-12 px-5 w-full sm:w-auto"
              href="#services"
            >
              Our Services
            </a>
          </div>
        </div>
      </main>

      <footer ref={footerRef} className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-muted-foreground">
        <a
          className="flex items-center gap-2 hover:text-red-400 transition-colors"
          href="#about"
        >
          About
        </a>
        <a
          className="flex items-center gap-2 hover:text-red-400 transition-colors"
          href="#services"
        >
          Services
        </a>
        <a
          className="flex items-center gap-2 hover:text-red-400 transition-colors"
          href="#contact"
        >
          Contact
        </a>
        <a
          className="flex items-center gap-2 hover:text-red-400 transition-colors"
          href="#privacy"
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}