const { readAndParseFile } = require("./readAndParseJson");
const { writeToFile } = require("./writeStructuredJson");
const { PATHS } = require("./defaultPaths");
// const { log } = require("woelogs");

/**
 * Adds scores to the specified scoreboard, period, and date unit.
 *
 * @param {string} scoreboard - The scoreboard to add scores to (either "rk" or "kc").
 * @param {string} period - The period of the scores ("day", "week", "month", "year").
 * @param {string} dateUnit - The date unit of the scores (e.g., day stamp, week number).
 * @param {string} player - The player name.
 * @param {number} score1 - The first score.
 * @param {number} score2 - The second score.
 */
function addScores(scoreboard, period, dateUnit, player, score1, score2) {
  const scores = getScores(scoreboard);
  
  if ("rk" === scoreboard) {
    rk(scores, period, dateUnit, player, score1, score2);
  } else {
    kc(scores, period, dateUnit, player, score1, score2);
  }
}

/**
 * Retrieves the scores object for the specified scoreboard.
 *
 * @param {string} scoreboard - The scoreboard to retrieve scores from (either "rk" or "kc").
 * @returns {Object} - The scores object.
 */
function getScores(scoreboard) {
  const path = "rk" === scoreboard ? PATHS.RK_SCORES : PATHS.KC_SCORES;
  const scores = readAndParseFile(path);

  return scores;
}

/**
 * Adds scores to the KC scoreboard, period, and date unit.
 *
 * @param {Object} scores - The scores object.
 * @param {string} period - The period of the scores ("day", "week", "month", "year").
 * @param {string} dateUnit - The date unit of the scores (e.g., day stamp, week number).
 * @param {string} player - The player name.
 * @param {number} score1 - The first score.
 * @param {number} score2 - The second score.
 */
function kc(scores, period, dateUnit, player, score1, score2) {
  const periodLogs = `${period}Logs`;

  scores[periodLogs][dateUnit] = scores[periodLogs][dateUnit] || {};
  scores[periodLogs][dateUnit][player] = scores[periodLogs][dateUnit][player] || [ 0, 0, 0 ];
  scores[periodLogs][dateUnit][player][0] += score1;
  scores[periodLogs][dateUnit][player][1] += score2;
  scores[periodLogs][dateUnit][player][2] += score1 + score2;

  writeToFile(scores, PATHS.KC_SCORES, 3, 2);
}

/**
 * Adds scores to the RK scoreboard, period, and date unit.
 *
 * @param {Object} scores - The scores object.
 * @param {string} period - The period of the scores ("day", "week", "month", "year").
 * @param {string} dateUnit - The date unit of the scores (e.g., day stamp, week number).
 * @param {string} player - The player name.
 * @param {number} score1 - The first score.
 * @param {number} score2 - The second score.
 */
function rk(scores, period, dateUnit, player, score1, score2) {
  const periodLogs = `${period}Logs`;

  scores[periodLogs] = scores[periodLogs] || {};
  scores[periodLogs][dateUnit] = scores[periodLogs][dateUnit] || {};
  scores[periodLogs][dateUnit][player] = scores[periodLogs][dateUnit][player] || [ 0, 0, 0 ];

  scores[periodLogs][dateUnit][player][0] += score1;
  scores[periodLogs][dateUnit][player][1] += score2;
  scores[periodLogs][dateUnit][player][2] += score1 + score2;

  writeToFile(scores, PATHS.RK_SCORES, 3, 2);
}

module.exports = {
  addScores,
  kc,
  rk
};
