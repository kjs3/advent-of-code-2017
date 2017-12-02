const test = require('ava')
const findHalfwayAround = require('./find-halfway-around')

const evenArray = [0, 1, 2, 3, 4, 5]

test('index 0', t => {
  t.is(findHalfwayAround(evenArray, 0), 3)
})

test('index 1', t => {
  t.is(findHalfwayAround(evenArray, 1), 4)
})

test('index 2', t => {
  t.is(findHalfwayAround(evenArray, 2), 5)
})

test('index 3', t => {
  t.is(findHalfwayAround(evenArray, 3), 0)
})

test('index 4', t => {
  t.is(findHalfwayAround(evenArray, 4), 1)
})

test('index 5', t => {
  t.is(findHalfwayAround(evenArray, 5), 2)
})
