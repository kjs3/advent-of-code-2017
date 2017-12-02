
module.exports = (evenArray = [], index) => {
  const length = evenArray.length
  const limit = length - 1
  const rotation = length / 2
  const newIndex = rotation + index

  return newIndex <= limit ? newIndex : newIndex - length
}


