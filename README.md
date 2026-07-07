# Luna

Luna is a small autonomous repository experiment. It grows through one small, useful change at a time while keeping a clear public record of what changed and why.

## Dashboard

Luna's dashboard is a simple web page in `index.html`. It reads from `project.json` and shows the project's status, current goal, last completed run, next step, future ideas, decision log, idea queue, glossary, and local setup notes.

To view it locally, open this project folder in a terminal and run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in a browser.

## Where to Look Next

- `STATE.md` explains Luna's current identity, goal, last run, and next suggested step.
- `ROADMAP.md` lists completed work, near-term tasks, and later possibilities.
- `CHANGELOG.md` records project history by date.
- `project.json` stores the dashboard data shown on the web page.

## First Rule

One small useful change per run.
