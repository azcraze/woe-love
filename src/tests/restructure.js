/* eslint-disable max-depth */
const fs = require("fs");
const cwd = require("cwd");
const _ = require("lodash");

/*
const inputPath = `${cwd()}/src/tests/test-files/kcScores.json`;
const outputath = `${cwd()}/src/tests/test-files/output.json`;
*/

let obj = {
  inputLog: [],
  dayLogs: {},
  weekLogs: {},
  monthLogs: {},
  yearLogs: {},
  allTimeLoga: {},
};

const path = require("path");

const inputPath = path.join(
  process.cwd(),
  "src",
  "tests",
  "test-files",
  "kcScores.json"
);
const outputPath = path.join(
  process.cwd(),
  "src",
  "tests",
  "test-files",
  "output.json"
);

var inputData = fs.readFileSync(inputPath);
const inputJSON = JSON.parse(inputData);

const wk21 = inputJSON["2021"].weekLogs;
const mt21 = inputJSON["2021"].monthLogs;
const wk22 = inputJSON["2022"].weekLogs;
const mt22 = inputJSON["2022"].monthLogs;
const wk23 = inputJSON["2023"].weekLogs;
const mt23 = inputJSON["2023"].monthLogs;
const d21 = inputJSON["2021"].dayLogs;
const d22 = inputJSON["2022"].dayLogs;
const d23 = inputJSON["2023"].dayLogs;

const mergeWeek = _.merge(wk21, wk22, wk23);
const mergeMonth = _.merge(mt21, mt22, mt23);
const mergeDay = _.merge(d21, d22, d23);

obj.inputLog = inputJSON.inputLog;
obj.dayLogs = mergeDay;
obj.weekLogs = mergeWeek;
obj.monthLogs = mergeMonth;

obj.yearLogs = {
  2021: inputJSON["2021"].yearLogs,
  2022: inputJSON["2022"].yearLogs,
  2023: inputJSON["2023"].yearLogs,
};
obj.allTimeLogs = inputJSON["2023"].allTime;

fs.writeFileSync(outputPath, JSON.stringify(obj, null, 2));
