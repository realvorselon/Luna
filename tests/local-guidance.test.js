const assert = require('node:assert/strict');
const fs = require('node:fs');
const guidance = require('../prototype-guidance.js');

const base = {
  projectName: 'Luna',
  currentGoal: 'Make the next return easier',
  nextAction: 'Open the prototype.',
  setAside: 'Leave visual polish for later.',
  recordChange: 'Chose the next return shape.'
};

let result = guidance.buildReturnGuidance({ ...base, currentGoal: '   ' });
assert.equal(result.goal.status, 'suggestion');
assert.equal(result.goal.suggestion, 'Make the next step in Luna easier to see.');

result = guidance.buildReturnGuidance({ ...base, currentGoal: 'Clarify the opening threshold.' });
assert.equal(result.goal.status, 'clear');

result = guidance.buildReturnGuidance({ ...base, nextAction: 'Open prototype.html, review the opening, and adjust the copy.' });
assert.equal(result.nextAction.status, 'suggestion');
assert.equal(result.nextAction.suggestion, 'Open prototype.html');

result = guidance.buildReturnGuidance({ ...base, nextAction: 'Open prototype.html.' });
assert.equal(result.nextAction.status, 'clear');

result = guidance.buildReturnGuidance({ ...base, setAside: 'Animations, dashboard polish, and extra docs' });
assert.equal(result.setAside.status, 'suggestion');
assert.equal(result.setAside.suggestion, 'Animations');

result = guidance.buildReturnGuidance({ ...base, recordChange: '' });
assert.equal(result.recordChange.status, 'suggestion');
assert.equal(result.recordChange.suggestion, 'Returned to Luna and chose: Open the prototype..');

result = guidance.buildReturnGuidance({ ...base, currentGoal: '<img src=x onerror=alert(1)> and polish everything', nextAction: '<b>Open</b>, then ship' });
assert.equal(typeof result.goal.suggestion, 'string');
assert.equal(typeof result.nextAction.suggestion, 'string');
assert.match(result.goal.current, /<img/);
assert.doesNotMatch(result.restMessage, /<script/i);

const html = fs.readFileSync('prototype.html', 'utf8');
const js = fs.readFileSync('prototype-guidance.js', 'utf8');
assert(!/\bfetch\s*\(/.test(html + js), 'local guidance must not call fetch');
assert(html.includes("const projectNameStorageKey = 'luna.prototype.projectName';"));
assert(html.includes("const currentGoalStorageKey = 'luna.prototype.currentGoal';"));
assert(html.includes("const nextActionStorageKey = 'luna.prototype.nextAction';"));
assert(html.includes("const setAsideStorageKey = 'luna.prototype.setAside';"));
assert(html.includes("const recordChangeStorageKey = 'luna.prototype.recordChange';"));
assert(!/suggestion.*StorageKey|guidance.*StorageKey|history.*StorageKey/i.test(html), 'no suggestion/history storage keys');
assert(!/sessionStorage|document\.cookie|eval\s*\(|new Function/.test(html + js), 'no session/cookie/dynamic execution');

console.log('local guidance tests passed');
