import Link from "next/link";
import { contact, type Content, type Locale } from "@/data/profile";

export function Footer({ lang, t }: { lang: Locale; t: Content["footer"] }) {
  return (
    <footer className="relative">
      <div aria-hidden className="section-line" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {contact.name}. {t.rights}
        </p>
        <Link href={`/${lang}/impressum`} className="transition-colors hover:text-ink">
          {t.impressum}
        </Link>
      </div>
    </footer>
  );
}
