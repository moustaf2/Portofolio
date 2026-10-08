# Portfolio — Moustafa Mohamed Moustafa

Personal portfolio site: one page in English (`/en`) and German (`/de`), built with Next.js, TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL redirects to `/de` for German browsers and to `/en` otherwise.

## Editing content

All texts for both languages live in `src/data/profile.ts`. Each section of the page is a component in `src/components/`. Screenshots are in `public/projects/paper-integrity/`.

To add the photo, put it in `public/` and replace the initials circle in `src/components/About.tsx`.
