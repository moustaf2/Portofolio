# Portfolio Redesign — Final Plan

Agreed in discussion on 2026-10-11. This is the brief for rebuilding the site in this folder. Where it differs from `PORTFOLIO_PLAN.md` (title, section order, CV download, hobbies), this file wins.

## 1. Goals

1. Show the photo, so visitors meet a person.
2. Give the dark blue design a creative, modern, moving background.
3. Organise all information so it can be scanned quickly: facts in fixed places, short texts.

Audience stays the same: employers (full-time software engineer role) and freelance customers.

## 2. Decisions

| Topic | Decision |
|---|---|
| Title | **Software Engineer** (English title in the German version too) |
| Photo | `D:\work\newCV\foto.jpeg`, cut out from its white background |
| Photo layout | In a circle, centred, with name and title underneath |
| Hero layout | Centred |
| Background | Network of moving points and lines, where the points are `0` and `1` digits |
| Background strength | Strong in the hero and the contact section, quiet in between |
| Motion | Slow and gentle |
| Section order | Hero → At a glance → About → Experience → Projects → Skills → Services → Hobbies → Contact |
| Contact | At the top (header button and icons in the hero) and at the bottom (full section) |
| CV download | `D:\work\newCV\Lebenslauf Moustafa.pdf` (German); an English CV follows later |
| New section | Hobbies, with the personal motto |
| Languages | German and English, as before |
| Palette | Dark blue with a cyan accent, as before |

### Privacy

- On the pages: name, city, email, LinkedIn. No address, birth date, grade, master's degree or GitHub.
- The phone number appears only inside the downloadable CV. Moustafa accepted this.

## 3. Photo

### Preparation

1. Remove the white background from `foto.jpeg` and clean the edges (hair, shoulders).
2. Crop square, face centred, shoulders visible.
3. Export as WebP with transparency, 640 px, to `public/moustafa.webp`.

### Presentation

- A circle about 220 px wide on desktop, 160 px on phones.
- Inside the circle, behind the cut-out: a gradient from navy `#172447` to cyan `#38bdf8` at low strength, so the photo's background belongs to the site's colours.
- Around the circle: a thin gradient ring (cyan to indigo) and a soft cyan glow.
- `alt` text: "Portrait of Moustafa Mohamed". Load with `next/image` and `priority`.

If the cut-out edges cannot be made clean, crop tighter inside the circle so the edges fall outside it.

## 4. Background: the binary network

### What the visitor sees

About 40 small `0` and `1` characters float slowly over the dark blue page, each in its own direction. When two come close, a thin line appears between them and fades as they drift apart. Now and then one digit flips from `0` to `1` and glows cyan for a moment. It reads as a living data network.

### Layers

| Layer | Description | Where |
|---|---|---|
| Base | Vertical gradient from `#070d1f` to `#0a1124` | Whole page |
| Glows | Two or three large, soft colour fields (cyan `#38bdf8`, indigo `#6366f1`) at 10–20% strength | Strong behind the hero and contact, faint elsewhere |
| Binary network | The moving digits and lines, in cyan-tinted white at 25–40% strength | Hero and contact only |
| Section line | A thin gradient line between sections in place of the plain border | Between all sections |

### Rules

- Digits use the monospace font, 12–14 px. Lines are 1 px and fade with distance.
- Speed: a digit needs roughly 40–60 seconds to cross the screen.
- The network fades out towards the centre column where text sits, so reading is never disturbed. Text contrast stays at least 4.5:1.
- Phones get about half the number of digits.
- With "reduce motion" switched on in the visitor's system, the network is shown as a still picture.
- The animation pauses when its section is off screen or the browser tab is hidden.
- Built as one small canvas component without any animation library. Decorative only (`aria-hidden`, no pointer events).

### Cards

Cards become "glass": background `rgba(16,26,53,0.6)`, a light blur behind them, a thin border that is brighter at the top, 16 px corner radius. They lift 2 px on hover.

### Other motion

Each section fades in and rises 12 px once when it scrolls into view.

## 5. Page structure

Every section carries a number and label, for example "02 — Experience". On desktop a slim rail at the left edge lists the numbers and marks the current section.

### Header

- Left: "Moustafa Mohamed".
- Middle: About, Experience, Projects, Skills, Services, Contact.
- Right: DE/EN switch and a filled **Contact** button.

### Hero (centred)

From top to bottom:

1. Badge with a green dot: "Open to full-time roles and freelance projects".
2. The photo circle.
3. Name: **Moustafa Mohamed**.
4. Title: **Software Engineer**.
5. Sentence: "I build web applications from end to end, and I use AI models to make my work and my life easier."
6. Buttons: **View projects** (filled) and **Download CV** (outlined).
7. Contact icons with labels: Email and LinkedIn.

The binary network and the glows move behind all of it.

### At a glance

One row of facts directly under the hero (two columns on phones):

| Label | Value |
|---|---|
| Role | Software Engineer |
| Based in | Magdeburg, open to relocating |
| Focus | React · TypeScript · Python |
| Languages | German C1 · English C1 · Arabic native |
| Proof | SUS usability score 80.87 |

### 01 — About

Left, the text (final wording):

> I'm a software engineer based in Magdeburg, Germany. I build web applications from end to end: the interface with React and TypeScript, and the logic behind it with Python and FastAPI or Node.js. I use AI models every day to make my work faster and my life easier.
>
> I studied Business Informatics (B.Sc.) at Otto von Guericke University Magdeburg. That mix of business and computer science shapes how I work: I want to understand what a company needs before I write the first line of code. I'm just as comfortable joining an existing codebase and adding new features to it.
>
> As a working student at aiio, I worked on a production SaaS product for AI-supported process management. I turned user stories into features, connected the interface to REST APIs, built multilingual screens and took part in code reviews. Before that, during an internship in Munich, I improved the structure, speed and design of WordPress websites.
>
> For my bachelor thesis I designed and built the Paper Integrity Analyzer, a web app that checks scientific papers for signs of fraud and explains the result in plain language. In a study with 16 test users it reached a usability score of 80.87 out of 100. That project showed me what I enjoy most: making complicated things easy to understand.
>
> I speak German, English and Arabic, and I'm open to relocating. I'm looking for a full-time position as a software engineer, and I also take on freelance projects.

Right, two glass cards:

- **Languages** with a five-step bar each: German C1 (4 of 5), English C1 (4 of 5), Arabic native (5 of 5).
- **Certificates** with issuer and year: Node.js, Express, MongoDB (Udemy) · Introduction to Databases for Back-End Development (Meta / Coursera, 2025) · Programming in Python (Meta / Coursera, 2023).

### 02 — Experience

A vertical timeline: a line on the left, one dot per entry, the period beside the dot. Newest first.

**Working Student, AI-based Software Development — aiio GmbH, Magdeburg**
June 2025 – February 2026
*SaaS product for AI-supported process management on Microsoft 365.*

- Turned user stories and requirements into features with React and TypeScript, extending existing components.
- Integrated REST APIs to fetch backend data and display it across components.
- Took part in code reviews, testing and bug analysis.
- Built multilingual interfaces with i18n and Strapi.

Tech: React · TypeScript · REST APIs · i18n · Strapi

**Software Developer Intern — Mindful Minds Management, Munich**
September 2024 – December 2024

- Improved website performance and fixed technical issues through regular testing.
- Developed and adapted the front end with HTML and CSS.
- Restructured site layout and navigation to make it easier to use.
- Customised WordPress themes and plugins and extended existing features.

Tech: HTML · CSS · WordPress

**B.Sc. Business Informatics — Otto von Guericke University Magdeburg**
Completed July 2026 (shown with a different dot style, as education)

### 03 — Projects

**Featured: Paper Integrity Analyzer**, in five blocks:

1. Header with a fact table beside the title and one-line summary:

   | | |
   |---|---|
   | Type | Bachelor thesis, solo project |
   | Year | 2026 |
   | Role | Design, frontend, backend |
   | Stack | React, TypeScript, Python, FastAPI |
   | Result | SUS 80.87 with 16 participants |

2. Main screenshot in the browser frame.
3. Three numbered steps with arrows between them: **Problem → Solution → Result** (existing texts).
4. "How the risk score is weighted": the weight bar and the four indicators (kept). Add TF-IDF to the technology list, next to Aho-Corasick and Sentence Transformers.
5. Screens as tabs, one large image at a time: Upload · Evidence · Related papers · Actions.

The note stays: built to support human review; the thesis focused on usability, not detection accuracy.

**Other projects**, as two cards with the same fact rows:

| | Article platform | Algorithms in Java |
|---|---|---|
| Type | University team project (Scrum) | Coursework |
| What it does | Users register, write and delete articles and comments | Lists, trees, heaps, hashing and graphs |
| My part | Secure password-change process in the .NET backend, connected to the interface through REST APIs; testing and code reviews | Implementation with a focus on runtime and object-oriented design |
| Stack | .NET · Vue.js · Flutter · SQL | Java |

### 04 — Skills

Six glass cards in a grid, each with a small icon and heading. The first items in each card are the strongest and get the highlighted style.

- **Languages:** TypeScript, JavaScript, Python, Java, HTML, CSS
- **Frontend:** React, Next.js, Vue.js, Flutter
- **Backend:** FastAPI, Node.js, Express, .NET, Spring Boot, REST APIs
- **Databases:** MongoDB, MySQL, SQL
- **AI and data:** Sentence Transformers, TF-IDF, Aho-Corasick, NLP, OpenAlex
- **Tools and methods:** Git, Jira, Scrum, testing, code reviews, JWT authentication, i18n

No percentage bars for technical skills.

### 05 — Services

A "bento" grid: two wide cards on the first row, three on the second. Each card has an icon, a name, one sentence, a "You get" list and tech tags. The "You get" points below are drafts to check.

1. **Web applications** (wide) — Interactive apps built with React, Next.js and TypeScript.
   - An interface that is clear at first glance
   - Fast loading on phone and desktop
   - Clean code your team can keep building on
2. **AI integration** (wide) — AI features such as document analysis, semantic search and assistants, added to your software and workflows.
   - A feature that fits your real process
   - Results explained in plain language
   - An honest view of what AI can and cannot do
3. **Business websites** — New sites or redesigns, with WordPress or custom code.
   - A modern, responsive design
   - Content you can edit yourself
   - German and English if you need both
4. **Backend and APIs** — REST APIs, databases and authentication with Python/FastAPI or Node.js.
   - A documented API
   - Secure login and password handling
   - A database structure that can grow
5. **Improving existing sites** — Speed, bug fixes, clearer navigation and new features in existing code.
   - A short list of what is wrong and why
   - Fixes without breaking what works
   - Measurably faster pages

Under the grid: "Have a project in mind?" with a **Get in touch** button.

### 06 — Hobbies

- The motto as a large quote: **"Adapt to survive."**
- Under it, smaller: "New tools, new languages, new countries: I learn what the situation needs."
- Four small glass cards with an icon each: Football · Travelling · Reading · Chess.

### 07 — Contact

- The binary network and glows return at full strength, so the page ends the way it began.
- One line: "Open to a full-time software engineer role and to freelance projects."
- Three glass cards: **Email** (address shown as text, with a copy button) · **LinkedIn** · **Download CV**.

### Footer

Name, year-free copyright line, and a link to the Impressum page.

## 6. CV download

- Copy `D:\work\newCV\Lebenslauf Moustafa.pdf` to `public/cv/Moustafa-Mohamed-Lebenslauf.pdf`.
- Offered in the hero and in the contact section, labelled "Download CV (PDF, German)".
- The link opens in a new tab.
- When an English CV exists, add it as `public/cv/Moustafa-Mohamed-CV.pdf` and serve the file that matches the page language.

## 7. Corrections to existing content

- "Software Developer" becomes "Software Engineer" everywhere: page title, description, hero, contact.
- The stat "9 months on a production SaaS product" is slightly too high now that the start is June 2025 (2 June 2025 to 13 February 2026 is about eight and a half months). Change to "8 months".
- The aiio period reads "June 2025 – February 2026" everywhere.

## 8. Changes in the code

| File | Change |
|---|---|
| `src/app/globals.css` | New colour tokens (`#070d1f`, `#6366f1`, glass), section line, reveal animation, reduced-motion rules |
| `src/components/BinaryNetwork.tsx` (new, client) | The canvas with digits and lines |
| `src/components/Hero.tsx` | Centred layout, photo circle, badge, buttons, contact icons |
| `src/components/Glance.tsx` (new) | The "At a glance" row |
| `src/components/About.tsx` | New text, language bars, certificate list; education moves out |
| `src/components/Experience.tsx` | Timeline with tech tags and the education entry |
| `src/components/Projects.tsx` | Fact table, numbered steps, screenshot tabs (client part), shared card for other projects |
| `src/components/Skills.tsx` | Six group cards with icons |
| `src/components/Services.tsx` | Bento grid, icons, "You get" lists, closing button |
| `src/components/Hobbies.tsx` (new) | Motto and four cards |
| `src/components/Contact.tsx` | Three cards, copy button (client part), network background |
| `src/components/Header.tsx` | New navigation order, Contact button |
| `src/components/SectionRail.tsx` (new, client) | Progress rail |
| `src/components/ui.tsx` | Numbered `Section`, `GlassCard`, `FactList`, `Reveal` |
| `src/app/[lang]/page.tsx` | New section order |
| `src/data/profile.ts` | New and changed content in **both** `en` and `de` |
| `public/` | `moustafa.webp`, `cv/Moustafa-Mohamed-Lebenslauf.pdf` |

## 9. Order of work

1. Prepare the photo and copy the CV.
2. Tokens, glass cards, section numbers.
3. Hero and "At a glance".
4. Binary network background.
5. About, Experience, Projects.
6. Skills, Services, Hobbies, Contact.
7. Header, progress rail, scroll reveal.
8. German texts for everything new.
9. Check at phone width, with reduced motion, and for contrast; run lint and build.

## 10. Done when

- The photo shows in a circle in the centred hero, with no white edge.
- The digits and lines move slowly behind the hero and the contact section and never make text hard to read.
- Contact is reachable from the header, the hero and the bottom of the page.
- The CV downloads from the hero and from the contact section.
- Sections appear in the agreed order, each with a number.
- Every job and project shows its facts in the same place.
- The Hobbies section shows the motto, its second line and the four hobbies.
- No sideways scrolling at 380 px width.
- The page works with animations switched off.
- English and German show the same structure.
- `npm run lint` and `npm run build` pass.

## 11. Open points

1. **Certificates:** the new CV no longer lists them. This plan keeps them on the site; say so if they should go.
2. **Impressum:** a German site that offers services normally needs one, with a postal address. This plan includes the page with the address left empty until decided.
3. **Service "You get" points:** drafts in section 5, to be checked.
4. **English CV:** to follow.
5. **Domain and hosting:** not chosen yet.

## 12. Tools and technology

The site is built with **React**, using **Next.js** on top of it. This is a widely used, well-established way to build websites and the right choice here.

| Purpose | Tool | Cost |
|---|---|---|
| Building the interface | React | Free |
| Framework (pages, fast loading, images, search visibility) | Next.js | Free |
| Programming language | TypeScript | Free |
| Styling | Tailwind CSS | Free |
| Moving 0/1 network background | Plain HTML canvas, no extra library | Free |
| Icons for services, skills and hobbies | `lucide-react` | Free |
| Removing the white photo background | Tried locally first; remove.bg or Photoshop if the edges are not clean | Free for one photo |
| Writing the code | Claude Code, from this plan | — |
| Viewing and editing files | VS Code | Free |
| Saving versions of the code | Git, later GitHub | Free |
| Putting the site online | Vercel | Free for a personal site |
| Own address (for example `moustafa-mohamed.de`) | Any domain provider | A few euros a year |

### Why React and Next.js

- **It is what the portfolio sells.** The CV and the services name React and TypeScript, so the site itself is proof of those skills.
- **It is what employers ask for.** React is the most requested frontend technology in job ads, including in Germany.
- **It fits the redesign.** The moving background, screenshot tabs, copy button and language switch are handled cleanly.
- **It is already in place.** The existing site in this folder uses the same stack, so nothing has to be rebuilt.

Plain HTML and CSS, or a no-code tool like WordPress, would also produce a portfolio, but they would show less of what a software engineer can do.

### Later

Once the site is online, its code can become the first public project on GitHub. Optional.
