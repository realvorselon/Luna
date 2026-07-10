# Clear Saved Values Boundary

This note defines the boundary for any later clear or reset control work. It does not implement any clear, reset, delete, export, import, or save controls.

This run does not add a clear button, reset button, delete button, export/import, sync, account, backend, or new persistence behavior.

The prototype currently saves only project name and current goal in localStorage in the same browser. A later clear control may be useful so a person can gently return to the public-safe sample values without digging through browser settings.

If added later, the first clear control should clear only the two localStorage values for project name and current goal. The clear action should feel calm, reversible-feeling, and clearly local to the browser.

Do not clear or change these areas:

- Current Mode
- last completed run
- Next Action
- Ignore For Now
- Record the Change
- rest / next step
- every card

Do not add reset-all-project behavior, accounts, backend, database, sync, sharing, login, export/import, analytics, pricing, deployment planning, LLM implementation, dashboard expansion, visual redesign, mode workflow, or multi-project behavior.

Any actual clear-control implementation should happen in a separate later run after this boundary note.

The dashboard ↔ prototype reversible path and “Return to dashboard” link should remain preserved.

Next, rest before implementing any clear/reset controls, saving more fields, sessionStorage, cookies, backend, accounts, database, sync, dashboard expansion, visual redesign, mode workflow, multi-project system, or more editable cards.
