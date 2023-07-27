/* 
Write two functions:

1. A function that returns a new string that is the given string with the first
  letter capitalized.

2. Given an array of strings,
  return the same array with the first letter of each string capitalized using
  the previously created helper function.

HINT: strings are immutable so to change a string you must create a new version
of it.
*/

/* Tests for capitalize function */
const string1 = "hello";
const expected1 = "Hello";

const string2 = "";
const expected2 = "";

/**
 * Capitalizes the first letter of the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 *    empty string.
 */
// TODO First function, capitalize the first character of a string
function capitalize(string) {
  var newStr = ""
  newStr += string[0].toUpperCase()
  // console.log(string[0].toUpperCase())
  // console.log(string[0])
  console.log(newStr)
  for (var i = 1; i < string.length; i++) {
    newStr += string[i]
  }
  console.log(newStr)
}
// capitalize(string1)

// separate the string by space

/* Tests for capitalization function */
const strings1 = ["hello", "world"];
const expectedStrings1 = ["Hello", "World"];

/**
 * Capitalizes the first letter of each string in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} strings
 * @returns {Array<string>} The same given array with updated items.
 */
// TODO Second function, capitalize the first character of each string in an array of strings

function capitalization(strings) {
  var newArray = [];
  for (var i = 0; i < strings.length; i++) {
    newArray[i] = capitalize(strings[i]);
  }
  return newArray;
}

console.log(capitalization(strings1))