import type { Content } from "@/data/profile";

export function Hero({ t }: { t: Content["hero"] }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[32rem] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.16),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          {t.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{t.lead}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-3 text-center font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            {t.primaryCta}
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-5 py-3 text-center font-medium transition-colors hover:bg-surface"
          >
            {t.secondaryCta}
          </a>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {t.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-1 bg-surface px-6 py-5">
              <dt className="text-sm text-muted">{stat.label}</dt>
              <dd className="font-mono text-2xl font-medium">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
