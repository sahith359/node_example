const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true, "Please add username"]
    },
    email : {
        type : String,
        required : [true, "Please add email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Please add password"]
    }
})

module.exports = mongoose.model('user',userSchema)