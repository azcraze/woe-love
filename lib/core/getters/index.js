module.exports = {
  get: {
    stamp: require('./getStamp').getStamp,
    period: require('./getPeriodAndTitle').getPeriod,
    scores: require("../../../src/tests/getScoresArrayTest").getJsonData,
  }
};
