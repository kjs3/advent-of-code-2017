const test = require('ava')
const evenDivision = require('./even-division')

test('largest diff in [5, 9, 2, 8] is 8', t => {
  t.is(evenDivision([5, 9, 2, 8]), 4)
})

test('largest diff in [9, 4, 7, 3] is 4', t => {
  t.is(evenDivision([9, 4, 7, 3]), 3)
})

test('largest diff in [3, 8, 6, 5] is ', t => {
  t.is(evenDivision([3, 8, 6, 5]), 2)
})
