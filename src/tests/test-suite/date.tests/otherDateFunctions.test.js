const { writeDateToFile } = require("../../../../lib/utils/date/setDate");
const {
  addDay, subtractDay, newDate 
} = require("../../../../lib/utils/date");

const testFilePath =
  "/Users/home/code/custom modules/woe-love/src/tests/test-files/writeDateToFile.test.json";
const dateToWrite = "May 3, 2022";

console.log(writeDateToFile(testFilePath, newDate(dateToWrite)));

// writeDateToFile function test
test("writeDateToFile function should write the correct date to the file", () => {
  const testFilePath =
    "/Users/home/code/custom modules/woe-love/src/tests/test-files/writeDateToFile.test.json";
  const dateToWrite = "May 3, 2022";

  writeDateToFile(testFilePath, newDate(dateToWrite));

  const result = JSON.parse(fs.readFileSync(testFilePath));

  expect(result.date).toBe(newDate(dateToWrite));
});

// addDay function test
test("addDay function should return the correct date with one day added", () => {
  const date = "May 3, 2022";
  const expectedDate = "May 4, 2022";

  const result = addDay(date);

  expect(result).toBe(expectedDate);
});

// subtractDay function test
test("subtractDay function should return the correct date with one day subtracted", () => {
  const date = "May 3, 2022";
  const expectedDate = "May 2, 2022";

  const result = subtractDay(date);

  expect(result).toBe(expectedDate);
});
