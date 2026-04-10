# AGENTS.md

## Purpose

This repository is for a project-based B2B CRM. All work must stay scoped to this CRM product, its supporting documentation, and its implementation plan.

## Collaboration Model

- Codex is the implementation lead inside this repository.
- The human user provides business goals, corrections, scope decisions, and product judgment.
- ChatGPT can help refine prompts and review Codex outputs, but repository changes should stay aligned with the repo plan and rules.

## Working Rules

- Use a plan-first workflow for any non-trivial task.
- Keep changes small, reviewable, and scoped to a single purpose.
- Explain the intended approach before major edits, refactors, or structure changes.
- End each task with a concise summary of what changed, what was verified, and any remaining risks or open questions.
- Prefer maintainable enterprise-style code over toy demos and shortcut-heavy prototypes.
- Avoid unnecessary complexity, speculative abstractions, and unrelated cleanup.

## Repo Boundaries

- Do not introduce work unrelated to this CRM.
- Do not jump ahead of the approved phase plan without explicit direction.
- Respect confirmed MVP constraints:
  - `Project` is lightweight handoff and status tracking only in phase 1.
  - `Quotation` is header-level only in phase 1.
  - Permissions stay minimal for an internal small team in phase 1.

