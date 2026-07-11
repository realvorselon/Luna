# Guided Return Motion Experiment Boundary

This documentation-only boundary interprets the first Guided Return human-use result and defines the next experiment. It does not implement motion. It does not change `prototype.html`, `index.html`, CSS, JavaScript, navigation, editable fields, localStorage behavior, blank-value fallback behavior, clear-local-edits behavior, graphics, visual assets, backend behavior, app architecture, or Philosophy Garden content.

## Human-use finding

The first Guided Return slice works technically and visually, but moving through Orient → Remember → Choose currently feels more like extra clicking than a meaningfully calmer return experience.

This does **not** mean Guided Return should be abandoned. It means splitting the same information into stages is not enough by itself. The next experiment should test whether one restrained stage transition can make the experience feel more like moving along a calm path and less like clicking through separate screens.

This is a human-use finding, not a technical defect.

## What the first slice proved

The first Guided Return implementation slice proved that the interaction model is technically viable:

- Guided navigation works.
- Backward navigation works.
- Returning to the full overview works.
- Editable values are preserved.
- The full overview and guided view can coexist.
- The interaction model is technically viable.

The existing slice should remain limited to Orient → Remember → Choose. The full overview remains the reference mode.

## What the first slice did not prove

The first slice did not yet prove that Guided Return feels meaningfully calmer or more Luna-like than the full overview.

Without motion or stronger experiential differentiation, the guided view can feel like the same information split into extra clicks. That is a human-use signal about the experience, not a bug in the navigation, storage, controls, or prototype structure.

## Next experiment

The next experiment should test **one restrained stage transition** for Forward and Back.

The transition should:

- use a short fade plus a very small horizontal or vertical shift
- make the next stage feel like it arrives or settles into place
- support the sense of moving along a gentle path
- remain quiet, practical, and readable

The transition must not feel:

- flashy
- bouncy
- slow
- game-like
- celebratory
- productivity-driven

No achievement confetti. No Emperor Jira.

## Motion boundaries

Keep the motion small enough that Luna still feels like a quiet return path, not a performance.

Allowed for the later experiment:

- brief duration, roughly 180–300ms
- opacity
- a small transform where practical
- readable focus states
- immediate usability
- `prefers-reduced-motion` support

Do not add:

- scroll-triggered animation
- graphics
- decorative particles
- sound
- parallax
- large page movement
- animation on initial page load
- persistent motion
- animation for every small interaction
- animation to the full overview in this experiment

## Success question

The experiment succeeds only if human testing says the transition makes Guided Return feel more like moving through a calm path and less like extra clicking, without making navigation slower, distracting, or harder to use.

## Scope protection

Do not:

- change `prototype.html` in this documentation-only run
- change `index.html` in this documentation-only run
- change CSS or JavaScript in this documentation-only run
- implement animation in this run
- add graphics or visual assets
- add more guided stages
- change navigation structure
- change editable fields
- change localStorage behavior or keys
- change blank-value fallback behavior
- change clear-local-edits behavior or scope
- add backend, accounts, database, sync, AI generation, moderation logic, crisis detection, multi-project behavior, task lists, checklists, kanban, workflow engines, calendars, habit tracking, or new Philosophy Garden content

## Next suggested step

Human-review this motion experiment boundary before implementing one tiny transition slice.
