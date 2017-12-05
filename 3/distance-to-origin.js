const SpiralGrid = require('./spiral-grid')

const limit = 368078
const grid = new SpiralGrid(limit)

console.log(`Distance to origin: ${grid.distanceToOrigin(limit)}`)
