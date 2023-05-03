const { lb } = require('.')


function leaderboard(option, period){
  let scores = lb.format(option, period);

  scores = lb.sort(scores);

  const leaderboard = lb.generate(scores)

  return leaderboard
}

module.exports={ leaderboard }