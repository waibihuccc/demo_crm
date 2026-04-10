export const moduleNavigation = [
  {
    label: "Companies",
    summary: "Customer organizations",
    description:
      "Company master records and account context for the core B2B sales workflow."
  },
  {
    label: "Contacts",
    summary: "People and roles",
    description:
      "Primary business contacts, decision roles, and relationship context."
  },
  {
    label: "Leads",
    summary: "Initial demand capture",
    description:
      "Lead intake and qualification before conversion into structured opportunities."
  },
  {
    label: "Opportunities",
    summary: "Sales pipeline",
    description:
      "The primary commercial workflow from discovery through negotiation and win/loss."
  },
  {
    label: "Quotations",
    summary: "Header-level proposals",
    description:
      "Versioned quotation records with totals and notes, without detailed costing lines in v1."
  },
  {
    label: "Contracts",
    summary: "Signed business records",
    description:
      "Single-record contract tracking for accepted commercial work in phase 1."
  },
  {
    label: "Projects",
    summary: "Delivery handoff",
    description:
      "Lightweight post-sale handoff and status tracking, not full project management."
  }
] as const;
