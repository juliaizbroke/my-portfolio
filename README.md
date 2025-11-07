## Julia's Portfolio

This repository contains a modern personal portfolio built with Next.js and React. It showcases projects, skills, education, and contact information—designed to be fast, responsive, and easy to extend.

## Highlights

- Clean, responsive UI built with React and Material UI
- Smooth scroll and entrance animations using Framer Motion
- Tailwind configuration included for utility-first styling
- TypeScript-ready (project contains `tsconfig.json`) and Next.js configuration
- Backend-ready structure and experience notes: SQL/PostgreSQL for data modeling and AWS for deployments

## Tech stack

- Next.js (React)
- Material UI (MUI)
- Framer Motion
- Tailwind CSS
- PostgreSQL / SQL (used for data modeling in projects)
- AWS (deployment and cloud services experience)

## Local development

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Open the site

Visit http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Project structure (important files)

- `src/app/` — main Next.js app directory
	- `components/` — React components used across the site (About, Hero, Projects, Skills, Contact, etc.)
	- `api/` — API routes (example: contact form route)
- `public/` — static assets (images, icons)
- `next.config.ts`, `tailwind.config.js`, `postcss.config.js` — build and styling configs

## Environment & deployment notes

- This portfolio is suitable for static or server-side deployment (Vercel, Netlify, or an AWS-based deployment).
- If you integrate server-side APIs or store submissions, use environment variables for DB credentials and cloud keys. Do not commit secrets to the repo.

- Live site: https://www.juliathwin.me/

## Contributing & customization

- To add a new project card, create a component and import it into `src/app/components/Projects.js`.
- To add skill badges or icons, update `About.js` or `Skills.js` and include any images in `public/`.

## Contact

If you'd like to collaborate or hire me, use the contact form in the site or reach out via email (add your preferred contact method here).

---

If you'd like, I can also:
- Add a downloadable resume button or quick CTA under the About section.
- Add badges/icons for TypeScript, Next.js, PostgreSQL, and AWS to the Skills section.
- Run a quick typecheck/lint step to verify there are no syntax issues after the recent edit.
