require("rootpath")();
const { PATHS } = require("./defaultPaths");
const { date } = require("./_date");


/**
 * @typedef {Object} EndOfPeriodArr
 * @property {string} dayStamp - The day stamp.
 * @property {Array<boolean>} endOfPeriodBooleans - An array of booleans representing the end of periods.
 * @property {number} dayOfTheMonth - The day of the month.
 * @property {number} weekOfTheYear - The week of the year.
 * @property {number} monthOfTheYear - The month of the year.
 * @property {number} year - The year.
 */

/**
 * Retrieves an array containing the end of the period information.
 *
 * @returns {EndOfPeriodArr} - An object containing the end of the period information.
 */
function getEndOfPeriodArr() {
  const skVarsPath = PATHS.SK_VARS;

  let dateObj = date.current(skVarsPath);


  // Assuming date.checkPeriod modifies the dateObj in some way
  dateObj = date.checkPeriod(dateObj.dayStamp);

  return dateObj;
}

// Example usage:

module.exports = {
  getEndOfPeriodArr,
};
