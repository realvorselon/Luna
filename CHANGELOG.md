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
- Updated the dashboard status to `Resting after a good run`.
- Updated `STATE.md` to remember this status refresh run.
- Moved the Decision Log out from under Future Ideas and into its own dashboard section.
- Updated `project.json` and `STATE.md` to remember this dashboard organization run.
- Kept Future Ideas and Decision Log as separate dashboard sections with matching list styling.
- Updated `project.json` and `STATE.md` to remember this visual consistency run.

- Added an `ideaQueue` array to `project.json` with three small candidate next tasks.
- Updated `index.html` to show Idea Queue as its own dashboard section.
- Updated `STATE.md` to remember this idea queue run.

## Next

- Pick one small idea from the Idea Queue and complete it safely.
