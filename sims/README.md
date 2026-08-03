# Sims

One folder per sim. This is where Project 2 lives, starting with the PRD
and growing into the sim's source code.

## The convention

- Folder name: your sim's title, lowercased and hyphenated —
  `sims/the-last-number/`. If the name is already taken, add your GitHub
  login: `sims/the-last-number-adalovelace/`.
- First file: `PRD.md` — your filled-in copy of
  `resources/prd-template-icerynk-sim.md` from the course repository.
- Source code, when it exists, lives in the same folder (a `src/`
  subfolder keeps it tidy). The PRD and the code that claims to implement
  it stay together, so a reader can check one against the other.

## The pull request

- Title: your sim's title.
- One sim folder per pull request — nothing else in the diff.
- Pull requests that keep every change inside a single `sims/<folder>/`
  are merged automatically by a repository workflow. Touch anything
  outside your folder and a human has to look, which is slower.
