const { writeToFile } = require("./writeStructuredJson");
const { readAndParseFile } = require("./readAndParseJson");
const { DIRS } = require('./defaultPaths');

let dir = DIRS.RECORDS;
let path;

function addPlayerScores(scoreboard, dateUnit, score1, score2, player = "test") {
  path = `${dir}/${player}-records.json`;
  let scores = getScores();
  
  function getScores() {
    return readAndParseFile(path);
  } 

  if ("rk" === scoreboard) {
    rk(scores, dateUnit, score1, score2);
  } else {
    kc(scores, dateUnit, score1, score2);
  }
}

function kc(scores, dateUnit, score1, score2) {
  const periodLogs = `entries`;

  if (!scores[periodLogs][dateUnit]) {
    scores[periodLogs][dateUnit] = {};
  }
  if (!scores[periodLogs][dateUnit].kc) {
    scores[periodLogs][dateUnit].kc = [ 0, 0, 0 ];
  }
  scores[periodLogs][dateUnit].kc[0] += score1;
  scores[periodLogs][dateUnit].kc[1] += score2;
  scores[periodLogs][dateUnit].kc[2] += score1 + score2;

  scores.totals.kc[0] += score1;
  scores.totals.kc[1] += score2;
  scores.totals.kc[2] += score1 + score2;

  writeToFile(scores, path, 3, 2);
}

function rk(scores, dateUnit, score1, score2) {
  const periodLogs = `entries`;
  const scoreHalf = score2;

  if (!scores[periodLogs][dateUnit]) {
    scores[periodLogs][dateUnit] = {};
  }
  if (!scores[periodLogs][dateUnit].rk) {
    scores[periodLogs][dateUnit].rk = [ 0, 0, 0 ];
  }

  scores[periodLogs][dateUnit].rk[0] += score1;
  scores[periodLogs][dateUnit].rk[1] += scoreHalf;
  scores[periodLogs][dateUnit].rk[2] += score1 + scoreHalf;

  scores.totals.rk[0] += score1;
  scores.totals.rk[1] += scoreHalf;
  scores.totals.rk[2] += score1 + scoreHalf;

  writeToFile(scores, path, 3, 2);
}

module.exports = {
  addPlayerScores,
  kc,
  rk
};
