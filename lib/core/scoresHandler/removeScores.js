const { writeToFile } = require("../../filesystem");
const cwd = require("cwd");
const kcPath = `${cwd()}/src/tests/test-files/kcScores.json`;
const rkPath = `${cwd()}/src/tests/test-files/rkScores.json`;

function kc(scores, period, dateUnit, player, score1, score2) {
  const periodLogs = `${period}logs`;

  if (!scores[periodLogs][dateUnit][player]) {
    return null;
  }

  scores[periodLogs][dateUnit][player][0] -= score1;
  scores[periodLogs][dateUnit][player][1] -= score2;
  scores[periodLogs][dateUnit][player][2] -= score1 + score2;

  const [ updatedScore1, updatedScore2, updatedTotal ] =
    scores[periodLogs][dateUnit][player];

  if (0 >= updatedScore1 && 0 >= updatedScore2 && 0 >= updatedTotal) {
    delete scores[periodLogs][dateUnit][player];
  }

  writeToFile(scores, kcPath, 3, 2);
}

function rk(scores, period, dateUnit, player, score1, score2) {
  const periodLogs = `${period}logs`;

  if (!scores[periodLogs][dateUnit][player]) {
    return null;
  }

  scores[periodLogs][dateUnit][player][0] -= score1;
  scores[periodLogs][dateUnit][player][1] -= score2 / 2;
  scores[periodLogs][dateUnit][player][2] -= score1 + score2 / 2;

  const [ updatedScore1, updatedScore2, updatedTotal ] =
    scores[periodLogs][dateUnit][player];

  if (0 >= updatedScore1 && 0 >= updatedScore2 && 0 >= updatedTotal) {
    delete scores[periodLogs][dateUnit][player];
  }

  writeToFile(scores, rkPath, 3, 2);
}

module.exports = {
  kc,
  rk,
};
