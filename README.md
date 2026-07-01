# Campusify

Campusify, also known as Campusitory, is a global academic platform connecting institutions, students, lecturers, researchers, professional organizations, academic opportunities, live learning, research materials, student activities, secure access, and multilingual academic discovery.

## Project Representation

Campusify development architecture is represented by **ETL GIS Consulting LLC**, with **Paul A. K. Iyogun** serving as Project Architect and Development Lead.

Every development decision should preserve the product posture as secure global academic infrastructure, not a generic learning management system.

## Original 11-Module Blueprint

All product work must map to the master blueprint in [`data/blueprint.ts`](data/blueprint.ts) and the public blueprint route at `/blueprint`.

1. Global Institutions
2. Registration and Academic Identity
3. Lecture Board Room
4. Personal Page and Academic Social Layer
5. Scholarship, Grants, Loans, and Jobs Gantry
6. Thesis, Books, and Academic Materials
7. Professional and Chartered Organizations
8. Student Union, Games, and Competitions
9. AI Search Engine and Scheduler
10. Subscriptions, Restricted Access, and Identity Protection
11. International Language Console

## Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel-ready
- **Data:** Typed local data for early validation before external services

## Current Platform Surfaces

- `/blueprint` master operating map
- `/dashboard` 11-module platform command center
- `/directory` institution discovery and filters
- `/ai-engine` academic guidance preview
- `/campus-room` lecture board room direction
- `/research` research and academic materials direction
- `/language` international language console direction
- `/pricing` access, restricted pages, and subscription direction

## Project Structure

```txt
app/                     App Router pages, layout, and global styles
app/auth/                Authentication placeholder route
components/layout/       Shared layout components
components/ui/           Reusable interface components
data/                    Typed product, blueprint, and preview data
docs/                    Delivery governance, roadmap, and architecture notes
lib/                     Constants, guidance logic, and shared configuration
types/                   Shared TypeScript types
public/                  Static assets
```

## Development Governance

All contributors must follow the Campusify development map in [`docs/DEVELOPMENT_MAP.md`](docs/DEVELOPMENT_MAP.md) and the data engine strategy in [`docs/DATA_ENGINE.md`](docs/DATA_ENGINE.md).

Every pull request must state which of the 11 modules it advances and must show measurable improvement in at least one area:

- Frontend capability
- Backend or data capability
- Platform quality

A PR that does not improve user value, system capability, delivery quality, or production readiness should not be merged.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run static checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Next Steps

1. Build the Lecture Board Room prototype with lecture notes, attendance, assignments, quiz locker, Q&A, and chat.
2. Build Registration and Academic Identity with the required profile fields.
3. Expand the Institution Directory with more free, lawful, and attributed records.
4. Build the Opportunity Gantry with scholarships, grants, loans, jobs, and postgraduate offers.
5. Add the source registry and verification model for every free data source.
