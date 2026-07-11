# Luna

Luna is a small public dashboard prototype and autonomous repository experiment for helping someone return to a paused or small creative project, see what changed, choose one clear Next Action, know what can wait, record the change, and rest before adding more.

## v0.1 Milestone

Luna now has a plain-language welcome, a clear Next Action, small Ignore For Now and Record the Change cards, and a quieter optional Philosophy Garden reflection area. This gives beginners one calm path for seeing what changed last, choosing what to do next, knowing what to ignore for now, and stopping before the project grows too quickly without making reflection content feel like the main engine.

## Longer-Term Vision

Luna is currently a small public dashboard prototype. Over time, the idea is for Luna to become a calm project companion that helps people return to one small project, remember where they left off, see what changed last, choose one small next step, know what to ignore for now, record the change, and rest before adding more.

## Dashboard

Luna's v0.1 dashboard is a simple web page in `index.html`, and it currently uses the Luna repo itself as the first example project. It reads from `project.json` and starts with a plain-language Welcome, Status, Current Mode, Current Goal, Last Completed Run, one clear Next Action, a small Ignore For Now card, and a small Record the Change card so someone can quickly see where the project left off, what changed last, what to do next, what can wait, and how to update the public project trail. Recent Runs, Project Health, and one quiet Project Trail note remain on the page, while builder/reference material stays in README.md, docs, and project.json instead of filling the public front page.

A separate static preview, `prototype.html`, is quietly linked from Project Trail and shows the first one-project Luna slice with sample public-safe placeholder data. It now includes tiny local browser saving for only the project name and current goal fields plus one small clear-local-edits control for those two fields only. A human tested those two saved values and confirmed they survive refresh, then tested the clear-local-edits control and confirmed it returns those two fields to the public-safe sample values, which remain after another refresh. The saved and cleared values are local to the same browser, do not sync, and do not create an account. Current Mode, last completed run, Next Action, Ignore For Now, Record the Change, rest / next step, and every other card are not saved yet. A prototype rest checkpoint records that the first editable saved-and-clearable slice is complete enough for now. A returning flow review now notes that the prototype already shows the main returning bones but remains mostly static, so Luna should rest before deciding whether to do a tiny wording polish for the returning flow, and before adding any new behavior, more persistence, more editable cards, sessionStorage, cookies, backend, accounts, database, sync, dashboard expansion, visual redesign, mode workflow, multi-project system, or new Philosophy Garden content. A tiny wording-only polish in `prototype.html` now tells a returning person to start by reading the project state, then what changed last, then the one Next Action; it also makes the return path and one-project loop slightly easier to scan while preserving the current structure, saved project name and current goal behavior, clear-local-edits behavior, static unsaved cards, and the dashboard ↔ prototype reversible path. A human read-through note now records that the polish makes the prototype easier to follow and that the visible labels help the one-project return loop scan better, while the current state area still feels a little framework-like or meta. A sample project layer boundary note records that any later polish should make the fictional recipe-note project feel more like a small project someone could actually return to while preserving the Luna loop, prototype structure, local project name and current goal saving, clear-local-edits behavior, static unsaved cards, and dashboard ↔ prototype reversible path. A tiny copy-only polish in `prototype.html` now makes the recipe-note sample project feel less meta and more natural by letting the current state area sound more like returning to soup notes and clarifying one broth note. A human read-through note now records that the sample project layer feels fine, more natural, and less meta; the recipe-note / soup-note language worked as a neutral fictional sample for testing the one-project return loop. A theme direction boundary now records that soup / recipe notes are not the intended finished Luna theme, which is closer to moonlit garden, quiet desk, and gentle return path: moonlit atmosphere, useful desk-like clarity, path-like return flow, restrained garden/cultivation language, and Philosophy Garden as an optional reflective layer rather than the main engine. A tiny path clarity polish in `prototype.html` now adds a quiet static return-path cue and frames the loop as a gentle path from Orient through Rest without changing behavior, adding controls, expanding persistence, or changing the dashboard ↔ prototype reversible path. A human read-through note now records that the gentle return path feels okay / not bad, the static strip helps the loop feel more guided and path-like, and no immediate prototype change is needed; it also preserves an affordance note that future actual buttons and interactive controls should read more clearly than static path cues. Luna should now rest before deciding whether to improve control affordance, continue with another prototype slice, or add another small read-through / boundary note, and before adding new behavior or expanding persistence.

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

## First Rule

One small useful change per run.
