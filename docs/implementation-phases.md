# Implementation Phases

## Phase 0: Discovery And Foundation

- Confirm business terminology and MVP boundaries.
- Confirm the core entity model and status flows.
- Confirm the technical stack and repository shape.
- Establish documentation and implementation rules.

## Phase 1: Project Bootstrap

- Initialize the app shell and development tooling.
- Set up database access and ORM configuration.
- Establish a base layout, navigation pattern, and shared UI primitives.
- Add a minimum verification path for the project.

## Phase 2: Customer Base

- Build `companies`.
- Build `contacts`.
- Support account and contact relationship management.

## Phase 3: Sales Pipeline

- Build `leads`.
- Build `opportunities`.
- Build `follow-ups`.
- Support lead qualification and opportunity progression.

## Phase 4: Commercial Workflow

- Build `quotations`.
- Add quotation version handling with header-level pricing only.
- Build `contracts`.
- Support conversion from active opportunity to signed business.

## Phase 5: Delivery Handoff

- Build `projects`.
- Support creation of a delivery project from a won deal.
- Preserve commercial traceability into delivery.
- Keep the first version focused on handoff and status tracking, not full project management.

## Phase 6: Hardening

- Add stronger validation around state changes.
- Expand automated verification.
- Improve forms, tables, filters, and detail flows.
- Resolve naming, consistency, and maintainability issues.
