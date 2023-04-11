const { writeToFile } = require("../../filesystem");

const cwd = require("cwd");

const kcPath = `${cwd()}/src/tests/test-files/kcScores.json`;
const rkPath = `${cwd()}/src/tests/test-files/rkScores.json`;

function kc(scores, period, dateUnit, player, score1, score2) {
  const periodLogs = `${period}Logs`;

  if (!scores[periodLogs][dateUnit]) {
    scores[periodLogs][dateUnit] = {};
  }
  if (!scores[periodLogs][dateUnit][player]) {
    scores[periodLogs][dateUnit][player] = [ 0, 0, 0 ];
  }
  scores[periodLogs][dateUnit][player][0] += score1;
  scores[periodLogs][dateUnit][player][1] += score2;
  scores[periodLogs][dateUnit][player][2] += score1 + score2;
  writeToFile(scores, kcPath, 3, 2);
}

// Example usage:
// updateScores('dayLogs', '03052023', 'pooktest', 10, 5)

function rk(scores, period, dateUnit, player, score1, score2) {
  const periodLogs = `${period}Logs`;

  if (!scores[periodLogs][dateUnit]) {
    scores[periodLogs][dateUnit] = {};
  }
  if (!scores[periodLogs][dateUnit][player]) {
    scores[periodLogs][dateUnit][player] = [ 0, 0, 0 ];
  }
  scores[periodLogs][dateUnit][player][0] += score1;
  scores[periodLogs][dateUnit][player][1] += score2 / 2;
  scores[periodLogs][dateUnit][player][2] += score1 + score2;
  writeToFile(scores, rkPath, 3, 2);
}
// kc(scores, 'day', '03052023', 'pooktest', 10, 5);

module.exports = {
  kc,
  rk,
};
