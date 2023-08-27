"use strict";

const { log } = require("woelogs");
const { date } = require("./_date");
const { PATHS } = require("./defaultPaths");
const {
  processInput,
  validateInput,
  subtractScores,
  subtractPlayerScores,
} = require("./_scores");

/**
 * The path to the file containing date values.
 * @type {string}
 */
const dateValuesPath = PATHS.SK_VARS;

/**
 * Retrieves the current date values.
 * @type {object}
 * @property {string} dayStamp - The current day stamp.
 * @property {string} weekUnit - The current week unit.
 * @property {string} monthUnit - The current month unit.
 * @property {string} yearUnit - The current year unit.
 */
const {
  dayStamp,
  week: weekUnit,
  month: monthUnit,
  year: yearUnit,
} = date.current(dateValuesPath);

/**
 * Logs the current date values.
 */
log({
  dayStamp,
  weekUnit,
  monthUnit,
  yearUnit,
});

/**
 * Enters scores into the specified scoreboard.
 * @param {string} scoreboard - The scoreboard type.
 * @param {string} inputString - The input string containing the scores.
 * @returns {string} - The result message indicating success or failure.
 */ // eslint-disable-next-line max-statements
function removeScores(scoreboard, inputString) {
  const isValid = validateInput(scoreboard, inputString);

  if (!isValid) {
    const errorMessage = processInput(scoreboard, inputString);

    return errorMessage;
  } else {
    const inputArr = processInput(scoreboard, inputString);
    const [player, score1, score] = inputArr;

    if ("rk" === scoreboard) {
      subtractScores("rk", "day", dayStamp, player, score1, score2);
      subtractScores("rk", "week", weekUnit, player, score1, score2);
      subtractScores("rk", "month", monthUnit, player, score1, score2);
      subtractScores("rk", "year", yearUnit, player, score1, score2);
      subtractScores("rk", "allTime", "all", player, score1, score2);
      subtractPlayerScores("rk", dayStamp, score1, score2, player);
    } else {
      subtractScores("kc", "day", dayStamp, player, score1, score2);
      subtractScores("kc", "week", weekUnit, player, score1, score2);
      subtractScores("kc", "month", monthUnit, player, score1, score2);
      subtractScores("kc", "year", yearUnit, player, score1, score2);
      subtractScores("kc", "allTime", "all", player, score1, score2);
      subtractPlayerScores("kc", dayStamp, score1, score2, player);
    }

    return "Done";
  }
}

module.exports = { removeScores };
// console.log(removeScores("rk", "test 10 15"));
