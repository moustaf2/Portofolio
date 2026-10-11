import {
  AppWindow,
  BookOpen,
  BrainCircuit,
  ChessKnight,
  CodeXml,
  Database,
  Gauge,
  Globe,
  Goal,
  LayoutTemplate,
  Plane,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import type { IconName, Screenshot } from "@/data/profile";
import { Reveal } from "./Reveal";

const icons: Record<IconName, LucideIcon> = {
  code: CodeXml,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  brain: BrainCircuit,
  wrench: Wrench,
  app: AppWindow,
  sparkles: Sparkles,
  globe: Globe,
  gauge: Gauge,
  football: Goal,
  plane: Plane,
  book: BookOpen,
  chess: ChessKnight,
};

export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const Glyph = icons[name];
  return <Glyph aria-hidden className={className} />;
}

export function IconBadge({ name }: { name: IconName }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
      <Icon name={name} />
    </span>
  );
}

export function SectionLabel({ number, label }: { number: number; label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {String(number).padStart(2, "0")} — {label}
    </p>
  );
}

export function Section({
  id,
  number,
  label,
  title,
  children,
}: {
  id: string;
  number: number;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative">
      <div aria-hidden className="section-line" />
      <Reveal className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel number={number} label={label} />
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </Reveal>
    </section>
  );
}

export function GlassCard({
  as: Element = "div",
  lift = false,
  className = "",
  children,
}: {
  as?: "div" | "article" | "li";
  lift?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Element className={`glass ${lift ? "glass-lift" : ""} ${className}`}>{children}</Element>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}

export function BrowserFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/40">
      <figcaption className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="truncate font-mono text-xs text-muted">{label}</span>
      </figcaption>
      {/* The screenshots come from a light interface, so the frame body stays light */}
      <div className="bg-slate-50">{children}</div>
    </figure>
  );
}

export function Shot({ shot, sizes }: { shot: Screenshot; sizes: string }) {
  return (
    <Image
      src={shot.src}
      alt={shot.alt}
      width={shot.width}
      height={shot.height}
      sizes={sizes}
      className="h-auto w-full"
    />
  );
}

// lucide-react ships no brand icons
export function LinkedInIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
