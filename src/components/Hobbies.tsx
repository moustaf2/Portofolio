import type { Content } from "@/data/profile";
import { GlassCard, Icon, Section } from "./ui";

export function Hobbies({ t, number }: { t: Content["hobbies"]; number: number }) {
  return (
    <Section id="hobbies" number={number} label={t.label} title={t.title}>
      <figure className="border-l-2 border-accent/60 pl-6 sm:pl-8">
        <blockquote
          lang="en"
          className="text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          “{t.motto}”
        </blockquote>
        <figcaption className="mt-5 max-w-xl text-lg leading-8 text-muted">{t.sub}</figcaption>
      </figure>

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {t.items.map((hobby) => (
          <GlassCard key={hobby.name} as="li" lift className="flex items-center gap-3 p-5">
            <Icon name={hobby.icon} className="size-5 shrink-0 text-accent" />
            <span className="font-medium">{hobby.name}</span>
          </GlassCard>
        ))}
      </ul>
    </Section>
  );
}
