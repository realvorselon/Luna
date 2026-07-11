# Input Safety Boundary

Luna may hold project notes, but should not help harmful intent become more actionable.

## Why this matters

- Luna will eventually accept user-entered text.
- Without AI, Luna cannot truly understand every possible thing someone types.
- Even with AI later, safety needs clear boundaries before generation or expansion.
- The early prototype should stay humble: narrow fields, local-only saving, plain reminders, and no harmful amplification.

## Non-AI safety approach

- Prefer structured fields over one large arbitrary text box.
- Treat user text as user-provided notes, not as instructions to expand automatically.
- Do not generate plans, checklists, strategies, or polished outputs from harmful user input.
- Use plain boundary copy near editable areas later, especially before adding more editable fields.
- Remind users not to store private secrets, passwords, addresses, financial numbers, medical details, threats, or instructions for harming themselves or others.
- Keep browser-only saving clear and honest.
- Do not pretend the app is a full moderation system.

## Likely misuse categories to avoid helping with

Luna should avoid helping with:

- harassment, threats, or dehumanizing abuse
- instructions or planning for harming oneself or others
- illegal or violent plans
- storing highly private secrets or sensitive personal data in casual project fields
- using Luna to make harmful intent more organized, persuasive, or actionable

## Crisis boundary

If a future version detects obvious crisis or self-harm language, Luna should show a static support / emergency note rather than trying to coach, diagnose, or solve the crisis. The exact copy and implementation should wait for a later safety-focused run.

## What this run does not change

This run does not add detection, moderation, crisis copy, warnings, UI, JavaScript, or prototype changes. It only creates this boundary note and refreshes stale project trail items.

The current prototype remains unchanged:

- project name and current goal are the only editable fields
- localStorage saving remains browser-only
- clear-local-edits behavior remains unchanged
- other cards remain static sample text
- the gentle return path remains static and non-interactive
