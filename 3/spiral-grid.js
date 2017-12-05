// spiral out creating a plane of numbers until you hit limit
//
// 7  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...
//
//
// go n steps each in two directions
// increment n
// go n steps each in next two direction
// increment n
// rinse and repeat
//
// right
// up
// left
// left
// down
// down
// right
// right
// right
// up
// up
// up
// left
// left
// left
// left
// down
// down
// down
// down
// right
// right
// right
// right
// right

class SpiralGrid  {
  constructor (limit) {
    this._coordsToNumber = {}
    this._numberToCoords = {}
    this._coordsToAdjSum = {}
    this._numberToAdjSum = {}
    this._hasExceededAdjLimit = false

    this._initGrid(limit)
  }

  _initGrid (limit = 0) {
    let direction = 'right'
    let steps = 1
    let i = 1
    let x = 0
    let y = 0

    while (i <= limit) {
      for (let twice = 1; twice < 3; twice++) {
        for (let s = 1; s <= steps; s++) {
          this._storeValue(i, {x, y})
          this._calculateAdjacentSum(i, {x, y}, limit)

          i++
          x = x + deltaX(direction)
          y = y + deltaY(direction)
        }
        direction = updateDir(direction)
      }
      steps++
    }
  }

  _storeValue (i, {x, y}) {
    this._coordsToNumber[[x,y]] = i
    this._numberToCoords[i] = {x, y}
  }

  _calculateAdjacentSum (i, {x, y}, limit) {
    if (this._hasExceededAdjLimit) return

    const above = this._coordsToAdjSum[[x, y+1]] || 0
    const below = this._coordsToAdjSum[[x, y-1]] || 0
    const left = this._coordsToAdjSum[[x-1, y]] || 0
    const right = this._coordsToAdjSum[[x+1, y]] || 0
    const diagAboveLeft = this._coordsToAdjSum[[x-1, y+1]] || 0
    const diagAboveRight = this._coordsToAdjSum[[x+1, y+1]] || 0
    const diagBelowLeft = this._coordsToAdjSum[[x-1, y-1]] || 0
    const diagBelowRight = this._coordsToAdjSum[[x+1, y-1]] || 0

    const adjacentSum = 0
      + above
      + below
      + left
      + right
      + diagAboveLeft
      + diagAboveRight
      + diagBelowLeft
      + diagBelowRight

    if (adjacentSum > limit) {
      console.log(`Writing value ${adjacentSum} which is larger than ${limit}`)
      this._hasExceededAdjLimit = true
    }

    this._coordsToAdjSum[[x,y]] = adjacentSum || 1
    this._numberToAdjSum[i] = adjacentSum || 1
  }

  getNumber (x, y) {
    return this._coordsToNumber[[x,y]]
  }

  getCoords (num) {
    return this._numberToCoords[num]
  }

  distanceToOrigin (num) {
    const coords = this.getCoords(num)
    return Math.abs(coords.x) + Math.abs(coords.y)
  }

  getAdjacentSumForCoords (x, y) {

  }

  adjacentSum (num) {
    return this._numberToAdjSum[num]
  }
}

function deltaX (currentDir) {
  switch (currentDir) {
    case 'right':
      return 1

    case 'left':
      return -1

    default:
      return 0
  }
}

function deltaY (currentDir) {
  switch (currentDir) {
    case 'up':
      return 1

    case 'down':
      return -1

    default:
      return 0
  }
}

function updateDir (currentDir) {
  switch (currentDir) {
    case 'right':
      return 'up'

    case 'up':
      return 'left'

    case 'left':
      return 'down'

    case 'down':
      return 'right'
  }
}

module.exports = SpiralGrid
