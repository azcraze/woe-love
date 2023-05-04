const fs = require("fs");
const { writeToFile, readAndParseFile } = require("../../../lib/filesystem");
const { isValidJson } = require("../../../lib/filesystem/validateJson");

var TEST_PATH =
  "/Users/home/code/custom modules/woe-love/src/tests/test-files/testWrite.json";

describe("writeToFile", () => {
  it("should write data to file in expected format", () => {
    // Arrange
    const dataToWrite = {
      hello: "world",
    };
    const filePath = TEST_PATH;

    // Act
    writeToFile(dataToWrite, filePath, 1, 2);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Assert
    expect(JSON.parse(fileContents)).toEqual({
      hello: "world",
    });
  });
});

TEST_PATH =
  "/Users/home/code/custom modules/woe-love/src/tests/test-files/output.json";
describe("readAndParseFile", () => {
  test("returns data from a valid JSON file", () => {
    const dataToWrite = { hello: "world" };
    const expectedOutput = dataToWrite;

    // Write data to file
    fs.writeFileSync(TEST_PATH, JSON.stringify(dataToWrite));

    // Read and parse data from file and compare with expected output
    const dataFromFile = readAndParseFile(TEST_PATH);

    expect(dataFromFile).toEqual(expectedOutput);

    // Cleanup test file
    fs.unlinkSync(TEST_PATH);
  });

  test("returns false for an invalid JSON file", () => {
    // Write invalid data to file
    fs.writeFileSync(TEST_PATH, "not a JSON file");

    // Attempt to read and parse data from file and expect false
    const dataFromFile = readAndParseFile(TEST_PATH);

    expect(dataFromFile).toBe(false);

    // Cleanup test file
    fs.unlinkSync(TEST_PATH);
  });
});

describe("isValidJson", () => {
  test("returns true for a valid JSON file", () => {
    const dataToWrite = { hello: "world" };

    // Write valid data to file
    fs.writeFileSync(TEST_PATH, JSON.stringify(dataToWrite));

    // Check if file is valid JSON and expect true
    const isValid = isValidJson(TEST_PATH);

    expect(isValid).toBe(true);

    // Cleanup test file
    fs.unlinkSync(TEST_PATH);
  });

  test("returns false for an invalid JSON file", () => {
    // Write invalid data to file
    fs.writeFileSync(TEST_PATH, "not a JSON file");

    // Check if file is valid JSON and expect false
    const isValid = isValidJson(TEST_PATH);

    expect(isValid).toBe(false);

    // Cleanup test file
    fs.unlinkSync(TEST_PATH);
  });
});
