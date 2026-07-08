# Changelog

## 2026-07-08

### Garden Cycle

- Polished the Garden Cycle display in `index.html` so each cycle step reads as a small labeled card like the Garden Path.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

- Added a small `gardenCycle` array to `project.json` with the current Philosophy Garden flow in order.
- Updated `index.html` to show a Garden Cycle section after Next Garden Update and before Garden Path.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Next Garden Update

- Added a tiny `nextGardenUpdate` object to `project.json` with one public-safe Philosophy Garden title, purpose, and suggested action.
- Updated `index.html` to show the Next Garden Update near the Garden Review and Garden Path sections.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Beginner Documentation

- Added a dashboard guide note in `project.json` so beginners know they can read from top to bottom and stop at Next Action if they only need one small step.
- Updated `STATE.md` and `project.json` to record this as the latest completed run.

### Creative Growth

- Added a public-safe beginner note to the Reflection Card so visitors know they can answer with a general project idea instead of private details.
- Updated `index.html` to show the new Reflection Card beginner note.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

- Added a tiny `gardenReview` object to `project.json` so Luna can review what the first Reflection Card teaches before choosing the next gentle update.
- Updated `index.html` to show a small Garden Review section near the Reflection Card and Garden Path sections.
- Updated `STATE.md` and `ROADMAP.md` to remember that Luna can review a reflection card before choosing the next gentle update.

- Added a tiny `gardenPath` array to `project.json` so the Philosophy Garden can grow through a few slow, public-safe steps.
- Updated `index.html` to show a small Garden Path section near the Creative Seed and Reflection Card sections.
- Updated `STATE.md` and `ROADMAP.md` to remember Luna's simple creative growth path.

### Dashboard Sections

- Added a tiny `reflectionCard` object for the first Philosophy Garden reflection card to `project.json`.
- Updated `index.html` to show a small Reflection Card section near the Creative Seed section.
- Updated `STATE.md` to remember this public-safe reflection card.

- Added a tiny `creativeSeed` object for Philosophy Garden to `project.json`.
- Updated `index.html` to show a small Creative Seed section on the dashboard.
- Updated `STATE.md` to remember this public-safe creative direction.

- Improved the `Choose Next Action` button so it chooses from the other Idea Queue items before repeating the previous suggestion when more than one idea is available.
- Updated `STATE.md` to remember this small interaction improvement.
- Added a small `Choose Next Action` button to `index.html` that suggests one item from the existing Idea Queue without saving changes back to `project.json`.
- Updated `STATE.md` to remember this interactive dashboard feature.

### Polish/Maintenance

- Refocused the Next Step and Next Action in `project.json` toward using the Garden Review before any new Philosophy Garden prompt or reflection card.
- Updated `STATE.md` and `project.json` to record this as the latest completed run.
- Added a sync rule to `RULES.md` so future completed runs keep `project.json`, `STATE.md`, and `CHANGELOG.md` aligned around the same newest completed run.
- Updated `project.json` and `STATE.md` to record this rule addition as the latest completed run.
- Reviewed the Garden Review dashboard display and added a short starting cue in `index.html` so new visitors understand it before reading the lesson.
- Updated `STATE.md` to remember this Garden Review clarity pass.
- Improved the Garden Path display in `index.html` so each step appears as a small numbered path card instead of a plain list.
- Updated `STATE.md` to remember this visual Garden Path improvement.
- Improved the Garden Path dashboard note so new visitors understand it as simple, public-safe steps without private details.
- Updated `STATE.md` to remember this clarity review.
- Improved the Local Setup helper sentence in `index.html` so beginners know the local preview stays on their own computer and does not publish anything.
- Updated `STATE.md` to remember this wording improvement.
- Refreshed the Next Action card in `project.json` after the first Reflection Card so it recommends a calm clarity review before adding more.
- Updated `STATE.md` to remember this Next Action refresh.
- Refreshed the Next Action card in `project.json` so it suggests choosing one tiny public-safe creative direction seed for Luna.
- Updated `STATE.md` to remember this Next Action refresh.
- Added a beginner-friendly Near Term note to `ROADMAP.md` about choosing one small PR-sized task and keeping related project files aligned.
- Updated `STATE.md` to remember this roadmap documentation improvement.
- Refreshed the Next Action card in `project.json` with a concrete Future Ideas roadmap review task.
- Updated `STATE.md` to remember this Next Action refresh.
- Cleaned up Future Ideas in `project.json` so the list removes completed or outdated items and keeps three realistic growth directions.
- Updated the Next Action and Idea Queue toward one gentle beginner documentation improvement.
- Updated `STATE.md` to remember this Future Ideas cleanup.

## 2026-07-07

### Foundation

- Created the `Luna` repository.
- Added the initial `README.md`.
- Added `RULES.md` to define how each autonomous run should behave.
- Added `STATE.md` so the project can remember its identity and next step.
- Added `ROADMAP.md` to keep future changes small and understandable.
- Added `index.html` as the first tiny dashboard page.
- Updated `STATE.md` after the first dashboard run.
- Cleaned up `index.html` so the dashboard has one Current Goal, one Last Completed Run, and one Next Step section.
- Updated `STATE.md` to remember the dashboard cleanup run.

### Dashboard Data

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

### Dashboard Sections

- Moved the Decision Log out from under Future Ideas and into its own dashboard section.
- Updated `project.json` and `STATE.md` to remember this dashboard organization run.
- Kept Future Ideas and Decision Log as separate dashboard sections with matching list styling.
- Updated `project.json` and `STATE.md` to remember this visual consistency run.
- Added an `ideaQueue` array to `project.json` with three small candidate next tasks.
- Updated `index.html` to show Idea Queue as its own dashboard section.
- Updated `STATE.md` to remember this idea queue run.
- Refined the Idea Queue with a short dashboard description and three safe candidate next tasks.
- Updated `STATE.md` to remember this Idea Queue refinement run.
- Added a `glossary` array to `project.json` with four beginner-friendly project terms.
- Updated `index.html` to show Glossary as its own dashboard section.
- Updated `STATE.md` to remember this glossary run.
- Added a `localSetup` array to `project.json` with beginner-friendly local server steps.
- Updated `index.html` to show Local Setup as its own dashboard section.
- Updated `STATE.md` to remember this local setup run.
- Added a `dashboardGuide` array to `project.json` with beginner-friendly notes for reading the dashboard.
- Updated `index.html` to show How to Read This Dashboard as its own small section.
- Updated `STATE.md` to remember this dashboard guide run.

### Polish/Maintenance

- Added a calm visual polish pass to the dashboard spacing, section readability, and project status styling.
- Updated `STATE.md` to remember this visual polish run.
- Grouped the 2026-07-07 changelog entries into clear subsections without removing project history.
- Updated `STATE.md` to remember this changelog maintenance run.
- Tidied `ROADMAP.md` by moving completed early tasks into a Completed section and narrowing Near Term to realistic next steps.
- Updated `STATE.md` to remember this roadmap maintenance run.
- Synced `project.json` with the roadmap maintenance run and refreshed realistic next steps.
- Updated `STATE.md` to remember this project data sync run.
- Refreshed `README.md` to match the current Luna dashboard.
- Refreshed the Idea Queue in `project.json` with three realistic small next tasks.
- Updated `STATE.md` to remember this Idea Queue refresh run.
- Added an `ideaQueueGuide` field to `project.json` with public-safe notes for choosing one small next task.
- Updated `index.html` to show the Idea Queue guide near the Idea Queue.
- Updated `STATE.md` to remember this Idea Queue guide run.
- Added a `statusHistory` field to `project.json` with short public project mood notes.
- Updated `index.html` to show Status History as a small dashboard section.
- Updated `STATE.md` to remember this status history run.
- Improved one dashboard guide note so the Status section is easier for beginners to understand.
- Updated `STATE.md` to remember this wording improvement run.
- Improved the dashboard Next Step wording so it is clearer for beginners.
- Updated `STATE.md` to remember this next-step wording improvement.
- Refreshed the Idea Queue in `project.json` after completed tasks with three fresh beginner-friendly next tasks.
- Updated `STATE.md` to remember this Idea Queue refresh run.
- Added a short beginner-friendly README note explaining how to read the dashboard sections.
- Updated `STATE.md` to remember this README note run.
- Added a `nextAction` object to `project.json` with a beginner-friendly title, description, and reason.
- Updated `index.html` to show a small Next Action card near the top of the dashboard.
- Updated `STATE.md` to remember this Next Action card run.
- Added a beginner-friendly `status` field to the `nextAction` object in `project.json`.
- Updated `index.html` to show the Next Action status gently inside the card.
- Updated `STATE.md` to remember this Next Action status run.
- Added one clear `decisionLog` entry explaining why the Next Action card helps beginners choose one clear next move.
- Cleaned up duplicate Next Action decision log wording in `project.json`.
- Updated `STATE.md` to remember this small cleanup.
- Refreshed the Next Action card in `project.json` so it points to reviewing Future Ideas against the roadmap.
- Updated `STATE.md` to remember this Next Action refresh.

## Next

- Use the Garden Review before adding another tiny Philosophy Garden prompt.
- Keep dashboard wording calm, public-safe, and beginner-friendly.
