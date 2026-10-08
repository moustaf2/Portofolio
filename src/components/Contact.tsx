import { contact, type Content } from "@/data/profile";

export function Contact({ t }: { t: Content["contact"] }) {
  return (
    <section id="contact" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="rounded-2xl border border-line bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.14),transparent_60%)] bg-surface p-8 sm:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">{t.lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-md bg-accent px-5 py-3 text-center font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              {t.emailLabel}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-5 py-3 text-center font-medium transition-colors hover:bg-surface-2"
            >
              {t.linkedinLabel}
            </a>
          </div>
          <p className="mt-6 break-all font-mono text-sm text-muted">{contact.email}</p>
        </div>
      </div>
    </section>
  );
}
