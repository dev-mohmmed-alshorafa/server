const mongoose = require('mongoose')
const card = mongoose.Schema

// define the Schema (the structure of the article)
const NewCard = new card({
  id: String,
  nameCard: String,
  price: Number,
  img: String,
  category: String,
})

// Create a model based on that schema
const Card = mongoose.model('Card', NewCard)

// export the model
module.exports = Card

//? ------- to connect react with express:-
//*react=>package.json =>proxy =localhostexpress
