//require related packages and modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const talkRubbish = require('./talk_rubbish.js')
//server related variables
const port = 3000
const app = express()

//data
const tasks = require('./data/tasks.json')
const targetsCH = require('./data/targetsCH.json')

//set view engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    ifEq: function (a, b, options) {
      if (a === b) {
        return options.fn(this)
      } else {
        return options.inverse(this)
      }
    }
  }
}))
app.set('view engine', 'handlebars')

//set static file
app.use(express.static('public'))
//set body parser
app.use(bodyParser.urlencoded({ extended: true }))

//set routes
app.get('/', (req, res) => {
  res.render('index', { targetsCH })
})

app.post('/', (req, res) => {
  const target = req.body.target
  const rubbishTalk = talkRubbish(target, targetsCH[target], tasks[target])
  res.render('index', {
    targetsCH, target, rubbishTalk,
    noTarget: !target
  })
})

//run the server
app.listen(port, () => {
  console.log(`The Express server is listening on https://localhost:${port}`)
})