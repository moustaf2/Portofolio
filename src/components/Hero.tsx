import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { contact, type Content } from "@/data/profile";
import { BinaryNetwork } from "./BinaryNetwork";
import { LinkedInIcon } from "./ui";

export function Hero({ t }: { t: Content["hero"] }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="glow glow-cyan -top-40 left-[8%] size-[30rem] opacity-20" />
      <div aria-hidden className="glow glow-indigo -right-24 top-24 size-[28rem] opacity-20" />
      <div aria-hidden className="glow glow-cyan -bottom-48 left-1/3 size-[24rem] opacity-10" />
      <BinaryNetwork />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 pb-20 pt-14 text-center sm:px-8 sm:pb-24 sm:pt-20">
        <p className="glass inline-flex items-center gap-2.5 !rounded-full px-4 py-2 text-sm">
          <span aria-hidden className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-ok" />
          </span>
          {t.badge}
        </p>

        <div className="photo-ring mt-10 size-40 rounded-full p-[3px] sm:size-[220px]">
          <div className="photo-fill size-full overflow-hidden rounded-full">
            <Image
              src={contact.photo}
              alt={t.photoAlt}
              width={640}
              height={640}
              sizes="(min-width: 640px) 220px, 160px"
              preload
              className="size-full object-cover"
            />
          </div>
        </div>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl">
          {contact.shortName}
        </h1>
        <p className="mt-3 font-mono text-lg text-accent sm:text-xl">{t.title}</p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{t.lead}</p>

        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-3 text-center font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            {t.primaryCta}
          </a>
          <a
            href={contact.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-wrap items-center justify-center gap-x-2 rounded-md border border-line bg-bg/40 px-5 py-3 font-medium transition-colors hover:border-accent/50 hover:bg-surface"
          >
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <Download aria-hidden className="size-4" />
              {t.cvCta}
            </span>
            <span className="whitespace-nowrap font-mono text-xs text-muted">({t.cvNote})</span>
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Mail aria-hidden className="size-4" />
              {t.emailLabel}
            </a>
          </li>
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <LinkedInIcon className="size-4" />
              {t.linkedinLabel}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
