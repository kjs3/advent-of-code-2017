
module.exports = (arr = []) => {
  let largest = arr[0]
  let smallest = arr[0]

  for (let i = 0; i < arr.length; i++) {
    const value = parseInt(arr[i])

    if (value > largest) largest = value
    if (value < smallest) smallest = value
  }

  return largest - smallest
}
