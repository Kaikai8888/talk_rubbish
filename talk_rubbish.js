const phrase = require('./data/phrase.json').phrase

function talkRubbish(target, task) {
  if (!target) return
  return `身為一個${target}，${sample(task)}${sample(phrase)}吧！`
}

function sample(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

module.exports = talkRubbish