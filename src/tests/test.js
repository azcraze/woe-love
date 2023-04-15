const fs = require("fs");
const path = require("path");
const _ = require("lodash");

function rename() {
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



  let inputData = fs.readFileSync(inputPath);

  inputData = JSON.parse(inputData);

  console.log(inputData["2021"].monthLogs);

  // Iterate through each year in the input data
  for (let year in inputData) {
    // Check if the year has week logs
    if (inputData[year].monthLogs) {
      let monthLogs = inputData[year].monthLogs;
      let newWeekLogs = {};

      // Iterate through each week in the year's week logs
      for (let week in monthLogs) {
        let yearWeek = `${week}-${year}`; // Append year to the week number

        newWeekLogs[yearWeek] = monthLogs[week];
      }

      // Update the year's week logs with the new keys
      inputData[year].monthLogs = newWeekLogs;
    }
  }

  // Output the modified data
  console.log(JSON.stringify(inputData));

  // Write the updated JSON data to the output file
  fs.writeFileSync(outputPath, JSON.stringify(inputData, null, 2));
}

rename();
