# Luna

## Local return-guidance engine

- Luna now has its fourth meaningful v0.1 vertical slice: a secondary “Shape this return” action on the opening threshold. “Return gently” remains the primary path.
- Shape this return runs a deterministic local JavaScript guidance engine entirely in the browser. It has no API, backend, account, cost, network call, cloud storage, analytics, or external model dependency.
- The engine reviews the existing five project values and can offer up to four bounded suggestions: Current goal, One Next Action, Set Aside, and Record the Change. It does not generate suggestions merely to fill every slot.
- Suggestions are reviewable and selective. Luna shows the current wording, suggested wording, and a short reason; the person must choose an individual “Use this” action before anything changes.
- The rules look only for simple local shapes such as blank text, generic fallbacks, unusually long text, multiple sentences, list-like separators, repeated “and,” and broad phrases. Luna does not pretend this is generative AI or project planning.
- The existing five storage keys remain the only project-edit keys: `luna.prototype.projectName`, `luna.prototype.currentGoal`, `luna.prototype.nextAction`, `luna.prototype.setAside`, and `luna.prototype.recordChange`. Suggestion results and suggestion history are not persisted.
- The opening threshold, full overview, complete six-stage Guided Return loop, navigation, saved context, motion behavior, mobile-safe layout, clear-local-edits scope, and One Next Action lantern emphasis remain preserved.
- Development continues to prefer fewer meaningful v0.1 vertical slices over automatic micro-polish.

## Contextual complete guided loop

- Luna now has its third meaningful v0.1 vertical slice: the complete Guided Return loop responds to the current one-project context instead of depending on hardcoded recipe-note / soup sample content.
- The preserved local fields remain `luna.prototype.projectName`, `luna.prototype.currentGoal`, and `luna.prototype.nextAction`. Two minimal fields were added: `luna.prototype.setAside` for one Set Aside / Ignore For Now value and `luna.prototype.recordChange` for one brief Record the Change value.
- The full overview remains the quiet reference/editing mode for those five local values; it is not a setup wizard, dashboard, backlog, log, account flow, or sync surface.
- Clear local edits now explicitly clears all five local project-edit keys in this browser and restores safe blank fallbacks.
- Set Aside remains one value, not a backlog. Record remains one brief value, not a log.
- The opening threshold, “Return gently,” navigation loop, panel motion, reduced-motion support, mobile-safe shell, and six-stage Guided Return structure remain preserved.
- Development continues to prefer fewer meaningful v0.1 slices over automatic micro-polish.


## First complete guided Luna loop

- Luna now completes the first full Guided Return loop: Orient → Remember → Choose → Set Aside → Record → Rest.
- This is the second meaningful v0.1 vertical slice after the Luna opening threshold. Development continues to prefer fewer substantial slices over many automatic micro-experiments.
- Set Aside focuses the existing Ignore For Now material without turning it into a backlog, parking lot, priority matrix, task list, or list manager. Leaving something alone is treated as a valid project decision.
- Record reuses the existing Record the Change concept as one brief closing note, not administration, history editing, GitHub language, or a logging system. No new persistence was added.
- Rest is now a real ending: one small return is enough, the person is allowed to stop, and the primary ending action returns to Luna’s opening threshold.
- The opening threshold, full overview reference/editing mode, existing saved values, blank-value fallbacks, clear-local-edits scope, mobile action layout, reduced-motion behavior, rapid-click protection, transition cleanup, and navigation loop remain preserved.
- Next: human mobile test the complete loop. If it passes without a blocking issue, the next meaningful direction should be one stabilization and coherence pass toward Luna v0.1 rather than returning to automatic micro-polish.

## First v0.1-oriented vertical slice: Luna opening threshold

- Luna now opens on a real welcome-and-return threshold instead of a prototype demonstration.
- Human testing found the new opening threshold is a strong improvement and feels like a real app opening.
- That same test found one navigation gap: after Guided Return → “Return to full overview,” the full overview lacked a clear direct way back to the Luna opening threshold.
- The basic prototype navigation loop is now complete: Luna opening threshold → Guided Return → Full overview → Luna opening threshold.
- The full overview now includes one secondary “Return to Luna” action, preserving editable values and existing local browser persistence.
- Luna has shifted from many tiny micro-experiments toward fewer meaningful vertical slices aimed at a practical v0.1 finish line.
- The guided loop now continues through Orient → Remember → Choose → Set Aside → Record → Rest.
- Next: human mobile test the complete loop, then consider one stabilization and coherence pass toward v0.1 if no blocking issue appears.


## Guided Return app-shell experiment

The first bounded Guided Return app-shell experiment is implemented in `prototype.html` for Orient → Remember → Choose → Set Aside → Record → Rest. Guided Return now appears inside one stable, centered app-like shell with a restrained context header, a persistent stage-content region, and a predictable action area, while the dark moonlit background remains around it. Orient and Remember share a quieter surface language; Choose keeps the One Next Action lantern gradient as the strongest emphasis. The full overview remains the reference mode, and existing editable values, localStorage keys, blank-value fallbacks, clear-local-edits behavior, mobile action layout, entrance behavior, panel-level Forward / Back motion, and reduced-motion behavior are preserved. Luna is at Rest; next is a human mobile test of whether the shell feels like one calm focused app space rather than a webpage swapping sections.

Luna is a small public dashboard prototype and autonomous repository experiment for helping someone return to a paused or small creative project, see what changed, choose one clear Next Action, know what can wait, record the change, and rest before adding more.

## v0.1 Milestone

Luna now has a plain-language welcome, a clear Next Action, small Ignore For Now and Record the Change cards, and a quieter optional Philosophy Garden reflection area. This gives beginners one calm path for seeing what changed last, choosing what to do next, knowing what to ignore for now, and stopping before the project grows too quickly without making reflection content feel like the main engine.

## Longer-Term Vision

Luna is currently a small public dashboard prototype. Over time, the idea is for Luna to become a calm project companion that helps people return to one small project, remember where they left off, see what changed last, choose one small next step, know what to ignore for now, record the change, and rest before adding more.

## Current Phase Direction

The current single-project browser prototype phase is complete and closed. The active Guided Return work has produced enough human evidence to stop automatic micro-polish on the existing shell: optional guided mode is viable, the full overview remains a useful reference mode, Forward / Back and Return to full overview work, editable values remain preserved, One Next Action works as the lantern, panel-level motion feels closer to a modern app than a quick content shift, the corrected mobile action layout seems better, and the restrained entrance feels mostly softer and less abrupt. The current prototype remains the proven reference implementation, and the full overview remains the reference mode.

The current prototype experience now opens with the first real Luna threshold and carries the primary action into the implemented **Guided Return app shell** for the complete Orient → Remember → Choose → Set Aside → Record → Rest loop. Human testing found the opening threshold itself passed strongly, but the full overview needed a direct path back to Luna after returning from Guided Return. The full overview now has one secondary “Return to Luna” action, completing the basic loop from opening threshold to Guided Return to full overview and back to the opening threshold. Do not continue automatic CSS or motion micro-polish. Luna is back at Rest. Next, human mobile test the complete loop; if it passes without a blocking issue, continue with one stabilization and coherence pass toward Luna v0.1.

## Dashboard

Luna's v0.1 dashboard is a simple web page in `index.html`, and it currently uses the Luna repo itself as the first example project. It reads from `project.json` and starts with a plain-language Welcome, Status, Current Mode, Current Goal, Last Completed Run, one clear Next Action, a small Ignore For Now card, and a small Record the Change card so someone can quickly see where the project left off, what changed last, what to do next, what can wait, and how to update the public project trail. Recent Runs, Project Health, and one quiet Project Trail note remain on the page, while builder/reference material stays in README.md, docs, and project.json instead of filling the public front page.

A separate static preview, `prototype.html`, is quietly linked from Project Trail and shows the first one-project Luna slice with sample public-safe placeholder data. It now includes local browser saving for project name, current goal, One Next Action, one Set Aside / Ignore For Now value, and one Record the Change value, plus one explicit clear-local-edits control for all five local project-edit keys. A human tested those two saved values and confirmed they survive refresh, then tested the clear-local-edits control and confirmed it returns those two fields to the public-safe sample values, which remain after another refresh. The saved and cleared values are local to the same browser, do not sync, and do not create an account. Current Mode, last completed run, rest / next step, and every other card are not saved. A prototype rest checkpoint records that the first editable saved-and-clearable slice is complete enough for now. A returning flow review now notes that the prototype already shows the main returning bones but remains mostly static, so Luna should rest before deciding whether to do a tiny wording polish for the returning flow, and before adding any new behavior, more persistence, more editable cards, sessionStorage, cookies, backend, accounts, database, sync, dashboard expansion, visual redesign, mode workflow, multi-project system, or new Philosophy Garden content. A tiny wording-only polish in `prototype.html` now tells a returning person to start by reading the project state, then what changed last, then the one Next Action; it also makes the return path and one-project loop slightly easier to scan while preserving the current structure, saved project name and current goal behavior, clear-local-edits behavior, static unsaved cards, and the dashboard ↔ prototype reversible path. A human read-through note now records that the polish makes the prototype easier to follow and that the visible labels help the one-project return loop scan better, while the current state area still feels a little framework-like or meta. A sample project layer boundary note records that any later polish should make the fictional recipe-note project feel more like a small project someone could actually return to while preserving the Luna loop, prototype structure, local project name and current goal saving, clear-local-edits behavior, static unsaved cards, and dashboard ↔ prototype reversible path. A tiny copy-only polish in `prototype.html` now makes the recipe-note sample project feel less meta and more natural by letting the current state area sound more like returning to soup notes and clarifying one broth note. A human read-through note now records that the sample project layer feels fine, more natural, and less meta; the recipe-note / soup-note language worked as a neutral fictional sample for testing the one-project return loop. A theme direction boundary now records that soup / recipe notes are not the intended finished Luna theme, which is closer to moonlit garden, quiet desk, and gentle return path: moonlit atmosphere, useful desk-like clarity, path-like return flow, restrained garden/cultivation language, and Philosophy Garden as an optional reflective layer rather than the main engine. A tiny path clarity polish in `prototype.html` now adds a quiet static return-path cue and frames the loop as a gentle path from Orient through Rest without changing behavior, adding controls, expanding persistence, or changing the dashboard ↔ prototype reversible path. A human read-through note now records that the gentle return path feels okay / not bad, the static strip helps the loop feel more guided and path-like, and no immediate prototype change is needed; it also preserves an affordance note that future actual buttons and interactive controls should read more clearly than static path cues. Luna now also has an input safety boundary note: Luna may hold project notes, but should not help harmful intent become more actionable. The note keeps the early prototype humble around future user-entered text: narrow fields, local-only saving, plain reminders, no harmful amplification, no pretend full moderation system, and no detection, moderation, crisis copy, warnings, UI, JavaScript, or prototype changes in this run. Luna also has a One Next Action editable field boundary note: One Next Action is the lantern of the Luna loop. The prototype now makes only that text editable and locally saved with `luna.prototype.nextAction`, keeps the static description unchanged, and falls back to the sample next action when the field is blank. A human tested the editable One Next Action field and it worked like a charm: the input can be changed, the lantern card updates, refresh preserves the typed value locally in the same browser, blank input falls back to the sample value, and the clear-local-edits button now explicitly clears all five local project-edit keys. Luna now has prototype completion criteria for the current single-project browser prototype. The criteria define completion as a calm return tool, not a general project manager: the return path should be understandable, essential one-project state should be visible, editable fields should support returning rather than planning, local-only saving limits should be clear, blank fallbacks should stay safe, actual controls should be distinguishable from static path cues, the dashboard ↔ prototype path should stay reversible, and no backend, accounts, database, sync, AI generation, moderation system, crisis detection, multi-project system, task lists, checklists, or workflow engine is required. A human review then found that the editable fields are understandable with helper text, but without that text a user might not recognize them as editable because they lacked a strong visual cue. The prototype now has a restrained control affordance polish: existing text inputs have clearer editable-field treatment, and the existing clear-local-edits control reads more clearly as a button, while saving behavior, localStorage keys, blank fallbacks, clear scope, static return-path cues, and the Luna loop stay unchanged. The first human test after that polish found the affordance improved, but the input surfaces still blended into the surrounding card because their shades were too close. A tiny CSS-only input-surface contrast polish now gives only the existing editable text inputs a slightly lighter, cooler, muted blue-violet inset writing surface while preserving the brighter silver-periwinkle border, hover treatment, lantern-gold focus ring, text cursor, clear-local-edits button, behavior, and Luna loop. A follow-up human visual test confirmed that the fields now stand apart clearly enough and read naturally as places to type while remaining calm, moonlit, and consistent with the existing visual direction. The control-affordance gap is considered closed for this prototype phase. A broader prototype phase completion review records that the single-project browser prototype is complete enough: it proves the one-project return loop without becoming the finished Luna app. The Guided Return phase boundary then names the next phase. The first implementation slice in `prototype.html` now adds one optional entry point, “Begin a guided return,” and a small guided view for Orient → Remember → Choose → Set Aside → Record → Rest. The full overview remains available and intact, existing editable values are reused rather than replaced, One Next Action remains the lantern of the loop, and no Set Aside, Record, Rest, task list, checklist, new persistence, account, backend, sync, animation, graphics, or workflow engine was added. The Guided Return entrance read-through now records the restrained entrance as a qualified human-test pass: it feels mostly softer and less abrupt, no further entrance-motion polish is needed without a new usability finding, the One Next Action gradient remains intentional lantern emphasis, and a quieter shared-stage visual-language observation for Orient and Remember is preserved only as a later possibility. Luna is back at Rest; next, review what Guided Return has genuinely proved and choose the next meaningful product experiment without automatically continuing micro-polish or extending the full six-stage sequence.

Philosophy Garden now appears only as a small Optional Reflection section. It is a gentle supporting layer for occasional reflection, not the whole project or Luna's main engine. The dashboard now uses a deeper moonlit night palette with indigo, blue-violet, muted periwinkle, soft silver, and a small lantern-gold Next Action focus so the same structure feels more atmospheric and Luna-like without starting another redesign.

Beginner read-through note: read the v0.1 dashboard slowly from Welcome through Record the Change before choosing any new work. The first dashboard cards are meant to orient you around the current project state, current mode, the last completed run, one clear Next Action, what can wait, and how to record one small useful change; Optional Reflection can wait because Philosophy Garden is only a gentle supporting layer.

### Review before changing

Before making a new contribution, use this small checklist:

- Read the dashboard from Welcome through Record the Change.
- Check `STATE.md` for the latest completed run and next suggested step.
- Choose only one small useful change for the run.
- Use Record the Change to update `STATE.md`, `CHANGELOG.md`, and `project.json` together after one small useful change, then rest before adding more.

To view it locally, open this project folder in a terminal and run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in a browser.

## Where to Look Next

These links are grouped so a new visitor can start with the most useful front doors first, then keep reading when they want more context. The deeper notes still matter; they are just better after the first orientation pieces.

### Start here

- `STATE.md` — current project state, last completed run, and next suggested step.
- `docs/EXAMPLE_RETURN.md` — a concrete walkthrough showing Luna in motion.
- `RULES.md` — the one-small-change rhythm and alignment expectations.
- `project.json` — the dashboard data shown on the web page.

### Understand the foundation

- `docs/FOUNDATION.md` — how Luna's current foundation docs and dashboard files fit together.
- `ROADMAP.md` — completed work, near-term care, and later direction.
- `CHANGELOG.md` — dated public history of completed runs.

### Deeper design notes

- `docs/STEWARDSHIP.md` — a calm future stewardship loop for small projects.
- `docs/USER_GUIDANCE.md` — how people can approach Luna without needing to be good at prompting.
- `docs/VISUAL_IDENTITY.md` — Luna's calm, warm visual and interface personality direction.
- `docs/APP_SEED.md` — the smallest honest future app shape Luna may grow toward.
- `docs/MINIMAL_APP_SHAPE.md` — a review of that smallest possible future app shape before any app feature exists.
- `docs/PROTOTYPE_READINESS.md` — a short boundary note that the self-demo dashboard can rest before a tiny local usable prototype for one project.
- `docs/FIRST_USABLE_PROTOTYPE_SLICE.md` — a concise boundary note for the first tiny local one-project usable prototype slice before building it.
- `docs/PROTOTYPE_READ_THROUGH.md` — a concise read-through note that the dashboard-to-prototype preview path feels calm, static, reversible, and separate before editability.
- `docs/FIRST_EDITABLE_FIELD_BOUNDARY.md` — a concise boundary note defining project name and current goal as the first tiny editable fields for a later run.
- `docs/EDITABLE_PROTOTYPE_READ_THROUGH.md` — a concise read-through note after a human checked the first editable prototype UI, preserving the no-save boundary before any saving or local-storage decision.
- `docs/SAVING_BOUNDARY.md` — a concise boundary note before any later saving or local-storage work, keeping any possible future persistence local, reversible, and limited to project name and current goal only.
- `docs/LOCAL_SAVING_READ_THROUGH.md` — a concise read-through note after human testing confirmed project name and current goal survive refresh while every other card remains static and unsaved.
- `docs/CLEAR_SAVED_VALUES_BOUNDARY.md` — a concise boundary note before any later clear/reset control work, keeping any possible first clear control limited to the two saved localStorage values only.
- `docs/CLEAR_LOCAL_EDITS_READ_THROUGH.md` — a concise read-through note after human testing confirmed the clear-local-edits control works and stays local to project name and current goal only.
- `docs/PROTOTYPE_REST_CHECKPOINT.md` — a concise pause note recording that the first editable saved-and-clearable prototype slice is complete enough for now before deciding the next product direction.
- `docs/RETURNING_FLOW_REVIEW.md` — a concise review note asking whether the visible returning path is clear enough before adding any new prototype behavior.
- `docs/RETURNING_FLOW_WORDING_BOUNDARY.md` — a concise boundary note for any later tiny wording-only polish to the returning flow.
- `docs/RETURNING_FLOW_WORDING_READ_THROUGH.md` — a concise human read-through note after the wording-only prototype return path polish landed.
- `docs/SAMPLE_PROJECT_LAYER_BOUNDARY.md` — a concise boundary note for making the sample project layer feel less meta and more natural without changing prototype structure or behavior.
- `docs/SAMPLE_PROJECT_LAYER_READ_THROUGH.md` — a concise human read-through note after the sample project layer copy polish, including a small theme insight about Luna’s finished moonlit garden / quiet desk / gentle return path vibe.
- `docs/THEME_DIRECTION_BOUNDARY.md` — a concise boundary note naming Luna’s finished moonlit garden / quiet desk / gentle return path direction while keeping the sample project decision at rest.
- `docs/PATH_POLISH_READ_THROUGH.md` — a concise human read-through note after the tiny path clarity polish, preserving an affordance note for later without starting visual churn.
- `docs/INPUT_SURFACE_CONTRAST_READ_THROUGH.md` — a concise follow-up human visual test note confirming the editable fields now stand apart clearly enough and closing the control-affordance gap for this prototype phase.
- `docs/INPUT_SAFETY_BOUNDARY.md` — a concise boundary note for future user-entered text, harmful amplification, private-data reminders, and crisis-boundary caution before adding more editable fields or AI behavior.
- `docs/NEXT_ACTION_EDITABLE_FIELD_BOUNDARY.md` — a concise boundary note for making the One Next Action field editable later without turning it into a task list, planning system, AI-generated output, or harmful-amplification surface.
- `docs/NEXT_ACTION_EDITING_READ_THROUGH.md` — a concise human read-through note after the editable One Next Action field was tested and confirmed locally useful while staying narrow.
- `docs/PROTOTYPE_COMPLETION_CRITERIA.md` — a concise criteria note for deciding when the current single-project browser prototype is complete enough for this phase before adding another editable field.
- `docs/PROTOTYPE_PHASE_COMPLETION_REVIEW.md` — the broader human review closing the current single-project browser prototype phase as complete enough and preserving guided-path / full-overview observations for later.
- `docs/GUIDED_RETURN_PHASE_BOUNDARY.md` — a concise boundary note defining Guided Return as the next Luna phase while preserving the completed prototype phase and full overview.
- `docs/GUIDED_RETURN_FIRST_SLICE_READ_THROUGH.md` — a concise read-through note recording that the first Guided Return slice passed its initial technical and visual human tests, including the follow-up button-depth polish.
- `docs/GUIDED_RETURN_MOTION_EXPERIMENT_BOUNDARY.md` — a concise boundary note for the first guided-stage motion cue; a later human test found that first 220ms micro-transition too quick and visually uncomfortable, so the current prototype replaces it with a calmer panel-level experiment without extending the full sequence by default.
- `docs/GUIDED_RETURN_MOBILE_ACTION_READ_THROUGH.md` — a concise human mobile read-through recording that the corrected Back / Forward primary row and secondary Return action seem better, need no further action-layout polish now, and leave the abrupt entrance as a separate possible follow-up.
- `docs/GUIDED_RETURN_ENTRANCE_READ_THROUGH.md` — a concise read-through recording that the restrained Guided Return entrance feels mostly softer and less abrupt, qualifies as a pass, and should not trigger further entrance-motion polish without a new usability finding.
- `docs/GUIDED_RETURN_APP_SHELL_EXPERIMENT_BOUNDARY.md` — a documentation-only boundary for the next product experiment: one focused app shell for the proven Orient → Remember → Choose loop, with the current prototype and full overview preserved as references.

## First Rule

One small useful change per run.
