import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { content, hasLocale } from "@/data/profile";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = content[lang];

  return (
    <>
      <Header lang={lang} nav={t.nav} />
      <main className="flex-1">
        <Hero t={t.hero} />
        <Projects t={t.projects} />
        <Services t={t.services} />
        <Experience t={t.experience} />
        <Skills t={t.skills} />
        <About t={t.about} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
