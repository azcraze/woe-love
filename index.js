/* --------------- Pretty Errors -------------- */

require("dotenv").config();

/* ------------- Packages ------------ */

const {
  core, filesystem, utils 
} = require("./lib");
const fs = filesystem;

/* ------------------- Paths ------------------ */

/* ------------------- Misc ------------------- */

const duck = `  __
<(o )___
 ( ._> /
  \`---'
`;

module.exports = {
  duck: duck,
  scores: core.scores,
  lb: core.lb,
  check: core.check,
  logs: core.logs,
  get: core.get,
  error: require("./lib/err").error,
  is: require("./lib/err").is,
  logger: require("./lib/err").logger,
  pe: require("./lib/err").pe,
  store: require("./lib/store"),
  date: utils.date,
  sani: {
    split: {
      space: utils.split.space,
      comma: utils.split.comma,
      dash: utils.split.dash,
    },
  },
  log: utils.log,
  paths: fs.paths,
  testPaths: fs.testPaths,
  _fs: {
    write: fs.writeToFile,
    parse: fs.readAndParseFile,
  },
};
