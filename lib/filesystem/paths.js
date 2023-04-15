/* ------------------ Imports ----------------- */
const cwd = require("cwd");

/* ----------------- Variables ---------------- */
const PATH_STORE = `${cwd()}/data/storedVariables.json`;
const MEMBER_INFO_STORE = `${cwd()}/data/memberInfo.json`;

/* //////////////////////////////////////////// */
/*                    SCRIPT                    */
/* //////////////////////////////////////////// */
function serverPath(pathName, id) {
  switch (pathName) {
    case "RK_SCORES_PATH":
    case RK_SCORES_PATH:
    case "rkScores":
      return `${cwd()}/data/scorekeeping/${id}/rkScores.json`;
    case "KC_SCORES_PATH":
    case KC_SCORES_PATH:
    case "kcScores":
      return `${cwd()}/data/scorekeeping/${id}/kcScores.json`;
    case "SK_VARS_PATH":
    case SK_VARS_PATH:
    case "skVars":
      return `${cwd()}/data/scorekeeping/${id}/skVars.json`;
    default:
      return `${cwd()}data/scorekeeping/${id}/skVars.json`;
  }
}

function RK_SCORES_PATH(id) {
  return serverPath(RK_SCORES_PATH, id);
}

function KC_SCORES_PATH(id) {
  return serverPath(KC_SCORES_PATH, id);
}

function SK_VARS_PATH(id) {
  return serverPath(SK_VARS_PATH, id);
}

/* ------------------ Exports ----------------- */
module.exports = {
  PATH_STORE,
  MEMBER_INFO_STORE,
  RK_SCORES_PATH,
  KC_SCORES_PATH,
  SK_VARS_PATH,
  serverPath,
};
