const test = require('ava')
const sumMatches = require('./sum-when-halfway-around-matches')

test('1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.', t => {
  t.is(sumMatches('1212'), 6)
})

test('1221 produces 0, because every comparison is between a 1 and a 2.', t => {
  t.is(sumMatches('1221'), 0)
})

test('123425 produces 4, because both 2s match each other, but no other digit has a match.', t => {
  t.is(sumMatches('123425'), 4)
})

test('123123 produces 12.', t => {
  t.is(sumMatches('123123'), 12)
})

test('12131415 produces 4.', t => {
  t.is(sumMatches('12131415'), 4)
})
