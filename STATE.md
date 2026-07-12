# State

## Identity

Luna is becoming a small, moonlit one-project return app. It begins with a real opening threshold, carries a person through the first complete Guided Return loop, and keeps the full overview available as a quieter reference and editing mode.

## Current Goal

Rest after completing the fourth meaningful v0.1 slice: Luna now has its first deterministic local return-guidance engine.

## Last Completed Run

- 2026-07-12: Completed the fourth meaningful v0.1 vertical slice: added Shape this return as a secondary opening-threshold action, introduced Luna’s first deterministic browser-only guidance engine, offered reviewable suggestions for Current goal, One Next Action, Set Aside, and Record without silently overwriting fields, preserved the five existing local project-edit keys as the only persisted project values, and kept suggestion results/history unpersisted with no API, backend, account, cost, or network call.
- 2026-07-12: Completed the third meaningful v0.1 vertical slice: the complete Guided Return loop now responds to the saved one-project context. Set Aside uses one local Ignore For Now value, Record uses one local brief note value, recipe-specific leakage was removed from the guided experience where current context should appear, and the opening threshold, navigation loop, motion, and six-stage shell remain preserved.
- 2026-07-12: Added one secondary “Return to Luna” action from the full overview back to the Luna opening threshold after human testing found the new opening passed strongly but the overview lacked a direct way back.
- 2026-07-12: Replaced the prototype-like opening of `prototype.html` with a real Luna opening threshold that establishes Luna's identity, preserves one-project focus, surfaces only enough current project context to feel grounded, and routes the primary "Return gently" action into the existing Guided Return shell.

## Next Suggested Step

Human-test the local return-guidance engine on mobile using concise, vague, blank, long, and HTML-like project text. Confirm suggestion quality, selective application, privacy, safe rendering, persistence of applied values, and whether Luna now feels genuinely useful without a backend. If it passes without a blocking issue, choose one substantial v0.1 stabilization and coherence pass.

## Notes

Luna has deliberately shifted away from many tiny automatic micro-experiments toward fewer, more meaningful vertical slices. The first v0.1-oriented slice was the Luna opening threshold; the second completed the six-stage shell; the third made the complete loop contextual; this run is the fourth meaningful v0.1 vertical slice. The complete Guided Return loop now follows the current one-project context from full overview edits through opening threshold, Orient, Remember, Choose, Set Aside, Record, and Rest.

Local browser persistence now includes two new keys: `luna.prototype.setAside` and `luna.prototype.recordChange`, alongside the preserved `luna.prototype.projectName`, `luna.prototype.currentGoal`, and `luna.prototype.nextAction` keys. Clear local edits now explicitly clears those five local project-edit keys in this browser and restores safe fallbacks. Set Aside remains one value, not a backlog. Record remains one brief value, not a log. The opening threshold, “Return gently,” navigation loop, motion, mobile treatment, full overview reference/editing mode, reduced-motion behavior, rapid-click protection, transition cleanup, and six-stage Guided Return shell remain preserved. Luna is back at Rest. The local guidance engine uses bounded deterministic text rules around blank, generic, long, multi-sentence, list-like, and broad wording; it does not pretend to be generative AI, never silently overwrites wording, and applies only individual reviewed suggestions. Suggestions are recomputed in the browser, are not stored, and create no suggestion-history key.
