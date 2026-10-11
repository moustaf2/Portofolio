import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hobbies } from "@/components/Hobbies";
import { Projects } from "@/components/Projects";
import { SectionRail } from "@/components/SectionRail";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { content, hasLocale } from "@/data/profile";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = content[lang];

  // The order here is the order on the page and the numbering of the sections
  const rail = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "services", label: t.nav.services },
    { id: "hobbies", label: t.nav.hobbies },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <>
      <Header lang={lang} nav={t.nav} />
      <SectionRail label={t.nav.sections} sections={rail} />
      <main className="relative flex-1 overflow-x-clip">
        {/* Faint colour fields between the hero and the contact section */}
        <div aria-hidden className="glow glow-indigo -left-40 top-[30%] size-[32rem] opacity-[0.07]" />
        <div aria-hidden className="glow glow-cyan -right-40 top-[52%] size-[32rem] opacity-[0.06]" />
        <div aria-hidden className="glow glow-indigo -left-40 top-[74%] size-[30rem] opacity-[0.06]" />

        <Hero t={t.hero} />
        <About t={t.about} number={1} />
        <Experience t={t.experience} number={2} />
        <Projects t={t.projects} number={3} />
        <Skills t={t.skills} number={4} />
        <Services t={t.services} number={5} />
        <Hobbies t={t.hobbies} number={6} />
        <Contact t={t.contact} number={7} />
      </main>
      <Footer lang={lang} t={t.footer} />
    </>
  );
}
