const mongoose = require("mongoose")

const userScheme = new mongoose.Schema({
    email : String,
    password : String,
    resetPasswordToken : String,
    resetPasswordExpires : Date,

})

 
const User = mongoose.model("user",userScheme)

module.exports = User