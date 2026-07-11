# Roadmap

This roadmap is intentionally small. Luna is a public dashboard prototype right now, and its core is helping someone return to one small project, see where they left off, see what changed last, choose one clear Next Action, know what to ignore for now, record the change, and rest before adding more.

## Current Phase Direction

- Guided Return is the next phase direction after the completed single-project browser prototype phase. Its boundary is `docs/GUIDED_RETURN_PHASE_BOUNDARY.md`.
- Next: human-test whether the Guided Return controls and clear-local-edits button now stand apart clearly enough while remaining calm and moonlit.

## Completed

- Added a tiny CSS-only button-depth polish after the first Guided Return human test passed technically and found only a remaining visual blend issue.
- Added the first Guided Return implementation slice while keeping the full overview available and existing editable values preserved.
- Added the Guided Return phase boundary while keeping the current prototype phase complete and closed.
- Recorded the broader prototype phase completion review and closed the current single-project browser prototype phase as complete enough.
- Recorded the successful follow-up human visual test of the input-surface contrast polish; editable fields now stand apart clearly enough, and the control-affordance gap is closed for this prototype phase.
- Added prototype completion criteria before adding another editable field.
- Recorded the human test of editable One Next Action.
- Made One Next Action editable and locally saved in the prototype.
- Added a Next Action editable field boundary before making the lantern card editable later.
- Added a human read-through note after the tiny path clarity polish.
- Added a tiny path clarity polish to make the prototype return loop feel more guided.
- Added a tiny theme direction boundary for Luna’s finished moonlit garden / quiet desk / gentle return path vibe.
- Added a human read-through note after the sample project layer copy polish.
- Added a tiny copy-only polish to make the sample project layer feel less meta and more natural.
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

## Guided Return Slice

- The first Guided Return implementation slice is in place in `prototype.html`. It tests only Orient → Remember → Choose, keeps the full overview available as the proven reference mode, preserves existing editable values, and does not add Set Aside, Record, Rest, task lists, checklists, new persistence, or workflow behavior.
- The first Guided Return human test passed technically: navigation, backward navigation, returning to the full overview, and preserved editable values all worked.
- A tiny CSS-only follow-up gives the existing guided controls and clear-local-edits button slightly stronger darker underside depth so they read more clearly as physical controls without changing behavior.
- Next suggested step: human-test whether those controls now stand apart clearly enough while remaining calm and moonlit.

## Near Term

- Use `docs/THEME_DIRECTION_BOUNDARY.md` as a filter before any later visual or copy polish.
- Define the boundary for the next Luna phase before implementing anything new.

Near-term work should stay focused on the current return path: help someone see where they left off and what changed last, guide them toward one clear Next Action, name what can be ignored for now without making a backlog, record the change in the public project trail, and rest. Choose a task that is small enough to finish in one careful pull request. When a task changes project direction, dashboard data, or public history, keep `project.json`, `STATE.md`, and `CHANGELOG.md` aligned so the next person can see what changed.

- Keep `project.json` aligned with the dashboard after each small content change.
- Keep the Next Action card aligned with the safest current task.
- Review one existing dashboard or documentation sentence at a time for beginner-friendly return-path clarity.
- Let the current dashboard rest between changes so Luna does not grow too quickly, especially before adding another dashboard section, mode workflow, more public-page pruning, or another visual redesign.
- Keep Philosophy Garden as an optional supporting reflection layer; avoid adding more garden dashboard sections unless there is a clear, small reason.

## Later Direction

The next phase is not more dashboard cards by default. Luna now has a separate prototype preview for the first one-project slice in `prototype.html`, linked quietly from the main dashboard Project Trail. The first slice is defined in `docs/FIRST_USABLE_PROTOTYPE_SLICE.md`, the static read-through is recorded in `docs/PROTOTYPE_READ_THROUGH.md`, the first editable boundary is defined in `docs/FIRST_EDITABLE_FIELD_BOUNDARY.md`, the editable prototype read-through is recorded in `docs/EDITABLE_PROTOTYPE_READ_THROUGH.md`, the saving boundary is recorded in `docs/SAVING_BOUNDARY.md`, the human-tested local saving read-through is recorded in `docs/LOCAL_SAVING_READ_THROUGH.md`, the clear saved values boundary is recorded in `docs/CLEAR_SAVED_VALUES_BOUNDARY.md`, the clear local edits read-through is recorded in `docs/CLEAR_LOCAL_EDITS_READ_THROUGH.md`, the prototype rest checkpoint is recorded in `docs/PROTOTYPE_REST_CHECKPOINT.md`, the returning flow review is recorded in `docs/RETURNING_FLOW_REVIEW.md`, the returning flow wording boundary is recorded in `docs/RETURNING_FLOW_WORDING_BOUNDARY.md`, one tiny wording-only polish in `prototype.html` now clarifies what to read first in the return path, the human read-through after that polish is recorded in `docs/RETURNING_FLOW_WORDING_READ_THROUGH.md`, and the sample project layer boundary is recorded in `docs/SAMPLE_PROJECT_LAYER_BOUNDARY.md`. A tiny copy-only polish in `prototype.html` now makes the fictional recipe-note sample project feel less meta and more natural while preserving the Luna loop underneath, and the sample project layer read-through is recorded in `docs/SAMPLE_PROJECT_LAYER_READ_THROUGH.md`. The prototype now lets someone edit project name, current goal, and the One Next Action in the browser. It saves project name and current goal with their existing localStorage keys, saves One Next Action with `luna.prototype.nextAction`, and includes one small clear-local-edits control for project name and current goal only. If no saved values exist, or if the One Next Action input is blank, it keeps the public-safe sample values. Current Mode, last completed run, Ignore For Now, Record the Change, rest / next step, and every other card are not saved yet. The prototype now includes one tiny path clarity polish that makes the one-project return loop feel more guided without changing behavior, the path polish read-through is recorded in `docs/PATH_POLISH_READ_THROUGH.md`, and the input safety boundary is recorded in `docs/INPUT_SAFETY_BOUNDARY.md`, the Next Action editable field boundary is recorded in `docs/NEXT_ACTION_EDITABLE_FIELD_BOUNDARY.md`, and the Next Action editing read-through is recorded in `docs/NEXT_ACTION_EDITING_READ_THROUGH.md`. The review says the gentle return path feels okay / not bad, the static step strip helps the loop feel a little more guided and path-like, and no immediate prototype change is needed. It also preserves a later affordance note that future actual buttons and interactive controls should read more clearly than static path cues. A human tested the editable One Next Action field and it worked like a charm: the input can be changed, the lantern card updates, refresh preserves the typed value locally in the same browser, blank input falls back to the sample value, and the existing clear-local-edits button still only clears project name and current goal. The prototype completion criteria are recorded in `docs/PROTOTYPE_COMPLETION_CRITERIA.md`. A human review found that the editable fields are understandable with helper text, but may not read as editable without that text because they lacked a strong visual cue. The prototype now gives the existing editable text inputs and the existing clear-local-edits button stronger restrained visual affordance while keeping the static gentle return-path cues quieter and preserving behavior. The first human test after that polish found the affordance improved, but the input surfaces still blended into the surrounding card because their shades were too close. The prototype now gives only the existing editable text inputs a slightly lighter, cooler, muted blue-violet inset writing surface while preserving the brighter silver-periwinkle border, hover treatment, lantern-gold focus ring, text cursor, clear-local-edits button, behavior, and Luna loop. The input surface contrast read-through is recorded in `docs/INPUT_SURFACE_CONTRAST_READ_THROUGH.md`; the follow-up human visual test confirmed that the fields now stand apart clearly enough, read naturally as places to type, remain calm and moonlit, and close the control-affordance gap for this prototype phase. The broader phase completion review is recorded in `docs/PROTOTYPE_PHASE_COMPLETION_REVIEW.md` and closes the current single-project browser prototype phase as complete enough. It preserves later-direction observations about a possible guided path mode beside the full-page overview and a clearer fresh-user introduction, without committing to navigation, transitions, animation, graphics, a new interaction model, or copy changes now. Next, define the boundary for the next Luna phase before implementing anything new.

Later, Luna may become a calm companion for small projects. That means helping one person return to one small project, remember what is already there, see what changed last, choose one small next step, know what can wait, record the change, and rest. This future app direction should stay small and separate from any build plan; it is a direction to protect gently, not a big app roadmap.

## Parking Lot

- Sketch practice companion.
- Japanese study helper.
- Philosophy garden.
- eBay/card collecting helper.
- Tiny weird game that grows one mechanic at a time.
