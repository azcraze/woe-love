const { writeToFile } = require("../../filesystem");

const cwd = require("cwd");

const path = `${cwd()}/src/tests/test-files/test-records.json`;

function kc(scores, dateUnit, score1, score2) {
  const periodLogs = `entries`;

  if (!scores[periodLogs][dateUnit] || !scores[periodLogs][dateUnit].kc) {
    return null;
  }

  scores[periodLogs][dateUnit].kc[0] -= score1;
  scores[periodLogs][dateUnit].kc[1] -= score2;
  scores[periodLogs][dateUnit].kc[2] -= score1 + score2;

  const [ updatedScore1, updatedScore2, updatedTotal ] =
    scores[periodLogs][dateUnit].kc;

  if (0 >= updatedScore1 && 0 >= updatedScore2 && 0 >= updatedTotal) {
    delete scores[periodLogs][dateUnit].kc;
  }

  scores.totals.kc[0] -= score1;
  scores.totals.kc[1] -= score2;
  scores.totals.kc[2] -= score1 + score2;

  writeToFile(scores, path, 3, 2);
}

function rk(scores, dateUnit, score1, score2) {
  const periodLogs = `entries`;
  const scoreHalf = score2 / 2;

  if (!scores[periodLogs][dateUnit] || !scores[periodLogs][dateUnit].rk) {
    return null;
  }

  scores[periodLogs][dateUnit].rk[0] -= score1;
  scores[periodLogs][dateUnit].rk[1] -= scoreHalf;
  scores[periodLogs][dateUnit].rk[2] -= score1 + scoreHalf;

  const [ updatedScore1, updatedScore2, updatedTotal ] =
    scores[periodLogs][dateUnit].rk;

  if (0 >= updatedScore1 && 0 >= updatedScore2 && 0 >= updatedTotal) {
    delete scores[periodLogs][dateUnit].rk;
  }

  scores.totals.rk[0] -= score1;
  scores.totals.rk[1] -= scoreHalf;
  scores.totals.rk[2] -= score1 + scoreHalf;

  writeToFile(scores, path, 3, 2);
}

module.exports = {
  kc,
  rk,
};
