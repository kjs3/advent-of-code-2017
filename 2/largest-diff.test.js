const test = require('ava')
const largestDiff = require('./largest-diff')

test('largest diff in [5, 1, 9, 5] is 8', t => {
  t.is(largestDiff([5, 1, 9, 5]), 8)
})

test('largest diff in [7, 5, 3] is 4', t => {
  t.is(largestDiff([7, 5, 3]), 4)
})

test('largest diff in [2, 4, 6, 8] is ', t => {
  t.is(largestDiff([2, 4, 6, 8]), 6)
})
