# Recommended Architecture

## Suggested Stack

- Frontend: `Next.js`
- Language: `TypeScript`
- Backend: Next.js server routes and server-side application logic for the MVP
- Database: `PostgreSQL`
- ORM: `Prisma`
- Validation: shared schema validation with `Zod`

## Why This Stack Fits

- It keeps the project in a single full-stack repository, which is easier to maintain at the start.
- It has a strong ecosystem and practical learning value for a real internal business application.
- It fits a domain with clear relational data and many linked business records.
- It supports fast iteration for admin-style UI such as forms, tables, detail pages, and workflow transitions.

## Architectural Principles

- Start as a modular monolith, not a microservice system.
- Keep business logic readable and explicit.
- Preserve clear boundaries between UI, application logic, and data access.
- Prefer maintainability and traceability over clever abstractions.
- Optimize for reviewable increments and easy verification.

## Recommended App Shape

- `src/app/`
  - Routes, pages, layouts, and entry points.
- `src/modules/`
  - Business modules such as `companies`, `contacts`, and `opportunities`.
- `src/components/`
  - Shared UI components.
- `src/server/`
  - Application services, commands, queries, and business workflows.
- `src/lib/`
  - Shared utilities and infrastructure helpers.
- `src/types/`
  - Shared type definitions and DTOs.
- `prisma/`
  - Schema and future migrations.
- `tests/`
  - Integration and high-value business behavior tests.

## Authentication Note

The MVP should use a minimal internal-team authentication and permission model. It should support a small internal team without introducing full RBAC or heavy organizational access modeling in phase 1.
