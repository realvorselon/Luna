# Luna

Luna is a small autonomous repository experiment for helping someone return to one small project, see where they left off, choose one clear Next Action, record what changed, and rest before adding more.

## v0.1 Milestone

Luna now has a plain-language welcome, a clear Next Action, a small Ignore For Now card, and a quiet Philosophy Garden cycle that supports the core return path with a Reflection Card, Garden Review, Next Garden Update, and Rest Before Growing Again. This gives beginners one calm path for seeing what changed last, choosing what to do next, knowing what to ignore for now, and stopping before the project grows too quickly.

## Longer-Term Vision

Luna is currently a small public dashboard prototype. Over time, the idea is for Luna to become a calm project companion that helps people return to one small project, remember where they left off, see what changed last, choose one small next step, know what to ignore for now, record the change, and rest before adding more.

## Dashboard

Luna's v0.1 dashboard is a simple web page in `index.html`. It reads from `project.json` and starts with a plain-language Welcome, Status, Current Goal, Last Completed Run, one clear Next Action, and a small Ignore For Now card so someone can quickly see where the project left off and what changed last.

The Philosophy Garden follows below with a Creative Seed, Reflection Card, Garden Review, Next Garden Update, Garden Cycle, and Garden Path. These sections are a gentle supporting reflection layer around the return path, not the whole project or main engine.

Beginner read-through note: read the v0.1 dashboard slowly from Welcome through Ignore For Now before choosing any new work. The first dashboard cards are meant to orient you around the current project state, the last completed run, one clear Next Action, and what can wait; the Philosophy Garden can wait as a gentle supporting reflection layer.

### Review before changing

Before making a new contribution, use this small checklist:

- Read the dashboard from Welcome through Ignore For Now.
- Check `STATE.md` for the latest completed run and next suggested step.
- Choose only one small useful change for the run.
- Update `STATE.md`, `CHANGELOG.md`, and `project.json` together so the public record stays aligned.

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

## First Rule

One small useful change per run.
