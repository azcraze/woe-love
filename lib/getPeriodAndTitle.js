// ./lib/getters/getPeriodAndTitle.js
/**
 * Returns the period and title based on the input period
 * @param {string} inputPeriod - The input period (default: "all")
 * @returns {Object} - The period and title object
 */
function getPeriod(inputPeriod = "all") {
  // Initialize variables
  let period;
  let title;

  // Determine period and title based on inputPeriod
  switch (inputPeriod) {
    case "day":
      period = "dayLogs";
      title = "Day";
      break;
    case "week":
      period = "weekLogs";
      title = "Week";
      break;
    case "month":
      period = "monthLogs";
      title = "Month";
      break;
    default:
      period = "allTimeLogs";
      title = "All Time";
      break;
  }

  // Return the period and title object
  return { period, title };
}

module.exports = {
  getPeriod,
};
