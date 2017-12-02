const findHalfwayAround = require('./find-halfway-around')

module.exports = (numberString = '') => {
  const numberStrings = numberString.trim().split('')
  let sum = 0

  for (let i = 0; i < numberStrings.length; i++) {
    const first = numberStrings[i]
    const second = numberStrings[findHalfwayAround(numberStrings, i)]

    if (first === second) {
      sum += parseInt(first)
    }
  }

  return sum
}
