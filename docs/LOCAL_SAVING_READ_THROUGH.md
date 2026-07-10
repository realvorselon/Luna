# Local Saving Read-Through

This is a read-through note after human testing, not a request to expand saving.

A human tested the tiny local browser saving in `prototype.html`, and it worked: project name and current goal survived refresh.

The saved values are local to the same browser only. They do not sync, no account is created, and clearing browser site data may clear the saved values.

Only project name and current goal are saved. Current Mode, last completed run, Next Action, Ignore For Now, Record the Change, rest / next step, and every other card remain static and unsaved.

The dashboard ↔ prototype reversible path and “Return to dashboard” link should remain preserved.

Next, rest before adding reset/clear controls, saving more fields, sessionStorage, cookies, backend, accounts, database, sync, dashboard expansion, visual redesign, mode workflow, multi-project system, or more editable cards.
