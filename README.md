# Ebenason Portfolio

A modern, responsive developer portfolio built with React, Tailwind CSS, Framer Motion, and React Router.

## Features

- Responsive design (Mobile, Tablet, Laptop, Ultra-wide)
- Animated background with floating particles
- Glassmorphism UI components
- Framer Motion page and scroll animations
- Skills section with horizontal scroll + star ratings
- Projects showcase with GitHub and live demo links
- Experience timeline with card layout
- Contact form with Zod validation + React Hook Form
- Google Sheets integration for form submissions
- Accessible (ARIA labels, semantic HTML, keyboard nav, focus states)
- SEO-friendly structure

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** React Icons
- **Linting:** ESLint

## Folder Structure

```
src/
├── assets/            # Static assets (images)
├── components/        # Reusable UI components
│   ├── BackgroundAnimation.jsx
│   ├── ContactForm.jsx
│   ├── ContactInfo.jsx
│   ├── ExperienceCard.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── SectionHeading.jsx
│   ├── SkillCard.jsx
│   ├── StarRating.jsx
│   └── TechIcon.jsx
├── constants/         # Data and configuration
│   ├── contactSchema.js
│   └── index.js
├── sections/          # Page sections
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── styles/            # Shared style utilities
│   └── Uistyles.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Installation

```bash
git clone <repository-url>
cd Ebenason_portfolio
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root:

```
VITE_GOOGLE_SHEETS_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Setting up Google Sheets Integration

1. Create a Google Sheet with columns: `fullName`, `email`, `subject`, `message`
2. Create a Google Apps Script bound to the sheet with a `doPost(e)` handler
3. Deploy as a web app (Execute as: Me, Access: Anyone)
4. Copy the web app URL as `VITE_GOOGLE_SHEETS_ENDPOINT`

## Build

```bash
npm run build
npm run preview
```

## Deployment

Deploy the `dist/` folder to any static hosting provider:

- **Vercel:** Connect repo, set env vars, deploy
- **Netlify:** Drag `dist/` folder or connect repo
- **GitHub Pages:** Use `gh-pages` branch

## Performance Optimizations

- Lazy-loaded route components
- Memoized bubble generation in BackgroundAnimation
- Optimized Framer Motion with `whileInView` (animations only when visible)
- Tailwind CSS purging unused styles
- Minimal bundle with selective icon imports from react-icons

## Accessibility Features

- Semantic HTML (`<nav>`, `<section>`, `<article>`, `<main>`)
- ARIA labels and roles throughout
- Screen-reader-only labels for form fields
- Focus-visible outlines on interactive elements
- Keyboard-navigable carousel controls
- Proper heading hierarchy
- `aria-current="page"` on active nav links
- Form error announcements via `role="alert"`

## Contact

- **Name:** EBI
- **Email:** ebi@example.com
- **LinkedIn:** https://linkedin.com/in/ebi
- **GitHub:** https://github.com/ebi
