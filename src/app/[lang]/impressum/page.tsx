import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GlassCard } from "@/components/ui";
import { contact, content, hasLocale, locales } from "@/data/profile";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/impressum">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  return {
    title: `${content[lang].impressum.title} — ${contact.shortName}`,
    robots: { index: false },
    alternates: {
      canonical: `/${lang}/impressum`,
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}/impressum`])),
    },
  };
}

export default async function Impressum({ params }: PageProps<"/[lang]/impressum">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = content[lang];
  const i = t.impressum;

  return (
    <>
      <Header lang={lang} nav={t.nav} page="/impressum" />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft aria-hidden className="size-4" />
            {i.back}
          </Link>
          <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">{i.title}</h1>

          <GlassCard className="mt-10 space-y-8 p-6 sm:p-8">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{i.lawLabel}</h2>
              <p className="mt-3">{contact.name}</p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {i.addressLabel}
              </h2>
              {/* Postal address is still to be decided (REDESIGN_PLAN.md, open point 2) */}
              <p className="mt-3 text-muted">{i.addressPending}</p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {i.contactLabel}
              </h2>
              <p className="mt-3">
                <a href={`mailto:${contact.email}`} className="break-all hover:text-accent">
                  {contact.email}
                </a>
              </p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {i.responsibleLabel}
              </h2>
              <p className="mt-3">{contact.name}</p>
            </div>
          </GlassCard>
        </div>
      </main>
      <Footer lang={lang} t={t.footer} />
    </>
  );
}
