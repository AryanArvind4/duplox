<div align="center">
  <img src="public/logo.png" alt="DUPLOX Logo" width="200"/>
  
  # DUPLOX
  
  ### Focus on Profits, We'll Handle Presence
  
  **A next-gen creative and media agency specializing in social media management, performance ads, and e-commerce excellence.**
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)
  
  [View Demo](#) · [Report Bug](https://github.com/AryanArvind4/duplox/issues) · [Request Feature](https://github.com/AryanArvind4/duplox/issues)

</div>

---

##  Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Performance](#performance)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

##  About The Project

DUPLOX is a modern, high-performance portfolio website built for a creative and media agency that delivers measurable results. The platform showcases services, case studies, team expertise, and client success stories with a focus on conversion optimization.

### Why DUPLOX?

-  **Performance First**: Optimized for speed with 1-3 second load times
-  **Mobile Ready**: Fully responsive design that works on all devices
-  **Modern Design**: Clean, bold aesthetics with smooth animations
-  **Accessible**: WCAG AA compliant with keyboard navigation support
-  **SEO Optimized**: Built-in meta tags, OpenGraph, and semantic HTML
-  **Data-Driven**: Designed to convert visitors into clients

---

## Key Features

### Design & UX
- **Modern Interface** with gradient accents and smooth transitions
- **Animated Components** powered by Framer Motion
- **Custom UI Library** based on Radix UI primitives
- **Dark Mode Ready** design system (optional)

### Pages & Sections
- **Home**: Hero, Services Overview, Process, Featured Work, Clients, CTA
- **Services**: Comprehensive service offerings (Social, Ads, Shopify)
- **Work**: Filterable case studies with metrics
- **About**: Mission, values, and team introduction
- **Contact**: Multi-channel contact form with validation
- **Pricing**: Transparent pricing tiers

### Technical Features
- **Server-Side Rendering** with Next.js App Router
- **Image Optimization** with automatic WebP/AVIF conversion
- **Code Splitting** for optimal bundle sizes
- **Type Safety** with TypeScript throughout
- **Modern CSS** with Tailwind CSS v4
- **Component Library** with reusable UI components

---

## Tech Stack

### Core
- **[Next.js 16.1.1](https://nextjs.org/)** - React framework with Turbopack
- **[React 19.2.3](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[class-variance-authority](https://cva.style/)** - Component variants

### Fonts
- **[Geist Sans](https://vercel.com/font)** - Primary typeface
- **[Geist Mono](https://vercel.com/font)** - Monospace font

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control


---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (Recommended: 22.14.0)
- **npm 10+** or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AryanArvind4/duplox.git
   cd duplox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

---

## 📁 Project Structure

```
duplox/
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── services/            # Services page
│   ├── work/                # Portfolio/Work page
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles & CSS variables
│
├── components/              # React components
│   ├── sections/            # Page sections
│   │   ├── hero.tsx         # Hero section with CTA
│   │   ├── services-overview.tsx
│   │   ├── process.tsx      # 4-step process
│   │   ├── featured-work.tsx
│   │   ├── clients.tsx      # Client logos grid
│   │   ├── cta.tsx          # Call-to-action
│   │   ├── team.tsx         # Team members
│   │   ├── results.tsx      # Stats & metrics
│   │   └── pricing-preview.tsx
│   │
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Button with variants
│   │   ├── card.tsx         # Card component
│   │   ├── input.tsx        # Form input
│   │   └── textarea.tsx     # Text area
│   │
│   ├── header.tsx           # Site header with navigation
│   ├── footer.tsx           # Site footer
│   └── scroll-to-top.tsx    # Scroll to top button
│
├── data/                    # Content & data
│   ├── services.ts          # Service offerings
│   ├── case-studies.ts      # Portfolio case studies
│   ├── clients.ts           # Client information
│   ├── team.ts              # Team members
│   ├── pricing.ts           # Pricing plans
│   ├── process.ts           # Process steps
│   └── types.ts             # TypeScript interfaces
│
├── lib/                     # Utility functions
│   └── utils.ts             # Helper functions (cn, etc.)
│
├── public/                  # Static assets
│   ├── clients/             # Client logos
│   │   ├── kicks and co.png
│   │   ├── korean table.png
│   │   ├── baozi momos.png
│   │   └── The Spice Tribe.png
│   ├── logo.png             # Site logo
│   └── ...                  # Other static files
│
├── .gitignore               # Git ignore rules
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies & scripts
├── QUICKSTART.md            # Quick start guide
├── CHANGES.md               # Changelog
└── README.md                # This file
```

---


