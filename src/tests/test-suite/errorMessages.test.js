const {
  errors, errMsg, errHelp 
} = require("../../../lib/err/errorMessages");

describe("errors", () => {
  test("should have correct properties", () => {
    expect(errors).toHaveProperty("typeChecks");
    expect(errors).toHaveProperty("argCount");
    expect(errors).toHaveProperty("info");
    expect(errors).toHaveProperty("invalidInput");
    expect(errors).toHaveProperty("dicsordChecks");
  });

  test("should have correct error messages", () => {
    expect(errors.typeChecks[0]).toBe(
      "a valid hex color code. use `>>hex` for a quick reference"
    );
    expect(errors.argCount[1]).toBe("requires 1 argument");
    expect(errors.info[0]).toBe("Task timeout");
    expect(errors.invalidInput[2]).toBe("The ID you entered is invalid.");
    expect(errors.dicsordChecks[1]).toBe(
      "is not a valid channel ID or mention"
    );
  });
});

describe("errMsg", () => {
  test("should return correct error message for given key and index", () => {
    expect(errMsg("types", 0)).toBe(
      "**Error:** a valid hex color code. use `>>hex` for a quick reference"
    );
    expect(errMsg("argCount", 2)).toBe("**Error:** requires 2 arguments");
    expect(errMsg("info", 1)).toBe(
      "**Error:** No answer. Command has timed out."
    );
    expect(errMsg("invalidInput", 3)).toBe("**Error:** Invalid Input");
    expect(errMsg("dicsordChecks", 0, "Oops!")).toBe(
      "Oops! is not a valid channel ID or mention"
    );
  });
});

describe("errHelp", () => {
  test("should return error messages for all keys", () => {
    expect(errHelp()).toContain("typeChecks:");
    expect(errHelp()).toContain("argCount:");
    expect(errHelp()).toContain("info:");
    expect(errHelp()).toContain("invalidInput:");
    expect(errHelp()).toContain("dicsordChecks:");
  });
});
