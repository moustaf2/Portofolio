"use client";

import { useEffect, useRef } from "react";

type Digit = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  one: boolean;
  // Seconds of cyan glow left after a flip
  glow: number;
};

const LINK_DISTANCE = 150;
const GLOW_SECONDS = 1.4;

// Decorative background: 0 and 1 digits drifting slowly, joined by thin lines when close
export function BinaryNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fontFamily = getComputedStyle(canvas).fontFamily;

    let width = 0;
    let height = 0;
    let digits: Digit[] = [];
    let frame = 0;
    let last = 0;
    let nextFlip = 2;
    let onScreen = true;

    const seed = () => {
      const count = width < 640 ? 20 : 40;
      digits = Array.from({ length: count }, () => {
        // 40 to 60 seconds to cross the screen
        const speed = Math.max(width, 600) / (40 + Math.random() * 20);
        const angle = Math.random() * Math.PI * 2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          one: Math.random() < 0.5,
          glow: 0,
        };
      });
    };

    // Fade towards the centre column, where the text sits
    const strength = (x: number) => {
      const column = Math.min(340, width * 0.36);
      const t = Math.min(1, Math.max(0, (Math.abs(x - width / 2) - column * 0.55) / (column * 0.7)));
      return 0.14 + 0.86 * t * t * (3 - 2 * t);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      for (let i = 0; i < digits.length; i++) {
        const a = digits[i];
        for (let j = i + 1; j < digits.length; j++) {
          const b = digits[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance >= LINK_DISTANCE) continue;
          const alpha = (1 - distance / LINK_DISTANCE) * 0.3 * Math.min(strength(a.x), strength(b.x));
          ctx.strokeStyle = `rgba(160, 220, 250, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      ctx.font = `13px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const digit of digits) {
        const lit = digit.glow / GLOW_SECONDS;
        const alpha = (0.4 + 0.6 * lit) * strength(digit.x);
        ctx.shadowColor = "rgba(56, 189, 248, 0.9)";
        ctx.shadowBlur = 12 * lit;
        ctx.fillStyle =
          lit > 0 ? `rgba(56, 189, 248, ${Math.max(alpha, lit)})` : `rgba(215, 240, 255, ${alpha})`;
        ctx.fillText(digit.one ? "1" : "0", digit.x, digit.y);
      }
      ctx.shadowBlur = 0;
    };

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const margin = 20;
      for (const digit of digits) {
        digit.x += digit.vx * dt;
        digit.y += digit.vy * dt;
        if (digit.x < -margin) digit.x = width + margin;
        if (digit.x > width + margin) digit.x = -margin;
        if (digit.y < -margin) digit.y = height + margin;
        if (digit.y > height + margin) digit.y = -margin;
        digit.glow = Math.max(0, digit.glow - dt);
      }

      nextFlip -= dt;
      if (nextFlip <= 0 && digits.length > 0) {
        const digit = digits[Math.floor(Math.random() * digits.length)];
        digit.one = !digit.one;
        digit.glow = GLOW_SECONDS;
        nextFlip = 1.5 + Math.random() * 2.5;
      }

      draw();
      frame = requestAnimationFrame(step);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    // Runs only while the section is on screen, the tab is visible and motion is allowed
    const sync = () => {
      stop();
      if (reduceMotion.matches) {
        draw();
        return;
      }
      if (onScreen && !document.hidden) {
        last = performance.now();
        frame = requestAnimationFrame(step);
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const widthChanged = Math.abs(rect.width - width) > 1;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      if (widthChanged || digits.length === 0) seed();
      draw();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const viewObserver = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    viewObserver.observe(canvas);

    document.addEventListener("visibilitychange", sync);
    reduceMotion.addEventListener("change", sync);
    resize();
    sync();

    return () => {
      stop();
      resizeObserver.disconnect();
      viewObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reduceMotion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 size-full font-mono"
    />
  );
}
