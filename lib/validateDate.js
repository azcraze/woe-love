// lib/utils/date/validateDate.js


const { DateTime } = require("luxon");
const { log } = require("woelogs");

const formats = [
  "MMM dd, yyyy",
  "dd MMM yyyy",
  "d MMM yyyy",
  "MMM d, yyyy",
  "MMMM dd, yyyy",
  "MMMM d, yyyy",
  "MMddyyyy",
];

/**
 * Validates a date string.
 * @param {string} dateString - The date string to validate.
 * @returns {boolean} A boolean indicating whether the date is valid.
 */
const validateDate = (dateString) => {
  for (const format of formats) {
    const date = DateTime.fromFormat(dateString, format);

    if (date.isValid) {
      return true;
    } else {
      log(`Date: ${dateString} could not be parsed with format: ${format}`);
    }
  }

  return false;
};

/**
 * Retrieves the standardized format of a date string.
 * @param {string} dateString - The date string.
 * @returns {string|null} The standardized format of the date string, or null if the date is invalid.
 */
const getDateFormat = (dateString) => {
  for (const format of formats) {
    const date = DateTime.fromFormat(dateString, format);

    if (date.isValid) {
      return date.toFormat("MMM d, yyyy");
    }
  }

  return null;
};

/**
 * Validates and formats a date string.
 * @param {string} dateString - The date string to validate and format.
 * @returns {string|boolean} The formatted date string if it is valid, or false if the date is invalid.
 */
const validateAndFormatDate = (dateString) => {
  for (const format of formats) {
    const date = DateTime.fromFormat(dateString, format);

    if (date.isValid) {
      return date.toFormat("MMM d, yyyy");
    }
  }

  return false;
};

/**
 * Detects the format of a date string.
 * @param {string} dateString - The date string to detect the format of.
 * @returns {string|null} The detected format of the date string, or null if the format cannot be detected.
 */
const detectDateFormat = (dateString) => {
  for (const format of formats) {
    const date = DateTime.fromFormat(dateString, format);

    if (date.isValid) {
      log(`Date: ${dateString} detected format: ${format}`);
      return format;
    }
  }

  log(`Date: ${dateString} format could not be detected.`);
  return null;
};

module.exports = {
  validateDate,
  getDateFormat,
  validateAndFormatDate,
  detectDateFormat,
};