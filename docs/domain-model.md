# Domain Model

## Core Entities

- `Company`
  - The customer organization.
- `Contact`
  - A person associated with a company.
- `Lead`
  - An initial inbound or outbound sales lead.
- `Opportunity`
  - A structured commercial pursuit for a concrete customer need.
- `FollowUp`
  - A record of communication, progress, or next action.
- `Quotation`
  - A priced proposal related to an opportunity.
- `Contract`
  - A formal commercial agreement.
- `Project`
  - A delivery record created after a deal is won.

## Key Relationships

- A `Company` has many `Contacts`.
- A `Company` has many `Opportunities`.
- A `Lead` may be converted into a `Company`, one or more `Contacts`, and an `Opportunity`.
- An `Opportunity` has many `FollowUps`.
- An `Opportunity` has many `Quotations`.
- An `Opportunity` may result in one `Contract`.
- A `Contract` may initiate one `Project`.
- A `Project` should retain traceability back to its source `Opportunity`, `Quotation`, and `Contract`.

## B2B Workflow

1. A salesperson records a `Lead`.
2. The team determines whether the customer already exists as a `Company`.
3. The team creates or links `Contact` records.
4. A qualified business need becomes an `Opportunity`.
5. The sales team records `FollowUps` during discovery, solutioning, and negotiation.
6. The team issues one or more `Quotations`.
7. If the customer agrees, the business creates a `Contract`.
8. Once signed, the deal becomes a `Project` for delivery handoff and tracking.

## Initial Status Model

- `Lead`
  - `new`, `qualified`, `converted`, `disqualified`
- `Opportunity`
  - `new`, `discovery`, `solutioning`, `quoted`, `negotiation`, `won`, `lost`
- `Quotation`
  - `draft`, `sent`, `revised`, `accepted`, `rejected`
- `Contract`
  - `draft`, `reviewing`, `signed`, `cancelled`
- `Project`
  - `initiated`, `planning`, `in_delivery`, `completed`, `paused`
