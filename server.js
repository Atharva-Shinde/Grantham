// dont know why this code block is needed
if(process.env.NODE_ENV !== 'production' ){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index.js')
const authorRouter = require('./routes/authors.js')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// here👇 express loads the template engine module of ejs internally  
app.set('view engine', 'ejs')

// express will look at views folder/directory which contain the html files, and express looks for the "views" folder as default when it uses template engine
app.set('views',__dirname + '/views')

app.set('layout', 'layouts/layout.ejs')
app.use(expressLayouts)

// express will look at folder with name public 
app.use(express.static('public'))

// indexRouter will handle '/' route and render whatever is inside routes/index.js
app.use('/', indexRouter)
// authorRouter will handle '/authors' route and render whatever is inside routes/authors.js
app.use('/authors', authorRouter)

// refer body-parser documentation
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))

app.listen(process.env.PORT || 3000)

// dont know what is  {usenewUrlParser: true} for 
mongoose.connect(process.env.DATABASE_URL, {usenewUrlParser: true})
const db = mongoose.connection
// this👇 is triggered when there are error while working with mongodb
db.on('error', error => console.error(error))
// this👇 is triggered at the start
db.once('open', () => console.log('Connected to mongoose'))
