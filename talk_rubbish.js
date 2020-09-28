const phrase = ['很簡單', '很容易', '很快', '很正常']

function talkRubbish(target, task) {
  return `身為一個${target}，${sample(task)}${sample(phrase)}吧！`
}

function sample(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

module.exports = talkRubbish