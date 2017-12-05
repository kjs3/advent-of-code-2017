const test = require('ava')
const SpiralGrid = require('./spiral-grid')

const grid = new SpiralGrid(1024)

test('distance to origin for 1 is 0', t => {
  t.is(grid.distanceToOrigin(1), 0)
})

test('distance to origin for 12 is 3', t => {
  t.is(grid.distanceToOrigin(12), 3)
})

test('distance to origin for 23 is 2', t => {
  t.is(grid.distanceToOrigin(23), 2)
})

test('distance to origin for 1024 is 31', t => {
  t.is(grid.distanceToOrigin(1024), 31)
})
