import type { Content } from "@/data/profile";
import { Section, TagList } from "./ui";

export function Experience({ t, number }: { t: Content["experience"]; number: number }) {
  return (
    <Section id="experience" number={number} label={t.label} title={t.title}>
      <ol className="relative ml-1.5 space-y-12 border-l border-line">
        {t.items.map((item) => {
          const education = item.kind === "education";
          return (
            <li key={item.org} className="relative pl-7 sm:pl-10">
              {/* Jobs get a filled dot, education a hollow square */}
              <span
                aria-hidden
                className={
                  education
                    ? "absolute -left-[6.5px] top-0.5 size-3 rotate-45 border-2 border-indigo bg-base"
                    : "absolute -left-[6.5px] top-0.5 size-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(56,189,248,0.15)]"
                }
              />
              <p className="font-mono text-xs leading-4 text-accent">
                {item.period}
                {education && <span className="text-muted"> · {t.educationLabel}</span>}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {item.org}
                {!education && `, ${item.location}`}
              </p>
              {item.context && <p className="mt-3 text-sm italic leading-6 text-muted">{item.context}</p>}
              {item.points.length > 0 && (
                <ul className="mt-4 max-w-3xl space-y-2.5 leading-7 text-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.tech.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {t.techLabel}
                  </span>
                  <TagList items={item.tech} />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
