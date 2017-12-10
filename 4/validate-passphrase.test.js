const test = require('ava')
const validatePassphrase = require('./validate-passphrase')

test('aa bb cc dd ee is valid.', t => {
  t.is(validatePassphrase('aa bb cc dd ee'), true)
})
test('aa bb cc dd aa is not valid - the word aa appears more than once.', t => {
  t.is(validatePassphrase('aa bb cc dd aa'), false)
})
test('aa bb cc dd aaa is valid - aa and aaa count as different words.', t => {
  t.is(validatePassphrase('aa bb cc dd aaa'), true)
})
