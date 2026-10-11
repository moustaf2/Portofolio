import type { Content } from "@/data/profile";
import { GlassCard, Section } from "./ui";

const LANGUAGE_STEPS = 5;

export function About({ t, number }: { t: Content["about"]; number: number }) {
  return (
    <Section id="about" number={number} label={t.label} title={t.title}>
      <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
        <div className="max-w-2xl space-y-5 text-lg leading-8 text-muted">
          {t.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-6">
          <GlassCard lift className="p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.languagesTitle}
            </h3>
            <ul className="mt-5 space-y-5">
              {t.languages.map((language) => (
                <li key={language.name}>
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="font-medium">{language.name}</span>
                    <span className="font-mono text-muted">{language.level}</span>
                  </div>
                  <div aria-hidden className="mt-2 flex gap-1.5">
                    {Array.from({ length: LANGUAGE_STEPS }, (_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${i < language.steps ? "bg-accent" : "bg-line"}`}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard lift className="p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.certificatesTitle}
            </h3>
            <ul className="mt-5 space-y-4">
              {t.certificates.map((certificate) => (
                <li key={certificate.name} className="text-sm leading-6">
                  <span className="block font-medium">{certificate.name}</span>
                  <span className="block text-muted">{certificate.issuer}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
