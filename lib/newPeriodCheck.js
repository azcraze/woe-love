// libTesting/utils/date/newPeriodCheck.js

const { DateTime } = require("luxon");
const { log } = require("woelogs");

function checkDateInfo(dayStamp) {
  log(`Checking date info for: ${dayStamp}`);

  const currentDate = DateTime.fromFormat(dayStamp, "MMddyyyy");
  const tomorrow = currentDate.plus({ days: 1 });

  const isTomorrowMonday = 1 === tomorrow.weekday;
  const isTomorrowFirstOfMonth = 1 === tomorrow.day;
  const isTomorrowFirstOfYear = 1 === tomorrow.day && 1 === tomorrow.month;

  return [isTomorrowMonday, isTomorrowFirstOfMonth, isTomorrowFirstOfYear];
}

module.exports = { checkDateInfo };
/*
log(
  checkDateInfo("06302023")
);
*/