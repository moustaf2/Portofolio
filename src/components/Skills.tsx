import type { Content } from "@/data/profile";
import { Section } from "./ui";

export function Skills({ t }: { t: Content["skills"] }) {
  return (
    <Section id="skills" eyebrow={t.eyebrow} title={t.title}>
      <dl className="divide-y divide-line/70 border-y border-line/70">
        {t.groups.map((group) => (
          <div key={group.name} className="grid gap-4 py-6 sm:grid-cols-[14rem_1fr]">
            <dt className="font-medium">{group.name}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={
                      group.primary
                        ? "rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-sm text-ink"
                        : "rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-sm text-muted"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
