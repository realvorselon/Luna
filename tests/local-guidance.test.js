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
assert.equal(result.recordChange.suggestion, 'Returned to Luna and chose: Open the prototype..');
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
assert(html.includes('maxlength="80"'));
assert(html.includes('maxlength="160"'));
assert.equal((html.match(/maxlength="140"/g) || []).length, 2);
assert(html.includes('maxlength="180"'));
assert(html.includes('character-feedback'));
assert(html.includes('aria-describedby="project-name-helper project-name-count"'));
assert(html.includes("const projectNameStorageKey = 'luna.prototype.projectName';"));
assert(html.includes("const currentGoalStorageKey = 'luna.prototype.currentGoal';"));
assert(html.includes("const nextActionStorageKey = 'luna.prototype.nextAction';"));
assert(html.includes("const setAsideStorageKey = 'luna.prototype.setAside';"));
assert(html.includes("const recordChangeStorageKey = 'luna.prototype.recordChange';"));
assert(!/suggestion.*StorageKey|guidance.*StorageKey|history.*StorageKey/i.test(html), 'no suggestion/history storage keys');
assert(!/sessionStorage|document\.cookie|eval\s*\(|new Function/.test(html + js), 'no session/cookie/dynamic execution');
assert(js.includes('voiceLibrary'));
assert(js.includes("voice('goalBlank'"));
assert(html.includes('guidance.allClearMessage'));
assert(html.includes('textContent = text'));
assert(html.includes('escapeHtml(window.LunaReturnGuidance.buildReturnGuidance'));

console.log('local guidance tests passed');
