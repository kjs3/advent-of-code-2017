// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8  *9* 10
// 21  22  23  24 *25*
//
// bottom-right corners are odd squares - 1 away from origin
// 9: 3^2 = 9 => 3-1 = 2 (2 jumps from origin)
// 25: 5^2 = 25 => 5-1 = 4 (4 jumps from origin)

const value = 24
const ringRoot = Math.ceil(Math.sqrt(value)) | 1
const bottomRight = ringRoot**2
const diagDistance = ringRoot - 1
const innerArm = diagDistance
const distanceToAxis = innerArm / 2
const deltaBottomRight = bottomRight - value
const offsetFromAxis = Math.abs(distanceToAxis - deltaBottomRight % innerArm)

console.log('deltaBottomRight: ', deltaBottomRight)
console.log('offsetFromAxis: ', offsetFromAxis)
console.log('distanceToOrigin: ', distanceToAxis + offsetFromAxis)
