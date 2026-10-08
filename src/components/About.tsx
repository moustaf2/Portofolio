import { contact, type Content } from "@/data/profile";
import { Section } from "./ui";

export function About({ t }: { t: Content["about"] }) {
  return (
    <Section id="about" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
        <div>
          <div className="flex items-center gap-5">
            {/* Placeholder until the photo is added to public/ */}
            <div
              role="img"
              aria-label={t.photoPlaceholder}
              className="flex size-20 shrink-0 items-center justify-center rounded-full border border-line bg-surface-2 font-mono text-xl text-accent"
            >
              {contact.initials}
            </div>
            <div>
              <p className="text-lg font-semibold">{contact.name}</p>
              <p className="mt-1 text-sm text-muted">{t.location}</p>
            </div>
          </div>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-muted">
            {t.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.educationTitle}
            </h3>
            <p className="mt-3 font-medium">{t.education.degree}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{t.education.school}</p>
            <p className="text-sm leading-6 text-muted">{t.education.detail}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.languagesTitle}
            </h3>
            <ul className="mt-3 space-y-2">
              {t.languages.map((language) => (
                <li key={language.name} className="flex justify-between gap-4 text-sm">
                  <span>{language.name}</span>
                  <span className="font-mono text-muted">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.certificatesTitle}
            </h3>
            <ul className="mt-3 space-y-3">
              {t.certificates.map((certificate) => (
                <li key={certificate.name} className="text-sm leading-6">
                  <span className="block">{certificate.name}</span>
                  <span className="block text-muted">{certificate.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
