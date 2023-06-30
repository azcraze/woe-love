const { readAndParseFile } = require("./readAndParseJson");
const { writeToFile } = require("./writeStructuredJson");
const { PATHS } = require("./defaultPaths");
// const { log } = require("woelogs");

function addScores(scoreboard, period, dateUnit, player, score1, score2) {
  const scores = getScores(scoreboard);
  
  if ("rk" === scoreboard) {
    rk(scores, period, dateUnit, player, score1, score2);
  } else {
    kc(scores, period, dateUnit, player, score1, score2);
  }
}

function getScores(scoreboard) {
  const path = "rk" === scoreboard ? PATHS.RK_SCORES : PATHS.KC_SCORES;
  const scores = readAndParseFile(path);

  return scores;
}

function kc(scores, period, dateUnit, player, score1, score2) {
  const periodLogs = `${period}Logs`;

  scores[periodLogs][dateUnit] = scores[periodLogs][dateUnit] || {};
  scores[periodLogs][dateUnit][player] = scores[periodLogs][dateUnit][player] || [ 0, 0, 0 ];
  scores[periodLogs][dateUnit][player][0] += score1;
  scores[periodLogs][dateUnit][player][1] += score2;
  scores[periodLogs][dateUnit][player][2] += score1 + score2;

  writeToFile(scores, PATHS.KC_SCORES, 3, 2);
}

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
