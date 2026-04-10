# Conventions

## Naming Rules

- Use singular names for domain entities: `Company`, `Contact`, `Lead`, `Opportunity`.
- Use plural names for modules and route segments: `companies`, `contacts`, `leads`, `opportunities`.
- Use `PascalCase` for React components, types, and entity models.
- Use `camelCase` for TypeScript fields, variables, and function names.
- Use lowercase `snake_case` values for status enums.
- Use `kebab-case` for documentation and general file names unless framework conventions prefer a different pattern.

## Folder Rules

- `src/app/` holds routes, layouts, and entry points.
- `src/modules/` holds business modules.
- `src/components/` holds shared UI components.
- `src/server/` holds application services, commands, queries, and domain workflows.
- `src/lib/` holds shared utilities and infrastructure helpers.
- `src/types/` holds shared type definitions and DTOs.
- `src/config/` holds application configuration and constants.
- `prisma/` is reserved for schema and migrations later.
- `tests/` is reserved for integration-first verification.

## Module Boundaries

Initial business modules:

- `companies`
- `contacts`
- `leads`
- `opportunities`
- `follow-ups`
- `quotations`
- `contracts`
- `projects`

Boundary decisions:

- `follow-ups` belong to the sales process and should not become a generic activity engine in phase 1.
- `projects` are for delivery handoff and status tracking only in phase 1.
- `quotations` stay header-level in phase 1 and do not include detailed pricing lines.
- `contracts` remain lightweight business records in phase 1 without attachments or version history.

## Validation Rules For Early Work

- Prefer integration-oriented verification first.
- Avoid introducing deferred features during bootstrap or early MVP implementation.
- Keep status transitions explicit and readable.
- Keep module ownership clear so business logic does not leak across unrelated modules.

