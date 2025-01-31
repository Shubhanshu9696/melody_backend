const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require: true
    },
    review:{
        type: [String],
        default: []
    }
})

const User = mongoose.model('User', userSchema )

module.exports = User