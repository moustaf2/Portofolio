import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content, hasLocale, profile } from "@/data/profile";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/impressum">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: `${content[lang].impressum.title} — ${profile.name}`,
    robots: { index: false },
  };
}

// TODO: a German Impressum normally needs a postal address (plan, open point 3).
export default async function Impressum({
  params,
}: PageProps<"/[lang]/impressum">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = content[lang];

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
        {t.impressum.title}
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t.impressum.title}
      </h1>
      <h2 className="mt-10 font-semibold">{t.impressum.responsible}</h2>
      <p className="mt-3 leading-relaxed text-muted">
        {profile.name}
        <br />
        {t.location}
      </p>
      <h2 className="mt-8 font-semibold">{t.impressum.contactTitle}</h2>
      <p className="mt-3 leading-relaxed text-muted">
        <a
          href={`mailto:${profile.email}`}
          className="break-all text-accent hover:underline"
        >
          {profile.email}
        </a>
      </p>
      <Link
        href={`/${lang}`}
        className="mt-12 inline-block font-mono text-sm text-muted transition-colors hover:text-foreground"
      >
        ← {t.impressum.back}
      </Link>
    </main>
  );
}
