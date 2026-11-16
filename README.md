# Surya Karthik · Portfolio

A single-page portfolio for Surya Karthik, a B.E. Computer Science (AI) student at DSATM, Bengaluru (graduating July 2027). It shows my projects, experience, and a contact form, and it's built to help me find internships.

## Features

- Hero section with a cut-out photo over a sky-blue gradient
- Scrolling strip of the tools I use
- About section with experience, stats, and recognition
- Four project cards, each with a case-study modal (problem, what I built, result)
- "How I work" process section
- Contact form that sends to my inbox through [Formspree](https://formspree.io)
- Responsive layout for phones and desktops
- Download link for my resume

## Tech stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) 18
- Plain CSS (no UI framework)
- [react-icons](https://react-icons.github.io/react-icons/) for icons
- [@formspree/react](https://github.com/formspree/formspree-js) for the contact form
- Fonts: Instrument Serif and Inter (Google Fonts)

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

To build for production and preview the result:

```bash
npm run build
npm run preview
```

## Editing the content

Almost all text, links and projects live in `src/data.js`:

- `person`: name, email, GitHub and LinkedIn links, resume path
- `stack`: tool names in the scrolling strip (add an icon in `src/Logos.jsx` for each new name)
- `about`: intro, stats, experience, achievements
- `projects`: each project's summary, stack, repo link, optional `demo` link, and case-study text
- `process`: the four steps in the "How I work" section

Other files:

- `src/App.jsx`: page layout and sections
- `src/styles.css`: colours (CSS variables at the top), fonts and responsive rules
- `src/ContactForm.jsx`: contact form (Formspree form ID is set here)
- `public/hero-cutout.png`: hero photo (transparent background)
- `public/resume.pdf`: the file the Download Resume button serves

## Contact form

The form posts to Formspree form `mwlolrwz`. Submissions go to the inbox linked to that form. To use a different form:

1. Create a form at https://formspree.io and copy its ID (the part after `/f/`).
2. Replace `FORM_ID` in `src/ContactForm.jsx`.

## Deploy

The site is a static build, so it works on Vercel, Netlify, or GitHub Pages.

**Vercel (recommended):**

1. Go to https://vercel.com/new and import this repository.
2. Keep the defaults: framework Vite, build command `npm run build`, output directory `dist`.
3. Deploy. Future pushes to `main` deploy automatically.

## Licence

All rights reserved. The content (text, photos, resume) is mine; please don't reuse it as your own portfolio.
