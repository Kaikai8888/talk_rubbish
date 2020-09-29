const phrase = require('./data/phrase.json').phrase
const targetsCH = require('./data/targetsCH.json')

function talkRubbish(target, task) {
  if (!target) return
  return `身為一個${targetsCH[target]}，${sample(task)}${sample(phrase)}吧！`
}

function sample(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

module.exports = talkRubbish