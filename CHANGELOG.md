# Changelog

## 2026-07-09

### Foundation Map Clarity Review

- Reviewed `docs/FOUNDATION.md` for new-visitor clarity and alignment with Luna's current public docs and dashboard files.
- Made tiny wording updates so the foundation map more clearly connects the public docs, `project.json` dashboard content, and `index.html` dashboard page without adding a new plan or feature.
- Updated `project.json` and `STATE.md` so the newest completed run and next step stay aligned around resting or reviewing public prototype readiness before adding any new foundation, documentation, visual, or dashboard feature.

### Foundation Map

- Added `docs/FOUNDATION.md` as a short public-safe guide to how Luna's current foundation docs and dashboard files fit together.
- Updated the README Where to Look Next section so new visitors can find the foundation map.
- Updated `project.json` and `STATE.md` so the newest completed run and next step stay aligned around resting or reviewing `docs/FOUNDATION.md` before adding another foundation, documentation, visual, or dashboard feature.

### Mobile Readability Review

- Reviewed the restrained dashboard CSS against the visual identity note for calm warmth, readable cards, subtle Next Action focus, uncluttered visual warmth, and mobile readability.
- Added one tiny CSS adjustment in `index.html` so Garden Cycle and Garden Path cards stack more calmly on narrow screens.
- Updated `project.json` and `STATE.md` so the newest completed run and next step stay aligned around rest or documentation/foundation review before any additional visual styling.

### Restrained Dashboard Visual Polish

- Applied a small CSS-only polish to `index.html` so the dashboard feels calmer and warmer without adding new sections, content, images, icons, animations, or JavaScript behavior.
- Gave the existing Next Action card a subtle lantern-like focus while keeping cards clear and readable.
- Updated `project.json` and `STATE.md` so the newest completed run and next step stay aligned around resting or reviewing the CSS polish before adding any additional visual styling.

### Visual Identity Clarity Review

- Reviewed `docs/VISUAL_IDENTITY.md` against Luna's current direction as a small public dashboard prototype that may later become a calm companion for small projects.
- Made two tiny wording clarifications so visual personality supports returning to a small project, finding one safe next step, and avoiding overwhelm.
- Updated `project.json` and `STATE.md` so the newest completed run and next step stay aligned around rest or documentation clarity before any visual identity styling.

### Visual Identity Note

- Added `docs/VISUAL_IDENTITY.md` as a short, public-safe note about Luna's future calm, warm visual and interface personality direction.
- Clarified desired visual qualities, what to avoid, and how interface voice can be gentle while staying practical and useful.
- Updated `README.md`, `project.json`, and `STATE.md` so the newest completed run and next step stay aligned around resting or reviewing the visual identity note before any visual identity feature or CSS polish.

### User Guidance Clarity Review

- Reviewed `docs/USER_GUIDANCE.md` against Luna's current direction as a small public dashboard prototype that may later become a calm companion for small projects.
- Made two tiny wording clarifications so the note stays beginner-friendly and emphasizes returning, choosing, and continuing without requiring skill at prompting.
- Updated `project.json` and `STATE.md` so the newest completed run and next step stay aligned around resting or documentation clarity before any user-guidance feature.

### User Guidance Note

- Added `docs/USER_GUIDANCE.md` as a short, public-safe note about approaching Luna without needing to be good at prompting.
- Explained that Luna should guide users with simple questions, quick-return options, and one safe next action instead of acting like a blank "ask me anything" chatbot.
- Updated `README.md`, `project.json`, and `STATE.md` so the newest completed run and next step stay aligned around resting or reviewing the user guidance note before any user-guidance feature.

## 2026-07-08

### Stewardship Note

- Added `docs/STEWARDSHIP.md` as a short, public-safe design note for a possible future small-project stewardship loop.
- Described the loop as Project State -> Mode -> Reason -> One Next Action -> Record -> Rest, with calm beginner-friendly mode descriptions.
- Updated `README.md`, `project.json`, and `STATE.md` so the newest completed run and next step stay aligned around resting or reviewing the stewardship note before any stewardship feature.

### Roadmap Vision Alignment

- Aligned `ROADMAP.md` with the README longer-term vision for Luna as a small public dashboard prototype that may later become a calm companion for small projects.
- Kept the near-term roadmap focused on the current dashboard, one clear Next Action, and the one-small-change rhythm instead of adding a larger app plan.
- Updated `project.json` and `STATE.md` to record this as the latest completed run and set the next step to rest and review.

### README Vision Wording Review

- Reviewed the README longer-term vision note against the current dashboard, roadmap, rules, and one-small-change rhythm.
- Trimmed one tiny wording mismatch in `README.md` so the note points to small projects instead of implying a broader new project category.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### README Longer-Term Vision

- Added a short public-safe longer-term vision note to `README.md` that describes Luna as a small dashboard prototype with a calm project companion direction.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### v0.2 Dashboard Flow Review

- Moved Project Health below Recent Runs in `index.html` so first-time visitors reach Current Goal, Last Completed Run, and Next Action before the extra health summary.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Dedicated Reflection Card

- Added a dedicated Reflection Card renderer in `index.html` that reads from `project.json` and shows calm fallback text if no reflection exists.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Dashboard Card Rendering Helper

- Refactored repeated card item rendering in `index.html` to use one small helper for consistent dashboard cards without changing the current appearance or behavior.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Project Health Dashboard

- Added a beginner-friendly Project Health card to `index.html` that reads from `project.json` and shows current status, total completed runs, latest run date, current goal, and Next Action with simple fallback text.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Recent Runs Dashboard

- Added a small Recent Runs section to `index.html` that reads from `project.json` statusHistory, shows only the three newest entries, and includes a simple empty-state fallback.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### How to Use Luna Card

- Added a tiny How to use Luna card near the top of `index.html` with four beginner-friendly steps.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Next Action Glossary

- Added a beginner-friendly glossary entry in `project.json` explaining Next Action as Luna's single safest small suggested task.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Review Before Changing Checklist

- Added a small README checklist reminding new contributors to read the dashboard from Welcome through Next Action, check `STATE.md`, make one small useful change, and update `STATE.md`, `CHANGELOG.md`, and `project.json` together.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### v0.1 Read-through Note

- Added a calm README note asking beginners to read the v0.1 dashboard slowly from Welcome through Next Action before choosing any new work.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### README Where to Look Next

- Added `RULES.md` to the `README.md` Where to Look Next section so beginners can find Luna's one-small-change rhythm and alignment expectations.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### README Dashboard Description

- Refreshed the `README.md` Dashboard section so it describes the current v0.1 flow: Welcome, Status, Current Goal, Last Completed Run, Next Action, and the Philosophy Garden sections.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### v0.1 Milestone Note

- Added a short v0.1 milestone note to `README.md` explaining Luna's plain-language welcome, clear Next Action, and Philosophy Garden cycle.
- Added a small `ROADMAP.md` note that the first stable dashboard loop is in place and future work should preserve the one-step-at-a-time rhythm.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Garden Cycle Wording

- Clarified the Garden Cycle intro in `index.html` so beginners know to follow one Philosophy Garden step at a time.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Next Garden Update Wording

- Clarified the Next Garden Update intro in `index.html` so beginners know to choose one general, public-safe action before adding anything bigger.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Top Dashboard Flow

- Moved the Next Action card directly after Last Completed Run in `index.html` so the top of the dashboard flows from Welcome to Status, Current Goal, Last Completed Run, and one clear action.
- Added one Welcome note to the dashboard guide in `project.json` so first-time readers know why the page starts there.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

### Welcome

- Added a small `welcome` object to `project.json` with a plain-language title and sentence for first-time visitors.
- Updated `index.html` to show the welcome section near the top of the dashboard before the project status.
- Updated `project.json` and `STATE.md` to record this as the latest completed run.

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
