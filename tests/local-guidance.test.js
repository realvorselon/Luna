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
assert.equal(result.goal.suggestion, 'Make the next step in Luna easier to see.');
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
assert.equal(result.recordChange.suggestion, 'Returned to Luna and chose: Open the prototype.');
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
const js = fs.readFileSync('prototype-guidance.js', 'utf8');
assert(!/Math\.random\s*\(/.test(js), 'guidance must not use Math.random');
assert(!/\bfetch\s*\(/.test(html + js), 'local guidance must not call fetch');
assert(html.includes('Edit Luna’s current project'), 'overview should include a clear editing-area heading');
assert(html.includes('Changing them updates Luna’s opening, Shape this return, and Guided Return'), 'overview should explain what the editable context updates');
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
assert(html.includes('createTextElement'));
assert(html.includes('textContent = text'));
assert(html.includes('escapeHtml(window.LunaReturnGuidance.buildReturnGuidance'));

const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
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
assertRuleContains('.guided-shell', ['grid-template-rows: auto minmax(0, 1fr) auto']);
assert(css.includes('.guided-shell,\n    .guided-app-shell') && css.includes('min-width: 0') && css.includes('max-width: 100%'), 'guided shell/app shell containment rules should be present');
assertRuleContains('.guided-stage-panel', ['min-width: 0', 'max-width: 100%']);
assertRuleContains('.guided-stage-body', ['min-width: 0', 'max-width: 100%']);
assertRuleContains('.edit-fields', ['min-width: 0', 'max-width: 100%']);
assertRuleContains('.edit-field', ['min-width: 0', 'max-width: 100%']);
assertRuleContains('.edit-field input', ['box-sizing: border-box', 'min-width: 0', 'max-width: 100%']);
assertRuleContains('.guided-actions', ['min-width: 0', 'max-width: 100%']);
assert(css.includes('.guided-primary-actions,\n    .guided-secondary-actions') && css.includes('flex-wrap: wrap') && css.includes('min-width: 0'), 'guided action rows should wrap and shrink instead of preserving min-content width');
assert(css.includes('.prototype-note, .lantern-card, .card, .quiet-card') && css.includes('overflow-wrap: anywhere') && css.includes('word-break: break-word'), 'card surfaces should wrap long user-entered strings instead of widening mobile layout');
assert(css.includes('.guided-control,\n    .clear-local-edits-button') && css.includes('overflow-wrap: anywhere') && css.includes('word-break: break-word'), 'guided controls should not force horizontal overflow');

assertRuleContains('body', ['background: linear-gradient(180deg']);
assertRuleContains('.opening-threshold', ['background: rgb(19 28 50 / 92%)', 'box-shadow: 0 16px 36px']);
assertRuleContains('.try-editing-card', ['background: rgb(25 34 58 / 94%)', 'border: 1px solid rgb(196 205 238 / 22%)']);
assertRuleContains('.edit-field input', ['background: rgb(35 45 72 / 96%)', 'box-shadow: none']);
assertRuleContains('.guided-return-view', ['background: rgb(13 21 40 / 96%)', 'box-shadow: 0 16px 36px']);
assertRuleContains('.guided-stage-panel', ['background: rgb(20 29 52 / 88%)']);
assert.doesNotMatch(css, /\.try-editing-card\s*\{[\s\S]*?radial-gradient[\s\S]*?\}/, 'editing panel should not use radial glow gradients');
assert.doesNotMatch(css, /\.guided-return-view\s*\{[\s\S]*?radial-gradient[\s\S]*?\}/, 'guided shell should not use radial glow gradients');
assert.doesNotMatch(css, /\.edit-field input\s*\{[\s\S]*?linear-gradient[\s\S]*?\}/, 'inputs should be calm solid surfaces');

const guidedMotionCss = css.match(/\.guided-stage-panel\.is-leaving-forward[\s\S]*?@media \(prefers-reduced-motion: reduce\)/)[0];
assert(guidedMotionCss.includes('guidedPanelFadeOut'), 'guided stage transitions should use calm fade-out classes');
assert(guidedMotionCss.includes('guidedPanelFadeIn'), 'guided stage transitions should use calm fade-in classes');
assert.doesNotMatch(guidedMotionCss, /translate[XY]?\s*\(\s*-?\d+(?:\.\d+)?px\s*\)/, 'guided stage transitions should not use directional pixel movement');
assert.doesNotMatch(guidedMotionCss, /guidedPanel(?:Leave|Enter)(?:Forward|Back)/, 'old directional guided stage keyframes should not remain');
assertRuleContains('.guided-stage-panel', ['min-block-size: clamp(300px, 42svh, 390px)', 'will-change: opacity']);
assert(css.includes('animation: none !important') && css.includes('transition: none !important') && css.includes('filter: none'), 'reduced motion should remove/minimize animation, transition, transform, and filter changes');
assert(html.includes('const guidedStageMotionFallbackMs = 220;'));
assert(html.includes('const guidedEntranceFallbackMs = 240;'));
assert(html.includes('if (guidedStageTransitioning || guidedStageMotionQuery.matches)'), 'rapid-click protection and reduced-motion immediate stage path should remain');
assert(html.includes('clearGuidedStageTransition();') && html.includes('guidedStagePanel.classList.remove(...guidedStageMotionClasses)'), 'guided stage transition cleanup should remain');
assert(html.includes('if (guidedEntranceTransitioning || !guidedReturnView.hidden)'), 'guided entrance rapid-click protection should remain');
assert(html.includes('clearGuidedEntranceTransition();') && html.includes("guidedReturnView.classList.remove('is-arriving-from-overview')"), 'guided entrance transition cleanup should remain');

console.log('local guidance tests passed');
