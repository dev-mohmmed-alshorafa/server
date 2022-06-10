const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config({ path: './.env' })
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const Card = require('./modules/card')
//====================================================
app.post('/addcard', (req, res) => {
  const card = new Card(req.body)
  card.save()
})

app.get('/addcard', (req, res) => {
  Card.find().then((resa) => res.json(resa))
})
//=====================================================
const PORT = process.env.PORT || 3000
const MONGOOSE_URL = process.env.MONGOOSE_URL
// ! to connect with database
mongoose
  .connect(MONGOOSE_URL)
  .then((result) => {
    app.listen(PORT)
  })
  .catch((err) => {
    console.log(err)
  })
