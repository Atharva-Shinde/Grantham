const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    // name column for a author 
    name: {
        type: String,
        required:true
    }
})

// this👇 is the used to export the new model which will go by the name Author
module.exports = mongoose.model('Author', authorSchema)