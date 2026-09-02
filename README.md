# MCybernix Solutions Web

A modern, high-performance landing page for MCybernix Solutions built with Next.js App Router, TypeScript, Lenis Smooth Scroll, and GSAP animations.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: CSS (custom styles in `app/globals.css`)
- **Animation**: GSAP (ScrollTrigger) & Lenis Smooth Scroll
- **Deployment**: [Vercel](https://vercel.com/)

## Project Structure

```text
├── app/
│   ├── globals.css        # Global CSS and utility styles
│   ├── layout.tsx         # Root layout with SEO metadata and CDN scripts
│   └── page.tsx           # Main landing page
├── components/            # Modular React components (Hero, Services, Stats, etc.)
│   ├── animations.ts      # GSAP and Lenis animation initializer
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Stats.tsx
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── public/
│   ├── images/            # Project, service, and blog images
│   ├── favicon.ico
│   └── robots.txt
├── package.json
└── tsconfig.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Production Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

The easiest way to deploy this Next.js app is to push it to a Git repository (GitHub / GitLab / Bitbucket) and import it on [Vercel](https://vercel.com/new). Vercel will automatically detect Next.js and configure the build settings.
