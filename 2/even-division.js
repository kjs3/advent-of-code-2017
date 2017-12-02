
module.exports = (arr = []) => {
  const numbersArray = arr.map(str => parseInt(str)).sort().reverse()
  let dividedValue = 0

  numbersArray.forEach((value, index) => {
    for (let i = 0; i < numbersArray.length; i++) {
      if (index === i) continue

      const denominator = numbersArray[i]

      if (value % denominator === 0) dividedValue = value/denominator
    }
  })

  return dividedValue
}
