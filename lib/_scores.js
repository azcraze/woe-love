/**
 * Module for handling scores and input operations.
 * @module scoresUtils
 */

const { processInput } = require("./checkScoresInput");
const { validateInput } = require("./formatScoresInput");
const { addScores } = require("./addScores");
const { addPlayerScores } = require("./addPlayerScores");
const { subtractScores } = require("./removeScores");
const { subtractPlayerScores } = require("./removePlayerScores");

/**
 * Input operations for processing and validating input.
 * @namespace input
 * @memberof module:scoresUtils
 */
const input = {
  /**
   * Processes the input for scores.
   * @function processInput
   * @memberof module:scoresUtils.input
   * @param {string} scoreboard - The scoreboard type.
   * @param {string} inputString - The input string to process.
   * @returns {*} - The processed input.
   */
  processInput,

  /**
   * Validates the input for scores.
   * @function validateInput
   * @memberof module:scoresUtils.input
   * @param {string} inputString - The input string to validate.
   * @returns {boolean} - Indicates if the input is valid or not.
   */
  validateInput,
};

/**
 * Operations for adding scores.
 * @namespace add
 * @memberof module:scoresUtils
 */
const add = {
  /**
   * Adds scores to the scoreboard.
   * @function addScores
   * @memberof module:scoresUtils.add
   * @param {string} scoreboard - The scoreboard type.
   * @param {string} period - The period of the scores.
   * @param {string} dateUnit - The date unit of the scores.
   * @param {string} player - The player's name.
   * @param {number} score1 - The first score.
   * @param {number} score2 - The second score.
   */
  addScores,

  /**
   * Adds scores to a player's record.
   * @function addPlayerScores
   * @memberof module:scoresUtils.add
   * @param {string} scoreboard - The scoreboard type.
   * @param {string} dateUnit - The date unit of the scores.
   * @param {number} score1 - The first score.
   * @param {number} score2 - The second score.
   * @param {string} [player="test"] - The player's name.
   */
  addPlayerScores,
};

/**
 * Operations for subtracting scores.
 * @namespace subtract
 * @memberof module:scoresUtils
 */
const subtract = {
  /**
   * Subtracts scores from the scoreboard.
   * @function subtractScores
   * @memberof module:scoresUtils.subtract
   * @param {string} scoreboard - The scoreboard type.
   * @param {string} period - The period of the scores.
   * @param {string} dateUnit - The date unit of the scores.
   * @param {string} player - The player's name.
   * @param {number} score1 - The first score.
   * @param {number} score2 - The second score.
   */
  subtractScores,

  /**
   * Subtracts scores from a player's record.
   * @function subtractPlayerScores
   * @memberof module:scoresUtils.subtract
   * @param {string} scoreboard - The scoreboard type.
   * @param {string} dateUnit - The date unit of the scores.
   * @param {number} score1 - The first score.
   * @param {number} score2 - The second score.
   * @param {string} [player="test"] - The player's name.
   */
  subtractPlayerScores,
};

/**
 * Exports the functions and operations related to scores and input handling.
 * @type {object}
 * @property {object} input - Input operations.
 * @property {object} add - Operations for adding scores.
 * @property {object} subtract - Operations for subtracting scores.
 * @memberof module:scoresUtils
 */
module.exports = {
  input,
  add,
  subtract,
  processInput,
  validateInput,
  addScores,
  addPlayerScores,
  subtractScores,
  subtractPlayerScores,
};
