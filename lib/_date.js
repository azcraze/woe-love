const { addDay, subtractDay } = require("./addDay");
const { writeDateToFile } = require("./setDate");

module.exports = {
  date: {
    current: require("./currentDateValues").getDateValues,
    new: require("./newDate").newDate,
    add: addDay,
    subtract: subtractDay,
    write: writeDateToFile,
    validate: require("./validateDate").validateAndFormatDate,
    checkPeriod: require("./newPeriodCheck").checkDateInfo,
  },
};
