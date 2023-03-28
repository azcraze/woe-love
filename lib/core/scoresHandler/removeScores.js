
function kc(period, dateUnit, player, score1, score2){
  const periodLogs = `${period}logs`;

  if (scores[periodLogs][dateUnit][player]) {
    scores[periodLogs][dateUnit][player][0] -= score1;
    scores[periodLogs][dateUnit][player][1] -= score2;
    scores[periodLogs][dateUnit][player][2] -= (score1 + score2);

    const [ updatedScore1, updatedScore2, updatedTotal ] = scores[periodLogs][dateUnit][player];

    if (0 === updatedScore1 && 0 === updatedScore2 && 0 === updatedTotal) {
      delete scores[periodLogs][dateUnit][player];
    }
  }
}

// updateScores('dayLogs', '03052023', 'pooktest', 10, 5)
// example usage



function rk(period, dateUnit, player, score1, score2){
  const periodLogs = `${period}logs`;

  if (scores[periodLogs][dateUnit][player]) {
    scores[periodLogs][dateUnit][player][0] -= score1;
    scores[periodLogs][dateUnit][player][1] -= score2/2;
    scores[periodLogs][dateUnit][player][2] -= (score1 + (score2/2));

    const [ updatedScore1, updatedScore2, updatedTotal ] = scores[periodLogs][dateUnit][player];

    if (0 === updatedScore1 && 0 === updatedScore2 && 0 === updatedTotal) {
      delete scores[periodLogs][dateUnit][player];
    }
  }
}


module.exports = {
  kc,
  rk    
};