# Saving Boundary

This note defines Luna's boundary before any later saving or local-storage work. It does not add saving in this run.

The prototype currently supports only temporary in-browser preview edits for project name and current goal. Before persistence is added, Luna should decide whether saving helps returning feel easier without creating pressure, clutter, accounts, syncing, or task-manager behavior.

If saving is chosen later, the first possible approach should be local and reversible. Any later saving should preserve the narrow editable surface: project name and current goal only.

Do not save these areas yet:

- Current Mode
- last completed run
- Next Action
- Ignore For Now
- Record the Change
- rest / next step
- every card

Do not add accounts, backend, database, sync, sharing, login, export/import, analytics, pricing, deployment planning, LLM implementation, or multi-project behavior.

If localStorage is considered later, it should require a separate implementation run after this boundary note.

The dashboard ↔ prototype reversible path and “Return to dashboard” link should remain preserved.

Next, rest before implementing localStorage, saving, sessionStorage, cookies, backend, accounts, database, sync, dashboard expansion, visual redesign, mode workflow, multi-project system, or more editable cards.
