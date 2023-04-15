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

const date = "Apr 3, 2023";
const format = getDateFormat(date, formats);

if (format) {
  console.log(`The date '${date}' is in the format '${format}'.`);
} else {
  console.log(`Could not determine the format of the date '${date}'.`);
}

module.exports = {
  validateDate,
  getDateFormat,
};
