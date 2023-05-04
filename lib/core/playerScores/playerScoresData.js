const c = require('ansi-colors');
const { table } = require('table');
const { getPlayerScores } = require('./getScoresArray')


// eslint-disable-next-line max-statements
function playerScoresData(scoreboard, name, id){

  let dayScores = getPlayerScores(scoreboard, name, id, 'day');
  let weekScores = getPlayerScores(scoreboard, name, id, 'week');
  let monthScores = getPlayerScores(scoreboard, name, id, 'month');
  let allTimeScores = getPlayerScores(scoreboard, name, id, 'allTime');


  if (!Array.isArray(dayScores)) {
    dayScores = [ 0, 0, 0 ];
  }
  
  if (!Array.isArray(weekScores)) {
    weekScores = [ 0, 0, 0 ];
  }
  
  if (!Array.isArray(monthScores)) {
    monthScores = [ 0, 0, 0 ];
  }
  
  if (!Array.isArray(allTimeScores)) {
    allTimeScores = [ 0, 0, 0 ];
  }

  dayScores.unshift(`${c.white("Day")}`);

  weekScores.unshift(`${c.white("Week")}`);

  monthScores.unshift(`${c.white("Month")}`);

  allTimeScores.unshift(`${c.white("All")}`);

  console.log({
    dayScores, weekScores, monthScores, allTimeScores
  })
  const data = [
    [
      `${c.bgMagenta.white('Per         red  blu       TOTAL')}`,
      '',
      '',
      '' 
    ],
    dayScores,
    weekScores,
    monthScores,
    allTimeScores
  ]


  return table(data, config);
}


module.exports= {
  playerScoresData
}