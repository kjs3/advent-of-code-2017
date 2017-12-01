const { readFileSync } = require('fs')
const sumMatches = require('./sum-when-next-matches')

const numberString = readFileSync('./input.txt', 'utf-8')

console.log('Sum: ', sumMatches(numberString))
