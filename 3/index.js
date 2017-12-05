const SpiralGrid = require('./spiral-grid')
const distanceToOrigin = require('./distance-to-origin')

const limit = 368078

const dto1Start = process.hrtime()
const grid = new SpiralGrid(limit)
const distanceToOrigin1 = grid.distanceToOrigin(limit)
const dto1End = process.hrtime(dto1Start)

const dto2Start = process.hrtime()
const distanceToOrigin2 = distanceToOrigin(limit)
const dto2End = process.hrtime(dto2Start)

console.log(`\nDistance to origin: ${distanceToOrigin1}`)
console.log('Execution time: %ds %dms\n\n', dto1End[0], dto1End[1]/1000000)

console.log(`REFACTORED: Distance to origin: ${distanceToOrigin2}`)
console.log('Execution time: %ds %dms', dto2End[0], dto2End[1]/1000000)
