const assert = require('node:assert/strict');
const fs = require('node:fs');
const guidance = require('../prototype-guidance.js');


const returnCue = guidance.buildReturnCue({
  projectName: 'Luna-forge',
  currentGoal: 'make Rest useful',
  nextAction: 'check the Rest card',
  setAside: 'Extra polish ideas',
  recordChange: 'Added synthesis.'
});
assert.equal(returnCue.title, 'When you return');
assert.equal(returnCue.cue, 'When you come back, return to Luna-forge by starting with check the Rest card. Keep close to the thread: make Rest useful. Extra polish ideas can wait outside the gate for now.');
assert.match(returnCue.cue, /Extra polish ideas can wait outside the gate/);
assert.equal(returnCue.relief, 'Begin with the lantern. You do not have to carry the whole unfinished thing at once.');

const fallbackCue = guidance.buildReturnCue({
  projectName: 'What do you want to come back to?',
  currentGoal: 'What feels hard to pick back up?',
  nextAction: 'What is the first small move?',
  setAside: 'What do you not need to carry right now?',
  recordChange: 'What is clearer now?'
});
assert.equal(fallbackCue.cue, 'When you come back, return to this return by starting with one small visible step. The extra noise can wait outside the gate for now.');
assert.doesNotMatch(fallbackCue.cue, /Name the thing you want to return to|What is one small next step|What can wait while you return|What are you trying to make easier/);

const base = {
  projectName: 'Luna',
  currentGoal: 'Clarify the opening threshold.',
  nextAction: 'Open the prototype.',
  setAside: 'Leave visual polish for later.',
  recordChange: 'Chose the next return shape.'
};

let result = guidance.buildReturnGuidance({ ...base, currentGoal: '   ' });
assert.equal(result.goal.status, 'suggestion');
assert.equal(result.goal.suggestion, 'Name what would make returning to Luna easier.');
assert.equal(result.goal.voiceKey, 'goalBlank');

const repeat = guidance.buildReturnGuidance({ ...base, currentGoal: '   ' });
assert.deepEqual(result, repeat, 'identical context should produce identical wording');

const changed = guidance.buildReturnGuidance({ ...base, currentGoal: '   ', projectName: 'Moon Desk' });
assert.equal(changed.goal.status, 'suggestion');
assert.notEqual(changed.goal.suggestion, result.goal.suggestion, 'meaningful context changes can change appropriate wording');

result = guidance.buildReturnGuidance({ ...base, currentGoal: 'Make progress on everything' });
assert.equal(result.goal.status, 'suggestion');
assert.equal(result.goal.voiceKey, 'goalBroad');

result = guidance.buildReturnGuidance({ ...base, currentGoal: 'Clarify the opening threshold.' });
assert.equal(result.goal.status, 'clear');
assert.equal(result.goal.voiceKey, 'goalClear');

result = guidance.buildReturnGuidance({ ...base, currentGoal: 'Clarify the opening threshold and review every edge case and rewrite every note so the whole thing finally feels complete across the entire app' });
assert.equal(result.goal.status, 'suggestion');
assert.equal(result.goal.voiceKey, 'goalLong');

result = guidance.buildReturnGuidance({ ...base, nextAction: 'Open prototype.html, review the opening, and adjust the copy.' });
assert.equal(result.nextAction.status, 'suggestion');
assert.equal(result.nextAction.suggestion, 'Open prototype.html');
assert.equal(result.nextAction.voiceKey, 'actionMultiple');

result = guidance.buildReturnGuidance({ ...base, nextAction: 'Finish everything' });
assert.equal(result.nextAction.status, 'suggestion');
assert.equal(result.nextAction.voiceKey, 'actionBroad');

result = guidance.buildReturnGuidance({ ...base, nextAction: 'Open prototype.html.' });
assert.equal(result.nextAction.status, 'clear');
assert.equal(result.nextAction.voiceKey, 'actionClear');

result = guidance.buildReturnGuidance({ ...base, setAside: 'Animations, dashboard polish, and extra docs' });
assert.equal(result.setAside.status, 'suggestion');
assert.equal(result.setAside.suggestion, 'Animations');
assert.equal(result.setAside.voiceKey, 'setAsideMultiple');

result = guidance.buildReturnGuidance({ ...base, recordChange: '' });
assert.equal(result.recordChange.status, 'suggestion');
assert.equal(result.recordChange.suggestion, 'Noted one small change while returning to Luna: Open the prototype.');
assert.doesNotMatch(result.recordChange.suggestion, /\.\./, 'Record fallback should not produce doubled periods');
assert.equal(result.recordChange.voiceKey, 'recordBlank');

result = guidance.buildReturnGuidance({ ...base, recordChange: 'Write an update later when each thing changes.' });
assert.equal(result.recordChange.status, 'suggestion');
assert.equal(result.recordChange.voiceKey, 'recordLong');

result = guidance.buildReturnGuidance({ ...base });
assert.equal(result.goal.status, 'clear');
assert.equal(result.nextAction.status, 'clear');
assert.equal(result.setAside.status, 'clear');
assert.equal(result.recordChange.status, 'clear');
assert.match(result.allClearMessage, /clear|ready|rewriting|written|deterministic/i);
assert.match(result.restMessage, /waiting|stop here|Rest is allowed|gently|without pressure/i);
assert.match(result.restMessage, /[.!?]$/, 'Rest message should end cleanly');
assert.doesNotMatch(result.restMessage, /\.\.|\s+[.!?]$/, 'Rest message should not have doubled punctuation or spacing before the ending');
assert.doesNotMatch(result.restMessage, /must|should|hurry|productive|finish/i);

result = guidance.buildReturnGuidance({ ...base, currentGoal: '<img src=x onerror=alert(1)> and polish everything', nextAction: '<b>Open</b>, then ship' });
assert.equal(typeof result.goal.suggestion, 'string');
assert.equal(typeof result.nextAction.suggestion, 'string');
assert.match(result.goal.current, /<img/);
assert.match(result.nextAction.current, /<b>Open<\/b>/);
assert.doesNotMatch(result.restMessage, /<script/i);

const html = fs.readFileSync('prototype.html', 'utf8');
const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
const js = fs.readFileSync('prototype-guidance.js', 'utf8');
const state = fs.readFileSync('STATE.md', 'utf8');
const roadmap = fs.readFileSync('ROADMAP.md', 'utf8');
const changelog = fs.readFileSync('CHANGELOG.md', 'utf8');
const project = JSON.parse(fs.readFileSync('project.json', 'utf8'));
assert(state.startsWith('# State'), 'STATE.md should begin with the # State heading');
const transitionTrail = 'This was a focused Guided Return response-transition pass that moved Luna’s answer-receiving moment out of the crowded question card and into a calm deterministic transition between questions, so the mobile flow feels more like Luna asks, receives, places the answer into the Return Card, and then continues.';
const hierarchyTrail = 'This was a focused Guided Return hierarchy polish pass that made receiving screens feel like intentional between-question moments instead of repeated stages, reduced duplicate “holding” language, clarified where each answer goes in the Return Card, and hid opening-threshold scaffolding during Guided Return.';
const visualTrail = 'This was a focused Guided Return visual foundation pass that made the active question and receiving moments feel more like one moonlit return space instead of stacked form panels, while preserving the local-only six-stage flow and Return Card behavior.';
const visualNextStep = 'Human mobile test of whether Guided Return now feels like one calm moonlit return space.';
for (const trailText of [state, roadmap, changelog]) {
  assert(trailText.includes('Guided Return visual foundation pass'), 'project trail should record the focused visual foundation pass');
  assert(trailText.includes('one moonlit return space instead of stacked form panels'), 'project trail should name the visual foundation problem');
  assert(trailText.includes('local-only six-stage flow and Return Card behavior'), 'project trail should preserve the behavior boundary');
  assert(trailText.includes('Rest'), 'project trail should keep Luna at Rest');
  assert(trailText.includes('Guided Return hierarchy polish pass'), 'project trail should preserve the hierarchy polish context');
  assert(trailText.includes('Guided Return response-transition pass'), 'project trail should preserve the response-transition context');
  assert(trailText.includes(transitionTrail), 'project trail should preserve the previous response-transition run');
  assert(trailText.includes(visualNextStep), 'project trail should point to the visual foundation human test');
}
assert.deepEqual(project.statusHistory[0], {
  date: '2026-07-16',
  note: visualTrail
}, 'new statusHistory entry should keep the existing object shape');
assert.equal(project.currentGoal, 'Rest after the Guided Return visual foundation pass.');
assert.equal(project.currentMode.name, 'Rest');
assert.equal(project.currentMode.value, 'Rest');
assert.equal(project.currentMode.description, 'Luna is resting after a focused Guided Return visual foundation pass.');
assert.equal(project.currentMode.whyItMatters, 'Guided Return now feels more like one moonlit return space while preserving the local-only six-stage flow.');
assert.equal(project.lastCompletedRun, visualTrail);
assert.equal(project.nextStep, visualNextStep);
assert.equal(project.nextSuggestedStep, visualNextStep);
assert(!/Math\.random\s*\(/.test(js), 'guidance must not use Math.random');
assert(!/\bfetch\s*\(/.test(html + js), 'local guidance must not call fetch');
assert(!html.includes('return-cue-card'), 'Rest should no longer render a separate synthesized cue card panel');
assert(html.includes('const getReturnCardSynthesis = () => window.LunaReturnGuidance.buildReturnCue(getGuidanceContext());'), 'Rest synthesis should use deterministic local guidance helper');
assert(html.includes('const renderComposedReturnCard = () => {'), 'Rest synthesis should render inside the composed Return Card artifact');
assert(html.includes('${renderComposedReturnCard()}'), 'Rest should render one composed Return Card artifact');
assert(html.includes('When you return'), 'synthesized Rest cue should use useful section title');
assert((html + js).includes('Begin with the lantern. You do not have to carry the whole unfinished thing at once.'), 'burden-reducing line remains present');
assert(html.includes('Edit Luna’s current project'), 'overview should include a clear editing-area heading');
assert(html.includes('opening-moonrise'), 'opening threshold should foreground the Luna/moon title area');
assert(html.includes('opening-gate'), 'opening threshold should include the CSS-only garden-gate press-start direction');
assert(html.includes('opening-payoff-preview'), 'opening should include a static payoff preview');
assert(html.includes('aria-label="What Luna gives back"'), 'payoff preview should be labelled as what Luna gives back');
for (const payoffCopy of ['Find the thread', 'Choose the lantern', 'Leave with a Return Card']) {
  assert(html.includes(payoffCopy), `opening payoff preview should include: ${payoffCopy}`);
}
const payoffPreviewMarkup = html.match(/<div class="opening-payoff-preview"[\s\S]*?<div class="opening-actions"/)[0];
assert(!/<input|<button|id="opening-payoff/i.test(payoffPreviewMarkup), 'payoff preview should be static explanatory copy, not new user data');
assert(!html.includes('<div class="opening-gate" aria-hidden="true"></div>'), 'opening gate should not be an empty aria-hidden decorative sibling');
assert(/<div class="opening-gate">\s*<button class="guided-control opening-primary" type="button" id="begin-guided-return-button">Return gently<\/button>\s*<\/div>/.test(html), 'opening gate should wrap the real Return gently button');
for (const openingAction of ['Return gently', 'Shape this return', 'Open full overview']) {
  assert(html.includes(openingAction), `${openingAction} should remain present`);
}
assert(html.includes('These five answers help Luna make a Return Card: what you are returning to, what feels hard, the first small move, what can wait, and what is clearer'), 'overview should explain what the editable context updates');
assert(html.includes('They stay only in this browser.'), 'overview should explain local-only storage');
for (const id of ['project-name-input', 'current-goal-input', 'next-action-input', 'set-aside-input', 'record-change-input']) {
  assert(html.includes(`id="${id}"`), `${id} should remain present`);
}
assert.equal((html.match(/maxlength="80"/g) || []).length, 1);
assert.equal((html.match(/maxlength="160"/g) || []).length, 1);
assert.equal((html.match(/maxlength="140"/g) || []).length, 2);
assert.equal((html.match(/maxlength="180"/g) || []).length, 1);
assert(html.includes('character-feedback'));
assert(html.includes('aria-describedby="project-name-helper project-name-count"'));
assert(html.includes("const projectNameStorageKey = 'luna.prototype.projectName';"));
assert(html.includes("const currentGoalStorageKey = 'luna.prototype.currentGoal';"));
assert(html.includes("const nextActionStorageKey = 'luna.prototype.nextAction';"));
assert(html.includes("const setAsideStorageKey = 'luna.prototype.setAside';"));
assert(html.includes("const recordChangeStorageKey = 'luna.prototype.recordChange';"));

const projectStorageKeys = [...html.matchAll(/const (\w+StorageKey) = '(luna\.prototype\.[^']+)';/g)].map((match) => match[2]);
assert.deepEqual(projectStorageKeys, [
  'luna.prototype.projectName',
  'luna.prototype.currentGoal',
  'luna.prototype.nextAction',
  'luna.prototype.setAside',
  'luna.prototype.recordChange'
], 'the existing five project-edit keys should remain the only saved project keys');
assert(!/localStorage\.(?:setItem|removeItem)\(\s*['"]luna\.prototype\./.test(html), 'localStorage project edits should use the declared five key constants, not hidden extra key literals');
const guidedStageTitles = [...html.matchAll(/title: '([^']+)'/g)].map((match) => match[1]);
for (const invitation of ['What do you want to come back to?', 'What feels hard to pick back up?', 'What is the first small move?', 'What do you not need to carry right now?', 'What is clearer now?']) {
  assert(html.includes(invitation), `${invitation} invitation default should remain present`);
  assert(js.includes(invitation), `${invitation} guidance fallback should remain present`);
}
for (const oldInvitation of ['Name the thing you want to return to.', 'What are you trying to make easier?', 'What is one small next step?', 'What can wait while you return?', 'What changed, even a little?']) {
  assert(!html.includes(oldInvitation), `${oldInvitation} old placeholder-feeling wording should be removed from visible prototype copy`);
  assert(!js.includes(oldInvitation), `${oldInvitation} old placeholder-feeling wording should be removed from guidance defaults`);
}
assert.deepEqual(guidedStageTitles, ['Find your place', 'Remember', 'Choose', 'Set Aside', 'Record', 'Rest'], 'Guided Return stage order should stay fixed');
assert(html.includes("showGuidedReceivingTransition('projectName', 0, 1);"), 'projectName receiving transition should advance to currentGoal inside Find your place');
assert(html.includes("showGuidedReceivingTransition(fieldKey, guidedStageIndex + 1, guidedPlaceStepIndex);"), 'question Continue should pass through receiving before the next stage');
assert(html.includes("guidedTransitionPending ? 'Continue'"), 'receiving interstitial should provide a manual Continue button');
assert.equal(guidedStageTitles[0], 'Find your place', 'the first Guided Return stage should still say Find your place');

for (const questionCopy of [
  'What do you want to come back to?',
  'What feels hard to pick back up?',
  'What is the first small move?',
  'What do you not need to carry right now?',
  'What is clearer now?'
]) {
  assert(html.includes(questionCopy), `Guided Return conversational question copy should include: ${questionCopy}`);
}
assert(html.includes("const guidedPlaceSteps = ['projectName', 'currentGoal'];"), 'Find your place should define only the existing project name and current goal internal steps');
assert(html.includes("${renderGuidedEditableField(getGuidedPlaceFieldKey())}"), 'Find your place should render only the active internal editable field');
assert(!html.includes("${renderGuidedEditableField('projectName')}\n              ${renderGuidedEditableField('currentGoal')}"), 'Find your place should not render both projectName and currentGoal inline fields at once by default');
assert(html.includes('data-guided-place-continue'), 'Find your place should include a local internal Continue control');
assert(html.includes('data-guided-place-back'), 'Find your place should include a local internal Back control');
assert(html.includes('guidedBackButton.hidden = guidedTransitionPending || guidedStageIndex === 0;'), 'main back button should stay hidden inside Find your place and receiving transitions');
assert(html.includes('guidedForwardButton.hidden = !guidedTransitionPending && guidedStageIndex === 0 && guidedPlaceStepIndex === 0;'), 'main forward button should hide only on the first Find your place question to avoid duplicate Continue controls');
assert(!html.includes('guidedForwardButton.hidden = false;'), 'main forward button should not stay visible on the first Find your place question');
assert(html.includes("guidedForwardButton.textContent = guidedTransitionPending ? 'Continue'"), 'main forward button should become Continue during receiving transitions');
assert(!/guidedForwardButton\.hidden\s*=\s*guidedStageIndex === 0/.test(html), 'main forward button should show on currentGoal and later stages instead of hiding across all Find your place');
assert(html.includes("${renderGuidedEditableField('nextAction')}"), 'Choose should include editable One Next Action');
assert(html.includes("${renderGuidedEditableField('setAside')}"), 'Set Aside should include editable Set Aside / Ignore For Now');
assert(html.includes("${renderGuidedEditableField('recordChange')}"), 'Record should include editable Record the Change');
for (const guidedField of ['projectName', 'currentGoal', 'nextAction', 'setAside', 'recordChange']) {
  assert(html.includes('data-guided-field="${fieldKey}"'), 'Guided editable renderer should preserve data-guided-field binding');
}
assert(html.includes('<input id="${inputId}" type="text"'), 'Guided editable fields should remain real text inputs');
assert(html.includes('syncGuidedEditableFields();'), 'Guided Return inline controls should sync through existing fields');
assert(html.includes('guided-answer-space'), 'Guided Return should style editable responses as calm answer spaces');
assert(html.includes('guided-answer-input-frame'), 'Guided Return answer spaces should wrap the real input elements');
assert(html.includes('Your answer'), 'Guided Return answer-space copy should gently label the response area');
assert(!html.includes('Luna will hold this locally.'), 'Guided Return should not repeat local-only helper copy under every answer');
assert(html.includes('Answer one thing at a time. Each answer helps Luna build the Return Card and stays in this browser.'), 'Guided Return should keep one compact local-only boundary near the opening stage');
for (const softenedNote of ['Begin here when you come back.', 'A boundary, not a backlog.', 'A few clear words are enough.']) {
  assert(html.includes(softenedNote), `Guided Return should keep softened non-duplicative helper copy: ${softenedNote}`);
}

for (const removedContributionCue of [
  'This becomes Returning to.',
  'This becomes The thread.',
  'This becomes The lantern: the place to begin when you come back.',
  'This becomes What changed.'
]) {
  assert(!html.includes(removedContributionCue), `Guided Return should remove repeated contribution cue: ${removedContributionCue}`);
}
assert(!html.includes('guided-contribution-cue'), 'Guided Return should remove the repeated contribution cue block from visible answer spaces');
assert(html.includes('guided-flow-lead'), 'Guided Return should include compact connective flow lead-in copy');
assert(html.includes('const getGuidedFlowLeadIn = (stageKey) => {'), 'connective flow copy should be deterministic local rendering');
assert(html.includes("if (stageKey === 'currentGoal') return `Okay. We’re returning to ${project}. What feels hard to pick back up?`;"), 'currentGoal connective copy should carry the current projectName value into the next question');
for (const connectiveCopy of [
  'We only need enough to see why restarting has felt hard.',
  'I’m holding the thread. Now choose the first small move.',
  'Good. That’s the lantern. What do you not need to carry right now?',
  'The gate is quieter now. What is clearer now?'
]) {
  assert(html.includes(connectiveCopy), `Guided Return connective flow copy should include: ${connectiveCopy}`);
}
assert(html.includes('const renderGuidedFlowLeadIn = (stageKey) => `<p class="guided-flow-lead" data-guided-flow-lead="${stageKey}">${escapeHtml(getGuidedFlowLeadIn(stageKey))}</p>`;'), 'connective flow copy should escape user-rendered values in initial render');
assert(html.includes("if (leadIn) leadIn.textContent = getGuidedFlowLeadIn(leadIn.getAttribute('data-guided-flow-lead'));"), 'connective flow copy live updates should render user values with textContent');
assert(html.includes('updateGuidedFlowLeadIn();'), 'Guided inline edits should refresh connective flow copy when relevant local values change');

assert(html.includes('Begin here when you come back.'), 'Choose should keep the lantern/resume point important without duplicating the contribution cue');

assert(html.includes('guidedTransitionPending'), 'Guided Return should track a deterministic receiving/interstitial state');
assert(html.includes('guidedTransitionFieldKey'), 'Guided Return should remember which field Luna is receiving');
assert(html.includes('guidedTransitionNextStageIndex'), 'Guided Return should remember which stage follows the receiving screen');
assert(html.includes('const clearGuidedReceivingTransition = () => {'), 'Guided Return should have one explicit helper that clears receiving state');
assert(html.includes('const showGuidedReceivingTransition = (fieldKey, nextStageIndex, nextPlaceStepIndex) => {'), 'Guided Return should have one explicit helper that starts receiving state');
assert(html.includes('const finishGuidedReceivingTransition = () => {'), 'Guided Return should have one explicit helper that advances out of receiving state');
assert(/const finishGuidedReceivingTransition = \(\) => \{[\s\S]*?const nextStageIndex = guidedTransitionNextStageIndex;[\s\S]*?const nextPlaceStepIndex = guidedTransitionNextPlaceStepIndex;[\s\S]*?guidedStageIndex = nextStageIndex;[\s\S]*?guidedPlaceStepIndex = nextPlaceStepIndex;[\s\S]*?clearGuidedReceivingTransition\(\);[\s\S]*?moveGuidedStage\('forward'\);[\s\S]*?\};/.test(html), 'receiving Continue should set the next indexes before clearing transition state and rendering once');
assert(html.includes("showGuidedReceivingTransition('projectName', 0, 1);"), 'projectName Continue should produce projectName receiving before currentGoal appears');
assert(/if \(guidedTransitionPending\) \{\s*finishGuidedReceivingTransition\(\);\s*return;\s*\}/.test(html), 'receiving Continue after projectName should finish receiving into currentGoal without re-running question routing');
assert(html.includes("const fieldKey = guidedStageIndex === 0 ? 'currentGoal'"), 'currentGoal Continue should be routed as the second Find your place field');
assert(html.includes("showGuidedReceivingTransition(fieldKey, guidedStageIndex + 1, guidedPlaceStepIndex);"), 'currentGoal Continue should produce receiving before Remember, and later fields should receive before their next stages');
assert(html.includes('clearGuidedReceivingTransition();\n\n      if (guidedStageIndex === 0 && guidedPlaceStepIndex > 0)'), 'Back from normal Guided Return questions should clear stale receiving state before moving');
const findYourPlaceRender = html.match(/title: 'Find your place',[\s\S]*?render: \(\) => `([\s\S]*?)`\n      \}/)[1];
assert.equal((findYourPlaceRender.match(/>Continue<\/button>/g) || []).length, 1, 'Find your place step 1 should not render duplicate local Continue controls');
assert(html.includes('guidedPosition.textContent = guidedTransitionPending ? \'Between questions\' : `Stage ${guidedStageIndex + 1} of ${guidedStages.length}`;'), 'normal question screens should keep Stage X of 6 while receiving screens use Between questions');
assert(html.includes('guidedStageTitle.textContent = guidedTransitionPending ? \'Placing this into your Return Card\' : stage.title;'), 'receiving screens should use one clear transition title instead of repeating the question stage title');
assert(html.includes('guided-receiving-screen'), 'Guided Return should render a dedicated receiving/interstitial screen');
assert(html.includes('<span class="label">Return Card</span>'), 'receiving screen should use a quiet Return Card label instead of repeating holding language');
assert.equal((html.match(/Luna is holding this/g) || []).length, 0, 'receiving screen should avoid duplicate Luna is holding this labels');
assert(html.includes("guidedStageIntro.textContent = guidedTransitionPending ? '' : stage.intro;"), 'receiving screen should avoid redundant stage intro copy');
assert(!html.includes('Luna is placing your answer into the Return Card.'), 'receiving screen should remove redundant placement intro copy');
for (const receivingCopy of [
  'Okay. Luna will help you come back to',
  'I’m holding why this is hard to pick back up.',
  'Good. Begin again with this:',
  'You do not need to carry that while you begin again.',
  'I’ll put what is clearer into the Return Card.',
  'This becomes: Returning to.',
  'This becomes: The thread.',
  'This becomes: The lantern.',
  'This waits outside the gate.',
  'This becomes: What is clearer.',
  'This goes into the Return Card.'
]) {
  assert(html.includes(receivingCopy), `Guided Return receiving copy should include: ${receivingCopy}`);
}
assert(html.includes('const getGuidedReceivingMoment = (fieldKey, value) => {'), 'receiving moments should be deterministic local rendering without depending on guidedEditableFields initialization');
assert(html.includes('formatRestSummaryValue(fieldKey, value)'), 'receiving moments should format the passed current value with Rest fallback formatting');
assert(!html.includes('<p class="guided-receiving-moment" data-guided-receiving-moment>${escapeHtml(getGuidedReceivingMoment(fieldKey, field.input.value))}</p>'), 'question screen should not duplicate the receiving moment under the input');
assert(!html.includes('updateGuidedReceivingMoment(fieldElement, fieldKey, field.input.value);'), 'Guided inline edits should not maintain a duplicated inline receiving moment');
assert(!/\b(?:AI|model|generating|thinking|analyzing|loading)\b/i.test(html.match(/const getGuidedReceivingMoment[\s\S]*?const guidedEditableFields/)[0]), 'receiving copy should avoid AI/network/random/loading language');
assert(!/Math\.random\s*\(/.test(html), 'receiving flow must not use random thinking');

assert(html.includes('live-return-card-preview'), 'Guided Return should keep live Return Card preview available outside crowded question cards');
assert(html.includes('aria-label="Live Return Card preview"'), 'live Return Card preview should be labelled accessibly');
assert(html.includes('<span class="label">Held so far</span>'), 'live Return Card preview should soften its heading to Held so far');
assert(html.includes('A preview of the Return Card Luna is building.'), 'desktop live Return Card preview should frame the held-thread purpose quietly without extra density');
assert(html.includes('live-return-card-compact'), 'compact mobile Held so far preview should exist');
assert(html.includes('data-live-return-card-compact-field="projectName"'), 'compact mobile preview should track projectName');
assert(html.includes("<strong>Returning</strong> <span>${escapeHtml(formatRestSummaryValue('projectName', getProjectName()))}</span>"), 'compact mobile preview should emphasize Returning/projectName and safely escape initial render');
assert(html.includes('data-live-return-card-compact-field="nextAction"'), 'compact mobile preview should track nextAction');
assert(html.includes("<strong>Lantern</strong> <span>${escapeHtml(formatRestSummaryValue('nextAction', getNextAction()))}</span>"), 'compact mobile preview should emphasize Lantern/nextAction and safely escape initial render');
assert(html.includes('+ 3 held for Rest'), 'compact mobile preview should include tiny held-for-Rest summary copy');
for (const liveReturnCardLabel of ['Returning to', 'The thread', 'The lantern', 'Waiting outside the gate', 'What changed']) {
  assert(html.includes(liveReturnCardLabel), `desktop live Return Card preview and Rest Return Card should preserve label: ${liveReturnCardLabel}`);
}
assert(html.includes('const liveReturnCardRows = ['), 'desktop live Return Card preview should be driven from one row list');
for (const livePreviewValue of [
  "['projectName', 'Returning to', getProjectName]",
  "['currentGoal', 'The thread', getCurrentGoal]",
  "['nextAction', 'The lantern', getNextAction]",
  "['setAside', 'Waiting outside the gate', getSetAside]",
  "['recordChange', 'What changed', getRecordChange]"
]) {
  assert(html.includes(livePreviewValue), `live Return Card preview should use existing value getter: ${livePreviewValue}`);
}
assert(html.includes('<strong>${escapeHtml(label)}</strong><span>${escapeHtml(formatRestSummaryValue(fieldKey, getValue()))}</span>'), 'desktop live Return Card preview should safely escape formatted values');
assert(html.includes('updateLiveReturnCardPreview();'), 'Guided inline edits and stage rendering should refresh the live Return Card preview');
assert(html.includes("if (compactValue) compactValue.textContent = formatRestSummaryValue(fieldKey, value);"), 'compact mobile preview live updates should use textContent');
assert(html.includes("row.classList.toggle('has-live-lantern', isRealUserEntry('nextAction', value));"), 'live Return Card preview should emphasize the lantern only when nextAction is a real entry');
assert(html.includes("isLantern && isRealUserEntry('nextAction', getValue()) ? ' has-live-lantern' : ''"), 'initial live Return Card render should include the lantern emphasis state when applicable');
assert(!html.includes('${renderLiveReturnCardPreview()}\n          <article class="quiet-card rest-card rest-landing-card"'), 'Rest should not duplicate the compact live preview before the full Return Card');
assert(html.includes('field.input.value = guidedInput.value;'), 'Guided inline edits should update the existing overview input values');
assert(html.includes('writeLocalValue(field.storageKey, guidedInput.value);'), 'Guided inline edits should save through the existing five storage keys');
assert(html.includes('Your Return Card is ready.'), 'Rest may keep a small arrival line that does not compete with the main artifact');
assert(html.includes('return-card-artifact'), 'Rest should use one composed Return Card artifact');
assert(html.includes('return-card-main-cue'), 'synthesized cue should be the main paragraph inside the artifact');
assert(html.includes('return-card-lantern-focus'), 'Rest should emphasize The lantern/nextAction as the clearest resume point');
assert(html.includes('Held details'), 'the other Return Card values should be quiet held details inside the same artifact');
assert(html.includes('return-card-cue-relief'), 'relief line should close the same composed artifact');
assert(!html.includes('You can stop here. Luna will keep the thread warm until you come back.'), 'Rest should remove redundant soft-landing panel copy');
assert(!html.includes("${renderLunaInsight('rest')}"), 'Rest should not add a separate Luna note card competing with the artifact');
assert(!html.includes('rest-held-words return-card'), 'Rest should not render a second separate full Return Card panel');
for (const returnCardLabel of ['Returning to', 'The thread', 'The lantern', 'Waiting outside the gate', 'What changed']) {
  assert(html.includes(returnCardLabel), `Rest Return Card should include label: ${returnCardLabel}`);
}
assert(html.includes('return-card-lantern'), 'Rest should visually emphasize nextAction as the lantern/resume point');
const returnToOpeningMatch = html.match(/<p class="footer-note return-opening-footer" id="return-opening-footer" hidden><a href="index.html">Return to Luna’s opening threshold<\/a>\.<\/p>/);
assert(returnToOpeningMatch, 'Return-to-opening copy/link should remain present but hidden on the opening threshold');
assert(returnToOpeningMatch[0].length < 150, 'Return-to-opening footer copy should remain short');
assert(html.includes('returnOpeningFooter.hidden = false;'), 'Return-to-opening loop should be visible in the full overview');
assert(/const showGuidedReturn = \(\) => \{[\s\S]*?returnOpeningFooter\.hidden = true;[\s\S]*?\};/.test(html), 'Return-to-opening footer should stay hidden during Guided Return');
assert(html.includes('returnOpeningFooter.hidden = true;'), 'Return-to-opening footer should hide again on the opening threshold');

for (const escapedRestValue of [
  "${escapeHtml(formatRestSummaryValue('projectName', getProjectName()))}",
  "${escapeHtml(formatRestSummaryValue('currentGoal', getCurrentGoal()))}",
  "${escapeHtml(formatRestSummaryValue('nextAction', getNextAction()))}",
  "${escapeHtml(formatRestSummaryValue('setAside', getSetAside()))}",
  "${escapeHtml(formatRestSummaryValue('recordChange', getRecordChange()))}"
]) {
  assert(html.includes(escapedRestValue), `Rest should preserve escaped current-return value: ${escapedRestValue}`);
}
assert(html.includes('class="luna-insight-card"'), 'Guided Return keeps insight cards available for real suggestions/warnings');
assert(html.includes('aria-label="Luna insight for this step"'), 'Guided Return insights should be accessible labelled coaching regions');
for (const copy of ['Name the unfinished thing. A short name is enough.', 'One small move is enough. This is the lantern.', 'Luna has one unfinished thing and one visible next move']) {
  assert(html.includes(copy), `Guided Return insight copy should include: ${copy}`);
}
assert(html.includes('updateVisibleGuidedInsight();'), 'Guided inline edits should refresh visible Luna insight copy after typing');
assert(html.includes('<span class="label">Luna note</span>'), 'insight cards should use lighter Luna note framing when shown');
assert(!html.includes("${renderLunaInsight('choose')}"), 'normal Choose question should not stack Luna note under every question');
assert(!html.includes("${renderLunaInsight('setAside')}"), 'normal Set Aside question should not stack Luna note under every question');
assert(!html.includes("${renderLunaInsight('record')}"), 'normal Record question should not stack Luna note under every question');
assert(css.includes('.luna-insight-card {\n        gap: 2px;\n        padding: 6px 8px;'), 'mobile Luna note should become a quieter line-like note with reduced spacing');
assert(css.includes('background: rgb(22 32 56 / 14%)'), 'mobile Luna note should use a much lighter background');
assert(css.includes('border-color: rgb(223 200 137 / 6%)'), 'mobile Luna note should use a much lighter border');
assert(css.includes('.luna-insight-card p {\n        font-size: 0.8rem;\n        line-height: 1.32;'), 'mobile Luna note copy should read smaller and quieter');
assert(!html.includes('This is not a log or report; one small note about what changed is enough.'), 'insight copy should be shortened to reduce crowding');
assert.equal((html.match(/StorageKey\s*=\s*'luna\.prototype\./g) || []).length, 5, 'only the five project storage keys should be declared');
assert(!/suggestion.*StorageKey|guidance.*StorageKey|history.*StorageKey/i.test(html), 'no suggestion/history storage keys');

assert(html.includes("let isApplied = false;"), 'suggestion actions should track only visible review-session state');
assert(html.includes("let previousValue = '';"), 'undo should preserve the exact previous field value in memory');
assert(html.includes('previousValue = field.input.value;'), 'undo value should come from the selected input immediately before applying');
assert(html.includes("useButton.textContent = 'Undo';"), 'applied suggestion action should become Undo');
assert(html.includes("useButton.textContent = 'Use this';"), 'undo should return the action to Use this');
assert(html.includes('applyGuidanceValue(previousValue);'), 'undo should restore the preserved value through the normal persistence path');
assert(html.includes('field.storageKey'), 'suggestion apply/undo should write only the selected field storage key');
assert(html.includes('Other fields were left unchanged. Use Undo'), 'status copy should communicate independent field updates');
assert(html.includes('Other fields were left unchanged.`'), 'undo status copy should communicate unrelated fields are untouched');
assert(!/undo.*StorageKey|previousValue.*StorageKey|applied.*StorageKey/i.test(html), 'undo state/history must not add a persistence key');
assert(!/sessionStorage|document\.cookie|eval\s*\(|new Function/.test(html + js), 'no session/cookie/dynamic execution');
assert(js.includes('voiceLibrary'));
assert(js.includes("voice('goalBlank'"));
assert(html.includes('guidance.allClearMessage'));
assert(html.includes('formatRestSummaryValue'), 'Rest held-words values should format invitation defaults honestly');
assert(html.includes('Not named yet'), 'Rest held-words values should not pretend default project prompt is a real project name');
assert(html.includes('createTextElement'));
assert(html.includes('textContent = text'));
assert(html.includes('const getReturnGuidance = () => window.LunaReturnGuidance.buildReturnGuidance(getGuidanceContext());'));


const inlineScript = html.match(/<script>\n([\s\S]*?)\n  <\/script>\n<\/body>/)[1];
for (const id of ['begin-guided-return-button', 'shape-return-button', 'show-overview-button']) {
  assert(html.includes(`id="${id}"`), `${id} should exist for opening button wiring`);
  assert(inlineScript.includes(`document.querySelector('#${id}')`), `${id} should be queried during initialization`);
}
assert(inlineScript.includes("beginGuidedReturnButton.addEventListener('click', showGuidedReturn);"), 'Return gently listener should be attached during initialization');
assert(inlineScript.includes("shapeReturnButton.addEventListener('click', showLocalGuidance);"), 'Shape this return listener should be attached during initialization');
assert(inlineScript.includes("showOverviewButton.addEventListener('click', showFullOverviewFromOpening);"), 'Open full overview listener should be attached during initialization');
assert(!inlineScript.includes('update: updateProjectNameDisplay,'), 'Guided editable field config should not read updateProjectNameDisplay before it is initialized');
assert(inlineScript.includes('const normalizeInvitationValue = (value) => (value ?? \'\').toString().trim();'), 'invitation default formatting should safely normalize missing values');
assert(inlineScript.includes('if (typeof defaultValue !== \'string\') return false;'), 'invitation default checks should guard unknown field keys');

class FakeElement {
  constructor(id = '') {
    this.id = id;
    this.value = '';
    this.defaultValue = '';
    this.textContent = '';
    this.hidden = false;
    this.disabled = false;
    this.dataset = {};
    this.attributes = new Map();
    this.listeners = {};
    this.children = [];
    this.classList = { add: () => {}, remove: () => {}, toggle: () => {} };
  }
  addEventListener(type, listener) { this.listeners[type] = listener; }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  getAttribute(name) { return this.attributes.get(name) || ''; }
  focus() {}
  append(...children) { this.children.push(...children); }
  after() {}
  querySelector(selector) {
    if (selector === 'input') return new FakeElement('guided-inline-input');
    if (selector === 'p') return this.children.find((child) => child.tagName === 'p') || new FakeElement('p');
    return new FakeElement(selector);
  }
  querySelectorAll() { return []; }
}

const requiredPrototypeIds = [...html.matchAll(/id="([^"]+)"/g)].map((match) => match[1]);
const fakeElements = new Map();
for (const id of requiredPrototypeIds) {
  const element = new FakeElement(id);
  if (id.endsWith('-input')) {
    element.value = 'Test value';
    element.defaultValue = 'Test value';
    const limit = html.match(new RegExp(`id="${id}"[^>]*maxlength="(\\d+)"`));
    if (limit) element.setAttribute('maxlength', limit[1]);
  }
  if (id.includes('display')) element.textContent = 'Test display';
  fakeElements.set(id, element);
}
fakeElements.get('guided-return-view').hidden = true;
fakeElements.get('full-overview').hidden = true;
fakeElements.get('local-guidance-panel').hidden = true;

const vmContext = {
  console,
  require,
  setTimeout,
  clearTimeout,
  localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  window: {
    matchMedia: () => ({ matches: true }),
    clearTimeout,
    setTimeout,
    LunaReturnGuidance: guidance
  },
  document: {
    querySelector: (selector) => selector.startsWith('#') ? fakeElements.get(selector.slice(1)) || null : new FakeElement(selector),
    createElement: (tagName) => {
      const element = new FakeElement(tagName);
      element.tagName = tagName;
      return element;
    }
  }
};
vmContext.window.window = vmContext.window;
vmContext.window.document = vmContext.document;
require('node:vm').runInNewContext(inlineScript, vmContext, { filename: 'prototype.html inline script' });
for (const id of ['begin-guided-return-button', 'shape-return-button', 'show-overview-button']) {
  assert.equal(typeof fakeElements.get(id).listeners.click, 'function', `${id} should have a click listener after initialization`);
}
assert.doesNotThrow(() => fakeElements.get('begin-guided-return-button').listeners.click(), 'Return gently click handler should not throw');
fakeElements.get('luna-opening').hidden = false;
assert.doesNotThrow(() => fakeElements.get('shape-return-button').listeners.click(), 'Shape this return click handler should not throw');
fakeElements.get('luna-opening').hidden = false;
assert.doesNotThrow(() => fakeElements.get('show-overview-button').listeners.click(), 'Open full overview click handler should not throw');

assert(css.includes('.guided-receiving-screen'), 'receiving screen should have dedicated calm styling');
assertRuleContains('.guided-question-card', ['padding: 0', 'background: transparent', 'border: 0'], 'question card should avoid nested card framing');
assertRuleContains('.guided-answer-space', ['background: rgb(17 26 48 / 46%)', 'border: 1px solid rgb(205 213 244 / 9%)'], 'answer space should be integrated and quiet');
assertRuleContains('.guided-answer-space-kicker', ['color: rgb(211 221 255 / 58%)'], 'Your answer label should be visually quiet');
assertRuleContains('.guided-receiving-screen', ['justify-items: center', 'text-align: center', 'radial-gradient(ellipse at 50% 45%, rgb(244 209 122 / 12%)'], 'receiving screen should feel centered and lantern-lit');
assertRuleContains('.guided-primary-actions .guided-control:not([hidden])', ['border-color: rgb(244 209 122 / 48%)', '0 0 0 5px rgb(223 200 137 / 5%)'], 'Continue should keep primary lantern hierarchy');
const longUnbrokenNextAction = 'ReturnToLunaWithoutSpaces'.repeat(8).slice(0, 140);
assert.equal(longUnbrokenNextAction.length, 140, 'regression value should fill the One Next Action maxlength with no spaces');
const longActionGuidance = guidance.buildReturnGuidance({ ...base, nextAction: longUnbrokenNextAction });
assert.equal(longActionGuidance.nextAction.current, longUnbrokenNextAction, 'long unbroken One Next Action remains available to render and wrap');
assert.doesNotMatch(css, /body[^{]*{[^}]*overflow-x\s*:\s*hidden/i, 'do not hide page overflow as the only mobile fix');

function assertRuleContains(selector, properties) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s*');
  const rule = css.match(new RegExp(escaped + '\\s*\\{([\\s\\S]*?)\\}', 'm'));
  assert(rule, `${selector} rule should exist`);
  for (const property of properties) {
    assert(rule[1].includes(property), `${selector} should include ${property}`);
  }
}

assertRuleContains('.guided-return-view', ['min-width: 0', 'max-width: 100%']);
assertRuleContains('.guided-shell', ['grid-template-rows: auto minmax(0, auto) auto']);
assert(css.includes('.guided-shell,\n    .guided-app-shell') && css.includes('min-width: 0') && css.includes('max-width: 100%'), 'guided shell/app shell containment rules should be present');
assertRuleContains('.guided-stage-panel', ['display: grid', 'grid-template-rows: auto auto auto minmax(0, auto)', 'width: min(100%, 680px)', 'min-width: 0', 'max-width: 100%', 'min-block-size: clamp(420px, 48svh, 500px)', 'overflow: visible']);
assertRuleContains('.guided-stage-body', ['align-content: start', 'min-width: 0', 'max-width: 100%', 'min-block-size: 0', 'overflow: visible']);

assertRuleContains('.live-return-card-preview', ['display: grid', 'max-width: 100%', 'padding: 8px', 'background: rgb(10 17 34 / 18%)', 'border: 1px solid rgb(189 200 238 / 10%)']);
assertRuleContains('.live-return-card-row span', ['overflow-wrap: anywhere']);
assertRuleContains('.live-return-card-lantern.has-live-lantern', ['border-color: rgb(255 214 128 / 16%)']);
assert.doesNotMatch(css, /\.live-return-card-preview\s*\{[\s\S]*?position\s*:\s*(?:sticky|fixed|absolute)/, 'live Return Card preview should stay in normal flow');
assert(css.includes('.live-return-card-preview {\n        gap: 4px;\n        padding: 5px 6px;'), 'mobile live preview should use ultra-light spacing and padding');
assert(css.includes('background: rgb(10 17 34 / 8%)'), 'mobile live preview should use an ultra-light background');
assert(css.includes('border-color: rgb(189 200 238 / 6%)'), 'mobile live preview should use an ultra-light border');
assert(css.includes('.live-return-card-note,\n      .live-return-card-list {\n        display: none;'), 'mobile compact preview should not render all five full preview rows as visible row boxes');
assert(css.includes('.live-return-card-compact {\n        display: grid;'), 'mobile compact preview should show the tiny summary strip');
assertRuleContains('.edit-fields', ['min-width: 0', 'max-width: 100%']);
assertRuleContains('.edit-field', ['min-width: 0', 'max-width: 100%']);
assertRuleContains('.edit-field input', ['box-sizing: border-box', 'min-width: 0', 'max-width: 100%']);
assertRuleContains('.guided-actions', ['align-content: start', 'min-width: 0', 'max-width: 100%', 'min-block-size: 0']);
assert.doesNotMatch(css, /\.guided-actions\s*\{[\s\S]*?position\s*:\s*(?:sticky|fixed|absolute)/, 'guided actions should stay in normal flow instead of overlaying content');
assert(css.includes('.guided-primary-actions,\n    .guided-secondary-actions') && css.includes('flex-wrap: wrap') && css.includes('min-width: 0'), 'guided action rows should wrap and shrink instead of preserving min-content width');
assert(css.includes('.prototype-note, .lantern-card, .card, .quiet-card') && css.includes('overflow-wrap: anywhere') && css.includes('word-break: break-word'), 'card surfaces should wrap long user-entered strings instead of widening mobile layout');
assert(css.includes('.guided-control,\n    .clear-local-edits-button') && css.includes('overflow-wrap: anywhere') && css.includes('word-break: break-word'), 'guided controls should not force horizontal overflow');

assertRuleContains('body', ['linear-gradient(180deg']);
assertRuleContains('.luna-opening', ['position: relative']);
assertRuleContains('.luna-opening::before', ['radial-gradient(ellipse at 50% 0%', 'pointer-events: none']);
assertRuleContains('.opening-threshold', ['linear-gradient(180deg, rgb(19 28 50 / 94%)', 'box-shadow: 0 16px 36px']);
assertRuleContains('.opening-gate::before', ['background: rgb(223 200 137 / 48%)', 'border-radius: 999px']);
assert(css.includes('border-inline: 4px solid rgb(223 200 137 / 34%)'), 'opening gate posts should be CSS-only and subtle');
assertRuleContains('.guided-control.opening-primary', ['min-width: min(100%, 236px)', 'border-color: rgb(223 200 137 / 52%)', '0 0 0 5px rgb(223 200 137 / 5%)']);
assert(css.includes('padding: 24px max(14px, env(safe-area-inset-left)) calc(80px + env(safe-area-inset-bottom)) max(14px, env(safe-area-inset-right))'), 'mobile opening should preserve bottom safe-area breathing room');
assert(css.includes('font-size: clamp(1.72rem, 8.2vw, 2.28rem)'), 'mobile opening headline should be calmer than the desktop title scale');
assertRuleContains('.opening-context', ['background: transparent', 'border: 0', 'opacity: 0.82']);
assertRuleContains('.opening-payoff-preview', ['grid-template-columns: repeat(3, minmax(0, 1fr))', 'border-block: 1px solid rgb(223 200 137 / 12%)', 'background: transparent']);
assertRuleContains('.opening-payoff-item', ['background: transparent', 'border: 0']);
assertRuleContains('.opening-payoff-item.is-lantern', ['linear-gradient(180deg, rgb(223 200 137 / 8%)']);
assertRuleContains('.opening-context-data', ['position: absolute', 'clip-path: inset(50%)']);
assert(html.includes('For one unfinished thing you do not want to carry alone.'), 'opening should keep the one-unfinished-thing invitation without repeating the full payoff');
assert(html.includes('Find your place'), 'Guided Return copy should name the first step clearly');
assert(html.includes('Start by naming the unfinished thing you want to return to.'), 'first Guided Return step should plainly explain its purpose');
assert(html.includes('Come back to one unfinished thing.'), 'opening should clearly invite one unfinished thing');
assert(html.includes('Luna helps turn scattered thoughts into one clear place to begin again.'), "opening should explain Luna's resume point and Return Card payoff quietly");
assert(html.includes('Leave with a Return Card'), 'opening should name the practical Return Card payoff');
assert(html.includes('Answer a few plain questions. Luna turns them into one Return Card.'), 'Guided Return shell should frame the stages as one calm path');
assertRuleContains('.try-editing-card', ['background: rgb(25 34 58 / 94%)', 'border: 1px solid rgb(196 205 238 / 22%)']);
assertRuleContains('.edit-field input', ['background: rgb(35 45 72 / 96%)', 'box-shadow: none']);
assertRuleContains('.guided-return-view', ['radial-gradient(ellipse at 50% 12%, rgb(183 194 224 / 7%)', 'linear-gradient(180deg, rgb(13 21 40 / 96%)', 'box-shadow: 0 18px 42px']);
assertRuleContains('.guided-return-view::before', ['linear-gradient(180deg, rgb(183 194 224 / 8%)', 'pointer-events: none']);
assertRuleContains('.guided-return-view::after', ['clip-path: polygon(47% 0, 53% 0, 67% 100%, 33% 100%)', 'pointer-events: none']);
assertRuleContains('.guided-shell', ['position: relative', 'z-index: 1']);
assertRuleContains('.guided-stage-panel', ['width: min(100%, 680px)', 'radial-gradient(ellipse at 50% 12%, rgb(244 209 122 / 6%)', 'linear-gradient(180deg, rgb(20 29 52 / 90%)']);
assertRuleContains('.guided-stage-panel[data-stage-tone="choose"]', ['border-color: rgb(223 200 137 / 22%)']);
assertRuleContains('.try-editing-card', ['background: rgb(25 34 58 / 94%)', 'border: 1px solid rgb(196 205 238 / 22%)']);
assertRuleContains('.guided-shell-header', ['justify-items: center', 'text-align: center', 'border-bottom: 0']);
assertRuleContains('.edit-field input', ['background: rgb(35 45 72 / 96%)']);

const guidedMotionCss = css.match(/\.guided-stage-panel\.is-leaving-forward[\s\S]*?@media \(prefers-reduced-motion: reduce\)/)[0];
assert(guidedMotionCss.includes('guidedPanelFadeOut'), 'guided stage transitions should use calm fade-out classes');
assert(guidedMotionCss.includes('guidedPanelFadeIn'), 'guided stage transitions should use calm fade-in classes');
assert.doesNotMatch(guidedMotionCss, /translate[XY]?\s*\(\s*-?\d+(?:\.\d+)?(?:px|rem|%)\s*\)/, 'guided stage transitions should not use directional movement');
assert.doesNotMatch(css, /@keyframes[^{}]*(?:carousel|slide|bounce)|translateX|translate3d|translate\s*\(/i, 'transition classes/keyframes should not introduce sideways carousel, slide, or bounce motion');
assert.doesNotMatch(guidedMotionCss, /guidedPanel(?:Leave|Enter)(?:Forward|Back)/, 'old directional guided stage keyframes should not remain');
assertRuleContains('.guided-stage-panel', ['min-block-size: clamp(420px, 48svh, 500px)', 'will-change: opacity']);
assert(css.includes('min-block-size: clamp(360px, 48svh, 480px)') && css.includes('min-height: auto'), 'mobile guided stage panel should keep a calm minimum without a rigid clipped frame');
assert(css.includes('.guided-actions {\n        gap: 8px;\n        margin: 0;\n        padding: 10px 0 0;\n        background: transparent;'), 'mobile guided action area should remain in normal flow below content with tighter spacing');
assert(css.includes('animation: none !important') && css.includes('transition: none !important') && css.includes('filter: none'), 'reduced motion should remove/minimize animation, transition, transform, and filter changes');
assert(html.includes('const guidedStageMotionFallbackMs = 220;'));
assert(html.includes('const guidedEntranceFallbackMs = 240;'));

assert(css.includes('.luna-opening.is-yielding-to-guided'), 'opening should gently yield to Guided Return instead of disappearing as a hard swap');
assert(css.includes('.guided-return-view.is-arriving-from-opening'), 'Guided Return should softly arrive from the opening threshold');
assert(html.includes("lunaOpening.classList.add('is-yielding-to-guided');"), 'opening entrance should use the shared yield transition');
assert(html.includes('if (guidedStageTransitioning || guidedStageMotionQuery.matches)'), 'rapid-click protection and reduced-motion immediate stage path should remain');
assert(html.includes('clearGuidedStageTransition();') && html.includes('guidedStagePanel.classList.remove(...guidedStageMotionClasses)'), 'guided stage transition cleanup should remain');
assert(html.includes('if (guidedEntranceTransitioning || !guidedReturnView.hidden)'), 'guided entrance rapid-click protection should remain');
assert(html.includes('clearGuidedEntranceTransition();') && html.includes("guidedReturnView.classList.remove('is-arriving-from-overview', 'is-arriving-from-opening')"), 'guided entrance transition cleanup should remain');

console.log('local guidance tests passed');
