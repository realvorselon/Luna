# Luna

Luna is a small autonomous repository experiment. It grows through one small, useful change at a time while keeping a clear public record of what changed and why.

## v0.1 Milestone

Luna now has a plain-language welcome, a clear Next Action, and a Philosophy Garden cycle that moves through a Reflection Card, Garden Review, Next Garden Update, and Rest Before Growing Again. This gives beginners one calm path to follow without rushing the project.

## Longer-Term Vision

Luna is currently a small public dashboard prototype. Over time, the idea is for Luna to become a calm project companion that helps people with small projects remember what they are making, see what changed last, choose one small next step, avoid overwhelm, and keep a clean public record.

## Dashboard

Luna's v0.1 dashboard is a simple web page in `index.html`. It reads from `project.json` and starts with a plain-language Welcome, Status, Current Goal, Last Completed Run, and one clear Next Action.

The Philosophy Garden follows below with a Creative Seed, Reflection Card, Garden Review, Next Garden Update, Garden Cycle, and Garden Path. These sections keep the project gentle, public-safe, and easy for beginners to follow one small step at a time.

Beginner read-through note: read the v0.1 dashboard slowly from Welcome through Next Action before choosing any new work. The first few cards are meant to orient you before the Philosophy Garden asks for another small step.

### Review before changing

Before making a new contribution, use this small checklist:

- Read the dashboard from Welcome through Next Action.
- Check `STATE.md` for the latest completed run and next suggested step.
- Choose only one small useful change for the run.
- Update `STATE.md`, `CHANGELOG.md`, and `project.json` together so the public record stays aligned.

To view it locally, open this project folder in a terminal and run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in a browser.

## Where to Look Next

- `STATE.md` explains Luna's current identity, goal, last run, and next suggested step.
- `ROADMAP.md` lists completed work, near-term tasks, and later possibilities.
- `CHANGELOG.md` records project history by date.
- `RULES.md` explains Luna's one-small-change rhythm and alignment expectations.
- `docs/STEWARDSHIP.md` describes a calm future stewardship loop for small projects without adding a feature yet.
- `project.json` stores the dashboard data shown on the web page.

## First Rule

One small useful change per run.
