const c = require("ansi-colors");
const { table } = require("table");
const { getPlayerScores } = require("./getPlayerScoresArray");
const { config } = require("./table-config");
const { is } = require("./_is");

/**
 * Generates the player scores data for a specified scoreboard, player name, and ID.
 * @param {string} scoreboard - The type of scoreboard ("rk" or "kc").
 * @param {string} name - The name of the player.
 * @param {string} id - The ID of the scoreboard.
 * @returns {string} The formatted table of player scores.
 */
// eslint-disable-next-line max-statements -- ignore
// eslint-disable-next-line max-statements
function playerScoresData(scoreboard, name) {
  let dayScores = getPlayerScores(scoreboard, name, "day");
  let weekScores = getPlayerScores(scoreboard, name, "week");
  let monthScores = getPlayerScores(scoreboard, name, "month");
  let allTimeScores = getPlayerScores(scoreboard, name, "allTime");

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
  const getHeader =
    "kc" === scoreboard
      ? `${c.bgMagenta.white("Per         red  blu       TOTAL")}`
      : `${c.bgBlack.cyan("Per        rebs  bonus     TOTAL")}`;

  console.log(dayScores);

  const header = [ 
    getHeader,
    "",
    "",
    "" 
  ];

  const data = [ 
    header,
    dayScores,
    weekScores,
    monthScores,
    allTimeScores 
  ];

  is.arr(data);
  // console.log(data);
  console.log(table(data, config));
  return table(data, config);
}

module.exports = {
  playerScoresData,
};

playerScoresData("rk", "fishie");
