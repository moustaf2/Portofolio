import { Mail, Play } from "lucide-react";
import { contact, type Content } from "@/data/profile";
import { Disclosure } from "./Disclosure";
import { ScreenTabs } from "./ScreenTabs";
import { BrowserFrame, GlassCard, Section, Shot, TagList } from "./ui";

// Opacity steps of the accent colour, one per indicator in the weight bar
const segmentShades = ["bg-accent", "bg-accent/75", "bg-accent/50", "bg-accent/30"];

const label = "font-mono text-xs uppercase tracking-wider text-muted";
const bullets = "space-y-2 text-sm leading-6 text-soft";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className={bullets}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Projects({ t, number }: { t: Content["projects"]; number: number }) {
  const f = t.featured;
  const c = f.caseStudy;

  return (
    <Section id="projects" number={number} label={t.label} title={t.title}>
      <GlassCard as="article" className="p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent">{f.meta}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{f.name}</h3>
            <p className="mt-3 leading-7 text-soft">{f.summary}</p>
            <p className="mt-4 text-sm text-soft">
              <span className={label}>{f.roleLabel}</span>
              <span className="ml-3">{f.role}</span>
            </p>
            <div className="mt-5">
              <TagList items={f.stack} />
            </div>
          </div>

          <div>
            <BrowserFrame label={f.shot.label}>
              <div className="p-2 sm:p-4">
                <Shot shot={f.shot} sizes="(min-width: 1024px) 560px, 90vw" />
              </div>
            </BrowserFrame>
            <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-3xl font-medium text-accent">{f.resultValue}</span>
              <span className="text-sm text-soft">{f.resultLabel}</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {contact.demoUrl ? (
            <a
              href={contact.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              <Play aria-hidden className="size-4" />
              {f.demoCta}
            </a>
          ) : (
            // No video yet: shown as a placeholder instead of a dead link
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 rounded-md border border-dashed border-accent/50 px-5 py-3 font-medium text-soft">
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <Play aria-hidden className="size-4" />
                {f.demoCta}
              </span>
              <span className="font-mono text-xs text-muted">{f.demoPlaceholder}</span>
            </span>
          )}
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent(f.walkthroughSubject)}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-bg/40 px-5 py-3 font-medium transition-colors hover:border-accent/50 hover:bg-surface"
          >
            <Mail aria-hidden className="size-4" />
            {f.walkthroughCta}
          </a>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-soft">{f.sourceNote}</p>

        <div className="mt-8">
          <Disclosure label={c.toggle}>
            <div className="grid gap-8 lg:grid-cols-3">
              {c.steps.map((step) => (
                <div key={step.title}>
                  <h4 className={label}>{step.title}</h4>
                  <div className="mt-3">
                    {step.text && <p className="text-sm leading-6 text-soft">{step.text}</p>}
                    {step.points && <Bullets items={step.points} />}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className={label}>{c.indicatorsTitle}</h4>
              <div aria-hidden className="mt-4 flex h-2 gap-1 overflow-hidden rounded-full">
                {c.indicators.map((indicator, i) => (
                  <span
                    key={indicator.name}
                    className={segmentShades[i % segmentShades.length]}
                    style={{ flexGrow: indicator.weight }}
                  />
                ))}
              </div>
              <dl className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {c.indicators.map((indicator) => (
                  <div key={indicator.name}>
                    <dt className="flex items-baseline justify-between gap-3">
                      <span className="font-medium">{indicator.name}</span>
                      <span className="font-mono text-sm text-accent">{indicator.weight}%</span>
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-soft">{indicator.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10">
              <h4 className={label}>{c.techTitle}</h4>
              <div className="mt-4">
                <TagList items={c.tech} />
              </div>
            </div>

            <div className="mt-10">
              <h4 className={`mb-4 ${label}`}>{c.screensTitle}</h4>
              <ScreenTabs label={c.screensTitle} shots={c.gallery} />
            </div>

            <p className="mt-8 max-w-3xl border-l-2 border-accent/60 pl-4 text-sm leading-6 text-soft">
              {c.note}
            </p>
          </Disclosure>
        </div>
      </GlassCard>

      <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.moreTitle}</h3>
      <div className="mt-5 space-y-6">
        {t.more.map((project) => (
          <GlassCard key={project.name} as="article" lift className="p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <h4 className="text-xl font-semibold tracking-tight">{project.name}</h4>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent">
                  {project.type}
                </p>
                <p className="mt-4 leading-7 text-soft">{project.description}</p>
              </div>
              <div>
                <p className={label}>{t.partLabel}</p>
                <div className="mt-3">
                  <Bullets items={project.part} />
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line/60 pt-5">
              <span className={label}>{t.toolsLabel}</span>
              <TagList items={project.tools} />
            </div>
            {project.extra.map((line) => (
              <p key={line} className="mt-4 text-sm leading-6 text-soft first-of-type:mt-5">
                {line}
              </p>
            ))}
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
