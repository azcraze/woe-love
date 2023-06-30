"use strict";

const { log } = require("woelogs");
const { addScores } = require("./addScores");
const { addPlayerScores } = require("./addPlayerScores");
const { date } = require("./_date");
const { PATHS } = require("./defaultPaths");
const { processInput } = require("./checkScoresInput");
const { validateInput } = require("./formatScoresInput");

const dateValuesPath = PATHS.SK_VARS;
const {
  dayStamp, week: weekUnit, month: monthUnit, year: yearUnit 
} = date.current(dateValuesPath);

log({
  dayStamp, weekUnit, monthUnit, yearUnit 
});
// eslint-disable-next-line max-statements
function enterScores(scoreboard, inputString) {
  const isValid = validateInput(scoreboard, inputString);

  if (!isValid) {
    const errorMessage = processInput(scoreboard, inputString);

    return errorMessage;
  } else {
    const inputArr = processInput(scoreboard, inputString);
    const [ player, score1, score2 ] = inputArr;

    if ("rk" === scoreboard) {
      addScores("rk", "day", dayStamp, player, score1, score2);
      addScores("rk", "week", weekUnit, player, score1, score2);
      addScores("rk", "month", monthUnit, player, score1, score2);
      addScores("rk", "year", yearUnit, player, score1, score2);
      addScores("rk", "allTime", "all", player, score1, score2);
      addPlayerScores("rk", dayStamp, score1, score2, player);
    } else {
      addScores("kc", "day", dayStamp, player, score1, score2);
      addScores("kc", "week", weekUnit, player, score1, score2);
      addScores("kc", "month", monthUnit, player, score1, score2);
      addScores("kc", "year", yearUnit, player, score1, score2);
      addScores("kc", "allTime", "all", player, score1, score2);
      addPlayerScores("kc", dayStamp, score1, score2, player);
    }

    return "Done";
  }
}

console.log(enterScores("rk", "test 10 15"));
