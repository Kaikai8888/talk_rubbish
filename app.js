//require related packages and modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
//server related variables
const port = 3000
const app = express()


//set view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set static file
app.use(express.static('public'))
//set body parser
app.use(bodyParser.urlencoded({ extended: true }))



//run the server
app.listen(port, () => {
  console.log(`The Express server is listening on https://localhost:${port}`)
})