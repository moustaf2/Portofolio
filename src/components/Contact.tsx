import { ArrowUpRight, Download, Mail } from "lucide-react";
import { contact, type Content } from "@/data/profile";
import { BinaryNetwork } from "./BinaryNetwork";
import { CopyButton } from "./CopyButton";
import { Reveal } from "./Reveal";
import { GlassCard, LinkedInIcon, SectionLabel } from "./ui";

const iconBox =
  "flex size-10 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent";
const action = "inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline";

export function Contact({ t, number }: { t: Content["contact"]; number: number }) {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div aria-hidden className="section-line" />
      <div aria-hidden className="glow glow-indigo -left-32 top-10 size-[28rem] opacity-20" />
      <div aria-hidden className="glow glow-cyan -bottom-40 right-[6%] size-[30rem] opacity-20" />
      <BinaryNetwork />

      <Reveal className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <SectionLabel number={number} label={t.label} />
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-muted">{t.lead}</p>

        <div className="mt-12 grid gap-5 text-left md:grid-cols-3">
          <GlassCard lift className="flex flex-col gap-4 p-6">
            <span className={iconBox}>
              <Mail aria-hidden className="size-5" />
            </span>
            <h3 className="font-semibold">{t.emailTitle}</h3>
            <p className="break-all font-mono text-sm text-muted">{contact.email}</p>
            <div className="mt-auto flex flex-wrap items-center gap-3">
              <a href={`mailto:${contact.email}`} className={action}>
                {t.emailAction}
              </a>
              <CopyButton value={contact.email} label={t.copy} done={t.copied} />
            </div>
          </GlassCard>

          <GlassCard lift className="flex flex-col gap-4 p-6">
            <span className={iconBox}>
              <LinkedInIcon />
            </span>
            <h3 className="font-semibold">{t.linkedinTitle}</h3>
            <p className="font-mono text-sm text-muted">{contact.shortName}</p>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto ${action}`}
            >
              {t.linkedinAction}
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </GlassCard>

          <GlassCard lift className="flex flex-col gap-4 p-6">
            <span className={iconBox}>
              <Download aria-hidden className="size-5" />
            </span>
            <h3 className="font-semibold">{t.cvTitle}</h3>
            <p className="font-mono text-sm text-muted">{t.cvAction}</p>
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto ${action}`}
            >
              {t.cvTitle}
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </GlassCard>
        </div>
      </Reveal>
    </section>
  );
}
