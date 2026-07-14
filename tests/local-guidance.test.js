const assert = require('node:assert/strict');
const fs = require('node:fs');
const guidance = require('../prototype-guidance.js');

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
const transitionTrail = 'This was a focused transition coherence pass that kept Luna’s existing local-only loop intact while making the opening, Guided Return stages, Rest, and Return to Luna feel more like one moonlit place gently changing focus.';
const transitionNextStep = 'Human mobile test of whether Luna’s loop feels continuous rather than page-like.';
for (const trail of [state, roadmap, changelog]) {
  assert(trail.includes('focused transition coherence pass'), 'project trail should record the focused transition coherence pass');
  assert(trail.includes('opening, Guided Return stages, Rest, and Return to Luna'), 'project trail should name the continuous full loop seams');
  assert(trail.includes('one moonlit place gently changing focus'), 'project trail should capture the presentation direction');
  assert(trail.includes('Rest'), 'project trail should keep Luna at Rest');
  assert(trail.includes('Guided Return mobile preview pass'), 'project trail should preserve the compact mobile Held so far preview context');
  assert(trail.includes(transitionNextStep), 'project trail should point to the next mobile continuity test');
}
assert.deepEqual(project.statusHistory[0], {
  date: '2026-07-14',
  note: transitionTrail
}, 'new statusHistory entry should keep the existing object shape');
assert.equal(project.currentMode.value, 'Rest');
assert.equal(project.lastCompletedRun, transitionTrail);
assert.equal(project.nextStep, transitionNextStep);
assert.equal(project.nextSuggestedStep, transitionNextStep);
assert(!/Math\.random\s*\(/.test(js), 'guidance must not use Math.random');
assert(!/\bfetch\s*\(/.test(html + js), 'local guidance must not call fetch');
assert(html.includes('Edit Luna’s current project'), 'overview should include a clear editing-area heading');
assert(html.includes('opening-moonrise'), 'opening threshold should foreground the Luna/moon title area');
assert(html.includes('opening-gate'), 'opening threshold should include the CSS-only garden-gate press-start direction');
assert(html.includes('opening-payoff-preview'), 'opening should include a static payoff preview');
assert(html.includes('aria-label="What Luna gives back"'), 'payoff preview should be labelled as what Luna gives back');
for (const payoffCopy of ['Find the thread', 'Choose the lantern', 'Leave with a Return Card', 'Name one small resume point']) {
  assert(html.includes(payoffCopy), `opening payoff preview should include: ${payoffCopy}`);
}
const payoffPreviewMarkup = html.match(/<div class="opening-payoff-preview"[\s\S]*?<div class="opening-actions"/)[0];
assert(!/<input|<button|id="opening-payoff/i.test(payoffPreviewMarkup), 'payoff preview should be static explanatory copy, not new user data');
assert(!html.includes('<div class="opening-gate" aria-hidden="true"></div>'), 'opening gate should not be an empty aria-hidden decorative sibling');
assert(/<div class="opening-gate">\s*<button class="guided-control opening-primary" type="button" id="begin-guided-return-button">Return gently<\/button>\s*<\/div>/.test(html), 'opening gate should wrap the real Return gently button');
for (const openingAction of ['Return gently', 'Shape this return', 'Open full overview']) {
  assert(html.includes(openingAction), `${openingAction} should remain present`);
}
assert(html.includes('These five local prompts are invitations until you replace them with your own words. Changing them updates Luna’s opening, Shape this return, and Guided Return'), 'overview should explain what the editable context updates');
assert(html.includes('stores the five values only in this browser'), 'overview should explain local-only storage');
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
for (const invitation of ['Name the thing you want to return to.', 'What are you trying to make easier?', 'What is one small next step?', 'What can wait while you return?', 'What changed, even a little?']) {
  assert(html.includes(invitation), `${invitation} invitation default should remain present`);
  assert(js.includes(invitation), `${invitation} guidance fallback should remain present`);
}
assert.deepEqual(guidedStageTitles, ['Find your place', 'Remember', 'Choose', 'Set Aside', 'Record', 'Rest'], 'Guided Return stage order should stay fixed');
assert.equal(guidedStageTitles[0], 'Find your place', 'the first Guided Return stage should still say Find your place');

for (const questionCopy of [
  'What are we returning to?',
  'What would make returning easier?',
  'What is one small visible move?',
  'What can wait while you return?',
  'What changed, even a little?'
]) {
  assert(html.includes(questionCopy), `Guided Return conversational question copy should include: ${questionCopy}`);
}
assert(html.includes("const guidedPlaceSteps = ['projectName', 'currentGoal'];"), 'Find your place should define only the existing project name and current goal internal steps');
assert(html.includes("${renderGuidedEditableField(getGuidedPlaceFieldKey())}"), 'Find your place should render only the active internal editable field');
assert(!html.includes("${renderGuidedEditableField('projectName')}\n              ${renderGuidedEditableField('currentGoal')}"), 'Find your place should not render both projectName and currentGoal inline fields at once by default');
assert(html.includes('data-guided-place-continue'), 'Find your place should include a local internal Continue control');
assert(html.includes('data-guided-place-back'), 'Find your place should include a local internal Back control');
assert(html.includes('guidedBackButton.hidden = guidedStageIndex === 0;'), 'main back button should stay hidden inside Find your place so internal Back is not duplicated');
assert(html.includes('guidedForwardButton.hidden = guidedStageIndex === 0 && guidedPlaceStepIndex === 0;'), 'main forward button should be hidden during the first internal Find your place question to avoid duplicate forward controls');
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
assert(html.includes('Answer one thing at a time. Luna keeps these five values locally in this browser.'), 'Guided Return should keep one compact local-only boundary near the opening stage');
for (const softenedNote of ['Begin here when you come back.', 'A boundary, not a backlog.', 'A few honest words are enough.']) {
  assert(html.includes(softenedNote), `Guided Return should keep softened non-duplicative helper copy: ${softenedNote}`);
}

for (const removedContributionCue of [
  'This becomes Returning to.',
  'This becomes The thread.',
  'This becomes The lantern: the place to begin when you come back.',
  'This waits outside the gate.',
  'This becomes What changed.'
]) {
  assert(!html.includes(removedContributionCue), `Guided Return should remove repeated contribution cue: ${removedContributionCue}`);
}
assert(!html.includes('guided-contribution-cue'), 'Guided Return should remove the repeated contribution cue block from visible answer spaces');
assert(html.includes('guided-flow-lead'), 'Guided Return should include compact connective flow lead-in copy');
assert(html.includes('const getGuidedFlowLeadIn = (stageKey) => {'), 'connective flow copy should be deterministic local rendering');
assert(html.includes("if (stageKey === 'currentGoal') return `Okay. We’re returning to ${project}. What would make returning easier?`;"), 'currentGoal connective copy should carry the current projectName value into the next question');
for (const connectiveCopy of [
  'We only need enough to find the thread.',
  'I’m holding the thread. Now choose the lantern.',
  'Good. That’s the lantern. What can wait outside the gate?',
  'The gate is quieter now. What changed, even a little?'
]) {
  assert(html.includes(connectiveCopy), `Guided Return connective flow copy should include: ${connectiveCopy}`);
}
assert(html.includes('const renderGuidedFlowLeadIn = (stageKey) => `<p class="guided-flow-lead" data-guided-flow-lead="${stageKey}">${escapeHtml(getGuidedFlowLeadIn(stageKey))}</p>`;'), 'connective flow copy should escape user-rendered values in initial render');
assert(html.includes("if (leadIn) leadIn.textContent = getGuidedFlowLeadIn(leadIn.getAttribute('data-guided-flow-lead'));"), 'connective flow copy live updates should render user values with textContent');
assert(html.includes('updateGuidedFlowLeadIn();'), 'Guided inline edits should refresh connective flow copy when relevant local values change');

assert(html.includes('Begin here when you come back.'), 'Choose should keep the lantern/resume point important without duplicating the contribution cue');

assert(html.includes('guided-receiving-moment'), 'Guided Return editable answer spaces should include receiving/reflection moments');
assert(html.includes('data-guided-receiving-moment'), 'receiving moments should be targetable for live updates');
for (const receivingCopy of [
  'Okay. We’re returning to',
  'I’m holding that as the thread.',
  'Good. That’s the lantern:',
  'I’ll keep that outside the gate for now.',
  'I’ll carry that change into the Return Card.'
]) {
  assert(html.includes(receivingCopy), `Guided Return receiving copy should include: ${receivingCopy}`);
}
assert(html.includes('const getGuidedReceivingMoment = (fieldKey, value) => {'), 'receiving moments should be deterministic local rendering without depending on guidedEditableFields initialization');
assert(html.includes('formatRestSummaryValue(fieldKey, value)'), 'receiving moments should format the passed current value with Rest fallback formatting');
assert(html.includes('<p class="guided-receiving-moment" data-guided-receiving-moment>${escapeHtml(getGuidedReceivingMoment(fieldKey, field.input.value))}</p>'), 'receiving moments should escape user-rendered values in initial render');
assert(html.includes('const updateGuidedReceivingMoment = (fieldElement, fieldKey, value) => {'), 'receiving moments should have a live update path that accepts the current value');
assert(html.includes('receivingMoment.textContent = getGuidedReceivingMoment(fieldKey, value);'), 'receiving moment live updates should render user values with textContent');
assert(html.includes('updateGuidedReceivingMoment(fieldElement, fieldKey, field.input.value);'), 'Guided inline edits should refresh the active receiving moment with the existing input value');
assert(!/thinking|analyzing|remembering forever|generated AI/i.test(html), 'receiving copy should avoid false AI claims');

assert(html.includes('live-return-card-preview'), 'Guided Return should include a compact live Return Card preview during non-Rest stages');
assert(html.includes('aria-label="Live Return Card preview"'), 'live Return Card preview should be labelled accessibly');
assert(html.includes('<span class="label">Held so far</span>'), 'live Return Card preview should soften its heading to Held so far');
assert(html.includes('A quiet preview of what Luna is holding.'), 'desktop live Return Card preview should frame the held-thread purpose quietly without extra density');
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
assert(html.includes('I have enough to hold this return.'), 'Rest should keep the enough-to-hold soft landing copy');
assert(html.includes('You can stop here. Luna will keep the thread warm until you come back.'), 'Rest should include short soft-landing permission copy');
assert(html.includes('<span class="label">Return Card</span>'), 'Rest should include Return Card framing');
assert(html.includes('A small place to resume.'), 'Rest Return Card should feel like a useful held return point');
assert(html.includes('Luna gathered the thread into one held point.'), 'Rest Return Card should say Luna gathered the words into a return point');
assert(html.includes('When you come back, begin with the lantern.'), 'Rest should include a clear resume cue');
for (const returnCardLabel of ['Returning to', 'The thread', 'The lantern', 'Waiting outside the gate', 'What changed']) {
  assert(html.includes(returnCardLabel), `Rest Return Card should include label: ${returnCardLabel}`);
}
assert(html.includes('return-card-lantern'), 'Rest should visually emphasize nextAction as the lantern/resume point');
const returnToOpeningMatch = html.match(/<p class="footer-note"><a href="index.html">Return to Luna’s opening threshold<\/a>\.<\/p>/);
assert(returnToOpeningMatch, 'Return-to-opening copy/link should remain present and short');
assert(returnToOpeningMatch[0].length < 100, 'Return-to-opening footer copy should not be overly long on mobile');

for (const escapedRestValue of [
  "${escapeHtml(formatRestSummaryValue('projectName', getProjectName()))}",
  "${escapeHtml(formatRestSummaryValue('currentGoal', getCurrentGoal()))}",
  "${escapeHtml(formatRestSummaryValue('nextAction', getNextAction()))}",
  "${escapeHtml(formatRestSummaryValue('setAside', getSetAside()))}",
  "${escapeHtml(formatRestSummaryValue('recordChange', getRecordChange()))}"
]) {
  assert(html.includes(escapedRestValue), `Rest should preserve escaped current-return value: ${escapedRestValue}`);
}
assert(html.includes('class="luna-insight-card"'), 'Guided Return should render Luna insight cards');
assert(html.includes('aria-label="Luna insight for this step"'), 'Guided Return insights should be accessible labelled coaching regions');
for (const copy of ['Name one unfinished thing. A short name is enough.', 'One small action is enough. This is the lantern.', 'Luna has one named thing and one visible next move']) {
  assert(html.includes(copy), `Guided Return insight copy should include: ${copy}`);
}
assert(html.includes('updateVisibleGuidedInsight();'), 'Guided inline edits should refresh visible Luna insight copy after typing');
assert(html.includes('<span class="label">Luna note</span>'), 'insight cards should use lighter Luna note framing');
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

assert(css.includes('background: rgb(244 209 122 / 7%)') && css.includes('border: 1px solid rgb(244 209 122 / 12%)'), 'receiving moments should keep distinct warm styling near answer spaces');
assert(css.includes('.guided-receiving-moment {\n        padding: 6px 8px;\n        color: rgb(237 229 201 / 90%);'), 'mobile receiving moments should remain visually distinct near the answer while fitting the tighter hierarchy');
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
assertRuleContains('.guided-stage-panel', ['display: grid', 'grid-template-rows: auto auto auto minmax(0, auto)', 'min-width: 0', 'max-width: 100%', 'min-block-size: clamp(420px, 48svh, 500px)', 'overflow: visible']);
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
assertRuleContains('.opening-payoff-preview', ['grid-template-columns: repeat(3, minmax(0, 1fr))', 'border: 1px solid rgb(223 200 137 / 12%)']);
assertRuleContains('.opening-payoff-item.is-lantern', ['border-color: rgb(223 200 137 / 26%)']);
assertRuleContains('.opening-context-data', ['position: absolute', 'clip-path: inset(50%)']);
assert(html.includes('Return gently to one unfinished thing and leave with one clear place to resume.'), 'opening should explain that Return gently starts the guided path');
assert(html.includes('Find your place'), 'Guided Return copy should name the first step clearly');
assert(html.includes('Begin with the one thing you are returning to.'), 'first Guided Return step should plainly explain its purpose');
assert(html.includes('Bring one unfinished thing back into view.'), 'opening should clearly invite one unfinished thing');
assert(html.includes('Luna helps you bring one unfinished thing back into view, choose one small place to resume'), "opening should explain Luna's return purpose and resume point");
assert(html.includes('leave with a Return Card'), 'opening should name the practical Return Card payoff');
assert(html.includes('One calm path: find your place, remember, choose, set aside, record, then rest.'), 'Guided Return shell should frame the stages as one calm path');
assertRuleContains('.try-editing-card', ['background: rgb(25 34 58 / 94%)', 'border: 1px solid rgb(196 205 238 / 22%)']);
assertRuleContains('.edit-field input', ['background: rgb(35 45 72 / 96%)', 'box-shadow: none']);
assertRuleContains('.guided-return-view', ['linear-gradient(180deg, rgb(13 21 40 / 96%)', 'box-shadow: 0 16px 36px']);
assertRuleContains('.guided-return-view::before', ['linear-gradient(180deg, rgb(183 194 224 / 8%)', 'pointer-events: none']);
assertRuleContains('.guided-return-view::after', ['clip-path: polygon(47% 0, 53% 0, 67% 100%, 33% 100%)', 'pointer-events: none']);
assertRuleContains('.guided-shell', ['position: relative', 'z-index: 1']);
assertRuleContains('.guided-stage-panel', ['linear-gradient(180deg, rgb(20 29 52 / 90%)']);
assertRuleContains('.guided-stage-panel[data-stage-tone="choose"]', ['border-color: rgb(223 200 137 / 22%)']);
assert.doesNotMatch(css, /\.try-editing-card\s*\{[\s\S]*?radial-gradient[\s\S]*?\}/, 'editing panel should not use radial glow gradients');
assert.doesNotMatch(css, /\.guided-return-view\s*\{[\s\S]*?radial-gradient[\s\S]*?\}/, 'guided shell should not use radial glow gradients');
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
