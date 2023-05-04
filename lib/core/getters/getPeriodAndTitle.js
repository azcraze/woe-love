function getPeriod(inputPeriod = "all") {
  let input = inputPeriod;
  let period;
  let title;

  switch (input) {
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
    case "all":
    case "total":
      period = "allTimeLogs";
      title = "All Time";
      break;
    default:
      period = "allTimeLogs";
      title = "All Time";
  }

  return { period, title };
}

module.exports = {
  getPeriod,
};
