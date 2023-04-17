const mongoose = require('mongoose')
const config = require('../../config/db')

const UserSchema = mongoose.Schema({
  email:{
    type: String,
    required:true
  },
  name:{
    type: String,
    required:true
  },
  phone:{
    type: String,
    required:true
  },


})

const User = module.exports = mongoose.model('User',UserSchema)

module.exports.addUser = function (newUser,callback){
  newUser.save(callback)
  console.log("Сохранил")
}
