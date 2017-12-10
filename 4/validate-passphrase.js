
module.exports = pass => {
  const phrases = pass.split(' ')
  const usedPhrases = {}
  const duplicates = []

  // map phrases to useage count
  phrases.forEach(phrase => {
    const count = usedPhrases[phrase] || 0
    usedPhrases[phrase] = count + 1
  })

  // gather phrases used more than once
  Object.keys(usedPhrases).forEach(phrase => {
    if (usedPhrases[phrase] > 1) duplicates.push(phrase)
  })

  return duplicates.length === 0
}
