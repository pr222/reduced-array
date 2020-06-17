/**
 * Tests for the arrayExtension module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import { getSum } from '../src/arrayExtension.js'

const expect = chai.expect

const ERROR_MESSAGE_NOT_AN_ARRAY = 'The passed argument is not an array.'

// ------------------------------------------------------------------------------
//  getSum
// ------------------------------------------------------------------------------
describe('getSum', () => {
  describe('exceptions', () => {
    it(`Passing anything but an array should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_AN_ARRAY}'.`, () => {
      expect(() => { getSum('not an array') }).to.throw(TypeError, ERROR_MESSAGE_NOT_AN_ARRAY)
    })
  })

  describe('side effects', () => {
    it('Passing an array should return a number and not modify the argument.', () => {
      const ORIGINAL = [4, 2, 3]
      const arr = Array.from(ORIGINAL)

      expect(getSum(arr))
        .to.be.a('number')
      expect(arr).to.eql(ORIGINAL)
    })
  })

  describe('return value', () => {
    it('Passing [4, 5, 6, 5] should return 20.', () => {
      expect(getSum([4, 5, 6, 5])).eql(20)
    })

    it('Passing [4, 5, -6, 5, 12] should return 20.', () => {
      expect(getSum([4, 5, -6, 5, 12])).eql(20)
    })

    it('Passing [1] should return 1.', () => {
      expect(getSum([1])).eql(1)
    })

    it('Passing [] should return 0.', () => {
      expect(getSum([])).eql(0)
    })
  })
})
