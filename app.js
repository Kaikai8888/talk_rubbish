//require related packages and modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const talkRubbish = require('./talk_rubbish.js')
//server related variables
const port = 3000
const app = express()

//data
const tasks = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const targets = Object.keys(tasks)



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
  res.render('index', { targets })
})

app.post('/', (req, res) => {
  const target = req.body.target
  const rubbishTalk = talkRubbish(target, tasks[target])
  res.render('index', { rubbishTalk, target, targets })
})

//run the server
app.listen(port, () => {
  console.log(`The Express server is listening on https://localhost:${port}`)
})