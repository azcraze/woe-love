const { writeToFile } = require("./writeStructuredJson");
const { readAndParseFile } = require("./readAndParseJson");
const { DIRS } = require("./defaultPaths");

let dir = DIRS.RECORDS;
let path;

function subtractPlayerScores(
  scoreboard,
  dateUnit,
  score1,
  score2,
  player = "test",
) {
  path = `${dir}/${player}-records.json`;
  let scores = getScores();

  function getScores() {
    return readAndParseFile(path);
  }

  if ("rk" === scoreboard) {
    subtractRK(scores, dateUnit, score1, score2);
  } else {
    subtractKC(scores, dateUnit, score1, score2);
  }
}

function subtractKC(scores, dateUnit, score1, score2) {
  const periodLogs = `entries`;

  if (scores[periodLogs][dateUnit] && scores[periodLogs][dateUnit].kc) {
    scores[periodLogs][dateUnit].kc[0] -= score1;
    scores[periodLogs][dateUnit].kc[1] -= score2;
    scores[periodLogs][dateUnit].kc[2] -= score1 + score2;

    if (0 === scores[periodLogs][dateUnit].kc[2]) {
      delete scores[periodLogs][dateUnit].kc;
    }

    scores.totals.kc[0] -= score1;
    scores.totals.kc[1] -= score2;
    scores.totals.kc[2] -= score1 + score2;

    writeToFile(scores, path, 3, 2);
  }
}

function subtractRK(scores, dateUnit, score1, score2) {
  const periodLogs = `entries`;
  const scoreHalf = score2;

  if (scores[periodLogs][dateUnit] && scores[periodLogs][dateUnit].rk) {
    scores[periodLogs][dateUnit].rk[0] -= score1;
    scores[periodLogs][dateUnit].rk[1] -= scoreHalf;
    scores[periodLogs][dateUnit].rk[2] -= score1 + scoreHalf;

    if (0 === scores[periodLogs][dateUnit].rk[2]) {
      delete scores[periodLogs][dateUnit].rk;
    }

    scores.totals.rk[0] -= score1;
    scores.totals.rk[1] -= scoreHalf;
    scores.totals.rk[2] -= score1 + scoreHalf;

    writeToFile(scores, path, 3, 2);
  }
}

module.exports = {
  subtractPlayerScores,
  subtractKC,
  subtractRK,
};
