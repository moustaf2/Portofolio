import type { Content } from "@/data/profile";
import { Section, TagList } from "./ui";

export function Services({ t }: { t: Content["services"] }) {
  return (
    <Section id="services" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid gap-6 md:grid-cols-3">
        {t.items.map((service, i) => (
          <article key={service.name} className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <p aria-hidden className="font-mono text-xs text-accent">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{service.name}</h3>
            <p className="mt-3 flex-1 leading-7 text-muted">{service.description}</p>
            <div className="mt-6">
              <TagList items={service.tags} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
