# Changelog

## 2026-07-07

- Created the `Luna` repository.
- Added the initial `README.md`.
- Added `RULES.md` to define how each autonomous run should behave.
- Added `STATE.md` so the project can remember its identity and next step.
- Added `ROADMAP.md` to keep future changes small and understandable.
- Added `index.html` as the first tiny dashboard page.
- Updated `STATE.md` after the first dashboard run.
- Cleaned up `index.html` so the dashboard has one Current Goal, one Last Completed Run, and one Next Step section.
- Updated `STATE.md` to remember the dashboard cleanup run.
- Added `project.json` with Luna's current goal, last completed run, next step, and future ideas.
- Updated `index.html` to load dashboard sections from `project.json`.
- Updated `STATE.md` to remember the project data run.
- Added a `decisionLog` array to `project.json` explaining why Luna is growing as a dashboard first.
- Updated `index.html` to show the decision log under Future Ideas.
- Refreshed the future ideas list now that the decision log exists.
- Updated `STATE.md` to remember the decision log run.
- Added a simple `status` field to `project.json`.
- Updated `index.html` to show the project status near the top of the dashboard.
- Updated `STATE.md` to remember the status indicator run.

## Next

- Keep using small dashboard updates to make Luna easier to understand and maintain.
