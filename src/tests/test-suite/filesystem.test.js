// test/filesystem.test.js

const fs = require("fs");
const {
  readAndParseFile,
} = require("../../../lib/filesystem/readAndParseJson");
const { isValidJson } = require("../../../lib/filesystem/validateJson");
const { writeToFile } = require("../../../lib/filesystem/writeStructuredJson");
const { paths } = require("../../../lib/filesystem");

const TEST_SERVER_ID = "816814079179358248";

describe("readAndParseJson", () => {
  it("should return parsed JSON data from file if file is valid JSON", () => {
    const expected = { foo: "bar" };
    const filePath = `${__dirname}/test-files/valid.json`;
    const actual = readAndParseFile(filePath);

    expect(actual).toEqual(expected);
  });

  it("should return false if file is not valid JSON", () => {
    const filePath = `${__dirname}/test-files/invalid.json`;
    const actual = readAndParseFile(filePath);

    expect(actual).toBe(false);
  });
});

describe("isValidJson", () => {
  it("should return true if file is valid JSON", () => {
    const filePath = `${__dirname}/test-files/valid.json`;
    const actual = isValidJson(filePath);

    expect(actual).toBe(true);
  });

  it("should return false if file is not valid JSON", () => {
    const filePath = `${__dirname}/test-files/invalid.json`;
    const actual = isValidJson(filePath);

    expect(actual).toBe(false);
  });
});

describe("writeStructuredJson", () => {
  it("should write formatted JSON data to file", () => {
    const dataToWrite = { foo: "bar" };
    const filePath = `${__dirname}/test-files/output.json`;

    writeToFile(dataToWrite, filePath);
    const fileContents = fs.readFileSync(filePath, "utf8");

    expect(fileContents).toMatchSnapshot();
  });
});

describe("paths", () => {
  it("should return the correct path for SK_VARS", () => {
    const expected = `${process.cwd()}/data/scorekeeping/${TEST_SERVER_ID}/skVars.json`;
    const actual = paths.SK_VARS(TEST_SERVER_ID);

    expect(actual).toEqual(expected);
  });

  it("should return the correct path for RK_SCORES", () => {
    const expected = `${process.cwd()}/data/scorekeeping/${TEST_SERVER_ID}/rkScores.json`;
    const actual = paths.RK_SCORES(TEST_SERVER_ID);

    expect(actual).toEqual(expected);
  });

  it("should return the correct path for MEMBER_INFO", () => {
    const expected = `${process.cwd()}/data/memberInfo.json`;
    const actual = paths.MEMBER_INFO;

    expect(actual).toEqual(expected);
  });

  it("should return the correct path for GLOBAL_VARS", () => {
    const expected = `${process.cwd()}data/storedVariables.json`;
    const actual = paths.GLOBAL_VARS;

    expect(actual).toEqual(expected);
  });
});
