const { readFileSync } = require('fs')
const sumNextMatches = require('./sum-when-next-matches')
const sumHalfwayMatches = require('./sum-when-halfway-around-matches')

const numberString = readFileSync('./input.txt', 'utf-8')

console.log('Part 1: sum = ', sumNextMatches(numberString))
console.log('Part 2: sum = ', sumHalfwayMatches(numberString))
