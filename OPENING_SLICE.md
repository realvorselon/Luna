# Opening Threshold Slice 01: Garden Gate Press-Start

## Purpose

Plan the first narrow visual implementation slice for Luna's opening threshold before changing UI code. This slice should translate the existing opening into the quiet moonlit garden direction without changing how Luna works.

## 1. Scope

This future implementation slice is limited to the opening threshold screen only.

In scope:

- Reframe the opening threshold visually as a quiet moonlit press-start moment.
- Make the existing primary entry action feel like crossing a small garden gate.
- Keep the implementation narrow enough to review as one visual/layout translation.

Out of scope:

- Do not redesign Guided Return.
- Do not redesign Full overview/editing.
- Do not add new features.
- Do not add images or assets.
- Do not add new storage keys.
- Do not change the guidance engine.
- Do not change prototype behavior, navigation, persistence, or data flow unless a later implementation plan explicitly lists the visual-preservation reason.

## 2. Desired opening feel

The opening should feel like a quiet press-start screen: mostly atmosphere, presence, and invitation rather than project summary. The user should encounter Luna's moon presence first, then understand there is one gentle way to enter.

The primary action should feel like crossing a garden gate. A simple garden-gate or torii-inspired form may become the main button itself, as long as it remains clearly pressable and comfortable. The button text should remain `Return gently` or a very close equivalent.

Most project details should stay hidden until after entry. The first screen should not feel like a dashboard, project status page, settings panel, or form.

## 3. Visual layout concept

A possible layout for the later implementation:

- Top: a moonlit sky feeling, Luna name, and a few small stars or star-like points.
- Center: a simple garden-gate or torii-inspired gate button as the main threshold.
- Inside or near the gate: the primary action text, `Return gently`.
- Beneath: very quiet secondary actions such as `Shape this return` and `Open full overview`.
- Optional: a subtle path or lantern hint that points toward entry without becoming a heavy card.

Avoid:

- Dashboard-like summaries on first arrival.
- A form-like opening surface.
- Settings-panel hierarchy.
- Heavy cards that compete with the gate.
- A full illustrated scene that fights the usable UI.

## 4. Behavior preservation notes

The future implementation should be visual/layout translation only, not logic expansion.

Preserve these existing behaviors:

- `Return gently` still enters the existing Guided Return path.
- `Shape this return` still accesses the existing suggestion behavior.
- `Open full overview` still reaches the existing overview/editing surface.
- Local-only storage remains local-only.
- The five saved project keys remain the same and no new keys are added.
- Existing input limits remain intact.
- User text remains safely rendered.
- Guidance remains deterministic and browser-only.
- Reduced-motion behavior remains honored.
- Rapid-click protection remains intact.
- Mobile comfort protections remain intact.

## 5. Comfort and accessibility constraints

- Mobile readability is a hard constraint.
- Motion must remain calm, rare, slow, and compatible with reduced-motion preferences.
- Avoid glow, shimmer, parallax, or movement that could trigger nausea or eye strain.
- The gate must still read as clearly pressable.
- Text must remain readable at mobile sizes.
- The opening must remain a usable UI, not a full illustrated scene.
- Decorative atmosphere should guide attention, not distract from the entry action.

## 6. Acceptance criteria for the later implementation PR

A later implementation PR should be considered successful only if:

- [ ] Opening threshold visually reads more like a moonlit press-start screen.
- [ ] Gate/button is clearly the main action.
- [ ] Project details are not visually dominant on first arrival.
- [ ] Secondary actions are quieter than `Return gently`.
- [ ] Existing behavior still works.
- [ ] No new storage, network, model, backend, account, analytics, or persistence behavior is added.
- [ ] Mobile comfort and readability are preserved.
- [ ] Reduced-motion behavior is still honored.
- [ ] Tests/static checks are updated only as needed for the visual/layout translation.
