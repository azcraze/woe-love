/* eslint-disable no-unused-vars */
const { check } = require("./../../lib/core/input");
const { date } = require('../../lib/utils')
const { addToInputLog } = require("./../../lib/core/inputLogs");
const {
  removePlayerScores,
  addPlayerScores,
  addScores,
  removeScores,
} = require("./../../lib/core/scoresHandler");
const fs = require("fs");
const jsome = require('jsome');
const cwd = require("cwd");
const { toLower } = require("lodash");
const { isValidJson } = require("../../lib/filesystem/validateJson");
const { readAndParseFile } = require("../../lib/filesystem/readAndParseJson");
const { paths } = require('../filesystem')
const { SERVER_ID, TEST_NAME } = require('./test-values')

/* //////////////////////////////////////////// */
/*                   VARIABLES                  */
/* //////////////////////////////////////////// */


/* ------------------- Paths ------------------ */
let skVarsPath = paths.SK_VARS(SERVER_ID)
const path = `${cwd()}/src/tests/test-files/kcScores.json`;
const playerPath = `${cwd()}/src/tests/test-files/test-records.json`;



/* ------------------ Values ------------------ */

const input1 = "Pookie 3 5";
const input2 = "POOKS 10";
let name = TEST_NAME;

const scores = JSON.parse(fs.readFileSync(path));
const playerScores = JSON.parse(fs.readFileSync(playerPath));



/* //////////////////////////////////////////// */
/*              MODULES & FUNCTIONS             */
/* //////////////////////////////////////////// */

/* ----------- Validate Input Scores ---------- */


let res = check.scores.kc('POOKTEST 12 22')

jsome(check.scores.rk('POOKIE 15 5'))
jsome(check.scores.kc('Pooks 38 1'))
jsome(check.scores.rk('bob 7'))
jsome(check.scores.kc('POOKIE 15'))
jsome(check.scores.rk('Pooks'))
jsome(res);


/* -------------- Input Log Check ------------- */

addToInputLog(path, scores, "pandit 100 126")
addToInputLog(path, scores, "test 5 65")
addToInputLog(path, scores, "pooktest 1 1")
addToInputLog(path, scores, "pandit 100 126")
addToInputLog(path, scores, "test 5 65")
addToInputLog(path, scores, "pooktest 1 1")
addToInputLog(path, scores, "pandit 100 126")
addToInputLog(path, scores, "test 5 65")
addToInputLog(path, scores, "pooktest 1 1")
addToInputLog(path, scores, "IM # 15")
console.log(scores.inputLog);
addToInputLog(path, scores, "IM # 16")
addToInputLog(path, scores, "pooktest 1 1") 


/* --------------- Validate Json -------------- */

res = isValidJson(skVarsPath)

console.log(res)


/* ------------ Read And Parse Json ----------- */

res = readAndParseFile(skVarsPath)
console.log(res)

/* ---------------- Check Names --------------- */

name = "bob" // name that does not exist

res = check.userExists(skVarsPath, name)
console.log(res)



/* --------------- Current Date --------------- */

let result = date.current(skVarsPath)

console.log(result)

/* //////////////////////////////////////////// */
/*                     TASKS                    */
/* //////////////////////////////////////////// */

/* --------- WIP - Task: Input Scores --------- */

function addKc(input) {
  let res = check.scores.kc(input);

  const week = "12";
  const month = "04";
  const year = "2023";

  let validate = check.userExists(skVarsPath, res[0]);

  if (false === validate) {
    return false;
  }
  addPlayerScores.kc(playerScores, "04022023", res[1], res[2]);
  addScores.kc(scores, "day", "04022023", res[0], res[1], res[2]);
  addScores.kc(scores, "week", week, res[0], res[1], res[2]);
  addScores.kc(scores, "month", month, res[0], res[1], res[2]);
  addScores.kc(scores, "year", year, res[0], res[1], res[2]);
  addScores.kc(scores, "allTime", "all", res[0], res[1], res[2]);
  addToInputLog(path, scores, toLower(input));
}

console.log(addKc("fie 5 3"));
