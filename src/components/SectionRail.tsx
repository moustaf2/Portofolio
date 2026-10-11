"use client";

import { useEffect, useState } from "react";

// Slim rail at the left edge on wide screens: section numbers, current one marked
export function SectionRail({
  label,
  sections,
}: {
  label: string;
  sections: { id: string; label: string }[];
}) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band across the middle of the screen decides which section is current
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }
    const top = document.getElementById("top");
    if (top) observer.observe(top);

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label={label}
      className="fixed left-5 top-1/2 z-10 hidden -translate-y-1/2 min-[1340px]:block"
    >
      <ol className="space-y-1 border-l border-line/70">
        {sections.map((section, i) => {
          const current = section.id === active;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? "location" : undefined}
                className={`group -ml-px flex items-center gap-2 border-l py-1.5 pl-3 font-mono text-xs transition-colors ${
                  current
                    ? "border-accent text-accent"
                    : "border-transparent text-muted/70 hover:text-ink"
                }`}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={`whitespace-nowrap transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 ${
                    current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
