
module.exports = (numberString = '') => {
  const numberStrings = numberString.trim().split('')
  let sum = 0

  for (let i = 0; i < numberStrings.length; i++) {
    const first = numberStrings[i]
    const second = i === numberStrings.length - 1 ? numberStrings[0] : numberStrings[i + 1]

    if (first === second) {
      sum += parseInt(first)
    }
  }

  return sum
}
