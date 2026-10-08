import Image from "next/image";
import type { ReactNode } from "react";
import type { Screenshot } from "@/data/profile";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
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
