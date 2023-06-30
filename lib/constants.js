require("rootpath")();
// const { log } = require("woelogs");

// ANCHOR - directories
const RECORDS_DIR = "/Users/home/code/custom modules/woe-love/src/data";

// ANCHOR - paths

const RK_SCORES_PATH =
  "/Users/home/code/custom modules/woe-love/src/data/rkScores.json";
const KC_SCORES_PATH =
  "/Users/home/code/custom modules/woe-love/src/data/kcScores.json";
const SK_VARS_PATH =
  "/Users/home/code/custom modules/woe-love/src/data/skVars.json";
const TEST_RECORDS_PATH =
  "/Users/home/code/custom modules/woe-love/src/data/test-records.json";
const LOGS_PATH =
  "/Users/home/code/custom modules/woe-love/src/data/logs.json";
const GLOBAL_VARS_PATH =
  "/Users/home/code/custom modules/woe-love/src/data/storedVariables.json";
const TEST_JSON_PATH =
  "/Users/home/code/custom modules/woe-love/src/data/myFile.json";

const PATHS = {
  SK_VARS: SK_VARS_PATH,
  RK_SCORES: RK_SCORES_PATH,
  KC_SCORES: KC_SCORES_PATH,
  GLOBAL_VARS: GLOBAL_VARS_PATH,
  LOGS: LOGS_PATH,
  TEST_RECORDS: TEST_RECORDS_PATH,
  TEST_JSON: TEST_JSON_PATH,
  
};

/* ------------------ Exports ----------------- */
module.exports = {
  PATHS,
  DIRS: {
    RECORDS: RECORDS_DIR
  }
};
