const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    // this👇 renders views/index.ejs
    res.render('index.ejs')
})

module.exports = router