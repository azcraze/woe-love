// validateDate.test.js

const {
  validateDate,
  getDateFormat,
} = require("../../../../lib/utils/date/validateDate");

describe("validateDate", () => {
  it("should return true for a valid date string", () => {
    const isValid = validateDate("May 3, 2023");

    expect(isValid).toBe(true);
  });

  it("should return false for an invalid date string", () => {
    const isValid = validateDate("foo bar");

    expect(isValid).toBe(false);
  });
});

describe("getDateFormat", () => {
  it("should return the correct date format for a valid date string", () => {
    const format = getDateFormat("May 3, 2023");

    expect(format).toBe("MMM d, yyyy");
  });

  it("should return null for an invalid date string", () => {
    const format = getDateFormat("foo bar");

    expect(format).toBe(null);
  });
});
