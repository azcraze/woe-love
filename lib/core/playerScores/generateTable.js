
const { config, playerScoresData } = require('.')
const { table } = require('table');


function kcTable(scoreboard, name, id){
  let data = playerScoresData(scoreboard, name, id)


  return table(data, config)

//  let playerKc = table(data, config);
}

console.log(kcTable("kc", "pookie"))