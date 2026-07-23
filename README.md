# Luna

Luna is a small, moonlit one-project return app for coming back to one unfinished thing without shame. It offers a quiet place to remember what matters, choose one gentle place to begin, and stop when enough has been held.

The core experience is simple: **Return gently** into a **Guided Return** path, then **Rest** with a clear handoff for **Start here next time**. It is a return path, not a productivity system.

## What Luna holds

Luna helps a person keep just five small local values for one project:

1. the project name;
2. the current thread or goal;
3. one next action — the lantern;
4. one thing to set aside for now; and
5. one brief record of what changed.

Those values can support the full overview, the optional Guided Return path, and the final Rest handoff. The full overview is a quieter reference and editing place; Guided Return is there for someone who wants a little more help finding their way back.

## Boundaries that keep Luna small

- **One project only.** Luna is not a multi-project workspace.
- **Five local saved values only.** Set Aside is one value, not a backlog; Record is one brief value, not a log.
- **Local browser only.** There is no backend, account, sync, database, or cloud storage.
- **No network or model behavior.** Luna does not call an API, use an external model, or send project notes away.
- **Not project management.** No task list, backlog, planning board, workflow, or dashboard form is hiding behind the moonlight.

Philosophy Garden is optional supporting reflection, not Luna’s main engine.

## Current shape

The current browser prototype opens at Luna’s threshold and keeps **Return gently** as the primary way in. Guided Return uses calm path language rather than visible step or stage framing, carries the existing local context forward, and ends in Rest with a **Start here next time** handoff. The full overview, local editing, Clear local edits, and deterministic local guidance remain available without expanding Luna’s scope.

Luna is at **Rest**. The next suggested step is a human mobile feel-check: does the Guided Return language feel like walking a quiet path rather than completing a task wizard?

## Recent progress

Recent work simplified the visible language, de-cluttered the guided questions, and changed the old step/stage framing into calmer path markers. Earlier work established the complete return loop, five-value local-only boundary, mobile comfort protections, and the Rest Return Card. See the dated project trail in [CHANGELOG.md](CHANGELOG.md) and the current working state in [STATE.md](STATE.md).

## Explore the project

- [STATE.md](STATE.md) — current state, most recent completed run, and next suggested step.
- [ROADMAP.md](ROADMAP.md) — completed work, near-term care, and later direction.
- [CHANGELOG.md](CHANGELOG.md) — dated public history of completed runs.
- [project.json](project.json) — the dashboard’s current public project data.
- [docs/EXAMPLE_RETURN.md](docs/EXAMPLE_RETURN.md) — a concrete walkthrough of the return rhythm.
- [docs/GUIDED_RETURN_PHASE_BOUNDARY.md](docs/GUIDED_RETURN_PHASE_BOUNDARY.md) — the boundary for the Guided Return direction.
- [docs/VISUAL_IDENTITY.md](docs/VISUAL_IDENTITY.md) — Luna’s moonlit, calm visual direction.
- [RULES.md](RULES.md) — the one-small-change rhythm and alignment expectations.

## View locally

To view the dashboard locally:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in a browser.

## For contributors

Before changing Luna, read the current state, choose one small useful change, preserve the boundaries above, and update `STATE.md`, `ROADMAP.md` when direction changes, `CHANGELOG.md`, and `project.json` together. Let Luna rest between changes.
