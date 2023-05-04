/* eslint-disable max-statements */
const { is } = require("../../../lib/err/typeChecking");

describe("is function", () => { // Tests that the function returns true for a valid string input. 
  it("test_string_type", () => {
    expect(is("string", "hello")).toBe(true);
  });
  // Tests that the function returns true for null and undefined input types. 
  it("test_null_undefined_types", () => {
    expect(is("null", null)).toBe(true);
    expect(is("undefined", undefined)).toBe(true);
  });


  it("should throw an error for invalid type", () => {
    expect(() => {
      is("invalid", "hello");
    }).toThrowError("Invalid type: invalid");
  });

  // Test that when the type parameter set is "array", that it returns true when the data input is [["pookie", 10], ["smirly", 5], ["fie", 12]]
  it("test_array_type_check", () => {
    const data = [[ "pookie", 10 ], [ "smirly", 5 ], [ "fie", 12 ]];
    const result = is("array", data);

    expect(result).toBe(true);
  });

  // Tests that the function returns true for a valid number input. 
  it("test_number_type", () => {
    expect(is("number", 123)).toBe(true);
  });

  // Tests that the function returns true for a valid object input. 
  it("test_object_type", () => {
    expect(is("object", { name: "John", age: 30 })).toBe(true);
  });
});


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
});
*/
