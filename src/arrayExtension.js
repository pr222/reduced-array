/**
 * renameMe module.
 *
 * @module src/renameMe
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Takes an array of numbers and returns the sum of all numbers in the array.
 *
 * @param {number[]} data - An array with numbers.
 * @returns {number} The total sum of the numbers in the array.
 */
export function getSum (data) {
  if (!Array.isArray(data)) {
    throw new TypeError('The passed argument is not an array.')
  }

  const sum = data.reduce((a, b) => a + b, 0)

  return sum
}
