/* ------------------ Imports ----------------- */
const cwd = require("cwd");

/* ----------------- Variables ---------------- */
const PATH_STORE = `${cwd()}/src/tests/test-files/storedVariables.json`;
const MEMBER_INFO_STORE = `${cwd()}/src/tests/test-files/test-records.json`;

/* //////////////////////////////////////////// */
/*                    SCRIPT                    */
/* //////////////////////////////////////////// */
function serverPath(pathName) {
  switch (pathName) {
    case "RK_SCORES_PATH":
    case RK_SCORES_PATH:
    case "rkScores":
      return `${cwd()}/src/tests/test-files/rkScores.json`;
    case "KC_SCORES_PATH":
    case KC_SCORES_PATH:
    case "kcScores":
      return `${cwd()}/src/tests/test-files/kcScores.json`;
    case "SK_VARS_PATH":
    case SK_VARS_PATH:
    case "skVars":
      return `${cwd()}/src/tests/test-files/skVars.json`;
    default:
      return `${cwd()}/src/tests/test-files/skVars.json`;
  }
}

function RK_SCORES_PATH() {
  return serverPath(RK_SCORES_PATH);
}

function KC_SCORES_PATH() {
  return serverPath(KC_SCORES_PATH);
}

function SK_VARS_PATH() {
  return serverPath(SK_VARS_PATH);
}

/* ------------------ Exports ----------------- */
module.exports = {
  paths: {
    SK_VARS: SK_VARS_PATH,
    RK_SCORES: RK_SCORES_PATH,
    MEMBER_INFO: MEMBER_INFO_STORE,
    GLOBAL_VARS: PATH_STORE,
  },
  serverPath,
};

console.log(SK_VARS_PATH());
