const c = require('ansi-colors');
const { table } = require('table');
const { config } = require('../../lib/core/playerScores');
const { getPlayerScores } = require('./getPlayerScoresArrayTest');


// eslint-disable-next-line max-statements
function playerScoresData(scoreboard, name) {

  let dayScores = getPlayerScores(scoreboard, name, 'day');
  let weekScores = getPlayerScores(scoreboard, name, 'week');
  let monthScores = getPlayerScores(scoreboard, name, 'month');
  let allTimeScores = getPlayerScores(scoreboard, name, 'allTime');

  console.log({
    dayScores, weekScores, monthScores, allTimeScores
  });

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

  console.log({
    dayScores, weekScores, monthScores, allTimeScores
  });
  dayScores.unshift(`${c.white("Day")}`);

  weekScores.unshift(`${c.white("Week")}`);

  monthScores.unshift(`${c.white("Month")}`);

  allTimeScores.unshift(`${c.white("All")}`);

  console.log({
    dayScores, weekScores, monthScores, allTimeScores
  });
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
  ];

  return table(data, config);

}


module.exports = {
  playerScoresData
};

console.log(playerScoresData("kc", "bob"));