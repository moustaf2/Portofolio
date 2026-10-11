import Link from "next/link";
import { contact, locales, type Content, type Locale } from "@/data/profile";

export function Header({
  lang,
  nav,
  page = "",
}: {
  lang: Locale;
  nav: Content["nav"];
  // Path below the language, for example "/impressum"; empty on the main page
  page?: string;
}) {
  // On other pages the section links lead back to the main page
  const home = page ? `/${lang}` : "";
  const links = [
    { href: `${home}#about`, label: nav.about },
    { href: `${home}#experience`, label: nav.experience },
    { href: `${home}#projects`, label: nav.projects },
    { href: `${home}#skills`, label: nav.skills },
    { href: `${home}#services`, label: nav.services },
    { href: `${home}#contact`, label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-base/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href={`${home}#top`} className="font-semibold tracking-tight">
          {contact.shortName}
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded-md border border-line p-0.5 font-mono text-xs">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}${page}`}
                hrefLang={locale}
                aria-current={locale === lang ? "true" : undefined}
                className={
                  locale === lang
                    ? "rounded bg-surface-2 px-2 py-1 text-ink"
                    : "rounded px-2 py-1 text-muted transition-colors hover:text-ink"
                }
              >
                {locale.toUpperCase()}
              </Link>
            ))}
          </div>
          <a
            href={`${home}#contact`}
            className="rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            {nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
