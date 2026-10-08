export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const contact = {
  name: "Moustafa Mohamed Moustafa",
  shortName: "Moustafa Mohamed",
  initials: "MM",
  email: "moustafa.work501@gmail.com",
  linkedin: "https://www.linkedin.com/in/moustafa-mohamed-51bb66232/",
};

export type Screenshot = {
  src: string;
  width: number;
  height: number;
  label: string;
  alt: string;
};

type Content = {
  meta: { title: string; description: string };
  nav: {
    projects: string;
    services: string;
    experience: string;
    skills: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    featured: {
      tag: string;
      name: string;
      summary: string;
      problemTitle: string;
      problem: string;
      builtTitle: string;
      built: string[];
      resultTitle: string;
      resultValue: string;
      result: string;
      note: string;
      indicatorsTitle: string;
      indicators: { name: string; weight: number; detail: string }[];
      stack: string[];
      resultFrame: { label: string; shots: Screenshot[] };
      gallery: Screenshot[];
    };
    more: { tag: string; name: string; description: string; stack: string[] }[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: { name: string; description: string; tags: string[] }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: {
      company: string;
      location: string;
      role: string;
      period: string;
      context?: string;
      points: string[];
    }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: { name: string; primary?: boolean; items: string[] }[];
  };
  about: {
    eyebrow: string;
    title: string;
    bio: string[];
    photoPlaceholder: string;
    location: string;
    educationTitle: string;
    education: { degree: string; school: string; detail: string };
    languagesTitle: string;
    languages: { name: string; level: string }[];
    certificatesTitle: string;
    certificates: { name: string; issuer: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    linkedinLabel: string;
  };
  footer: { note: string };
};

const shotBase = "/projects/paper-integrity";

const en: Content = {
  meta: {
    title: "Moustafa Mohamed — Software Developer",
    description:
      "Software developer in Magdeburg. React and TypeScript on a production SaaS product, full-stack apps with Python and FastAPI. Open to full-time roles and freelance projects.",
  },
  nav: {
    projects: "Projects",
    services: "Services",
    experience: "Experience",
    skills: "Skills",
    about: "About",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Software Developer · Magdeburg, Germany",
    headline: "I build web apps people understand at first glance.",
    lead: "React and TypeScript on a production SaaS product. A thesis app that test users rated 80.87 on the System Usability Scale. Open to a full-time developer role and to freelance projects.",
    primaryCta: "View projects",
    secondaryCta: "Get in touch",
    stats: [
      { value: "80.87", label: "SUS usability score, 16-person study" },
      { value: "9 months", label: "on a production SaaS product" },
      { value: "DE · EN · AR", label: "C1, C1 and native" },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Work you can look at",
    featured: {
      tag: "Bachelor thesis · 2026",
      name: "Paper Integrity Analyzer",
      summary:
        "A web app that checks a scientific PDF for warning signs of fake papers and explains the result in plain language.",
      problemTitle: "The problem",
      problem:
        "Tools like Turnitin, Copyleaks and GPTZero show scores and highlights, but users often cannot tell why a document was flagged or what to do next.",
      builtTitle: "What I built",
      built: [
        "A three-step flow: home page, drag-and-drop PDF upload, result page.",
        "A result page in layers: the decision and score first, then the indicators, then the evidence, then recommended actions.",
        "An analysis backend that combines four integrity indicators into one weighted risk score.",
      ],
      resultTitle: "The result",
      resultValue: "80.87",
      result:
        "System Usability Scale score in a study with 16 participants from computer science, business, engineering and medicine. Above 80 counts as high usability.",
      note: "Built to support human review, not to replace it. The thesis focused on usability and explanation, not on detection accuracy.",
      indicatorsTitle: "How the risk score is weighted",
      indicators: [
        {
          name: "Tortured phrases",
          weight: 30,
          detail: "Matched against a known phrase list with an Aho-Corasick matcher.",
        },
        {
          name: "Citation manipulation",
          weight: 30,
          detail: "Author repetition, citation density, retracted and irrelevant references.",
        },
        {
          name: "Abstract similarity",
          weight: 20,
          detail: "Sentence-BERT embeddings compared with related papers from OpenAlex.",
        },
        {
          name: "Metadata",
          weight: 20,
          detail: "Author emails, ORCID and geographic concentration of affiliations.",
        },
      ],
      stack: ["React", "TypeScript", "Python", "FastAPI", "GROBID", "Sentence-BERT", "OpenAlex API"],
      resultFrame: {
        label: "Result page — decision first, then the reasons",
        shots: [
          {
            src: `${shotBase}/score.png`,
            width: 876,
            height: 206,
            label: "Decision and score",
            alt: "Result banner reading 'Final Decision: Likely Fake Paper' with a 63% score",
          },
          {
            src: `${shotBase}/key-indicators.png`,
            width: 1441,
            height: 563,
            label: "Key indicators",
            alt: "List of five indicators, each marked with high, medium or low impact",
          },
        ],
      },
      gallery: [
        {
          src: `${shotBase}/upload.png`,
          width: 1179,
          height: 659,
          label: "Upload",
          alt: "Upload page with a drag-and-drop area for a PDF",
        },
        {
          src: `${shotBase}/highlighted-text.png`,
          width: 1444,
          height: 630,
          label: "Evidence in the document",
          alt: "Document view with suspicious passages highlighted in red and blue",
        },
        {
          src: `${shotBase}/related-papers.png`,
          width: 1417,
          height: 739,
          label: "Related papers",
          alt: "List of related papers, each with a match percentage",
        },
        {
          src: `${shotBase}/recommended-actions.png`,
          width: 1444,
          height: 456,
          label: "Recommended actions",
          alt: "List of recommended next steps with buttons to download the result or check again",
        },
      ],
    },
    more: [
      {
        tag: "University team project",
        name: "Article platform",
        description:
          "One REST API serving a Vue.js web app and a Flutter mobile app: accounts, articles and comments, with password hashing and pagination. Built in a Scrum team with user stories, tests and code reviews.",
        stack: [".NET", "Vue.js", "Flutter", "REST API", "SQL"],
      },
      {
        tag: "Personal project",
        name: "This website",
        description:
          "A bilingual, statically generated portfolio with separate German and English routes, written from a plan and deployed on Vercel.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "What I can build for you",
    items: [
      {
        name: "Web applications",
        description:
          "Interactive apps from the interface to the API: React and Next.js in front, REST APIs, databases and authentication behind.",
        tags: ["React", "Next.js", "TypeScript", "FastAPI", "Node.js"],
      },
      {
        name: "Websites",
        description:
          "New business sites and redesigns, or fixing the one you have: speed, bugs, clearer navigation and multilingual support.",
        tags: ["Custom code", "WordPress", "i18n"],
      },
      {
        name: "AI integration",
        description:
          "AI features inside your existing software and workflows, such as document analysis, semantic search and assistants.",
        tags: ["Document analysis", "Semantic search", "Assistants"],
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I have worked",
    items: [
      {
        company: "aiio GmbH",
        location: "Magdeburg",
        role: "Working Student, AI-based Software Development",
        period: "June 2025 – February 2026",
        context: "aiio builds a SaaS product for AI-supported process management on Microsoft 365.",
        points: [
          "Built and extended features in the product's React and TypeScript front end, from user story to code review.",
          "Connected the interface to REST APIs to load, process and display backend data.",
          "Made the interface multilingual with i18n and Strapi.",
          "Contributed to specifications, user stories and system design.",
        ],
      },
      {
        company: "Mindful Minds Management",
        location: "Munich",
        role: "Software Developer Intern",
        period: "September 2024 – December 2024",
        points: [
          "Restructured the site's layout and navigation to make it easier to use.",
          "Improved performance and fixed technical issues found through regular testing.",
          "Customised WordPress themes and plugins and extended existing features.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "What I work with",
    groups: [
      {
        name: "Core stack",
        primary: true,
        items: ["TypeScript", "JavaScript", "React", "Next.js", "Python", "FastAPI", "REST APIs", "HTML", "CSS", "Git"],
      },
      {
        name: "Also worked with",
        items: ["Java", "Spring Boot", ".NET", "Vue.js", "Node.js", "Express", "MongoDB", "MySQL", "WordPress", "Strapi"],
      },
      {
        name: "AI and NLP",
        items: ["Sentence-BERT embeddings", "Semantic similarity", "PDF processing with GROBID"],
      },
      {
        name: "Ways of working",
        items: ["Scrum", "Code reviews", "Testing", "Jira", "i18n", "JWT authentication"],
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Who you would be working with",
    bio: [
      "I am a software developer with a B.Sc. in Business Informatics from Otto von Guericke University Magdeburg. I have worked on a production SaaS product with React and TypeScript and built full-stack applications with Python and FastAPI.",
      "What I care about most is software that people understand without a manual. I am looking for a full-time developer position, and I take on freelance projects.",
    ],
    photoPlaceholder: "Photo coming soon",
    location: "Magdeburg, Germany · open to relocating",
    educationTitle: "Education",
    education: {
      degree: "B.Sc. Business Informatics",
      school: "Otto von Guericke University Magdeburg",
      detail: "Completed July 2026",
    },
    languagesTitle: "Languages",
    languages: [
      { name: "German", level: "C1" },
      { name: "English", level: "C1" },
      { name: "Arabic", level: "Native" },
    ],
    certificatesTitle: "Certificates",
    certificates: [
      { name: "Node.js, Express, MongoDB", issuer: "Udemy" },
      { name: "Introduction to Databases for Back-End Development", issuer: "Meta / Coursera, 2025" },
      { name: "Programming in Python", issuer: "Meta / Coursera, 2023" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a role or a project in mind?",
    lead: "Write me a few lines about it. I usually reply within a day or two.",
    emailLabel: "Send an email",
    linkedinLabel: "Message me on LinkedIn",
  },
  footer: { note: "Built with Next.js, TypeScript and Tailwind CSS." },
};

const de: Content = {
  meta: {
    title: "Moustafa Mohamed — Softwareentwickler",
    description:
      "Softwareentwickler in Magdeburg. React und TypeScript an einem produktiven SaaS-Produkt, Full-Stack-Anwendungen mit Python und FastAPI. Offen für eine Festanstellung und für Freelance-Projekte.",
  },
  nav: {
    projects: "Projekte",
    services: "Leistungen",
    experience: "Erfahrung",
    skills: "Skills",
    about: "Über mich",
    contact: "Kontakt",
  },
  hero: {
    eyebrow: "Softwareentwickler · Magdeburg",
    headline: "Ich entwickle Webanwendungen, die man auf den ersten Blick versteht.",
    lead: "React und TypeScript an einem produktiven SaaS-Produkt. Eine Abschlussarbeit, deren Anwendung im Nutzertest 80,87 Punkte auf der System Usability Scale erreicht hat. Offen für eine Festanstellung als Entwickler und für Freelance-Projekte.",
    primaryCta: "Projekte ansehen",
    secondaryCta: "Kontakt aufnehmen",
    stats: [
      { value: "80,87", label: "SUS-Score, Studie mit 16 Personen" },
      { value: "9 Monate", label: "an einem produktiven SaaS-Produkt" },
      { value: "DE · EN · AR", label: "C1, C1 und Muttersprache" },
    ],
  },
  projects: {
    eyebrow: "Projekte",
    title: "Arbeit zum Ansehen",
    featured: {
      tag: "Bachelorarbeit · 2026",
      name: "Paper Integrity Analyzer",
      summary:
        "Eine Webanwendung, die ein wissenschaftliches PDF auf Warnzeichen für gefälschte Paper prüft und das Ergebnis verständlich erklärt.",
      problemTitle: "Das Problem",
      problem:
        "Werkzeuge wie Turnitin, Copyleaks und GPTZero zeigen Scores und Markierungen. Warum ein Dokument auffällt und was als Nächstes zu tun ist, bleibt für Nutzer aber oft unklar.",
      builtTitle: "Was ich gebaut habe",
      built: [
        "Einen Ablauf in drei Schritten: Startseite, PDF-Upload per Drag-and-drop, Ergebnisseite.",
        "Eine Ergebnisseite in Ebenen: zuerst Entscheidung und Score, dann die Indikatoren, dann die Belege, dann empfohlene Schritte.",
        "Ein Analyse-Backend, das vier Integritätsindikatoren zu einem gewichteten Risiko-Score verbindet.",
      ],
      resultTitle: "Das Ergebnis",
      resultValue: "80,87",
      result:
        "Punkte auf der System Usability Scale in einer Studie mit 16 Teilnehmenden aus Informatik, Wirtschaft, Ingenieurwesen und Medizin. Über 80 gilt als hohe Gebrauchstauglichkeit.",
      note: "Die Anwendung unterstützt die menschliche Prüfung und ersetzt sie nicht. Im Mittelpunkt der Arbeit standen Bedienbarkeit und Erklärbarkeit, nicht die Erkennungsgenauigkeit.",
      indicatorsTitle: "So ist der Risiko-Score gewichtet",
      indicators: [
        {
          name: "Tortured Phrases",
          weight: 30,
          detail: "Abgleich mit einer bekannten Phrasenliste über einen Aho-Corasick-Matcher.",
        },
        {
          name: "Zitationsmanipulation",
          weight: 30,
          detail: "Autorenwiederholung, Zitationsdichte, zurückgezogene und irrelevante Quellen.",
        },
        {
          name: "Abstract-Ähnlichkeit",
          weight: 20,
          detail: "Sentence-BERT-Embeddings im Vergleich mit verwandten Papern aus OpenAlex.",
        },
        {
          name: "Metadaten",
          weight: 20,
          detail: "Autoren-E-Mails, ORCID und geografische Konzentration der Affiliationen.",
        },
      ],
      stack: ["React", "TypeScript", "Python", "FastAPI", "GROBID", "Sentence-BERT", "OpenAlex API"],
      resultFrame: {
        label: "Ergebnisseite — erst die Entscheidung, dann die Gründe",
        shots: [
          {
            src: `${shotBase}/score.png`,
            width: 876,
            height: 206,
            label: "Entscheidung und Score",
            alt: "Ergebnisbanner mit dem Text 'Final Decision: Likely Fake Paper' und einem Score von 63 %",
          },
          {
            src: `${shotBase}/key-indicators.png`,
            width: 1441,
            height: 563,
            label: "Indikatoren",
            alt: "Liste mit fünf Indikatoren, jeweils mit hoher, mittlerer oder geringer Auswirkung markiert",
          },
        ],
      },
      gallery: [
        {
          src: `${shotBase}/upload.png`,
          width: 1179,
          height: 659,
          label: "Upload",
          alt: "Upload-Seite mit Drag-and-drop-Bereich für ein PDF",
        },
        {
          src: `${shotBase}/highlighted-text.png`,
          width: 1444,
          height: 630,
          label: "Belege im Dokument",
          alt: "Dokumentansicht mit rot und blau markierten auffälligen Textstellen",
        },
        {
          src: `${shotBase}/related-papers.png`,
          width: 1417,
          height: 739,
          label: "Verwandte Paper",
          alt: "Liste verwandter Paper, jeweils mit prozentualer Übereinstimmung",
        },
        {
          src: `${shotBase}/recommended-actions.png`,
          width: 1444,
          height: 456,
          label: "Empfohlene Schritte",
          alt: "Liste empfohlener nächster Schritte mit Buttons zum Herunterladen des Ergebnisses und zur erneuten Prüfung",
        },
      ],
    },
    more: [
      {
        tag: "Teamprojekt an der Universität",
        name: "Artikelplattform",
        description:
          "Eine REST-API für eine Vue.js-Webanwendung und eine Flutter-App: Konten, Artikel und Kommentare, mit Passwort-Hashing und Paginierung. Entwickelt im Scrum-Team mit User Stories, Tests und Code-Reviews.",
        stack: [".NET", "Vue.js", "Flutter", "REST-API", "SQL"],
      },
      {
        tag: "Eigenes Projekt",
        name: "Diese Website",
        description:
          "Ein zweisprachiges, statisch generiertes Portfolio mit eigenen deutschen und englischen Routen, nach einem Plan umgesetzt und auf Vercel veröffentlicht.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
  },
  services: {
    eyebrow: "Leistungen",
    title: "Was ich für Sie bauen kann",
    items: [
      {
        name: "Webanwendungen",
        description:
          "Interaktive Anwendungen vom Interface bis zur API: vorne React und Next.js, dahinter REST-APIs, Datenbanken und Authentifizierung.",
        tags: ["React", "Next.js", "TypeScript", "FastAPI", "Node.js"],
      },
      {
        name: "Websites",
        description:
          "Neue Unternehmensseiten und Redesigns, oder die Verbesserung Ihrer bestehenden Seite: Ladezeit, Fehler, klarere Navigation und Mehrsprachigkeit.",
        tags: ["Individueller Code", "WordPress", "i18n"],
      },
      {
        name: "KI-Integration",
        description:
          "KI-Funktionen in Ihrer bestehenden Software und Ihren Abläufen, zum Beispiel Dokumentenanalyse, semantische Suche und Assistenten.",
        tags: ["Dokumentenanalyse", "Semantische Suche", "Assistenten"],
      },
    ],
  },
  experience: {
    eyebrow: "Erfahrung",
    title: "Wo ich gearbeitet habe",
    items: [
      {
        company: "aiio GmbH",
        location: "Magdeburg",
        role: "Werkstudent, KI-basierte Softwareentwicklung",
        period: "Juni 2025 – Februar 2026",
        context: "aiio entwickelt ein SaaS-Produkt für KI-gestütztes Prozessmanagement auf Microsoft 365.",
        points: [
          "Funktionen im React- und TypeScript-Frontend des Produkts entwickelt und erweitert, von der User Story bis zum Code-Review.",
          "Das Interface an REST-APIs angebunden, um Backend-Daten zu laden, zu verarbeiten und darzustellen.",
          "Die Oberfläche mit i18n und Strapi mehrsprachig gemacht.",
          "An Spezifikationen, User Stories und Systemdesign mitgearbeitet.",
        ],
      },
      {
        company: "Mindful Minds Management",
        location: "München",
        role: "Praktikant Softwareentwicklung",
        period: "September 2024 – Dezember 2024",
        points: [
          "Layout und Navigation der Website neu strukturiert, damit sie einfacher zu bedienen ist.",
          "Die Performance verbessert und technische Fehler behoben, die bei regelmäßigen Tests auffielen.",
          "WordPress-Themes und -Plugins angepasst und bestehende Funktionen erweitert.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Womit ich arbeite",
    groups: [
      {
        name: "Kern-Stack",
        primary: true,
        items: ["TypeScript", "JavaScript", "React", "Next.js", "Python", "FastAPI", "REST-APIs", "HTML", "CSS", "Git"],
      },
      {
        name: "Außerdem eingesetzt",
        items: ["Java", "Spring Boot", ".NET", "Vue.js", "Node.js", "Express", "MongoDB", "MySQL", "WordPress", "Strapi"],
      },
      {
        name: "KI und NLP",
        items: ["Sentence-BERT-Embeddings", "Semantische Ähnlichkeit", "PDF-Verarbeitung mit GROBID"],
      },
      {
        name: "Arbeitsweise",
        items: ["Scrum", "Code-Reviews", "Testing", "Jira", "i18n", "JWT-Authentifizierung"],
      },
    ],
  },
  about: {
    eyebrow: "Über mich",
    title: "Mit wem Sie arbeiten würden",
    bio: [
      "Ich bin Softwareentwickler mit einem B.Sc. in Wirtschaftsinformatik der Otto-von-Guericke-Universität Magdeburg. Ich habe mit React und TypeScript an einem produktiven SaaS-Produkt gearbeitet und Full-Stack-Anwendungen mit Python und FastAPI entwickelt.",
      "Am wichtigsten ist mir Software, die man ohne Handbuch versteht. Ich suche eine Festanstellung als Entwickler und übernehme Freelance-Projekte.",
    ],
    photoPlaceholder: "Foto folgt",
    location: "Magdeburg · umzugsbereit",
    educationTitle: "Ausbildung",
    education: {
      degree: "B.Sc. Wirtschaftsinformatik",
      school: "Otto-von-Guericke-Universität Magdeburg",
      detail: "Abschluss Juli 2026",
    },
    languagesTitle: "Sprachen",
    languages: [
      { name: "Deutsch", level: "C1" },
      { name: "Englisch", level: "C1" },
      { name: "Arabisch", level: "Muttersprache" },
    ],
    certificatesTitle: "Zertifikate",
    certificates: [
      { name: "Node.js, Express, MongoDB", issuer: "Udemy" },
      { name: "Introduction to Databases for Back-End Development", issuer: "Meta / Coursera, 2025" },
      { name: "Programming in Python", issuer: "Meta / Coursera, 2023" },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Sie haben eine Stelle oder ein Projekt?",
    lead: "Schreiben Sie mir ein paar Zeilen dazu. Ich antworte in der Regel innerhalb von ein bis zwei Tagen.",
    emailLabel: "E-Mail schreiben",
    linkedinLabel: "Nachricht auf LinkedIn",
  },
  footer: { note: "Gebaut mit Next.js, TypeScript und Tailwind CSS." },
};

export const content: Record<Locale, Content> = { en, de };
export type { Content };
