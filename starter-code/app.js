const express = require('express')
const path = require('path')
const debug = require('debug')
const logger = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const animalsController = require('./controllers/animals_controller')
const app = express()

mongoose.connect('mongodb://localhost/animalshelter')
mongoose.Promise = global.Promise

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
// what is this line for?
app.set('public', path.join(__dirname, '/public'))
app.use(express.static('public'))
// app.use(express.static(path.join(__dirname + '/public')))
app.use(expressLayouts)
app.engine('ejs', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use('/animals', animalsController)

app.get('/', (req, res) => {
  res.render('index')
})

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use((err, req, res, next) => {
//     res.status(err.status || 500)
//     res.render('error', {
//       message: err.message,
//       error: err
//     })
//   })
// }

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
