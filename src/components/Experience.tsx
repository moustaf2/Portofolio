import type { Content } from "@/data/profile";
import { Section } from "./ui";

export function Experience({ t }: { t: Content["experience"] }) {
  return (
    <Section id="experience" eyebrow={t.eyebrow} title={t.title}>
      <ol className="space-y-6">
        {t.items.map((job) => (
          <li
            key={job.company}
            className="grid gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[16rem_1fr]"
          >
            <div>
              <p className="font-mono text-xs text-accent">{job.period}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{job.company}</h3>
              <p className="mt-1 text-sm text-muted">{job.location}</p>
            </div>
            <div>
              <p className="font-medium">{job.role}</p>
              {job.context && <p className="mt-2 text-sm leading-6 text-muted">{job.context}</p>}
              <ul className="mt-4 space-y-3 leading-7 text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
