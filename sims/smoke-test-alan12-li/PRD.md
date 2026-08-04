# Smoke Test Sim

A throwaway PRD proving the auto-merge lane works, following the professor's own smoke test.

## What this tests

- A pull request whose every changed file stays inside a single `sims/<folder>/`
  path is merged automatically by the repository workflow.
- The PR must be a regular (non-draft) pull request; the auto-merge workflow
  skips drafts.
