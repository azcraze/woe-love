const { PATHS } = require("./constants");
const { addDay, subtractDay } = require("./addDay");
const { writeDateToFile } = require("./setDate");

/**
 * Main module that exports various utility functions and constants.
 * @module utils
 */

module.exports = {
  /**
   * Retrieves the period and title based on the current date.
   *
   * @function
   * @name getPeriod
   * @memberof module:utils
   * @returns {string} The period and title.
   */
  getPeriod: require("./getPeriodAndTitle").getPeriod,

  /**
   * Retrieves the current date stamp.
   *
   * @function
   * @name getStamp
   * @memberof module:utils
   * @returns {string} The current date stamp.
   */
  getStamp: require("./getStamp").getStamp,

  PATHS: {
    /**
     * The path for SK_VARS.
     *
     * @name SK_VARS
     * @memberof module:utils.PATHS
     * @type {string}
     */
    SK_VARS: PATHS.SK_VARS_PATH,

    /**
     * The path for RK_SCORES.
     *
     * @name RK_SCORES
     * @memberof module:utils.PATHS
     * @type {string}
     */
    RK_SCORES: PATHS.RK_SCORES_PATH,

    /**
     * The path for KC_SCORES.
     *
     * @name KC_SCORES
     * @memberof module:utils.PATHS
     * @type {string}
     */
    KC_SCORES: PATHS.KC_SCORES_PATH,

    /**
     * The path for GLOBAL_VARS.
     *
     * @name GLOBAL_VARS
     * @memberof module:utils.PATHS
     * @type {string}
     */
    GLOBAL_VARS: PATHS.GLOBAL_VARS_PATH,

    /**
     * The path for LOGS.
     *
     * @name LOGS
     * @memberof module:utils.PATHS
     * @type {string}
     */
    LOGS: PATHS.LOGS_PATH,

    /**
     * The path for TEST_RECORDS.
     *
     * @name TEST_RECORDS
     * @memberof module:utils.PATHS
     * @type {string}
     */
    TEST_RECORDS: PATHS.TEST_RECORDS_PATH,

    /**
     * The path for TEST_JSON.
     *
     * @name TEST_JSON
     * @memberof module:utils.PATHS
     * @type {string}
     */
    TEST_JSON: PATHS.TEST_JSON_PATH,
  },

  date: {
    /**
     * Retrieves the current date values.
     *
     * @function
     * @name current
     * @memberof module:utils.date
     * @returns {Object} The current date values.
     */
    current: require("./currentDateValues").getDateValues,

    /**
     * Creates a new date object.
     *
     * @function
     * @name new
     * @memberof module:utils.date
     * @param {number} year - The year.
     * @param {number} month - The month.
     * @param {number} day - The day.
     * @returns {Date} The new date object.
     */
    new: require("./newDate").newDate,

    /**
     * Adds a specified number of days to a date.
     *
     * @function
     * @name add
     * @memberof module:utils.date
     * @param {Date} date - The date object.
     * @param {number} days - The number of days to add.
     * @returns {Date} The new date object.
     */
    add: addDay,

    /**
     * Subtracts a specified number of days from a date.
     *
     * @function
     * @name subtract
     * @memberof module:utils.date
     * @param {Date} date - The date object.
     * @param {number} days - The number of days to subtract.
     * @returns {Date} The new date object.
     */
    subtract: subtractDay,

    /**
     * Writes a date object to a file.
     *
     * @function
     * @name write
     * @memberof module:utils.date
     * @param {Date} date - The date object.
     * @param {string} path - The file path.
     */
    write: writeDateToFile,

    /**
     * Validates and formats a date string.
     *
     * @function
     * @name validate
     * @memberof module:utils.date
     * @param {string} dateString - The date string.
     * @returns {string} The formatted date string.
     */
    validate: require("./validateDate").validateAndFormatDate,

    /**
     * Checks the date information for the period.
     *
     * @function
     * @name checkPeriod
     * @memberof module:utils.date
     * @param {Object} dateObj - The date object.
     * @returns {Object} The modified date object.
     */
    checkPeriod: require("./newPeriodCheck").checkDateInfo,
  },

  /**
   * The Date class for custom date operations.
   *
   * @name Date
   * @memberof module:utils
   * @type {Date}
   */
  Date: require("./_date"),

  /**
   * The utility functions for checking various conditions.
   *
   * @name is
   * @memberof module:utils
   * @type {Object}
   */
  is: require("./_is"),

  /**
   * The utility functions for leaderboard operations.
   *
   * @name lb
   * @memberof module:utils
   * @type {Object}
   */
  lb: require("./_lb"),

  /**
   * Adds player scores to the specified scoreboard and date unit.
   *
   * @function
   * @name addPlayerScores
   * @memberof module:utils
   * @param {string} scoreboard - The scoreboard name.
   * @param {string} dateUnit - The date unit.
   * @param {number} score1 - The first score.
   * @param {number} score2 - The second score.
   * @param {string} [player="test"] - The player name.
   */
  addPlayerScores: require("./addPlayerScores"),

  /**
   * Adds scores to the specified scoreboard, period, date unit, and player.
   *
   * @function
   * @name addScores
   * @memberof module:utils
   * @param {string} scoreboard - The scoreboard name.
   * @param {string} period - The period.
   * @param {string} dateUnit - The date unit.
   * @param {string} player - The player name.
   * @param {number} score1 - The first score.
   * @param {number} score2 - The second score.
   */
  addScores: require("./addScores"),

  /**
   * Retrieves the argument count of a function.
   *
   * @function
   * @name argCount
   * @memberof module:utils
   * @param {Function} fn - The function.
   * @returns {number} The argument count.
   */
  argCount: require("./argCount"),

  /**
   * Checks if the current date is the end of the period.
   *
   * @function
   * @name checkEndOfPeriod
   * @memberof module:utils
   * @param {Object} period - The period object.
   * @returns {boolean} `true` if it's the end of the period, `false` otherwise.
   */
  checkEndOfPeriod: require("./checkEndOfPeriod"),

  /**
   * Checks the validity of scores input.
   *
   * @function
   * @name checkScoresInput
   * @memberof module:utils
   * @param {number} score1 - The first score.
   * @param {number} score2 - The second score.
   * @returns {boolean} `true` if the scores are valid, `false` otherwise.
   */
  checkScoresInput: require("./checkScoresInput"),

  /**
   * Checks if a user exists in the given user list.
   *
   * @function
   * @name checkUserExists
   * @memberof module:utils
   * @param {string} user - The user name.
   * @param {string[]} userList - The list of users.
   * @returns {boolean} `true` if the user exists, `false` otherwise.
   */
  checkUserExists: require("./checkUserExists"),

  /**
   * Constants used throughout the application.
   *
   * @name constants
   * @memberof module:utils
   * @type {Object}
   */
  constants: require("./constants"),

  /**
   * Utility functions for retrieving current date values.
   *
   * @name currentDateValues
   * @memberof module:utils
   * @type {Object}
   */
  currentDateValues: require("./currentDateValues"),

  /**
   * Default file paths used in the application.
   *
   * @name defaultPaths
   * @memberof module:utils
   * @type {Object}
   */
  defaultPaths: require("./defaultPaths"),

  /**
   * Utility functions for determining winners in the leaderboard.
   *
   * @name determineWinners
   * @memberof module:utils
   * @type {Object}
   */
  determineWinners: require("./determineWinners"),

  /**
   * Error messages used in the application.
   *
   * @name errorMessages
   * @memberof module:utils
   * @type {Object}
   */
  errorMessages: require("./errorMessages"),

  /**
   * Utility functions for formatting and sorting scores.
   *
   * @name formatAndSortScores
   * @memberof module:utils
   * @type {Object}
   */
  formatAndSortScores: require("./formatAndSortScores"),

  /**
   * Utility functions for formatting scores input.
   *
   * @name formatScoresInput
   * @memberof module:utils
   * @type {Object}
   */
  formatScoresInput: require("./formatScoresInput"),

  /**
   * Utility functions for generating formatted leaderboards.
   *
   * @name formattedLb
   * @memberof module:utils
   * @type {Object}
   */
  formattedLb: require("./formattedLb"),

  /**
   * Utility functions for generating player tables.
   *
   * @name generatePlayerTable
   * @memberof module:utils
   * @type {Object}
   */
  generatePlayerTable: require("./generatePlayerTable"),

  /**
   * Utility functions for retrieving player scores as an array.
   *
   * @name getPlayerScoresArray
   * @memberof module:utils
   * @type {Object}
   */
  getPlayerScoresArray: require("./getPlayerScoresArray"),

  /**
   * Utility functions for retrieving scores as an array.
   *
   * @name getScoresArray
   * @memberof module:utils
   * @type {Object}
   */
  getScoresArray: require("./getScoresArray"),

  /**
   * Utility functions for index 2 operations.
   *
   * @name index2
   * @memberof module:utils
   * @type {Object}
   */
  index2: require("./index2"),

  /**
   * Utility functions for leaderboard operations.
   *
   * @name leaderboard
   * @memberof module:utils
   * @type {Object}
   */
  leaderboard: require("./leaderboard"),

  /**
   * Utility functions for creating new date objects.
   *
   * @name newDate
   * @memberof module:utils
   * @type {Object}
   */
  newDate: require("./newDate"),

  /**
   * Utility functions for checking date information for the period.
   *
   * @name newPeriodCheck
   * @memberof module:utils
   * @type {Object}
   */
  newPeriodCheck: require("./newPeriodCheck"),

  /**
   * Utility functions for generating player scores tables.
   *
   * @name playerScoresTable
   * @memberof module:utils
   * @type {Object}
   */
  playerScoresTable: require("./playerScoresTable"),

  /**
   * Utility functions for processing input.
   *
   * @name processInput
   * @memberof module:utils
   * @type {Object}
   */
  processInput: require("./processInput"),

  /**
   * Utility functions for reading and parsing JSON files.
   *
   * @name readAndParseJson
   * @memberof module:utils
   * @type {Object}
   */
  readAndParseJson: require("./readAndParseJson"),

  /**
   * Utility functions for removing player scores.
   *
   * @name removePlayerScores
   * @memberof module:utils
   * @type {Object}
   */
  removePlayerScores: require("./removePlayerScores"),

  /**
   * Utility functions for removing scores.
   *
   * @name removeScores
   * @memberof module:utils
   * @type {Object}
   */
  removeScores: require("./removeScores"),

  /**
   * Utility functions for sanitizing input.
   *
   * @name sanitizeInput
   * @memberof module:utils
   * @type {Object}
   */
  sanitizeInput: require("./sanitizeInput"),

  /**
   * The schema definition for data validation.
   *
   * @name schema
   * @memberof module:utils
   * @type {Object}
   */
  schema: require("./schema"),

  /**
   * Utility functions for processing scores input.
   *
   * @name scoresIn
   * @memberof module:utils
   * @type {Object}
   */
  scoresIn: require("./scoresIn"),

  /**
   * Utility functions for processing scores output.
   *
   * @name scoresOut
   * @memberof module:utils
   * @type {Object}
   */
  scoresOut: require("./scoresOut"),

  /**
   * Configuration options for generating tables.
   *
   * @name tableConfig
   * @memberof module:utils
   * @type {Object}
   */
  tableConfig: require("./table-config"),

  /**
   * Utility functions for validating dates.
   *
   * @name validateDate
   * @memberof module:utils
   * @type {Object}
   */
  validateDate: require("./validateDate"),

  /**
   * Utility functions for validating JSON data.
   *
   * @name validateJson
   * @memberof module:utils
   * @type {Object}
   */
  validateJson: require("./validateJson"),

  /**
   * Utility functions for writing structured JSON data to a file.
   *
   * @name writeStructuredJson
   * @memberof module:utils
   * @type {Object}
   */
  writeStructuredJson: require("./writeStructuredJson"),
};
