(function (root) {
  'use strict';

  const fallbackProjectName = 'A quiet unfinished project';
  const fallbackGoal = 'Make the next return easier';
  const fallbackNextAction = 'Choose one small, safe next step.';
  const fallbackSetAside = 'Leave the larger ideas alone for now.';
  const fallbackRecordChange = 'Record one plain note about what changed.';

  const voiceLibrary = {
    goalBlank: [
      'Luna noticed the goal is empty, so this keeps the return tied to one visible next step.',
      'A blank goal gives the return nothing to lean on; this names a small way back in.',
      'With no goal written yet, this keeps the opening practical and modest.',
      'This gives the return a plain shape without inventing extra project meaning.'
    ],
    goalVague: [
      'The saved goal is still the generic fallback; this connects it to the project without adding new plans.',
      'The fallback is safe, but a project-shaped line may be easier to recognize later.',
      'This keeps the same intent while making the return point less anonymous.'
    ],
    goalBroad: [
      'That goal is broad enough to pull in extra work; the first clause gives the return a smaller edge.',
      'Luna is only trimming the doorway, not deciding the whole project.',
      'A narrower line is easier to hold at the opening threshold.',
      'This keeps the goal return-sized instead of turning it into a plan.'
    ],
    goalLong: [
      'Several words or sentences can be hard to carry on a phone; this keeps only the first useful part.',
      'The longer note can stay yours, but the return works better with one short line.',
      'This trims the goal so it can act as a clear point of re-entry.'
    ],
    goalClear: [
      'This goal is already concise enough for a return.',
      'This gives the return a clear shape without needing Luna to rewrite it.',
      'The current goal is small enough to keep as written.',
      'This reads like a usable return point already.'
    ],
    actionBlank: [
      'A blank action leaves the lantern unlit; this names one visible first move.',
      'This keeps the next step concrete without building a task list.',
      'The return needs one action to find first; this offers a modest placeholder.'
    ],
    actionBroad: [
      'That action is broad enough to become the whole project; this brings it back to one visible move.',
      'Luna is not planning the work, just making the first move easier to see.',
      'A smaller action is easier to return to than a broad command.'
    ],
    actionMultiple: [
      'One Next Action works best as one action, not a sequence.',
      'This looks like more than one move; keeping the first one protects the lantern.',
      'A list can wait. The return only needs the first visible action.',
      'This trims the action back to one thing you can find again.'
    ],
    actionClear: [
      'This next action is already small enough to act as the lantern.',
      'The action is clear enough to keep without extra shaping.',
      'This already points to one move, so Luna can leave it alone.'
    ],
    setAsideBlank: [
      'A return boundary can name what stays outside the goal for now.',
      'This gives the loop one thing to leave alone without making a backlog.',
      'Leaving something unnamed can invite it back in; this keeps the boundary simple.'
    ],
    setAsideMultiple: [
      'Set Aside stays calmer as one value rather than a backlog.',
      'This looks like several things; keeping the first protects the boundary.',
      'One thing can wait clearly. A list can start to feel like another project.'
    ],
    setAsideClear: [
      'This is already one clear thing to leave aside.',
      'The boundary is plain enough to keep as written.',
      'This gives the return a quiet edge without needing more structure.'
    ],
    recordBlank: [
      'A brief note can record the choice without claiming it was finished.',
      'This creates a small return marker, not a report.',
      'The record can stay simple: what changed enough to make returning easier.'
    ],
    recordLong: [
      'Record stays as one brief note, not instructions for a log.',
      'This trims the record so later-you can read it quickly.',
      'A short record is easier to trust than a long closing report.'
    ],
    recordClear: [
      'This record is already brief enough for returning later.',
      'The note is clear and does not need to become a log.',
      'This is enough record for the next return.'
    ],
    usefulContext: [
      'Luna found usable local context and will keep the return small.',
      'There is enough here to return without reorganizing the project.',
      'The saved context already gives the loop something steady to hold.'
    ],
    restWithAction: [
      '{action} will still be waiting later. Nothing needs to restart automatically.',
      'You can stop here. {action} remains the next small thing when you return.',
      'Rest is allowed now; the next visible move is still {action}',
      'Leave the project gently. {action} can wait without pressure.'
    ],
    restWithoutContext: [
      'You can stop here. When you return, choose one small next move before doing more.',
      'Rest is still allowed. The next return can begin by naming one visible action.',
      'Nothing needs forcing now. Later, start by finding one small safe move.'
    ],
    allClear: [
      'Luna found the current wording clear enough. Nothing needs to change before returning.',
      'The local context already looks return-ready. You can keep the wording as it is.',
      'Nothing needs rewriting right now. The return can stay as written.',
      'The five saved lines are clear enough for this deterministic check.'
    ]
  };

  const normalizeProjectText = (value, fallback = '') => {
    const normalized = String(value || '').replace(/\s+/g, ' ').trim();
    return normalized || fallback;
  };

  const stripTerminalPunctuation = (value) => normalizeProjectText(value).replace(/[.!?]+$/g, '').trim();

  const endSentence = (value) => {
    const text = normalizeProjectText(value);
    return /[.!?]$/.test(text) ? text : `${text}.`;
  };

  const stableTextHash = (value) => {
    let hash = 2166136261;
    const text = normalizeProjectText(value);
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  };

  const voice = (key, seed, replacements = {}) => {
    const variants = voiceLibrary[key] || [''];
    const selected = variants[stableTextHash(`${key}|${seed}`) % variants.length];
    return Object.keys(replacements).reduce((line, name) => line.replaceAll(`{${name}}`, replacements[name]), selected);
  };

  const sentenceCount = (value) => (value.match(/[.!?]+(\s|$)/g) || []).length;
  const firstSentence = (value) => normalizeProjectText((value.match(/^[^.!?]+[.!?]?/) || [''])[0], value);
  const firstClause = (value) => normalizeProjectText(value.split(/\s+(?:and|then)\s+|[,;/•|]+/i)[0], value).replace(/[;,/]+$/, '').trim();
  const isFallback = (value, fallback) => value.toLowerCase() === fallback.toLowerCase();
  const hasRepeatedAnd = (value) => (value.match(/\band\b/gi) || []).length >= 2;
  const hasListShape = (value) => /[,;/•|]|\bthen\b/i.test(value) || hasRepeatedAnd(value);
  const broadGoal = /\b(work on|make progress|improve everything|finish the project|figure things out)\b/i;
  const broadAction = /^\s*(work on|continue working on|finish|improve|fix everything|do more research)\b/i;
  const futureLogInstruction = /\b(write|record|log|update)\b.*\b(later|when|after|each time|future)\b/i;

  const makeResult = (status, current, suggestion, reason, voiceKey) => ({ status, current, suggestion, reason, voiceKey });
  const clear = (current, reason, voiceKey) => makeResult('clear', current, '', reason, voiceKey);
  const suggestion = (current, suggestionText, reason, voiceKey) => makeResult('suggestion', current, suggestionText, reason, voiceKey);

  const assessGoal = (value, projectName) => {
    const current = normalizeProjectText(value, fallbackGoal);
    const project = normalizeProjectText(projectName, fallbackProjectName);
    const seed = `${project}|${current}`;
    if (!normalizeProjectText(value)) return suggestion(current, `Make the next step in ${project} easier to see.`, voice('goalBlank', seed), 'goalBlank');
    if (isFallback(current, fallbackGoal)) return suggestion(current, `Make the next step in ${project} easier to see.`, voice('goalVague', seed), 'goalVague');
    if (sentenceCount(current) > 1) return suggestion(current, firstSentence(current), voice('goalLong', seed), 'goalLong');
    if (current.length > 120 || hasRepeatedAnd(current) || broadGoal.test(current)) return suggestion(current, firstClause(firstSentence(current)) || `Make the next step in ${project} easier to see.`, voice(current.length > 120 ? 'goalLong' : 'goalBroad', seed), current.length > 120 ? 'goalLong' : 'goalBroad');
    return clear(current, voice('goalClear', seed), 'goalClear');
  };

  const assessNextAction = (value, projectName) => {
    const current = normalizeProjectText(value, fallbackNextAction);
    const project = normalizeProjectText(projectName, fallbackProjectName);
    const seed = `${project}|${current}`;
    if (!normalizeProjectText(value) || isFallback(current, fallbackNextAction)) return suggestion(current, `Open ${project} and choose the smallest visible next move.`, voice('actionBlank', seed), 'actionBlank');
    if (sentenceCount(current) > 1 || hasListShape(current)) return suggestion(current, firstClause(current), voice('actionMultiple', seed), 'actionMultiple');
    if (broadAction.test(current)) return suggestion(current, `Open ${project} and choose the smallest visible next move.`, voice('actionBroad', seed), 'actionBroad');
    return clear(current, voice('actionClear', seed), 'actionClear');
  };

  const assessSetAside = (value, currentGoal) => {
    const raw = normalizeProjectText(value);
    const current = normalizeProjectText(value, fallbackSetAside);
    const goal = normalizeProjectText(currentGoal, fallbackGoal);
    const seed = `${goal}|${current}`;
    if (!raw || isFallback(current, fallbackSetAside)) return suggestion(current, `Leave anything beyond '${goal}' for later.`, voice('setAsideBlank', seed), 'setAsideBlank');
    if (current.length > 110 || hasListShape(current)) return suggestion(current, firstClause(firstSentence(current)), voice('setAsideMultiple', seed), 'setAsideMultiple');
    return clear(current, voice('setAsideClear', seed), 'setAsideClear');
  };

  const assessRecordChange = (value, nextAction, projectName) => {
    const raw = normalizeProjectText(value);
    const current = normalizeProjectText(value, fallbackRecordChange);
    const action = normalizeProjectText(nextAction, fallbackNextAction);
    const project = normalizeProjectText(projectName, fallbackProjectName);
    const seed = `${project}|${action}|${current}`;
    if (!raw || isFallback(current, fallbackRecordChange)) return suggestion(current, `Returned to ${project} and chose: ${stripTerminalPunctuation(action)}.`, voice('recordBlank', seed), 'recordBlank');
    if (current.length > 130 || sentenceCount(current) > 1 || futureLogInstruction.test(current)) return suggestion(current, firstSentence(current), voice('recordLong', seed), 'recordLong');
    return clear(current, voice('recordClear', seed), 'recordClear');
  };

  const buildReturnGuidance = (context) => {
    const projectName = normalizeProjectText(context.projectName, fallbackProjectName);
    const goal = assessGoal(context.currentGoal, projectName);
    const nextAction = assessNextAction(context.nextAction, projectName);
    const setAside = assessSetAside(context.setAside, goal.suggestion || goal.current);
    const recordChange = assessRecordChange(context.recordChange, nextAction.suggestion || nextAction.current, projectName);
    const actionForRest = nextAction.suggestion || nextAction.current;
    const hasUsefulContext = [goal, nextAction, setAside, recordChange].some((entry) => entry.status === 'clear');
    const allClearMessage = voice('allClear', `${projectName}|${goal.current}|${nextAction.current}|${setAside.current}|${recordChange.current}`);
    return {
      contextMessage: hasUsefulContext ? voice('usefulContext', `${projectName}|${goal.current}|${nextAction.current}`) : '',
      goal,
      nextAction,
      setAside,
      recordChange,
      allClearMessage,
      restMessage: normalizeProjectText(actionForRest) && !isFallback(actionForRest, fallbackNextAction)
        ? endSentence(voice('restWithAction', `${projectName}|${actionForRest}`, { action: stripTerminalPunctuation(actionForRest) }))
        : endSentence(voice('restWithoutContext', `${projectName}|${goal.current}`))
    };
  };

  root.LunaReturnGuidance = { normalizeProjectText, stableTextHash, voiceLibrary, assessGoal, assessNextAction, assessSetAside, assessRecordChange, buildReturnGuidance };
  if (typeof module !== 'undefined') module.exports = root.LunaReturnGuidance;
})(typeof globalThis !== 'undefined' ? globalThis : window);
