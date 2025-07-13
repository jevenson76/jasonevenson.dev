# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Jason Evenson's portfolio website showcasing AI automation and revenue growth expertise. Built with Next.js 14 App Router, featuring a quantum-themed 3D interface with interactive animations.

## Essential Commands
```bash
# Install dependencies
npm install --force      # Force flag needed due to peer dependency conflicts

# Development
npm run dev             # Start dev server on http://localhost:3000
npm run build          # Build for production
npm run lint           # Run ESLint
```

## Architecture & Core Components

### Current File Structure
The project currently contains only the source files:
- `src/app/` - Next.js App Router pages (layout.tsx, page.tsx)
- `src/app/globals.css` - Global styles with quantum theme variables
- `src/components/` - React components with Framer Motion animations

### Key Components & Their Responsibilities
- **HeroQuantum**: 3D animated hero with rotating qubits and quantum particles
- **ParticleField**: Background particle animation system
- **Splash**: Loading screen with quantum core initialization
- **SkillsOrbit**: Interactive skill visualization with rotating orbit
- **ResultsStrip**: Animated metrics display with CountUp
- **Services/Testimonials/Contact**: Business-focused sections

### Missing Configuration Files
The following files need to be created for a complete Next.js project:
- `package.json` (dependencies: next, react, framer-motion, react-countup, react-icons)
- `next.config.mjs` (static export configuration)
- `tsconfig.json` (TypeScript configuration)
- `tailwind.config.ts` (custom animations and theme)
- `postcss.config.js`
- `.gitignore`

### Styling System
- CSS variables for quantum color palette (--quantum-deep, --quantum-glow, etc.)
- Tailwind utilities with custom animations (float, rotate)
- Glass morphism effects throughout
- Responsive design with mobile-first approach

### Animation Patterns
- All interactive components use Framer Motion
- Common patterns: whileHover, whileInView, animate loops
- 3D transforms with preserve-3d for depth effects
- Staggered animations using delay calculations

### State Management
- Components use local state with useState
- No global state management beyond component level
- Form submissions handled locally (TODO: Supabase integration)

## Development Guidelines

### Component Standards
- All components must have `'use client'` directive
- Use TypeScript for prop interfaces
- Follow existing animation patterns for consistency
- Maintain quantum/sci-fi visual theme

### Performance Considerations
- Components lazy load where appropriate
- Particle counts optimized for performance
- Animation durations balanced for smooth experience
- Static export compatible (no server-side features)

### Current Limitations
- No testing framework configured
- Form submissions not connected to backend
- Missing SEO metadata configuration
- Placeholder content in some sections

## Deployment Notes
- Configured for static export deployment
- Netlify-compatible build process
- Environment variables needed for forms:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`