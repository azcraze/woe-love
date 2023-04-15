/* eslint-disable max-statements */
const { is } = require("../../../lib/err/typeChecking");

describe("is function", () => {
  it("should return true for string type", () => {
    expect(is("string", "hello")).toEqual({ isValid: true, errMsg: "" });
  });

  it("should return false for string type if data is not a string", () => {
    expect(is("string", 123)).toEqual({
      isValid: false,
      errMsg: "Expected string, but got number: 123",
    });
  });

  it("should return true for number type", () => {
    expect(is("number", 123)).toEqual({ isValid: true, errMsg: "" });
  });

  it("should return false for number type if data is not a number", () => {
    expect(is("number", "hello")).toEqual({
      isValid: false,
      errMsg: "Expected number, but got string: hello",
    });
  });

  it("should return true for array type", () => {
    expect(is("array", [1, 2, 3])).toEqual({ isValid: true, errMsg: "" });
  });

  it("should return false for array type if data is not an array", () => {
    expect(is("array", "hello")).toEqual({
      isValid: false,
      errMsg: "Expected array, but got string: hello",
    });
  });

  it("should return true for object type", () => {
    expect(is("object", { a: 1, b: 2 })).toEqual({ isValid: true, errMsg: "" });
  });

  it("should return false for object type if data is not an object", () => {
    expect(is("object", "hello")).toEqual({
      isValid: false,
      errMsg: "Expected object, but got string: hello",
    });
  });

  it("should return true for function type", () => {
    expect(is("function", () => {})).toEqual({ isValid: true, errMsg: "" });
  });

  it("should return false for function type if data is not a function", () => {
    expect(is("function", "hello")).toEqual({
      isValid: false,
      errMsg: "Expected function, but got string: hello",
    });
  });

  it("should return true for null type", () => {
    expect(is("null", null)).toEqual({ isValid: true, errMsg: "" });
  });

  it("should return false for null type if data is not null", () => {
    expect(is("null", "hello")).toEqual({
      isValid: false,
      errMsg: "Expected null, but got string: hello",
    });
  });

  it("should return true for undefined type", () => {
    expect(is("undefined", undefined)).toEqual({ isValid: true, errMsg: "" });
  });

  it("should return false for undefined type if data is defined", () => {
    const data = "hello";

    expect(is("undefined", data)).toEqual({
      isValid: false,
      errMsg: `Expected undefined, but got ${typeof data}: hello`,
    });
  });

  it("should return true for boolean type", () => {
    expect(is("boolean", true)).toEqual({ isValid: true, errMsg: "" });
  });

  it("should return false for boolean type if data is not a boolean", () => {
    expect(is("boolean", "hello")).toEqual({
      isValid: false,
      errMsg: "Expected boolean, but got string: hello",
    });
  });

  it("should throw an error for invalid type", () => {
    expect(() => {
      is("invalid", "hello");
    }).toThrowError("Invalid type: invalid");
  });
});

/*
const { is } = require('../../../lib/err/typeChecking');

describe('is()', () => {
  test('should return true for valid data types', () => {
    expect(is('string', 'hello')).toBe(true);
    expect(is('number', 42)).toBe(true);
    expect(is('boolean', true)).toBe(true);
    expect(is('object', { name: 'John', age: 30 })).toBe(true);
    expect(is('array', [ 1, 2, 3 ])).toBe(true);
    expect(is('function', () => {})).toBe(true);
    expect(is('null', null)).toBe(true);
    expect(is('undefined', undefined)).toBe(true);
  });

  test('should return false for invalid data types', () => {
    expect(is('string', 42)).toBe(false);
    expect(is('number', 'hello')).toBe(false);
    expect(is('boolean', 'true')).toBe(false);
    expect(is('object', 'hello')).toBe(false);
    expect(is('array', { name: 'John', age: 30 })).toBe(false);
    expect(is('function', {})).toBe(false);
    expect(is('null', undefined)).toBe(false);
    expect(is('undefined', null)).toBe(false);
  });
});*/
