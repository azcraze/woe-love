const { readAndParseFile } = require("./readAndParseJson");
const { writeToFile } = require("./writeStructuredJson");
const { PATHS } = require("./defaultPaths");

function subtractScores(scoreboard, period, dateUnit, player, score1, score2) {
  const scores = getScores(scoreboard);

  if ("rk" === scoreboard) {
    subtractRK(scores, period, dateUnit, player, score1, score2);
  } else {
    subtractKC(scores, period, dateUnit, player, score1, score2);
  }
}

function getScores(scoreboard) {
  const path = "rk" === scoreboard ? PATHS.RK_SCORES : PATHS.KC_SCORES;
  const scores = readAndParseFile(path);

  return scores;
}

function subtractKC(scores, period, dateUnit, player, score1, score2) {
  const periodLogs = `${period}Logs`;

  if (
    scores[periodLogs] &&
    scores[periodLogs][dateUnit] &&
    scores[periodLogs][dateUnit][player]
  ) {
    scores[periodLogs][dateUnit][player][0] -= score1;
    scores[periodLogs][dateUnit][player][1] -= score2;
    scores[periodLogs][dateUnit][player][2] -= score1 + score2;

    if (0 === scores[periodLogs][dateUnit][player][2]) {
      delete scores[periodLogs][dateUnit][player];
    }

    writeToFile(scores, PATHS.KC_SCORES, 3, 2);
  }
}

function subtractRK(scores, period, dateUnit, player, score1, score2) {
  const periodLogs = `${period}Logs`;

  if (
    scores[periodLogs] &&
    scores[periodLogs][dateUnit] &&
    scores[periodLogs][dateUnit][player]
  ) {
    scores[periodLogs][dateUnit][player][0] -= score1;
    scores[periodLogs][dateUnit][player][1] -= score2;
    scores[periodLogs][dateUnit][player][2] -= score1 + score2;

    if (0 === scores[periodLogs][dateUnit][player][2]) {
      delete scores[periodLogs][dateUnit][player];
    }

    writeToFile(scores, PATHS.RK_SCORES, 3, 2);
  }
}

module.exports = {
  subtractScores,
  subtractKC,
  subtractRK,
};
