# Next Action Editable Field Boundary

This is a concise public-safe boundary note for making the **One Next Action** field editable later. This run does not change `prototype.html`, add code, add behavior, add controls, or change saving.

## Why this field matters

- One Next Action is the lantern of the Luna loop.
- Making it editable would make the prototype feel more like a real single-project workspace.
- The user should be able to change the actual next small action they will return to.
- This should make returning easier, not create a task list or planning system.

## Intended future behavior

A later implementation may:

- add one editable field for the One Next Action text
- save it locally in the same browser using `localStorage`
- keep it browser-only, with no account, backend, sync, database, cookies, or `sessionStorage`
- load the saved value on page load
- keep the sample next action if no saved value exists
- display the sample fallback rather than an empty broken card if the field is blank
- keep the current project name and current goal saving unchanged
- keep the clear-local-edits behavior unchanged unless a later boundary explicitly decides whether that button should also clear the next action field

## Shape of the field

The field should stay small:

- one short sentence or phrase
- one action only
- no multi-item task list
- no checklist
- no subtasks
- no generated plan
- no AI interpretation
- no automatic rewriting
- no harmful amplification
- treat the user’s text as their own project note

## Possible guidance copy

Guidance near the field may later say:

- “Keep this to one small action you can return to.”
- “Not a list. Not the whole project. Just the next small step.”
- “Avoid private secrets or anything harmful.”

The exact wording may be polished later.

## Safety expectations

- Follow `docs/INPUT_SAFETY_BOUNDARY.md`.
- Luna may hold project notes, but should not help harmful intent become more actionable.
- This run does not add detection, moderation, crisis copy, warnings, or safety logic.
- The implementation should not generate plans, checklists, strategies, or polished outputs from user-entered next action text.

## What this run does not do

This run does not:

- change `prototype.html`
- add the editable field yet
- add JavaScript
- change saving behavior
- add buttons or controls
- improve control affordance yet
- add AI generation, moderation logic, crisis detection, backend, accounts, database, sync, dashboard expansion, visual redesign, mode workflow, multi-project system, or new Philosophy Garden content

## Likely next implementation slice

A later run may make only the One Next Action card editable and locally saved, while preserving the rest of the prototype and avoiding new behavior beyond that one field.

Preserve the Luna loop as the core: one project state, current mode, current goal, what changed last, one Next Action, Ignore For Now, Record the Change, and Rest.

Next, rest before implementing the One Next Action editable field, and before adding any other editable cards, more persistence, `sessionStorage`, cookies, backend, accounts, database, sync, dashboard expansion, visual redesign, mode workflow, multi-project system, AI generation, moderation logic, crisis detection, control affordance changes, or new Philosophy Garden content.
