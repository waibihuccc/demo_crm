# Decisions And Remaining Questions

## Confirmed Decisions

- The MVP `Project` module will stop at lightweight handoff and status tracking.
- Phase-1 `Quotation` records will support header information, total amount, notes, and versioning only.
- Permissions will use a minimal internal small-team model rather than complex RBAC.
- The default implementation stack is `Next.js + TypeScript + PostgreSQL + Prisma`.
- Contract attachments or file references are deferred from MVP.
- Contract version history is deferred from MVP and phase 1 uses a single active contract record.
- Early testing should optimize around integration tests first.
- Advanced list filtering, search, and pagination are deferred until after the core workflows work.

## Remaining Questions

- How common are multiple parallel opportunities or projects for the same company?
- Does the business need contract approval flow in the MVP, or can contracts remain a simple lifecycle record in phase 1?

## Recommended Execution Order

1. Confirm business boundaries and the MVP status model.
2. Confirm the stack and repository direction.
3. Define the first implementation-ready data model.
4. Bootstrap the application and database foundation.
5. Build customer records before sales workflow modules.
6. Build quotations and contracts after the sales pipeline is working.
7. Add delivery handoff after the commercial path is stable.

## Immediate Next Step After Approval

The first implementation step should be project bootstrap work only:

- initialize the chosen stack,
- establish the repository structure,
- define the first database schema,
- create shared layout and infrastructure foundations,
- avoid building multiple business modules at once.
