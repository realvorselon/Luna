# Luna

Luna is a small public dashboard prototype and autonomous repository experiment for helping someone return to a paused or small creative project, see what changed, choose one clear Next Action, know what can wait, record the change, and rest before adding more.

## v0.1 Milestone

Luna now has a plain-language welcome, a clear Next Action, small Ignore For Now and Record the Change cards, and a quieter optional Philosophy Garden reflection area. This gives beginners one calm path for seeing what changed last, choosing what to do next, knowing what to ignore for now, and stopping before the project grows too quickly without making reflection content feel like the main engine.

## Longer-Term Vision

Luna is currently a small public dashboard prototype. Over time, the idea is for Luna to become a calm project companion that helps people return to one small project, remember where they left off, see what changed last, choose one small next step, know what to ignore for now, record the change, and rest before adding more.

## Dashboard

Luna's v0.1 dashboard is a simple web page in `index.html`, and it currently uses the Luna repo itself as the first example project. It reads from `project.json` and starts with a plain-language Welcome, Status, Current Mode, Current Goal, Last Completed Run, one clear Next Action, a small Ignore For Now card, and a small Record the Change card so someone can quickly see where the project left off, what changed last, what to do next, what can wait, and how to update the public project trail. Recent Runs, Project Health, and one quiet Project Trail note remain on the page, while builder/reference material stays in README.md, docs, and project.json instead of filling the public front page.

Philosophy Garden now appears only as a small Optional Reflection section. It is a gentle supporting layer for occasional reflection, not the whole project or Luna's main engine. The dashboard now uses a restrained moonlit night palette so the same structure feels calmer and more Luna-like without starting another redesign.

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

## First Rule

One small useful change per run.
