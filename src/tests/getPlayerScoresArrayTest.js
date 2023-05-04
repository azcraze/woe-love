const { log } = require("../..");
const { get } = require("../../lib/core/getters");
// const { is } = require('../../lib/err')
const { t } = require('typy');

function getPlayerScores(scoreboard, name, input ){
  let scores = get.scores(scoreboard, input);

  console.log( scores)
  scores = scores[name]
  console.log(scores)
  log(!t(scores).isArray)
  if (false === t(scores).isArray){
    return [ 0, 0, 0 ];
  }
  return scores;
}

module.exports = { getPlayerScores };
