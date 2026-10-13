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
  // German CV for both languages until an English one exists
  cv: "/cv/Moustafa-Mohamed-Lebenslauf.pdf",
  photo: "/moustafa.png",
  // TODO: link to the 90-second demo video; while empty, the button shows a placeholder
  demoUrl: "",
};

export type Screenshot = {
  src: string;
  width: number;
  height: number;
  label: string;
  alt: string;
};

export type IconName =
  | "code"
  | "layout"
  | "server"
  | "database"
  | "brain"
  | "wrench"
  | "app"
  | "sparkles"
  | "globe"
  | "gauge"
  | "football"
  | "plane"
  | "book"
  | "chess";

type SectionHead = { label: string; title: string };

type Content = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    services: string;
    hobbies: string;
    contact: string;
    sections: string;
  };
  hero: {
    badge: string;
    title: string;
    lead: string;
    primaryCta: string;
    cvCta: string;
    cvNote: string;
    emailLabel: string;
    linkedinLabel: string;
    photoAlt: string;
  };
  about: SectionHead & {
    bio: string[];
    languagesTitle: string;
    languages: { name: string; level: string; steps: number }[];
    certificatesTitle: string;
    certificates: { name: string; issuer: string }[];
  };
  experience: SectionHead & {
    techLabel: string;
    educationLabel: string;
    items: {
      kind: "work" | "education";
      title: string;
      org: string;
      location: string;
      period: string;
      context?: string;
      points: string[];
      tech: string[];
    }[];
  };
  projects: SectionHead & {
    featured: {
      meta: string;
      name: string;
      summary: string;
      roleLabel: string;
      role: string;
      shot: Screenshot;
      stack: string[];
      resultValue: string;
      resultLabel: string;
      demoCta: string;
      demoPlaceholder: string;
      walkthroughCta: string;
      walkthroughSubject: string;
      sourceNote: string;
      caseStudy: {
        toggle: string;
        steps: { title: string; text?: string; points?: string[] }[];
        indicatorsTitle: string;
        indicators: { name: string; weight: number; detail: string }[];
        techTitle: string;
        tech: string[];
        screensTitle: string;
        gallery: Screenshot[];
        note: string;
      };
    };
    moreTitle: string;
    partLabel: string;
    toolsLabel: string;
    more: {
      name: string;
      type: string;
      description: string;
      part: string[];
      tools: string[];
      extra: string[];
    }[];
  };
  skills: SectionHead & {
    groups: { name: string; icon: IconName; strong: number; items: string[] }[];
  };
  services: SectionHead & {
    getsLabel: string;
    items: {
      name: string;
      icon: IconName;
      wide?: boolean;
      description: string;
      gets: string[];
      tags: string[];
    }[];
    closing: { text: string; button: string };
  };
  hobbies: SectionHead & {
    motto: string;
    sub: string;
    items: { name: string; icon: IconName }[];
  };
  contact: SectionHead & {
    lead: string;
    emailTitle: string;
    emailAction: string;
    copy: string;
    copied: string;
    linkedinTitle: string;
    linkedinAction: string;
    cvTitle: string;
    cvAction: string;
  };
  footer: { rights: string; impressum: string };
  impressum: {
    title: string;
    back: string;
    lawLabel: string;
    addressLabel: string;
    addressPending: string;
    contactLabel: string;
    responsibleLabel: string;
  };
};

const shotBase = "/projects/paper-integrity";

const shots = {
  score: { src: `${shotBase}/score.png`, width: 876, height: 206 },
  indicators: { src: `${shotBase}/key-indicators.png`, width: 1441, height: 563 },
  upload: { src: `${shotBase}/upload.png`, width: 1179, height: 659 },
  evidence: { src: `${shotBase}/highlighted-text.png`, width: 1444, height: 630 },
  related: { src: `${shotBase}/related-papers.png`, width: 1417, height: 739 },
  actions: { src: `${shotBase}/recommended-actions.png`, width: 1444, height: 456 },
};

const certificates = [
  { name: "Node.js, Express, MongoDB", issuer: "Udemy" },
  { name: "Introduction to Databases for Back-End Development", issuer: "Meta / Coursera, 2025" },
  { name: "Programming in Python", issuer: "Meta / Coursera, 2023" },
];

const en: Content = {
  meta: {
    title: "Moustafa Mohamed — Software Developer",
    description:
      "Software engineer in Magdeburg. Web applications from end to end with React, TypeScript, Python and FastAPI. Open to full-time roles and freelance projects.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    services: "Services",
    hobbies: "Hobbies",
    contact: "Contact",
    sections: "Sections",
  },
  hero: {
    badge: "Open to full-time roles and freelance projects",
    title: "Software Developer",
    lead: "I started by writing every line by hand. Now I work with AI to build faster, then review, test, and optimize the result so it’s reliable and fast.",
    primaryCta: "View projects",
    cvCta: "Download CV",
    cvNote: "PDF, German",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    photoAlt: "Portrait of Moustafa Mohamed",
  },
  about: {
    label: "About",
    title: "Who am I",
    bio: [
      "I'm a software developer based in Magdeburg, Germany. I build web applications from end to end: the interface with React and TypeScript, and the logic behind it with Python and FastAPI or Node.js. I use AI models every day to make my work faster and my life easier.",
      "I studied Business Informatics (B.Sc.) at Otto von Guericke University Magdeburg. That mix of business and computer science shapes how I work: I want to understand what a company needs before I write the first line of code. I'm just as comfortable joining an existing codebase and adding new features to it.",
      "As a working student at aiio, I worked on a production SaaS product for AI-supported process management. I turned user stories into features, connected the interface to REST APIs, built multilingual screens and took part in code reviews. Before that, during an internship in Munich, I improved the structure, speed and design of WordPress websites.",
      "For my bachelor thesis I designed and built the Paper Integrity Analyzer, a web app that checks scientific papers for signs of fraud and explains the result in plain language. In a study with 16 test users it reached a usability score of 80.87 out of 100. That project showed me what I enjoy most: making complicated things easy to understand.",
      "I speak German, English and Arabic, and I'm open to relocating. I'm looking for a full-time position as a software engineer, and I also take on freelance projects.",
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "German", level: "C1", steps: 4 },
      { name: "English", level: "C1", steps: 4 },
      { name: "Arabic", level: "Native", steps: 5 },
    ],
    certificatesTitle: "Certificates",
    certificates,
  },
  experience: {
    label: "Experience",
    title: "Where I have worked",
    techLabel: "Tech",
    educationLabel: "Education",
    items: [
      {
        kind: "work",
        title: "Working Student, AI-based Software Development",
        org: "aiio GmbH",
        location: "Magdeburg",
        period: "June 2025 – February 2026",
        context: "SaaS product for AI-supported process management on Microsoft 365.",
        points: [
          "Turned user stories and requirements into features with React and TypeScript, extending existing components.",
          "Integrated REST APIs to fetch backend data and display it across components.",
          "Took part in code reviews, testing and bug analysis.",
          "Built multilingual interfaces with i18n and Strapi.",
        ],
        tech: ["React", "TypeScript", "REST APIs", "i18n", "Strapi"],
      },
      {
        kind: "work",
        title: "Software Developer Intern",
        org: "Mindful Minds Management",
        location: "Munich",
        period: "September 2024 – December 2024",
        points: [
          "Improved website performance and fixed technical issues through regular testing.",
          "Developed and adapted the front end with HTML and CSS.",
          "Restructured site layout and navigation to make it easier to use.",
          "Customised WordPress themes and plugins and extended existing features.",
        ],
        tech: ["HTML", "CSS", "WordPress"],
      },
      {
        kind: "education",
        title: "B.Sc. Business Informatics",
        org: "Otto von Guericke University Magdeburg",
        location: "Magdeburg",
        period: "Completed July 2026",
        points: [],
        tech: [],
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Work you can look at",
    featured: {
      meta: "Bachelor thesis · Solo project · 2026",
      name: "Paper Integrity Analyzer",
      summary:
        "A web app that checks a scientific PDF for warning signs of fake papers and explains the result in plain language.",
      roleLabel: "Role",
      role: "Design, frontend, backend",
      shot: {
        ...shots.score,
        label: "Result page",
        alt: "Result banner reading 'Final Decision: Likely Fake Paper' with a 63% fake score",
      },
      stack: ["React", "TypeScript", "Python", "FastAPI"],
      resultValue: "80.87",
      resultLabel: "SUS usability score (16 participants)",
      demoCta: "Watch 90-sec demo",
      demoPlaceholder: "[PLACEHOLDER: video link]",
      walkthroughCta: "Request a walkthrough",
      walkthroughSubject: "Walkthrough: Paper Integrity Analyzer",
      sourceNote:
        "Source code is university property and not public. Happy to walk through the architecture.",
      caseStudy: {
        toggle: "Read the case study",
        steps: [
          {
            title: "Problem",
            text: "Tools like Turnitin, Copyleaks and GPTZero show scores and highlights, but users often cannot tell why a document was flagged or what to do next.",
          },
          {
            title: "Solution",
            points: [
              "A three-step flow: home page, drag-and-drop PDF upload, result page.",
              "A result page in layers: the decision and score first, then the indicators, the evidence and recommended actions.",
              "An analysis backend that combines four integrity indicators into one weighted risk score.",
            ],
          },
          {
            title: "Result",
            text: "SUS 80.87 in a study with 16 participants from computer science, business, engineering and medicine. Above 80 counts as high usability.",
          },
        ],
        indicatorsTitle: "Risk score weighting",
        indicators: [
          {
            name: "Tortured phrases",
            weight: 30,
            detail: "Aho-Corasick matcher against a known phrase list.",
          },
          {
            name: "Citation manipulation",
            weight: 30,
            detail: "Author repetition, citation density, retracted and irrelevant references.",
          },
          {
            name: "Abstract similarity",
            weight: 20,
            detail: "Sentence Transformers embeddings compared with related papers from OpenAlex.",
          },
          {
            name: "Metadata",
            weight: 20,
            detail: "Author emails, ORCID, geographic concentration.",
          },
        ],
        techTitle: "Technology",
        tech: ["React", "TypeScript", "Python", "FastAPI", "GROBID", "Aho-Corasick", "Sentence Transformers", "TF-IDF", "OpenAlex API"],
        screensTitle: "More screens",
        gallery: [
          {
            ...shots.upload,
            label: "Upload",
            alt: "Upload page with a drag-and-drop area for a PDF",
          },
          {
            ...shots.evidence,
            label: "Evidence",
            alt: "Document view with suspicious passages highlighted in red and blue",
          },
          {
            ...shots.related,
            label: "Related papers",
            alt: "List of related papers, each with a match percentage",
          },
          {
            ...shots.actions,
            label: "Actions",
            alt: "List of recommended next steps with buttons to download the result or check again",
          },
        ],
        note: "Built to support human review, not to replace it. The thesis focused on usability and explanation, not on detection accuracy.",
      },
    },
    moreTitle: "Other projects",
    partLabel: "My part",
    toolsLabel: "Tools",
    more: [
      {
        name: "Article platform",
        type: "University team project (Scrum)",
        description: "A platform where users register, write and delete articles and comments.",
        part: [
          "Secure password-change process in the .NET backend",
          "Connected it to the interface through REST APIs",
          "Testing and code reviews",
        ],
        tools: [".NET", "Vue.js", "Flutter", "SQL"],
        extra: ["Team: [PLACEHOLDER: team size] students."],
      },
      {
        name: "Algorithms in Java",
        type: "University coursework",
        description: "Own implementations of lists, trees, heaps, hashing and graphs.",
        part: ["Implementation with a focus on runtime and object-oriented design"],
        tools: ["Java"],
        extra: [
          "Shows strong fundamentals behind the web work.",
          "[PLACEHOLDER: one concrete detail, e.g. hardest structure or a runtime comparison]",
        ],
      },
    ],
  },
  skills: {
    label: "Skills",
    title: "What I work with",
    groups: [
      {
        name: "Languages",
        icon: "code",
        strong: 3,
        items: ["TypeScript", "JavaScript", "Python", "Java", "HTML", "CSS"],
      },
      { name: "Frontend", icon: "layout", strong: 2, items: ["React", "Next.js", "Vue.js", "Flutter"] },
      {
        name: "Backend",
        icon: "server",
        strong: 2,
        items: ["FastAPI", "Node.js", "Express", ".NET", "Spring Boot", "REST APIs"],
      },
      { name: "Databases", icon: "database", strong: 1, items: ["MongoDB", "MySQL", "SQL"] },
      {
        name: "AI and data",
        icon: "brain",
        strong: 2,
        items: ["Sentence Transformers", "TF-IDF", "Aho-Corasick", "NLP", "OpenAlex"],
      },
      {
        name: "Tools and methods",
        icon: "wrench",
        strong: 3,
        items: ["Git", "Jira", "Scrum", "Testing", "Code reviews", "JWT authentication", "i18n"],
      },
    ],
  },
  services: {
    label: "Services",
    title: "What I can build for you",
    getsLabel: "You get",
    items: [
      {
        name: "Web applications",
        icon: "app",
        wide: true,
        description: "Interactive apps built with React, Next.js and TypeScript.",
        gets: [
          "An interface that is clear at first glance",
          "Fast loading on phone and desktop",
          "Clean code your team can keep building on",
        ],
        tags: ["React", "Next.js", "TypeScript"],
      },
      {
        name: "AI integration",
        icon: "sparkles",
        wide: true,
        description:
          "AI features such as document analysis, semantic search and assistants, added to your software and workflows.",
        gets: [
          "A feature that fits your real process",
          "Results explained in plain language",
          "An honest view of what AI can and cannot do",
        ],
        tags: ["Document analysis", "Semantic search", "Assistants"],
      },
      {
        name: "Business websites",
        icon: "globe",
        description: "New sites or redesigns, with WordPress or custom code.",
        gets: [
          "A modern, responsive design",
          "Content you can edit yourself",
          "German and English if you need both",
        ],
        tags: ["WordPress", "Custom code", "i18n"],
      },
      {
        name: "Backend and APIs",
        icon: "server",
        description: "REST APIs, databases and authentication with Python/FastAPI or Node.js.",
        gets: [
          "A documented API",
          "Secure login and password handling",
          "A database structure that can grow",
        ],
        tags: ["FastAPI", "Node.js", "REST", "SQL"],
      },
      {
        name: "Improving existing sites",
        icon: "gauge",
        description: "Speed, bug fixes, clearer navigation and new features in existing code.",
        gets: [
          "A short list of what is wrong and why",
          "Fixes without breaking what works",
          "Measurably faster pages",
        ],
        tags: ["Performance", "Bug fixes", "New features"],
      },
    ],
    closing: { text: "Have a project in mind?", button: "Get in touch" },
  },
  hobbies: {
    label: "Hobbies",
    title: "Outside of work",
    motto: "Adapt to survive.",
    sub: "New tools, new languages, new countries: I learn what the situation needs.",
    items: [
      { name: "Football", icon: "football" },
      { name: "Travelling", icon: "plane" },
      { name: "Reading", icon: "book" },
      { name: "Chess", icon: "chess" },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's talk",
    lead: "Open to a full-time software engineer role and to freelance projects.",
    emailTitle: "Email",
    emailAction: "Write an email",
    copy: "Copy",
    copied: "Copied",
    linkedinTitle: "LinkedIn",
    linkedinAction: "Open profile",
    cvTitle: "Download CV",
    cvAction: "PDF, German",
  },
  footer: { rights: "All rights reserved.", impressum: "Impressum" },
  impressum: {
    title: "Impressum",
    back: "Back to the portfolio",
    lawLabel: "Information according to § 5 DDG",
    addressLabel: "Address",
    addressPending: "To be added.",
    contactLabel: "Contact",
    responsibleLabel: "Responsible for the content",
  },
};

const de: Content = {
  meta: {
    title: "Moustafa Mohamed — Software Engineer",
    description:
      "Software Engineer in Magdeburg. Webanwendungen von Anfang bis Ende mit React, TypeScript, Python und FastAPI. Offen für eine Festanstellung und für Freelance-Projekte.",
  },
  nav: {
    about: "Über mich",
    experience: "Erfahrung",
    projects: "Projekte",
    skills: "Skills",
    services: "Leistungen",
    hobbies: "Hobbys",
    contact: "Kontakt",
    sections: "Abschnitte",
  },
  hero: {
    badge: "Offen für Festanstellung und Freelance-Projekte",
    title: "Software Engineer",
    lead: "Ich entwickle Webanwendungen von Anfang bis Ende und nutze KI-Modelle, um meine Arbeit und mein Leben einfacher zu machen.",
    primaryCta: "Projekte ansehen",
    cvCta: "Lebenslauf herunterladen",
    cvNote: "PDF, Deutsch",
    emailLabel: "E-Mail",
    linkedinLabel: "LinkedIn",
    photoAlt: "Porträt von Moustafa Mohamed",
  },
  about: {
    label: "Über mich",
    title: "Mit wem Sie arbeiten würden",
    bio: [
      "Ich bin Software Engineer in Magdeburg. Ich entwickle Webanwendungen von Anfang bis Ende: die Oberfläche mit React und TypeScript, die Logik dahinter mit Python und FastAPI oder Node.js. KI-Modelle nutze ich jeden Tag, um schneller zu arbeiten und mir das Leben einfacher zu machen.",
      "Ich habe Wirtschaftsinformatik (B.Sc.) an der Otto-von-Guericke-Universität Magdeburg studiert. Diese Mischung aus Wirtschaft und Informatik prägt meine Arbeitsweise: Ich möchte verstehen, was ein Unternehmen braucht, bevor ich die erste Zeile Code schreibe. Genauso gern arbeite ich mich in eine bestehende Codebasis ein und erweitere sie um neue Funktionen.",
      "Als Werkstudent bei aiio habe ich an einem produktiven SaaS-Produkt für KI-gestütztes Prozessmanagement gearbeitet. Ich habe User Stories in Funktionen umgesetzt, die Oberfläche an REST-APIs angebunden, mehrsprachige Ansichten gebaut und an Code-Reviews teilgenommen. Davor habe ich in einem Praktikum in München Struktur, Geschwindigkeit und Design von WordPress-Websites verbessert.",
      "Für meine Bachelorarbeit habe ich den Paper Integrity Analyzer entworfen und entwickelt: eine Webanwendung, die wissenschaftliche Paper auf Anzeichen von Betrug prüft und das Ergebnis verständlich erklärt. In einer Studie mit 16 Testpersonen erreichte sie einen Usability-Score von 80,87 von 100. Dieses Projekt hat mir gezeigt, was mir am meisten Freude macht: Kompliziertes leicht verständlich zu machen.",
      "Ich spreche Deutsch, Englisch und Arabisch und bin umzugsbereit. Ich suche eine Festanstellung als Software Engineer und übernehme außerdem Freelance-Projekte.",
    ],
    languagesTitle: "Sprachen",
    languages: [
      { name: "Deutsch", level: "C1", steps: 4 },
      { name: "Englisch", level: "C1", steps: 4 },
      { name: "Arabisch", level: "Muttersprache", steps: 5 },
    ],
    certificatesTitle: "Zertifikate",
    certificates,
  },
  experience: {
    label: "Erfahrung",
    title: "Wo ich gearbeitet habe",
    techLabel: "Technik",
    educationLabel: "Ausbildung",
    items: [
      {
        kind: "work",
        title: "Werkstudent, KI-basierte Softwareentwicklung",
        org: "aiio GmbH",
        location: "Magdeburg",
        period: "Juni 2025 – Februar 2026",
        context: "SaaS-Produkt für KI-gestütztes Prozessmanagement auf Microsoft 365.",
        points: [
          "User Stories und Anforderungen mit React und TypeScript in Funktionen umgesetzt und bestehende Komponenten erweitert.",
          "REST-APIs angebunden, um Backend-Daten abzurufen und in den Komponenten darzustellen.",
          "An Code-Reviews, Tests und Fehleranalysen mitgewirkt.",
          "Mehrsprachige Oberflächen mit i18n und Strapi umgesetzt.",
        ],
        tech: ["React", "TypeScript", "REST-APIs", "i18n", "Strapi"],
      },
      {
        kind: "work",
        title: "Praktikant Softwareentwicklung",
        org: "Mindful Minds Management",
        location: "München",
        period: "September 2024 – Dezember 2024",
        points: [
          "Die Performance der Website verbessert und technische Fehler durch regelmäßige Tests behoben.",
          "Das Frontend mit HTML und CSS entwickelt und angepasst.",
          "Layout und Navigation neu strukturiert, damit die Website einfacher zu bedienen ist.",
          "WordPress-Themes und -Plugins angepasst und bestehende Funktionen erweitert.",
        ],
        tech: ["HTML", "CSS", "WordPress"],
      },
      {
        kind: "education",
        title: "B.Sc. Wirtschaftsinformatik",
        org: "Otto-von-Guericke-Universität Magdeburg",
        location: "Magdeburg",
        period: "Abschluss Juli 2026",
        points: [],
        tech: [],
      },
    ],
  },
  projects: {
    label: "Projekte",
    title: "Arbeit zum Ansehen",
    featured: {
      meta: "Bachelorarbeit · Einzelprojekt · 2026",
      name: "Paper Integrity Analyzer",
      summary:
        "Eine Webanwendung, die ein wissenschaftliches PDF auf Warnzeichen für gefälschte Paper prüft und das Ergebnis verständlich erklärt.",
      roleLabel: "Rolle",
      role: "Design, Frontend, Backend",
      shot: {
        ...shots.score,
        label: "Ergebnisseite",
        alt: "Ergebnisbanner mit dem Text 'Final Decision: Likely Fake Paper' und einem Fake-Score von 63 %",
      },
      stack: ["React", "TypeScript", "Python", "FastAPI"],
      resultValue: "80,87",
      resultLabel: "SUS-Usability-Score (16 Teilnehmende)",
      demoCta: "90-Sekunden-Demo ansehen",
      demoPlaceholder: "[PLACEHOLDER: Video-Link]",
      walkthroughCta: "Walkthrough anfragen",
      walkthroughSubject: "Walkthrough: Paper Integrity Analyzer",
      sourceNote:
        "Der Quellcode ist Eigentum der Universität und nicht öffentlich. Die Architektur zeige ich gern im Gespräch.",
      caseStudy: {
        toggle: "Fallstudie lesen",
        steps: [
          {
            title: "Problem",
            text: "Werkzeuge wie Turnitin, Copyleaks und GPTZero zeigen Scores und Markierungen. Warum ein Dokument auffällt und was als Nächstes zu tun ist, bleibt für Nutzer aber oft unklar.",
          },
          {
            title: "Lösung",
            points: [
              "Ein Ablauf in drei Schritten: Startseite, PDF-Upload per Drag-and-drop, Ergebnisseite.",
              "Eine Ergebnisseite in Ebenen: zuerst Entscheidung und Score, dann die Indikatoren, die Belege und empfohlene Schritte.",
              "Ein Analyse-Backend, das vier Integritätsindikatoren zu einem gewichteten Risiko-Score verbindet.",
            ],
          },
          {
            title: "Ergebnis",
            text: "SUS 80,87 in einer Studie mit 16 Teilnehmenden aus Informatik, Wirtschaft, Ingenieurwesen und Medizin. Über 80 gilt als hohe Gebrauchstauglichkeit.",
          },
        ],
        indicatorsTitle: "Gewichtung des Risiko-Scores",
        indicators: [
          {
            name: "Tortured Phrases",
            weight: 30,
            detail: "Aho-Corasick-Matcher gegen eine bekannte Phrasenliste.",
          },
          {
            name: "Zitationsmanipulation",
            weight: 30,
            detail: "Autorenwiederholung, Zitationsdichte, zurückgezogene und irrelevante Quellen.",
          },
          {
            name: "Abstract-Ähnlichkeit",
            weight: 20,
            detail: "Sentence-Transformers-Embeddings im Vergleich mit verwandten Papern aus OpenAlex.",
          },
          {
            name: "Metadaten",
            weight: 20,
            detail: "Autoren-E-Mails, ORCID, geografische Konzentration.",
          },
        ],
        techTitle: "Technik",
        tech: ["React", "TypeScript", "Python", "FastAPI", "GROBID", "Aho-Corasick", "Sentence Transformers", "TF-IDF", "OpenAlex API"],
        screensTitle: "Weitere Ansichten",
        gallery: [
          {
            ...shots.upload,
            label: "Upload",
            alt: "Upload-Seite mit Drag-and-drop-Bereich für ein PDF",
          },
          {
            ...shots.evidence,
            label: "Belege",
            alt: "Dokumentansicht mit rot und blau markierten auffälligen Textstellen",
          },
          {
            ...shots.related,
            label: "Verwandte Paper",
            alt: "Liste verwandter Paper, jeweils mit prozentualer Übereinstimmung",
          },
          {
            ...shots.actions,
            label: "Schritte",
            alt: "Liste empfohlener nächster Schritte mit Buttons zum Herunterladen des Ergebnisses und zur erneuten Prüfung",
          },
        ],
        note: "Die Anwendung unterstützt die menschliche Prüfung und ersetzt sie nicht. Im Mittelpunkt der Arbeit standen Bedienbarkeit und Erklärbarkeit, nicht die Erkennungsgenauigkeit.",
      },
    },
    moreTitle: "Weitere Projekte",
    partLabel: "Mein Teil",
    toolsLabel: "Werkzeuge",
    more: [
      {
        name: "Artikelplattform",
        type: "Teamprojekt an der Universität (Scrum)",
        description:
          "Eine Plattform, auf der Nutzer sich registrieren und Artikel und Kommentare schreiben und löschen.",
        part: [
          "Sicherer Ablauf zum Ändern des Passworts im .NET-Backend",
          "Anbindung an die Oberfläche über REST-APIs",
          "Tests und Code-Reviews",
        ],
        tools: [".NET", "Vue.js", "Flutter", "SQL"],
        extra: ["Team: [PLACEHOLDER: Teamgröße] Studierende."],
      },
      {
        name: "Algorithmen in Java",
        type: "Studienleistung an der Universität",
        description: "Eigene Implementierungen von Listen, Bäumen, Heaps, Hashing und Graphen.",
        part: ["Implementierung mit Fokus auf Laufzeit und objektorientiertes Design"],
        tools: ["Java"],
        extra: [
          "Zeigt solide Grundlagen hinter der Webentwicklung.",
          "[PLACEHOLDER: ein konkretes Detail, z. B. die schwierigste Struktur oder ein Laufzeitvergleich]",
        ],
      },
    ],
  },
  skills: {
    label: "Skills",
    title: "Womit ich arbeite",
    groups: [
      {
        name: "Sprachen",
        icon: "code",
        strong: 3,
        items: ["TypeScript", "JavaScript", "Python", "Java", "HTML", "CSS"],
      },
      { name: "Frontend", icon: "layout", strong: 2, items: ["React", "Next.js", "Vue.js", "Flutter"] },
      {
        name: "Backend",
        icon: "server",
        strong: 2,
        items: ["FastAPI", "Node.js", "Express", ".NET", "Spring Boot", "REST-APIs"],
      },
      { name: "Datenbanken", icon: "database", strong: 1, items: ["MongoDB", "MySQL", "SQL"] },
      {
        name: "KI und Daten",
        icon: "brain",
        strong: 2,
        items: ["Sentence Transformers", "TF-IDF", "Aho-Corasick", "NLP", "OpenAlex"],
      },
      {
        name: "Werkzeuge und Methoden",
        icon: "wrench",
        strong: 3,
        items: ["Git", "Jira", "Scrum", "Testing", "Code-Reviews", "JWT-Authentifizierung", "i18n"],
      },
    ],
  },
  services: {
    label: "Leistungen",
    title: "Was ich für Sie bauen kann",
    getsLabel: "Sie erhalten",
    items: [
      {
        name: "Webanwendungen",
        icon: "app",
        wide: true,
        description: "Interaktive Anwendungen mit React, Next.js und TypeScript.",
        gets: [
          "Eine Oberfläche, die man auf den ersten Blick versteht",
          "Kurze Ladezeiten auf Smartphone und Desktop",
          "Sauberen Code, auf dem Ihr Team weiterbauen kann",
        ],
        tags: ["React", "Next.js", "TypeScript"],
      },
      {
        name: "KI-Integration",
        icon: "sparkles",
        wide: true,
        description:
          "KI-Funktionen wie Dokumentenanalyse, semantische Suche und Assistenten, eingebunden in Ihre Software und Ihre Abläufe.",
        gets: [
          "Eine Funktion, die zu Ihrem tatsächlichen Ablauf passt",
          "Verständlich erklärte Ergebnisse",
          "Eine ehrliche Einschätzung, was KI kann und was nicht",
        ],
        tags: ["Dokumentenanalyse", "Semantische Suche", "Assistenten"],
      },
      {
        name: "Unternehmenswebsites",
        icon: "globe",
        description: "Neue Websites oder Redesigns, mit WordPress oder individuellem Code.",
        gets: [
          "Ein modernes, responsives Design",
          "Inhalte, die Sie selbst bearbeiten können",
          "Deutsch und Englisch, wenn Sie beides brauchen",
        ],
        tags: ["WordPress", "Individueller Code", "i18n"],
      },
      {
        name: "Backend und APIs",
        icon: "server",
        description: "REST-APIs, Datenbanken und Authentifizierung mit Python/FastAPI oder Node.js.",
        gets: [
          "Eine dokumentierte API",
          "Sicheren Login und sicheren Umgang mit Passwörtern",
          "Eine Datenbankstruktur, die mitwachsen kann",
        ],
        tags: ["FastAPI", "Node.js", "REST", "SQL"],
      },
      {
        name: "Bestehende Websites verbessern",
        icon: "gauge",
        description:
          "Ladezeit, Fehlerbehebung, klarere Navigation und neue Funktionen in bestehendem Code.",
        gets: [
          "Eine kurze Liste, was nicht stimmt und warum",
          "Korrekturen, ohne Funktionierendes zu beschädigen",
          "Messbar schnellere Seiten",
        ],
        tags: ["Performance", "Fehlerbehebung", "Neue Funktionen"],
      },
    ],
    closing: { text: "Sie haben ein Projekt im Kopf?", button: "Kontakt aufnehmen" },
  },
  hobbies: {
    label: "Hobbys",
    title: "Neben der Arbeit",
    motto: "Adapt to survive.",
    sub: "Neue Werkzeuge, neue Sprachen, neue Länder: Ich lerne, was die Situation verlangt.",
    items: [
      { name: "Fußball", icon: "football" },
      { name: "Reisen", icon: "plane" },
      { name: "Lesen", icon: "book" },
      { name: "Schach", icon: "chess" },
    ],
  },
  contact: {
    label: "Kontakt",
    title: "Lassen Sie uns sprechen",
    lead: "Offen für eine Festanstellung als Software Engineer und für Freelance-Projekte.",
    emailTitle: "E-Mail",
    emailAction: "E-Mail schreiben",
    copy: "Kopieren",
    copied: "Kopiert",
    linkedinTitle: "LinkedIn",
    linkedinAction: "Profil öffnen",
    cvTitle: "Lebenslauf herunterladen",
    cvAction: "PDF, Deutsch",
  },
  footer: { rights: "Alle Rechte vorbehalten.", impressum: "Impressum" },
  impressum: {
    title: "Impressum",
    back: "Zurück zum Portfolio",
    lawLabel: "Angaben gemäß § 5 DDG",
    addressLabel: "Anschrift",
    addressPending: "Wird ergänzt.",
    contactLabel: "Kontakt",
    responsibleLabel: "Verantwortlich für den Inhalt",
  },
};

export const content: Record<Locale, Content> = { en, de };
export type { Content };
