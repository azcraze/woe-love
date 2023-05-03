const { get } = require("../getters");
const { is } = require('../../err')

function getPlayerScores(scoreboard, name, id, input ){
  let scores = get.scores(scoreboard,id,input);

  scores = scores[name]

  if ( is("undefined", scores)){
    scores = [ 0,0,0 ]
    return scores
  }
  return scores;
}

module.exports = { getPlayerScores };


getPlayerScores("kc", "pookie", "day")
getPlayerScores("kc", "pookie", "week")
getPlayerScores("kc", "pookie", "month")
getPlayerScores("kc", "pookie", "allTime")