const express = require('express')
const author = require('../models/author.js')
const router = express.Router()
const Author = require('../models/author.js')

// all authors route
// i.e /authors 
router.get('/', (req, res)=> {
    res.render('authors/index.ejs')
})

//displaying new author form's route
// i.e /authors/new
router.get('/new', (req,res)=> {   
    res.render('authors/new.ejs', {author: new Author()})
    // {author: new Author()} creates new author which we can do CRUD operations but this doesnot save anything to db
})

// creating new authors route 
router.post('/',(req, res)=> {
    // .name here is referenced from _form_field.js's input name='👉 name'
    res.send(req.body.name)
} )



module.exports = router