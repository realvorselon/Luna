# Roadmap

This roadmap is intentionally small. Luna is a public dashboard prototype right now, and its core is helping someone return to one small project, see where they left off, see what changed last, choose one clear Next Action, know what to ignore for now, record the change, and rest before adding more.

## Completed

- Added a sample project layer boundary note before making the prototype feel less meta.
- Added a human read-through note after the prototype return path wording polish landed.
- Added a returning flow wording boundary note before changing prototype copy.
- Added a returning flow review note before deciding any new prototype behavior.
- Added a prototype rest checkpoint after the first editable saved-and-clearable slice was human tested.
- Added a clear local edits read-through note after human testing confirmed the clear control works.
- Added a tiny clear local edits control for project name and current goal only.
- Added a clear saved values boundary note before implementing any reset or clear controls.
- Added a local saving read-through note after human testing confirmed project name and current goal survive refresh.
- Added tiny local browser saving for project name and current goal only.
- Added a saving boundary note before implementing any persistence.
- Added an editable prototype read-through note after a human checked the first editable prototype UI, preserving the no-save boundary before deciding saving or local storage.
- Added the first tiny editable prototype UI for temporary project name and current goal edits only, without saving or storage.
- Added a first editable field boundary note defining project name and current goal as the only first editable fields for a later run.
- Added a concise prototype read-through note recording that the dashboard-to-prototype path feels calm, static, reversible, and separate before deciding the first editable field boundary.
- Added one quiet Project Trail link from the main dashboard to `prototype.html` so visitors can discover the static first usable prototype preview without competing with Next Action.
- Added `prototype.html` as a separate static, non-editable preview of the first one-project Luna slice using public-safe placeholder data and the same calm return loop.
- Added a first usable prototype slice note defining one local/simple project, the essential project state fields, and the same return loop before any prototype build starts.
- Deepened the dashboard CSS with a more atmospheric moonlit indigo, blue-violet, periwinkle, silver, and small lantern-gold palette while keeping the existing structure and core return loop unchanged.
- Pruned the lower public dashboard support sections so builder/reference material stays off the front page while Recent Runs, Project Health, and one quiet Project Trail note keep a small public trail.
- Pruned the live dashboard Philosophy Garden area into one optional Reflection section so the main page stays focused on the core return loop.
- Added `CHANGELOG.md` to keep a dated project history.
- Created a minimal static dashboard page in `index.html`.
- Added calm styling so the dashboard feels readable and welcoming.
- Showed Luna's current identity, goal, last completed run, next suggested step, and quiet shelves for what can wait.
- Added structured project data in `project.json` for the dashboard to read.
- Kept Idea Queue, Decision Log, Glossary, and Local Setup as reference material in project data/docs instead of making them dominate the public dashboard.
- Added a small Next Action card to help beginners choose one clear safe next task.
- Added a small Ignore For Now card near Next Action so returners can see what can wait without turning it into a backlog or feature board.
- Added a small Record the Change card near Next Action and Ignore For Now so returners know how to update the public project trail without starting a logging system or task tracker.
- Added a small Current Mode card set to Rest near the top dashboard flow so beginners can see Luna is pausing without turning modes into a workflow engine.
- Added a prototype readiness note marking the self-demo dashboard as coherent enough for the core return loop before a tiny local usable prototype for one project.
- Started a public-safe Philosophy Garden seed as a gentle supporting reflection layer.
- Tidied the changelog into clearer 2026-07-07 sections.
- Added a simple Garden Path so Philosophy Garden updates can grow slowly from a reflection card to a gentle next update.
- Added a Garden Review so Luna can review a reflection card before choosing the next gentle update.
- Added a tiny Next Garden Update so the Garden Review can point to one public-safe action.
- Added a Garden Cycle so the Philosophy Garden pieces connect in a clear beginner-friendly order.
- The first stable dashboard loop is now in place; future work should preserve the one-step-at-a-time rhythm.
- Aligned the roadmap with the README's longer-term vision for a calm project companion for small projects.

## Near Term

Near-term work should stay focused on the current return path: help someone see where they left off and what changed last, guide them toward one clear Next Action, name what can be ignored for now without making a backlog, record the change in the public project trail, and rest. Choose a task that is small enough to finish in one careful pull request. When a task changes project direction, dashboard data, or public history, keep `project.json`, `STATE.md`, and `CHANGELOG.md` aligned so the next person can see what changed.

- Keep `project.json` aligned with the dashboard after each small content change.
- Keep the Next Action card aligned with the safest current task.
- Review one existing dashboard or documentation sentence at a time for beginner-friendly return-path clarity.
- Let the current dashboard rest between changes so Luna does not grow too quickly, especially before adding another dashboard section, mode workflow, more public-page pruning, or another visual redesign.
- Keep Philosophy Garden as an optional supporting reflection layer; avoid adding more garden dashboard sections unless there is a clear, small reason.

## Later Direction

The next phase is not more dashboard cards by default. Luna now has a separate prototype preview for the first one-project slice in `prototype.html`, linked quietly from the main dashboard Project Trail. The first slice is defined in `docs/FIRST_USABLE_PROTOTYPE_SLICE.md`, the static read-through is recorded in `docs/PROTOTYPE_READ_THROUGH.md`, the first editable boundary is defined in `docs/FIRST_EDITABLE_FIELD_BOUNDARY.md`, the editable prototype read-through is recorded in `docs/EDITABLE_PROTOTYPE_READ_THROUGH.md`, the saving boundary is recorded in `docs/SAVING_BOUNDARY.md`, the human-tested local saving read-through is recorded in `docs/LOCAL_SAVING_READ_THROUGH.md`, the clear saved values boundary is recorded in `docs/CLEAR_SAVED_VALUES_BOUNDARY.md`, the clear local edits read-through is recorded in `docs/CLEAR_LOCAL_EDITS_READ_THROUGH.md`, the prototype rest checkpoint is recorded in `docs/PROTOTYPE_REST_CHECKPOINT.md`, the returning flow review is recorded in `docs/RETURNING_FLOW_REVIEW.md`, the returning flow wording boundary is recorded in `docs/RETURNING_FLOW_WORDING_BOUNDARY.md`, one tiny wording-only polish in `prototype.html` now clarifies what to read first in the return path, the human read-through after that polish is recorded in `docs/RETURNING_FLOW_WORDING_READ_THROUGH.md`, and the sample project layer boundary is recorded in `docs/SAMPLE_PROJECT_LAYER_BOUNDARY.md`. The prototype now lets someone edit only project name and current goal in the browser, saves only those two fields locally with localStorage, and includes one small clear-local-edits control for those two saved values only. If no saved values exist, or after the local edits are cleared, it keeps the public-safe sample values. Current Mode, last completed run, Next Action, Ignore For Now, Record the Change, rest / next step, and every other card are not saved yet. Rest before deciding whether to implement one tiny copy-only polish that makes the sample project layer feel less meta and more natural, and before adding any new behavior, more persistence, more editable cards, sessionStorage, cookies, backend, accounts, database, sync, dashboard expansion, visual redesign, mode workflow, multi-project system, or new Philosophy Garden content.

Later, Luna may become a calm companion for small projects. That means helping one person return to one small project, remember what is already there, see what changed last, choose one small next step, know what can wait, record the change, and rest. This future app direction should stay small and separate from any build plan; it is a direction to protect gently, not a big app roadmap.

## Parking Lot

- Sketch practice companion.
- Japanese study helper.
- Philosophy garden.
- eBay/card collecting helper.
- Tiny weird game that grows one mechanic at a time.
