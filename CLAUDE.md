# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 boat tour booking website for Coral Boats Mallorca. The site features:
- Multi-language support (English, Spanish, German, French, Italian)
- Tour browsing and booking system with Redux state management
- Lead capture via PostgreSQL database (Prisma ORM)
- Integration with FareHarbor booking system
- Analytics: Google Tag Manager, Hotjar, Facebook Pixel

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (includes prisma generate)
npm run build

# Lint code
npm run lint
```

## Architecture

### Hybrid Routing Structure

This project uses **both** Next.js App Router and Pages directory:

- **`src/app/`**: Route definitions using App Router (Next.js 14)
  - Contains `page.tsx` files that define routes
  - Each route imports and renders page components from `src/pages/`
  - Example: `src/app/about/page.tsx` renders `<AboutPage />` from `src/pages/about/about.tsx`

- **`src/pages/`**: Actual page components and composition
  - Contains the main UI components for each page
  - Pages compose layouts (Header, Footer, Wrapper) with sections
  - Example: `src/pages/homes/home-1.tsx` composes the homepage with HeroBanner, TourOne, etc.

### Key Directories

- **`src/components/`**: Reusable UI components organized by feature (hero-banner, tour, booking, form, etc.)
- **`src/layouts/`**: Headers, footers, and the Wrapper component
- **`src/data/`**: Static data files for tours, blogs, products
- **`src/redux/`**: Redux store with booking slice for managing tour booking state
- **`src/lib/`**: Shared utilities (Prisma client singleton)
- **`src/types/`**: TypeScript type definitions
- **`src/app/api/`**: API routes for server-side operations
- **`public/locales/`**: Translation files for i18n (organized by locale)

### Layout Pattern

All pages use the `Wrapper` component which provides:
- Preloader on initial load (500ms delay)
- AOS (Animate On Scroll) initialization
- Scroll to top on route changes
- Toast notifications container

Pages typically compose: `Wrapper > Header > main > sections > Footer`

### State Management

Redux Toolkit is configured with a single booking slice:
- **Store location**: `src/redux/store.ts`
- **Root reducer**: `src/redux/rootReducer.ts` combines all slices
- **Booking slice** (`src/redux/slices/bookingSlice.ts`): Manages tour selection, tickets (adult/kid/child), check-in date, add-ons, and total cost calculation
- Wrapped in `ReduxProvider` at `src/app/redux-provider.tsx`

### Database (Prisma)

- **Schema**: `prisma/schema.prisma`
- **Database**: PostgreSQL
- **Models**: `Interesado` (lead capture for interested customers)
- **Singleton pattern**: Use `prisma` from `src/lib/prisma.ts` to avoid creating multiple instances
- **Environment**: Connection string in `DATABASE_URL` env variable

**Workflow for schema changes:**
```bash
# After modifying schema.prisma
npx prisma generate
npx prisma migrate dev --name description_of_change
```

### Internationalization

- **Library**: next-i18next
- **Config**: `next-i18next.config.mjs`
- **Supported locales**: en (default), es, de, fr, it
- **Translation files**: `public/locales/{locale}/common.json`
- **Redirects**: Language-specific routes redirect to default locale (configured in `next.config.mjs`)

### Path Aliases

Configured in `tsconfig.json`:
- `@/*` → `src/*`
- `@/assets/*` → `public/assets/*`
- `@/i18n` → `src/config/i18n.mjs`

## Important Patterns

### API Routes

Server-side API endpoints in `src/app/api/`:
- `POST /api/interesados` - Save interested customer leads to database
- `POST /api/contact` - Handle contact form submissions

All API routes use `export const dynamic = 'force-dynamic'` to ensure server-side execution.

### Data Architecture

Static data is defined in `src/data/`:
- `tour-packages-data.ts` - Tour listings with pricing, duration, descriptions
- `blog-data.ts` - Blog posts
- `product-data.ts` - Products if applicable

Types are defined in corresponding files in `src/types/`.

### Third-Party Integrations

Loaded in `src/app/layout.tsx`:
- **FareHarbor**: Booking widget (`fareharbor.com/embeds/api/v1`)
- **Google Tag Manager**: Analytics (GTM-MNND63RC)
- **Hotjar**: User behavior analytics (hjid: 6409982)
- **Facebook Pixel**: Conversion tracking (ID: 1209549273970070)
- **Elfsight**: Review widget

## Notes

- The project uses SCSS for styling (`*.scss` files)
- Bootstrap 5.3.3 is included and initialized in Wrapper component
- Dynamic imports are used for client-only components to avoid SSR issues
- The site is optimized for SEO with structured data (JSON-LD) in layout
