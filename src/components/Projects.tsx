import type { Content } from "@/data/profile";
import { BrowserFrame, Section, Shot, TagList } from "./ui";

// Opacity steps of the accent colour, one per indicator in the weight bar
const segmentShades = ["bg-accent", "bg-accent/75", "bg-accent/50", "bg-accent/30"];

export function Projects({ t }: { t: Content["projects"] }) {
  const f = t.featured;

  return (
    <Section id="projects" eyebrow={t.eyebrow} title={t.title}>
      <article className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
        <p className="font-mono text-xs text-accent">{f.tag}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{f.name}</h3>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">{f.summary}</p>
        <div className="mt-6">
          <TagList items={f.stack} />
        </div>

        <div className="mt-10">
          <BrowserFrame label={f.resultFrame.label}>
            <div className="flex flex-col gap-2 p-2 sm:gap-4 sm:p-6">
              {f.resultFrame.shots.map((shot) => (
                <Shot key={shot.src} shot={shot} sizes="(min-width: 1152px) 1000px, 90vw" />
              ))}
            </div>
          </BrowserFrame>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div>
            <h4 className="font-semibold">{f.problemTitle}</h4>
            <p className="mt-3 leading-7 text-muted">{f.problem}</p>
          </div>
          <div>
            <h4 className="font-semibold">{f.builtTitle}</h4>
            <ul className="mt-3 space-y-3 leading-7 text-muted">
              {f.built.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">{f.resultTitle}</h4>
            <p className="mt-3 font-mono text-5xl font-medium text-accent">{f.resultValue}</p>
            <p className="mt-3 leading-7 text-muted">{f.result}</p>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-line bg-bg/50 p-6">
          <h4 className="font-semibold">{f.indicatorsTitle}</h4>
          <div aria-hidden className="mt-5 flex h-2 gap-1 overflow-hidden rounded-full">
            {f.indicators.map((indicator, i) => (
              <span
                key={indicator.name}
                className={segmentShades[i % segmentShades.length]}
                style={{ flexGrow: indicator.weight }}
              />
            ))}
          </div>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {f.indicators.map((indicator) => (
              <div key={indicator.name}>
                <dt className="flex items-baseline justify-between gap-3">
                  <span className="font-medium">{indicator.name}</span>
                  <span className="font-mono text-sm text-accent">{indicator.weight}%</span>
                </dt>
                <dd className="mt-2 text-sm leading-6 text-muted">{indicator.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {f.gallery.map((shot) => (
            <BrowserFrame key={shot.src} label={shot.label}>
              <Shot shot={shot} sizes="(min-width: 1152px) 500px, (min-width: 640px) 45vw, 90vw" />
            </BrowserFrame>
          ))}
        </div>

        <p className="mt-8 max-w-3xl border-l-2 border-accent/60 pl-4 text-sm leading-6 text-muted">
          {f.note}
        </p>
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {t.more.map((project) => (
          <article key={project.name} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs text-accent">{project.tag}</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-3 leading-7 text-muted">{project.description}</p>
            <div className="mt-6">
              <TagList items={project.stack} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
