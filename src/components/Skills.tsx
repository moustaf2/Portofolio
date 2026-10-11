import type { Content } from "@/data/profile";
import { GlassCard, IconBadge, Section } from "./ui";

export function Skills({ t, number }: { t: Content["skills"]; number: number }) {
  return (
    <Section id="skills" number={number} label={t.label} title={t.title}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.groups.map((group) => (
          <GlassCard key={group.name} lift className="p-6">
            <div className="flex items-center gap-3">
              <IconBadge name={group.icon} />
              <h3 className="font-semibold">{group.name}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <li
                  key={item}
                  className={
                    // The first items of each group are the strongest
                    i < group.strong
                      ? "rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-sm text-ink"
                      : "rounded-md border border-line bg-surface/60 px-3 py-1.5 font-mono text-sm text-muted"
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
