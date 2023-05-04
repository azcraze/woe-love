// lib/utils/date/addDay.js

/* ------------------ Imports ----------------- */
const luxon = require("luxon");

/**
* @brief Adds one day to a date string. This is useful for adding a date to an already existing date string.
* @param dateString The date string to modify. Must be parsable by luxon.
* @return { String } The modified date string. Format : dd / mm / yyyy
*/
function addDay(dateString) {
  const dt = luxon.DateTime.fromFormat(dateString, "LLL d, yyyy");
  const newDt = dt.plus({ days: 1 });
  const newDateString = newDt.toFormat("LLL d, yyyy");

  console.log(newDateString);

  return newDateString;
}

/**
* @brief Subtracts one day from a date string. This is useful for subtracting a date from an already formatted date string e. g.
* @param dateString The date string to be subtracted.
* @return { String } The date string after subtraction of one day
*/
function subtractDay(dateString) {
  const dt = luxon.DateTime.fromFormat(dateString, "LLL d, yyyy");
  const newDt = dt.minus({ days: 1 });
  const newDateString = newDt.toFormat("LLL d, yyyy");

  console.log(newDateString);

  return newDateString;
}

/* ------------------ Exports ----------------- */
module.exports = {
  addDay,
  subtractDay,
};
