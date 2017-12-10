const test = require('ava')
const validatePassphraseWithAnagram = require('./validate-passphrase-with-anagram')

test('abcde fghij is a valid passphrase.', t => {
  t.is(validatePassphraseWithAnagram('abcde fghij'), true)
})
test('abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.', t => {
  t.is(validatePassphraseWithAnagram('abcde xyz ecdab'), false)
})
// test('a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.', t => {
//   t.is(validatePassphraseWithAnagram('a ab abc abd abf abj'), true)
// })
// test('iiii oiii ooii oooi oooo is valid.', t => {
//   t.is(validatePassphraseWithAnagram('iiii oiii ooii oooi oooo'), true)
// })
// test('oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.', t => {
//   t.is(validatePassphraseWithAnagram('oiii ioii iioi iiio'), false)
// })
