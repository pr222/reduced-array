/**
 * arrayExtension module.
 *
 * @module src/arrayExtension
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

const ERROR_MESSAGE_NOT_AN_ARRAY = 'The passed argument is not an array.'

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Takes an array of numbers and returns the sum of all numbers in the array.
 *
 * @param {number[]} source - An array with numbers.
 * @returns {number} The total sum of the numbers in the array.
 */
export function getSum (source) {
  // Is it an array?
  if (!Array.isArray(source)) {
    throw TypeError(ERROR_MESSAGE_NOT_AN_ARRAY)
  }

  // Important to set a start value and just treat sum as a Number
  // otherwise we get NaN. 0 is the start value for sum.
  return source.reduce((sum, value) => sum + value, 0)
}
