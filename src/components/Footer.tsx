import { contact, type Content } from "@/data/profile";

export function Footer({ t }: { t: Content["footer"] }) {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p>© 2026 {contact.name}</p>
        <p>{t.note}</p>
      </div>
    </footer>
  );
}
