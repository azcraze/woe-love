
function kc(period, dateUnit, player, score1, score2){
  const periodLogs = `${period}Logs`
 
  if (!scores[periodLogs][dateUnit]) {
    scores[periodLogs][dateUnit] = {};
  }
  if (!scores[periodLogs][dateUnit][player]) {
    scores[periodLogs][dateUnit][player] = [ 0, 0, 0 ];
  }
  scores[periodLogs][dateUnit][player][0] += score1;
  scores[periodLogs][dateUnit][player][1] += score2;
  scores[periodLogs][dateUnit][player][2] += (score1 + score2);
  writeToFile(scores, '/Users/home/code/custom modules/test-dir/modules/woe-love/src/tests/addScores.json', 3, 2)
}

// Example usage:
// updateScores('dayLogs', '03052023', 'pooktest', 10, 5)

function rk(period, dateUnit, player, score1, score2){
  const periodLogs = `${period}Logs`
 
  if (!scores[periodLogs][dateUnit]) {
    scores[periodLogs][dateUnit] = {};
  }
  if (!scores[periodLogs][dateUnit][player]) {
    scores[periodLogs][dateUnit][player] = [ 0, 0, 0 ];
  }
  scores[periodLogs][dateUnit][player][0] += score1;
  scores[periodLogs][dateUnit][player][1] += score2/2;
  scores[periodLogs][dateUnit][player][2] += (score1 + score2);
  
}



// writeToFile(scores, '/Users/home/code/custom modules/test-dir/modules/woe-love/src/tests/addScores.json', 3, 2)
module.exports = {
  kc,
  rk
};

