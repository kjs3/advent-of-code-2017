const { readFileSync } = require('fs')
const validatePassphrase = require('./validate-passphrase')

const passPhrases = readFileSync('./input.txt', 'utf-8').trim().split('\n')
const validPhrases = []

console.log('Total phrases: ', passPhrases[30], validatePassphrase(passPhrases[30]))

passPhrases.forEach(phrase => {
  if (validatePassphrase(phrase)) validPhrases.push(phrase)
})

console.log('Part 1: number of valid phrases = ', validPhrases.length)
