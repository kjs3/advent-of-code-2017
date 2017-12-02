const { readFileSync } = require('fs')
const largestDiff = require('./largest-diff')
const evenDivision = require('./even-division')

const rows = readFileSync('./input.txt', 'utf-8').trim().split('\n')

const part1Checksum = rows
  .map(row => largestDiff(row.split(/\s+/)))
  .reduce((total, value) => total + value, 0)

const part2Checksum = rows
  .map(row => evenDivision(row.split(/\s+/)))
  .reduce((total, value) => total + value, 0)

console.log('Part 1: checksum = ', part1Checksum)
console.log('Part 2: checksum = ', part2Checksum)
