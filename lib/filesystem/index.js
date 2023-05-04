/* ------------------ Imports ----------------- */
const { writeToFile } = require("./writeStructuredJson");
const { readAndParseFile } = require("./readAndParseJson");
const paths = require("./paths");
const testPaths = require('./pathstest');

/* ------------------ Exports ----------------- */
module.exports = {
  writeToFile,
  readAndParseFile,
  paths: {
    SK_VARS: paths.SK_VARS_PATH,
    RK_SCORES: paths.RK_SCORES_PATH,
    MEMBER_INFO: paths.MEMBER_INFO_STORE,
    GLOBAL_VARS: paths.PATH_STORE,
  },
  testPaths: {
    SK_VARS: testPaths.SK_VARS_PATH,
    RK_SCORES: testPaths.RK_SCORES_PATH,
    MEMBER_INFO: testPaths.MEMBER_INFO_STORE,
    GLOBAL_VARS: testPaths.PATH_STORE,
  },
};
