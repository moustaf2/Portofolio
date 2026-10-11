"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";

// Collapsed block that opens on a button press; the content stays in the page for search
export function Disclosure({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl border border-line bg-bg/50 px-5 py-4 text-left font-medium transition-colors hover:border-accent/50"
      >
        {label}
        <ChevronDown
          aria-hidden
          className={`size-5 shrink-0 text-accent transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div id={panelId} hidden={!open} className="pt-8">
        {children}
      </div>
    </div>
  );
}
