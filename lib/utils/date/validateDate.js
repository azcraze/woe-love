// lib/utils/date/validateDate.js

const { DateTime } = require("luxon");

const formats = [
  "MMM dd, yyyy",
  "dd MMM yyyy",
  "d MMM yyyy",
  "MMM d, yyyy",
  "MMMM dd, yyyy",
  "MMMM d, yyyy",
  "MMddyyyy",
];

const validateDate = (dateString) => {
  for (const format of formats) {
    const date = DateTime.fromFormat(dateString, format);

    if (date.isValid) {
      return true;
    }
  }

  return false;
};

const getDateFormat = (dateString) => {
  for (const format of formats) {
    const date = DateTime.fromFormat(dateString, format);

    if (date.isValid) {
      return format;
    }
  }
  return null;
};

module.exports = {
  validateDate,
  getDateFormat,
};
