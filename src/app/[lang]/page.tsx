import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  content,
  hasLocale,
  locales,
  profile,
  screenshots,
  skills,
} from "@/data/profile";

function Section({
  id,
  title,
  heading,
  children,
}: {
  id: string;
  title: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-16 sm:py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
        {title}
      </p>
      <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        {heading}
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-card-raised px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

function BrowserFrame({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-card-raised">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
      </div>
      {children}
      <figcaption className="border-t border-line px-4 py-3 font-mono text-xs text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = content[lang];
  const featured = t.projects.featured;

  const nav = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.about, href: "#about" },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <header className="sticky top-0 z-10 -mx-5 flex items-center justify-between gap-4 border-b border-line/60 bg-background/85 px-5 py-3.5 backdrop-blur sm:-mx-8 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold">
          <span className="sm:hidden">{profile.initials.toLowerCase()}</span>
          <span className="hidden sm:inline">
            {profile.shortName.toLowerCase().replace(" ", ".")}
          </span>
          <span className="text-accent">.dev</span>
        </a>
        <nav className="hidden gap-6 text-sm text-muted lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex rounded-md border border-line p-0.5 font-mono text-xs">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}`}
                hrefLang={locale}
                aria-current={locale === lang ? "true" : undefined}
                className={
                  locale === lang
                    ? "rounded bg-card-raised px-2.5 py-1 font-semibold text-foreground"
                    : "rounded px-2.5 py-1 text-muted transition-colors hover:text-foreground"
                }
              >
                {locale.toUpperCase()}
              </Link>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            {t.nav.contact}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative py-20 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[28rem] w-[min(60rem,100vw)] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(56,189,248,0.16),transparent)]"
          />
          <p className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 font-mono text-xs text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            {t.location} · {t.relocation}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-accent sm:text-3xl">
            {t.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {t.pitch}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </section>

        <Section
          id="services"
          title={t.services.title}
          heading={t.services.heading}
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service, index) => (
              <li
                key={service.title}
                className="rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent"
              >
                <p className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="projects"
          title={t.projects.title}
          heading={t.projects.heading}
        >
          <article className="rounded-2xl border border-line bg-card p-6 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {featured.label}
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">
              {featured.oneLine}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h4 className="font-semibold">{featured.problemTitle}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {featured.problem}
                </p>
                <h4 className="mt-8 font-semibold">{featured.builtTitle}</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {featured.built.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-line bg-card-raised p-6">
                <h4 className="font-semibold">{featured.resultTitle}</h4>
                <p className="mt-3 flex flex-wrap items-baseline gap-x-3">
                  <span className="text-5xl font-bold tracking-tight text-accent">
                    {featured.resultValue}
                  </span>
                  <span className="font-mono text-sm text-muted">
                    {featured.resultUnit}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {featured.result}
                </p>
                <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                  {featured.note}
                </p>
              </div>
            </div>

            <h4 className="mt-10 font-semibold">{featured.indicatorsTitle}</h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {featured.indicators.map((indicator) => (
                <li
                  key={indicator.name}
                  className="rounded-xl border border-line bg-card-raised p-4"
                >
                  <p className="font-mono text-xs text-accent">
                    {indicator.weight}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{indicator.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {indicator.text}
                  </p>
                </li>
              ))}
            </ul>

            <h4 className="mt-10 font-semibold">{featured.screenshotsTitle}</h4>
            <div className="mt-4 grid items-start gap-4 md:grid-cols-2">
              {screenshots.map((shot) => (
                <BrowserFrame key={shot.id} caption={featured.captions[shot.id]}>
                  <Image
                    src={shot.src}
                    alt={featured.captions[shot.id]}
                    width={shot.width}
                    height={shot.height}
                    sizes="(min-width: 768px) 520px, 100vw"
                    className="h-auto w-full"
                  />
                </BrowserFrame>
              ))}
            </div>

            <p className="mt-8 font-mono text-xs leading-relaxed text-muted">
              {featured.thesis}
            </p>
          </article>

          <ul className="mt-5 grid gap-5 md:grid-cols-2">
            {t.projects.others.map((project) => (
              <li
                key={project.title}
                className="flex flex-col rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {project.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.text}
                </p>
                {project.points.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="experience"
          title={t.experience.title}
          heading={t.experience.heading}
        >
          <ol className="space-y-5">
            {t.experience.jobs.map((job) => (
              <li
                key={job.company}
                className="rounded-xl border border-line bg-card p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent">
                  {job.company}, {job.place}
                </p>
                {job.intro && (
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {job.intro}
                  </p>
                )}
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title={t.skills.title} heading={t.skills.heading}>
          <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.id}>
                <dt className="mb-3 font-semibold">
                  {t.skills.groups[group.id]}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="about" title={t.about.title} heading={t.about.heading}>
          <div className="grid gap-10 lg:grid-cols-[14rem_1fr]">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={profile.name}
                width={448}
                height={448}
                className="aspect-square w-40 rounded-2xl border border-line object-cover lg:w-full"
              />
            ) : (
              <div className="flex aspect-square w-40 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line bg-card lg:w-full">
                <span className="text-4xl font-bold text-accent">
                  {profile.initials}
                </span>
                <span className="font-mono text-xs text-muted">
                  {t.about.photoPlaceholder}
                </span>
              </div>
            )}
            <div>
              <p className="max-w-3xl text-lg leading-relaxed text-muted">
                {t.about.bio}
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h3 className="mb-3 font-semibold">
                    {t.about.educationTitle}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {t.about.education.map((item) => (
                      <li key={item.degree}>
                        <p>{item.degree}</p>
                        <p className="mt-1 text-muted">{item.school}</p>
                        <p className="mt-1 font-mono text-xs text-muted">
                          {item.period}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold">
                    {t.about.languagesTitle}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {t.about.languages.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <span>{item.name}</span>
                        <span className="font-mono text-xs text-muted">
                          {item.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:col-span-2 lg:col-span-1">
                  <h3 className="mb-3 font-semibold">
                    {t.about.certificatesTitle}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {t.about.certificates.map((item) => (
                      <li key={item.name}>
                        <p>{item.name}</p>
                        <p className="mt-1 font-mono text-xs text-muted">
                          {item.issuer}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" title={t.contact.title} heading={t.contact.heading}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {t.contact.text}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {t.contact.emailLabel}
              </p>
              <p className="mt-3 break-all text-lg font-semibold sm:text-xl">
                {profile.email}
              </p>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {t.contact.linkedinLabel}
              </p>
              <p className="mt-3 text-lg font-semibold sm:text-xl">
                {t.contact.linkedinCta} ↗
              </p>
            </a>
          </div>
        </Section>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line py-8 font-mono text-xs text-muted">
        <span>
          © {profile.name}. {t.footer.builtWith}
        </span>
        <Link
          href={`/${lang}/impressum`}
          className="transition-colors hover:text-foreground"
        >
          {t.footer.impressum}
        </Link>
      </footer>
    </div>
  );
}
