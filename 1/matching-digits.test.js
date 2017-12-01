const test = require('ava')
const sumMatches = require('./sum-when-next-matches')

test('1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.', t => {
  t.is(sumMatches('1122'), 3)
})

test('1111 produces 4 because each digit (all 1) matches the next.', t => {
  t.is(sumMatches('1111'), 4)
})

test('1234 produces 0 because no digit matches the next.', t => {
  t.is(sumMatches('1234'), 0)
})

test('91212129 produces 9 because the only digit that matches the next one is the last digit, 9.', async t => {
  t.is(sumMatches('91212129'), 9)
})
