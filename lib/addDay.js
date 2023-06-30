"use strict";

// lib/utils/date/addDay.js

/* ------------------ Imports ----------------- */
const luxon = require("luxon");
const { log } = require("woelogs");

/**
 * Adds one day to a date string.
 * @param {string} dateString - The date string to modify. Must be parsable by luxon.
 * @returns {string} The modified date string in the format: dd / mm / yyyy.
 */

function addDay(dateString) {
  // Create a DateTime object from the input dateString using the luxon library.
  const dt = luxon.DateTime.fromFormat(dateString, "LLL d, yyyy");

  // Add one day to the DateTime object using the .plus() method.
  const newDt = dt.plus({ days: 1 });

  // Format the new DateTime object to a string in the desired "dd / mm / yyyy" format.
  const newDateString = newDt.toFormat("dd / MM / yyyy");

  // Log the newDateString to the console for debugging purposes.
  log(newDateString);

  // Return the modified date string.
  return newDateString;
}

/**
 * @brief Subtracts one day from a date string. This is useful for subtracting a date from an already formatted date string e. g.
 * @param dateString The date string to be subtracted.
 * @return { String } The date string after subtraction of one day
 */

function subtractDay(dateString) {
  // Convert the dateString to a luxon.DateTime object using the specified format.
  const dt = luxon.DateTime.fromFormat(dateString, "LLL d, yyyy");

  // Subtract one day from the date object.
  const newDt = dt.minus({ days: 1 });

  // Convert the new date object to a string using the specified format.
  const newDateString = newDt.toFormat("LLL d, yyyy");

  // Log the new date string to the console.
  log(newDateString);

  // Return the new date string.
  return newDateString;
}

/* EXAMPLE - examples for using both functions */
/*
const testDateString = "June 1, 2023";

// Test addDay function
const modifiedDate = addDay(testDateString);

log("Modified Date (addDay):", modifiedDate);

// Test subtractDay function
const subtractedDate = subtractDay(testDateString);

log("Subtracted Date (subtractDay):", subtractedDate);
*/

/* ------------------ Exports ----------------- */
module.exports = {
  addDay,
  subtractDay,
};
