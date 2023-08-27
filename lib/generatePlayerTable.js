// libTesting/core/playerScores/generateTable.js

// Importing required modules
const { config } = require("./tableConfig");
const { playerScoresData } = require("./playerScoresTable");
const { table } = require("table");
const { log } = require("woelogs");

// Defining a function to generate a table of player scores data for a given scoreboard, name and id
function kcTable(scoreboard, name) {
  // Calling the playerScoresData function to get the data for the provided scoreboard, name and id
  let data = playerScoresData(scoreboard, name);

  log(data);

  // Generating a table with the obtained data and configuration options
  return table(data, config);
}

// Calling the kcTable function with "kc" scoreboard and "pookie" name, and logging the result to the console
// console.log(kcTable("kc", "pookie"));

module.exports = { kcTable };

// SECTION - notes on what this code does
/*
- The first two lines import the required modules using destructuring.
- The kcTable function accepts three parameters: scoreboard, name, and id.
- Inside the kcTable function, the playerScoresData function is called with the provided scoreboard, name, and id arguments, and the returned data is stored in the data variable.
- The table function is called with the data and config variables as arguments, and the generated table is returned.
- Finally, the kcTable function is called with "kc" scoreboard and "pookie" name arguments, and the resulting table is logged to the console.
*/
// !SECTION
