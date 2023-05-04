const { getStamp } = require("../../lib/core/getters/getStamp");
const { getPeriod } = require("../../lib/core/getters/getPeriodAndTitle");
const { readAndParseFile } = require("../../lib/filesystem");
const { paths } = require("../../lib/filesystem/pathstest");

function createJsonPath1(path, input) {
  let stamp = getStamp(path, input);
  let period = getPeriod(input);


  period = period.period;

  return { period, stamp };
}

function getJsonData(scoreboard, input) {
  var filePath;

  if ("rk" === scoreboard) {
    filePath = paths.RK_SCORES();
  }
  if ("kc" === scoreboard) {
    filePath = paths.KC_SCORES();
  }
  let varsPath = paths.SK_VARS();
  let data = readAndParseFile(filePath);
  let jsonPath = createJsonPath1(varsPath, input);
  let period = jsonPath.period;
  let stamp = jsonPath.stamp;

  return data[period][stamp];
}

module.exports = { getJsonData };
