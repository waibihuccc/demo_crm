# Data Model Draft

## Shared Base Fields

All phase-1 entities should start with:

- `id`
- `createdAt`
- `updatedAt`

User attribution fields can wait until authentication details are introduced.

## `Company`

- `id`
- `name`
- `industry` optional
- `website` optional
- `phone` optional
- `email` optional
- `addressLine1` optional
- `addressLine2` optional
- `city` optional
- `state` optional
- `postalCode` optional
- `country` optional
- `notes` optional
- timestamps

## `Contact`

- `id`
- `companyId`
- `name`
- `jobTitle` optional
- `phone` optional
- `email` optional
- `roleLabel` optional
- `isPrimary`
- `notes` optional
- timestamps

## `Lead`

- `id`
- `source` optional
- `companyName`
- `contactName` optional
- `contactPhone` optional
- `contactEmail` optional
- `summary`
- `status`
- `notes` optional
- `convertedCompanyId` optional
- `convertedContactId` optional
- `convertedOpportunityId` optional
- timestamps

Status values:

- `new`
- `qualified`
- `converted`
- `disqualified`

## `Opportunity`

- `id`
- `companyId`
- `primaryContactId` optional
- `name`
- `projectType` optional
- `summary`
- `status`
- `estimatedValue` optional
- `expectedCloseDate` optional
- `probability` optional
- `notes` optional
- timestamps

Status values:

- `new`
- `discovery`
- `solutioning`
- `quoted`
- `negotiation`
- `won`
- `lost`

## `FollowUp`

- `id`
- `opportunityId`
- `companyId` optional
- `contactId` optional
- `type`
- `subject`
- `notes`
- `nextActionAt` optional
- `completedAt` optional
- timestamps

Type values:

- `call`
- `meeting`
- `message`
- `site_visit`
- `proposal_discussion`
- `other`

## `Quotation`

- `id`
- `opportunityId`
- `versionNumber`
- `title`
- `status`
- `totalAmount`
- `currency`
- `notes` optional
- `sentAt` optional
- timestamps

Status values:

- `draft`
- `sent`
- `revised`
- `accepted`
- `rejected`

## `Contract`

- `id`
- `opportunityId`
- `quotationId` optional
- `contractNumber` optional
- `title`
- `status`
- `signedAt` optional
- `startDate` optional
- `endDate` optional
- `totalAmount` optional
- `notes` optional
- timestamps

Status values:

- `draft`
- `reviewing`
- `signed`
- `cancelled`

Phase-1 constraints:

- single active contract record only
- no attachments
- no version history

## `Project`

- `id`
- `companyId`
- `opportunityId`
- `contractId` optional
- `quotationId` optional
- `name`
- `status`
- `startDate` optional
- `targetCompletionDate` optional
- `handoffNotes` optional
- timestamps

Status values:

- `initiated`
- `planning`
- `in_delivery`
- `completed`
- `paused`

Phase-1 constraint:

- lightweight handoff and status tracking only

## Relationship Draft

- `Company` 1:N `Contact`
- `Company` 1:N `Opportunity`
- `Lead` may convert into `Company`, `Contact`, and `Opportunity`
- `Opportunity` 1:N `FollowUp`
- `Opportunity` 1:N `Quotation`
- `Opportunity` 1:0..1 `Contract`
- `Contract` 1:0..1 `Project`
- `Project` should retain source traceability to `Opportunity`, `Quotation`, and `Contract`

