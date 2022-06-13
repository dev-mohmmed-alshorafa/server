const mongoose = require('mongoose')
const user = mongoose.Schema

// define the Schema (the structure of the article)
const NewUser = new user({
  id: String,
  userName: String,
  email: String,
  password: String,
  money: String,
  total: String,
  seller: Array,
  cart: Array,
  favorite: Array,
})

// Create a model based on that schema
const User = mongoose.model('User', NewUser)

// export the model
module.exports = User

//? ------- to connect react with express:-
//*react=>package.json =>proxy =localhostexpress
