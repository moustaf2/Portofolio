"use client";

import { useState } from "react";
import type { Screenshot } from "@/data/profile";
import { BrowserFrame, Shot } from "./ui";

// The project's screens as tabs, one large image at a time
export function ScreenTabs({ label, shots }: { label: string; shots: Screenshot[] }) {
  const [active, setActive] = useState(0);
  const shot = shots[active];

  return (
    <div>
      <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
        {shots.map((item, i) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            id={`screen-tab-${i}`}
            aria-selected={i === active}
            aria-controls="screen-panel"
            onClick={() => setActive(i)}
            className={`cursor-pointer rounded-md border px-3.5 py-2 font-mono text-xs transition-colors ${
              i === active
                ? "border-accent/50 bg-accent/10 text-ink"
                : "border-line text-muted hover:border-accent/40 hover:text-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div id="screen-panel" role="tabpanel" aria-labelledby={`screen-tab-${active}`} className="mt-4">
        <BrowserFrame label={shot.label}>
          <Shot key={shot.src} shot={shot} sizes="(min-width: 1152px) 1000px, 90vw" />
        </BrowserFrame>
      </div>
    </div>
  );
}
