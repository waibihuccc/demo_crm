# MVP Scope

## Phase 1 Goal

Deliver a maintainable CRM MVP that supports the main path from first commercial contact to signed work and delivery handoff.

## Essential Modules

- `companies`
  - Customer organizations and core account information.
- `contacts`
  - People, roles, responsibilities, and communication details.
- `leads`
  - Initial demand entry and qualification.
- `opportunities`
  - The core sales object for requirement tracking, stage management, and deal progress.
- `follow-ups`
  - Communication history, next steps, reminders, and meeting outcomes.
- `quotations`
  - Proposal and pricing records with basic version tracking.
- `contracts`
  - Commercial agreement records after quotation acceptance or negotiation.
- `projects`
  - Post-sale delivery handoff and early-stage project tracking.

## Intentionally Simplified In MVP

- Basic internal roles for a small team only, not full enterprise RBAC.
- Quotation headers, totals, notes, and versions rather than detailed line items or a costing engine.
- Lightweight project handoff and status tracking rather than full project operations management.
- No external integrations in phase 1.
- No advanced dashboards, approval engine, or automation engine in phase 1.

## Deferred Until Later

- Structured quotation line items and more detailed pricing breakdowns.
- Detailed bill-of-materials style quotation lines and cost modeling.
- Procurement and supplier workflows.
- Delivery scheduling and labor/resource planning.
- Payment, invoicing, and finance integration.
- Advanced reporting, forecasting, and BI dashboards.
- External messaging, email sync, ERP integration, and e-signature workflows.
