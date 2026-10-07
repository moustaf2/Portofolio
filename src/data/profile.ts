// All site content lives here: shared facts first, then the texts per language.

export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const profile = {
  name: "Moustafa Mohamed Moustafa",
  shortName: "Moustafa Mohamed",
  initials: "MM",
  email: "moustafa.work501@gmail.com",
  linkedin: "https://www.linkedin.com/in/moustafa-mohamed-51bb66232/",
  photo: "", // put the photo in /public and set this to e.g. "/photo.jpg"
};

type SkillGroupId =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "ai"
  | "tools";

export const skills: { id: SkillGroupId; items: string[] }[] = [
  {
    id: "languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "HTML", "CSS"],
  },
  { id: "frontend", items: ["React", "Next.js", "Vue.js"] },
  {
    id: "backend",
    items: ["Node.js", "Express", "FastAPI", "Spring Boot", ".NET", "REST APIs"],
  },
  { id: "databases", items: ["MongoDB", "MySQL", "SQL"] },
  {
    id: "ai",
    items: [
      "Sentence-BERT embeddings",
      "Semantic similarity",
      "PDF processing with GROBID",
    ],
  },
  {
    id: "tools",
    items: [
      "Git",
      "Jira",
      "Scrum",
      "Testing",
      "Code reviews",
      "JWT authentication",
      "i18n",
      "WordPress",
      "Strapi",
    ],
  },
];

export type ScreenshotId =
  | "upload"
  | "score"
  | "indicators"
  | "highlighted-text"
  | "top-sentences"
  | "related-papers"
  | "recommendations";

export const screenshots: {
  id: ScreenshotId;
  src: string;
  width: number;
  height: number;
}[] = [
  { id: "upload", src: "/screenshots/upload.png", width: 1179, height: 659 },
  { id: "score", src: "/screenshots/score.png", width: 876, height: 206 },
  {
    id: "indicators",
    src: "/screenshots/indicators.png",
    width: 1441,
    height: 563,
  },
  {
    id: "highlighted-text",
    src: "/screenshots/highlighted-text.png",
    width: 1444,
    height: 630,
  },
  {
    id: "top-sentences",
    src: "/screenshots/top-sentences.png",
    width: 1433,
    height: 602,
  },
  {
    id: "related-papers",
    src: "/screenshots/related-papers.png",
    width: 1417,
    height: 739,
  },
  {
    id: "recommendations",
    src: "/screenshots/recommendations.png",
    width: 1444,
    height: 456,
  },
];

const featuredStack = [
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "GROBID",
  "Sentence-BERT",
  "OpenAlex API",
];

const en = {
  role: "Software Developer",
  location: "Magdeburg, Germany",
  relocation: "open to relocating",
  pitch:
    "I build web applications from the interface to the API — clear to use, reliable underneath.",
  nav: {
    services: "Services",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    about: "About",
    contact: "Contact",
  },
  hero: {
    viewProjects: "View projects",
    getInTouch: "Get in touch",
  },
  services: {
    title: "Services",
    heading: "What I can do for you",
    items: [
      {
        title: "Business websites",
        text: "New sites or redesigns, with WordPress or custom code.",
      },
      {
        title: "Web applications",
        text: "Interactive apps with React, Next.js and TypeScript.",
      },
      {
        title: "Backend and APIs",
        text: "REST APIs, databases and authentication with Python/FastAPI or Node.js.",
      },
      {
        title: "Improving existing sites",
        text: "Speed, bug fixes, cleaner navigation, multilingual support (i18n).",
      },
      {
        title: "AI integration",
        text: "Adding AI features such as document analysis, semantic search and assistants to your software and workflows.",
      },
    ],
  },
  projects: {
    title: "Projects",
    heading: "Selected work",
    featured: {
      label: "Featured case study · Bachelor thesis",
      title: "Paper Integrity Analyzer",
      oneLine:
        "A web app that checks a scientific PDF for warning signs of fake papers and explains the result in plain language.",
      thesis:
        "Bachelor thesis “Frontend Development for the Detection of Fake Scientific Papers”, Otto von Guericke University Magdeburg, 2026.",
      stack: featuredStack,
      problemTitle: "Problem",
      problem:
        "Tools like Turnitin, Copyleaks and GPTZero show scores and highlights, but users often cannot tell why a document was flagged or what to do next.",
      builtTitle: "What I built",
      built: [
        "Three-step flow: home page, PDF upload with drag and drop, result page.",
        "A result page in layers: final decision and score first, then the indicators, then the evidence, then recommended actions.",
        "Four integrity indicators combined into one weighted risk score.",
      ],
      indicatorsTitle: "Indicators behind the score",
      indicators: [
        {
          name: "Tortured phrases",
          weight: "30%",
          text: "Matched against a known phrase list with an Aho-Corasick matcher.",
        },
        {
          name: "Citation manipulation",
          weight: "30%",
          text: "Author repetition, citation density, retracted references, irrelevant citations.",
        },
        {
          name: "Abstract similarity",
          weight: "20%",
          text: "Sentence-BERT embeddings compared with related papers from OpenAlex.",
        },
        {
          name: "Metadata inspection",
          weight: "20%",
          text: "Author emails, ORCID and geographic concentration of affiliations.",
        },
      ],
      resultTitle: "Result",
      resultValue: "80.87",
      resultUnit: "SUS score",
      result:
        "Usability study with 16 participants from computer science, business, engineering and medicine. A score above 80 counts as high usability.",
      note: "The thesis focused on usability and explanation, not on detection accuracy. The indicators are supplementary: the tool supports human review, it does not replace it.",
      screenshotsTitle: "Screens",
      captions: {
        upload: "Upload page with drag and drop",
        score: "Final decision and score first",
        indicators: "Key indicators, ordered by impact",
        "highlighted-text": "Document view with highlighted passages",
        "top-sentences": "Sentences that drive the result",
        "related-papers": "Related papers and their similarity",
        recommendations: "Recommended next actions",
      } satisfies Record<ScreenshotId, string>,
    },
    others: [
      {
        label: "University team project",
        title: "Article platform",
        text: "Users register and log in, create and delete articles, and write and delete comments. Web and mobile front ends share one API.",
        points: [
          "Password hashing, pagination and persistent storage.",
          "Scrum team with user stories, tests and code reviews.",
        ],
        stack: [".NET", "Vue.js", "Flutter", "REST APIs", "SQL"],
      },
      {
        label: "Coursework",
        title: "Algorithms and data structures in Java",
        text: "Lists, trees, heaps, hashing and graphs implemented in Java, with a focus on runtime and object-oriented design.",
        points: [] as string[],
        stack: ["Java"],
      },
    ],
  },
  experience: {
    title: "Experience",
    heading: "Where I have worked",
    jobs: [
      {
        role: "Working Student, AI-based Software Development",
        company: "aiio GmbH",
        place: "Magdeburg",
        period: "June 2025 – February 2026",
        intro:
          "aiio builds a SaaS product for AI-supported process management on Microsoft 365.",
        points: [
          "Turned user stories and requirements into new and existing features with React and TypeScript.",
          "Extended React components and adapted the interface to new functional requirements.",
          "Integrated REST APIs to fetch, process and display backend data.",
          "Built multilingual interfaces with i18n and Strapi.",
          "Took part in code reviews and testing.",
          "Contributed to specifications, user stories and system design.",
        ],
      },
      {
        role: "Software Developer Intern",
        company: "Mindful Minds Management",
        place: "Munich",
        period: "September 2024 – December 2024",
        intro: "",
        points: [
          "Improved website performance and fixed technical issues through regular testing.",
          "Developed and adapted the front end with HTML and CSS.",
          "Restructured site layout and navigation to make it easier to use.",
          "Customised WordPress themes and plugins and extended existing features.",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    heading: "What I work with",
    groups: {
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      ai: "AI / NLP",
      tools: "Tools and methods",
    } satisfies Record<SkillGroupId, string>,
  },
  about: {
    title: "About",
    heading: "About me",
    bio: "Software developer with a B.Sc. in Business Informatics from Otto von Guericke University Magdeburg. I have worked on a production SaaS product with React and TypeScript, built full-stack applications with Python and FastAPI, and care most about software that people understand at first glance. I am looking for a full-time developer position and I take on freelance projects.",
    photoPlaceholder: "Photo coming soon",
    educationTitle: "Education",
    education: [
      {
        degree: "B.Sc. Business Informatics (Wirtschaftsinformatik)",
        school: "Otto von Guericke University Magdeburg",
        period: "Completed July 2026",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "German", level: "C1" },
      { name: "English", level: "C1" },
      { name: "Arabic", level: "native" },
    ],
    certificatesTitle: "Certificates",
    certificates: [
      { name: "Node.js, Express, MongoDB", issuer: "Udemy" },
      {
        name: "Introduction to Databases for Back-End Development",
        issuer: "Meta / Coursera, March 2025",
      },
      {
        name: "Programming in Python",
        issuer: "Meta / Coursera, October 2023",
      },
    ],
  },
  contact: {
    title: "Contact",
    heading: "Let’s talk about your project or your open position",
    text: "Whether you are hiring a developer or need a website, an app or an API built: write me an email or a message on LinkedIn.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    linkedinCta: "Message me on LinkedIn",
  },
  footer: {
    impressum: "Legal notice",
    builtWith: "Built with Next.js.",
  },
  impressum: {
    title: "Legal notice",
    responsible: "Responsible for the content of this site",
    contactTitle: "Contact",
    back: "Back to the site",
  },
};

export type Content = typeof en;

const de: Content = {
  role: "Softwareentwickler",
  location: "Magdeburg, Deutschland",
  relocation: "offen für einen Umzug",
  pitch:
    "Ich entwickle Webanwendungen vom Interface bis zur API — klar in der Bedienung, zuverlässig im Hintergrund.",
  nav: {
    services: "Leistungen",
    projects: "Projekte",
    experience: "Erfahrung",
    skills: "Kenntnisse",
    about: "Über mich",
    contact: "Kontakt",
  },
  hero: {
    viewProjects: "Projekte ansehen",
    getInTouch: "Kontakt aufnehmen",
  },
  services: {
    title: "Leistungen",
    heading: "Was ich für Sie tun kann",
    items: [
      {
        title: "Unternehmenswebsites",
        text: "Neue Websites oder Redesigns, mit WordPress oder individuell programmiert.",
      },
      {
        title: "Webanwendungen",
        text: "Interaktive Anwendungen mit React, Next.js und TypeScript.",
      },
      {
        title: "Backend und APIs",
        text: "REST-APIs, Datenbanken und Authentifizierung mit Python/FastAPI oder Node.js.",
      },
      {
        title: "Bestehende Websites verbessern",
        text: "Ladezeit, Fehlerbehebung, klarere Navigation, Mehrsprachigkeit (i18n).",
      },
      {
        title: "KI-Integration",
        text: "KI-Funktionen wie Dokumentenanalyse, semantische Suche und Assistenten für Ihre Software und Ihre Abläufe.",
      },
    ],
  },
  projects: {
    title: "Projekte",
    heading: "Ausgewählte Arbeiten",
    featured: {
      label: "Fallstudie · Bachelorarbeit",
      title: "Paper Integrity Analyzer",
      oneLine:
        "Eine Webanwendung, die ein wissenschaftliches PDF auf Warnzeichen gefälschter Paper prüft und das Ergebnis verständlich erklärt.",
      thesis:
        "Bachelorarbeit „Frontend Development for the Detection of Fake Scientific Papers“, Otto-von-Guericke-Universität Magdeburg, 2026.",
      stack: featuredStack,
      problemTitle: "Problem",
      problem:
        "Tools wie Turnitin, Copyleaks und GPTZero zeigen Scores und Markierungen, aber oft bleibt unklar, warum ein Dokument auffällig ist und was als Nächstes zu tun ist.",
      builtTitle: "Was ich gebaut habe",
      built: [
        "Ablauf in drei Schritten: Startseite, PDF-Upload per Drag-and-drop, Ergebnisseite.",
        "Eine Ergebnisseite in Ebenen: zuerst Entscheidung und Score, dann die Indikatoren, dann die Belege, dann empfohlene Schritte.",
        "Vier Integritätsindikatoren, zusammengeführt in einem gewichteten Risiko-Score.",
      ],
      indicatorsTitle: "Indikatoren hinter dem Score",
      indicators: [
        {
          name: "Tortured Phrases",
          weight: "30%",
          text: "Abgleich mit einer bekannten Phrasenliste über einen Aho-Corasick-Matcher.",
        },
        {
          name: "Zitationsmanipulation",
          weight: "30%",
          text: "Autorenwiederholung, Zitationsdichte, zurückgezogene Quellen, irrelevante Zitate.",
        },
        {
          name: "Abstract-Ähnlichkeit",
          weight: "20%",
          text: "Sentence-BERT-Embeddings im Vergleich mit verwandten Papern aus OpenAlex.",
        },
        {
          name: "Metadatenprüfung",
          weight: "20%",
          text: "E-Mail-Adressen der Autoren, ORCID und geografische Konzentration der Affiliationen.",
        },
      ],
      resultTitle: "Ergebnis",
      resultValue: "80,87",
      resultUnit: "SUS-Score",
      result:
        "Usability-Studie mit 16 Teilnehmenden aus Informatik, Wirtschaft, Ingenieurwesen und Medizin. Ein Wert über 80 gilt als hohe Gebrauchstauglichkeit.",
      note: "Im Mittelpunkt der Arbeit standen Bedienbarkeit und Erklärbarkeit, nicht die Erkennungsgenauigkeit. Die Indikatoren sind ergänzend: Das Tool unterstützt die menschliche Prüfung, es ersetzt sie nicht.",
      screenshotsTitle: "Ansichten",
      captions: {
        upload: "Upload-Seite mit Drag-and-drop",
        score: "Entscheidung und Score zuerst",
        indicators: "Indikatoren, nach Gewicht sortiert",
        "highlighted-text": "Dokumentansicht mit markierten Passagen",
        "top-sentences": "Sätze, die das Ergebnis bestimmen",
        "related-papers": "Verwandte Paper und ihre Ähnlichkeit",
        recommendations: "Empfohlene nächste Schritte",
      },
    },
    others: [
      {
        label: "Team-Projekt an der Universität",
        title: "Artikel-Plattform",
        text: "Nutzer registrieren sich und melden sich an, erstellen und löschen Artikel und schreiben und löschen Kommentare. Web- und Mobile-Frontend nutzen dieselbe API.",
        points: [
          "Passwort-Hashing, Pagination und persistente Speicherung.",
          "Scrum-Team mit User Stories, Tests und Code-Reviews.",
        ],
        stack: [".NET", "Vue.js", "Flutter", "REST APIs", "SQL"],
      },
      {
        label: "Studienprojekt",
        title: "Algorithmen und Datenstrukturen in Java",
        text: "Listen, Bäume, Heaps, Hashing und Graphen in Java implementiert, mit Fokus auf Laufzeit und objektorientiertem Design.",
        points: [],
        stack: ["Java"],
      },
    ],
  },
  experience: {
    title: "Erfahrung",
    heading: "Wo ich gearbeitet habe",
    jobs: [
      {
        role: "Werkstudent, KI-basierte Softwareentwicklung",
        company: "aiio GmbH",
        place: "Magdeburg",
        period: "Juni 2025 – Februar 2026",
        intro:
          "aiio entwickelt ein SaaS-Produkt für KI-gestütztes Prozessmanagement auf Microsoft 365.",
        points: [
          "User Stories und Anforderungen in neue und bestehende Features mit React und TypeScript umgesetzt.",
          "React-Komponenten erweitert und die Oberfläche an neue fachliche Anforderungen angepasst.",
          "REST-APIs angebunden, um Backend-Daten abzurufen, zu verarbeiten und darzustellen.",
          "Mehrsprachige Oberflächen mit i18n und Strapi umgesetzt.",
          "An Code-Reviews und Tests mitgewirkt.",
          "An Spezifikationen, User Stories und Systemdesign mitgearbeitet.",
        ],
      },
      {
        role: "Praktikant Softwareentwicklung",
        company: "Mindful Minds Management",
        place: "München",
        period: "September 2024 – Dezember 2024",
        intro: "",
        points: [
          "Website-Performance verbessert und technische Fehler durch regelmäßige Tests behoben.",
          "Frontend mit HTML und CSS entwickelt und angepasst.",
          "Seitenlayout und Navigation neu strukturiert, damit die Website leichter zu bedienen ist.",
          "WordPress-Themes und -Plugins angepasst und bestehende Funktionen erweitert.",
        ],
      },
    ],
  },
  skills: {
    title: "Kenntnisse",
    heading: "Womit ich arbeite",
    groups: {
      languages: "Sprachen",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Datenbanken",
      ai: "KI / NLP",
      tools: "Tools und Methoden",
    },
  },
  about: {
    title: "Über mich",
    heading: "Über mich",
    bio: "Softwareentwickler mit einem B.Sc. in Wirtschaftsinformatik der Otto-von-Guericke-Universität Magdeburg. Ich habe an einem produktiven SaaS-Produkt mit React und TypeScript gearbeitet, Full-Stack-Anwendungen mit Python und FastAPI entwickelt und lege besonderen Wert auf Software, die man auf den ersten Blick versteht. Ich suche eine Vollzeitstelle als Entwickler und übernehme Freelance-Projekte.",
    photoPlaceholder: "Foto folgt",
    educationTitle: "Ausbildung",
    education: [
      {
        degree: "B.Sc. Wirtschaftsinformatik",
        school: "Otto-von-Guericke-Universität Magdeburg",
        period: "Abschluss Juli 2026",
      },
    ],
    languagesTitle: "Sprachen",
    languages: [
      { name: "Deutsch", level: "C1" },
      { name: "Englisch", level: "C1" },
      { name: "Arabisch", level: "Muttersprache" },
    ],
    certificatesTitle: "Zertifikate",
    certificates: [
      { name: "Node.js, Express, MongoDB", issuer: "Udemy" },
      {
        name: "Introduction to Databases for Back-End Development",
        issuer: "Meta / Coursera, März 2025",
      },
      {
        name: "Programming in Python",
        issuer: "Meta / Coursera, Oktober 2023",
      },
    ],
  },
  contact: {
    title: "Kontakt",
    heading: "Sprechen wir über Ihr Projekt oder Ihre offene Stelle",
    text: "Ob Sie einen Entwickler einstellen möchten oder eine Website, eine App oder eine API brauchen: Schreiben Sie mir eine E-Mail oder eine Nachricht auf LinkedIn.",
    emailLabel: "E-Mail",
    linkedinLabel: "LinkedIn",
    linkedinCta: "Nachricht auf LinkedIn",
  },
  footer: {
    impressum: "Impressum",
    builtWith: "Erstellt mit Next.js.",
  },
  impressum: {
    title: "Impressum",
    responsible: "Verantwortlich für den Inhalt dieser Website",
    contactTitle: "Kontakt",
    back: "Zurück zur Website",
  },
};

export const content: Record<Locale, Content> = { en, de };
