(function (root) {
  'use strict';

  const fallbackProjectName = 'A quiet unfinished project';
  const fallbackGoal = 'Make the next return easier';
  const fallbackNextAction = 'Choose one small, safe next step.';
  const fallbackSetAside = 'Leave the larger ideas alone for now.';
  const fallbackRecordChange = 'Record one plain note about what changed.';

  const normalizeProjectText = (value, fallback = '') => {
    const normalized = String(value || '').replace(/\s+/g, ' ').trim();
    return normalized || fallback;
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

  const makeResult = (status, current, suggestion, reason) => ({ status, current, suggestion, reason });
  const clear = (current, reason) => makeResult('clear', current, '', reason);
  const suggestion = (current, suggestionText, reason) => makeResult('suggestion', current, suggestionText, reason);

  const assessGoal = (value, projectName) => {
    const current = normalizeProjectText(value, fallbackGoal);
    const project = normalizeProjectText(projectName, fallbackProjectName);
    if (!normalizeProjectText(value)) return suggestion(current, `Make the next step in ${project} easier to see.`, 'Blank goals are hard to return to, so Luna offers one bounded return-oriented goal.');
    if (isFallback(current, fallbackGoal)) return suggestion(current, `Make the next step in ${project} easier to see.`, 'The generic fallback can be tied to this project without adding details.');
    if (sentenceCount(current) > 1) return suggestion(current, firstSentence(current), 'Several sentences can be harder to hold at the opening threshold.');
    if (current.length > 120 || hasRepeatedAnd(current) || broadGoal.test(current)) return suggestion(current, firstClause(firstSentence(current)) || `Make the next step in ${project} easier to see.`, 'A shorter first clause may be easier to return to.');
    return clear(current, 'This goal is already concise enough for a return.');
  };

  const assessNextAction = (value, projectName) => {
    const current = normalizeProjectText(value, fallbackNextAction);
    const project = normalizeProjectText(projectName, fallbackProjectName);
    if (!normalizeProjectText(value) || isFallback(current, fallbackNextAction)) return suggestion(current, `Open ${project} and choose the smallest visible next move.`, 'A blank or generic action needs one visible first move.');
    if (sentenceCount(current) > 1 || hasListShape(current)) return suggestion(current, firstClause(current), 'One Next Action works best as one action, not a sequence.');
    if (broadAction.test(current)) return suggestion(current, `Open ${project} and choose the smallest visible next move.`, 'Broad action wording can be softened into one visible first move.');
    return clear(current, 'This next action is already small enough to act as the lantern.');
  };

  const assessSetAside = (value, currentGoal) => {
    const raw = normalizeProjectText(value);
    const current = normalizeProjectText(value, fallbackSetAside);
    const goal = normalizeProjectText(currentGoal, fallbackGoal);
    if (!raw || isFallback(current, fallbackSetAside)) return suggestion(current, `Leave anything beyond '${goal}' for later.`, 'A return boundary can name what stays outside this goal.');
    if (current.length > 110 || hasListShape(current)) return suggestion(current, firstClause(firstSentence(current)), 'Set Aside stays as one value rather than a backlog.');
    return clear(current, 'This is already one clear thing to leave aside.');
  };

  const assessRecordChange = (value, nextAction, projectName) => {
    const raw = normalizeProjectText(value);
    const current = normalizeProjectText(value, fallbackRecordChange);
    const action = normalizeProjectText(nextAction, fallbackNextAction);
    const project = normalizeProjectText(projectName, fallbackProjectName);
    if (!raw || isFallback(current, fallbackRecordChange)) return suggestion(current, `Returned to ${project} and chose: ${action}.`, 'A brief note can record the choice without claiming it was finished.');
    if (current.length > 130 || sentenceCount(current) > 1 || futureLogInstruction.test(current)) return suggestion(current, firstSentence(current), 'Record stays as one brief note, not instructions for a log.');
    return clear(current, 'This record is already brief enough for returning later.');
  };

  const buildReturnGuidance = (context) => {
    const projectName = normalizeProjectText(context.projectName, fallbackProjectName);
    const goal = assessGoal(context.currentGoal, projectName);
    const nextAction = assessNextAction(context.nextAction, projectName);
    const setAside = assessSetAside(context.setAside, goal.suggestion || goal.current);
    const recordChange = assessRecordChange(context.recordChange, nextAction.suggestion || nextAction.current, projectName);
    const actionForRest = nextAction.suggestion || nextAction.current;
    return {
      goal,
      nextAction,
      setAside,
      recordChange,
      restMessage: `${actionForRest} will still be waiting later. Nothing needs to restart automatically.`
    };
  };

  root.LunaReturnGuidance = { normalizeProjectText, assessGoal, assessNextAction, assessSetAside, assessRecordChange, buildReturnGuidance };
  if (typeof module !== 'undefined') module.exports = root.LunaReturnGuidance;
})(typeof globalThis !== 'undefined' ? globalThis : window);
