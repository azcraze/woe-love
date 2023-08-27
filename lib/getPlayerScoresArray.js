const getScores = require("./getScoresArray").getJsonData;
const { is } = require("./_is");
const { log } = require("woelogs");

function getPlayerScores(scoreboard, name, input) {
  let scores = getScores(scoreboard, input);

  if (is.undefined(scores) || is.undefined(scores[name])) {
    scores = [0, 0, 0];
    log(scores);
    return scores;
  }

  scores = scores[name];
  log(scores);
  return scores;
}

module.exports = { getPlayerScores };

getPlayerScores("kc", "pookie", "day");
getPlayerScores("kc", "pookie", "week");
getPlayerScores("kc", "pookie", "month");
getPlayerScores("kc", "pookie", "allTime");
