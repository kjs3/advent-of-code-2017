const validatePassphrase = require('./validate-passphrase.js')

function hasAnagram (pass) {
  const phrases = pass.split(' ')
  const combinations = {}
  const duplicates = []

  return false
}

function generateCombinations (str) {
  const letters = str.split('')

  if (letters.length > 1) {
    return letters.map((letter, index) => {

    })
    // let endLetters = str.split(1)

    // return str[0] + generateCombinations
  } else {
    return str
  }
}

module.exports = pass => {
  return validatePassphrase(pass) && !hasAnagram(pass)
}
