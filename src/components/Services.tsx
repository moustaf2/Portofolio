import { Check } from "lucide-react";
import type { Content } from "@/data/profile";
import { GlassCard, IconBadge, Section, TagList } from "./ui";

export function Services({ t, number }: { t: Content["services"]; number: number }) {
  return (
    <Section id="services" number={number} label={t.label} title={t.title}>
      {/* Bento grid: two wide cards on the first row, three on the second */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
        {t.items.map((service) => (
          <GlassCard
            key={service.name}
            as="article"
            lift
            className={`flex flex-col p-6 sm:p-8 ${
              service.wide ? "lg:col-span-3" : "lg:col-span-2 md:last:col-span-2 lg:last:col-span-2"
            }`}
          >
            <div className="flex items-center gap-3">
              <IconBadge name={service.icon} />
              <h3 className="text-xl font-semibold tracking-tight">{service.name}</h3>
            </div>
            <p className="mt-4 leading-7 text-muted">{service.description}</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-accent">{t.getsLabel}</p>
            <ul className="mt-3 flex-1 space-y-2 text-sm leading-6">
              {service.gets.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <TagList items={service.tags} />
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-center">
        <p className="text-xl font-semibold tracking-tight">{t.closing.text}</p>
        <a
          href="#contact"
          className="rounded-md bg-accent px-5 py-3 font-medium text-accent-ink transition-opacity hover:opacity-90"
        >
          {t.closing.button}
        </a>
      </div>
    </Section>
  );
}
