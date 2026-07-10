# Editable Prototype Read-Through

This is a read-through and housekeeping note, not a saving plan or app architecture plan.

The first editable prototype UI was checked by a human and seemed okay. It keeps the tiny edit surface intentionally narrow: only project name and current goal are editable.

Those edits update the visible prototype in the browser only. They do not save yet, and refreshing may reset the sample data.

Current Mode, last completed run, Next Action, Ignore For Now, Record the Change, and rest / next step remain static. Keeping those areas static protects Luna from becoming a task manager, workflow system, or larger app before the smallest editable surface is understood.

The dashboard ↔ prototype reversible path should be preserved, including the “Return to dashboard” link. The prototype should still feel like a quiet preview someone can leave safely, not a replacement for the public dashboard.

Before adding persistence, Luna should define a separate saving and local-storage boundary. Rest before deciding any saving or local storage boundary, or adding saving, local storage, session storage, cookies, backend, accounts, database, mode workflow, dashboard expansion, visual redesign, multi-project system, or more editable cards yet.
