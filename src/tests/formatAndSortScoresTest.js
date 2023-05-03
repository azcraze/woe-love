const { get } = require('../../lib/core/getters')




function transformScores(scoreboard, input) {
  let scoresArray = get.scores(scoreboard, input);
  const newObj = {};
  
  for (const player in scoresArray) {
    newObj[player] = {
      rebs: scoresArray[player][0],
      bonus: scoresArray[player][1],
      total: scoresArray[player][2],
    };
  }
  return newObj;
}
  
function sortScores(scoresArray) {
  scoresArray = [...Object.entries(scoresArray)];
  return scoresArray.sort((a, b) => b[1].total - a[1].total);
}


module.exports = {
  transformScores,
  sortScores
}