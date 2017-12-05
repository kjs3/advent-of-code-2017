const test = require('ava')
const SpiralGrid = require('./spiral-grid')

const grid = new SpiralGrid(5)

test('adjacent sum when 1 is written is 0', t => {
  t.is(grid.adjacentSum(1), 1)
})

test('adjacent sum when 2 is written is 1', t => {
  t.is(grid.adjacentSum(2), 1)
})

test('adjacent sum when 3 is written is 2', t => {
  t.is(grid.adjacentSum(3), 2)
})

test('adjacent sum when 4 is written is 4', t => {
  t.is(grid.adjacentSum(4), 4)
})

test('adjacent sum when 5 is written is 5', t => {
  t.is(grid.adjacentSum(5), 5)
})
