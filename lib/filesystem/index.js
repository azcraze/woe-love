/* ------------------ Imports ----------------- */
const { writeToFile } = require("./writeStructuredJson");
const { readAndParseFile } = require("./readAndParseJson");
const paths = require('./paths')

/* ------------------ Exports ----------------- */
module.exports = {
  writeToFile,
  readAndParseFile,
  paths: {
    SK_VARS: paths.SK_VARS_PATH,
    RK_SCORES: paths.RK_SCORES_PATH,
    MEMBER_INFO: paths.MEMBER_INFO_STORE,
    GLOBAL_VARS: paths.PATH_STORE
  }
};
