
const { config } = require('../../lib/core/playerScores')
const { getPlayerScores } = require('./getPlayerScoresArrayTest')
const { table } = require('table');


function kcTable(scoreboard, name){
  let data = getPlayerScores(scoreboard, name)

  console.log(data);
  console.log(table(data, config));

  return table(data, config)
//  let playerKc = table(data, config);
}

console.log(kcTable("kc", "pookie"))