const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config({ path: './.env' })
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const Card = require('./modules/card')
const User = require('./modules/user')
//====================================================
app.post('/addcard', (req, res) => {
  console.log(req.body)
  const card = new Card(req.body)
  card.save()
})

app.post('/adduser', (req, res) => {
  const user = new User(req.body)
  user.save()
})

app.get('/addcard', (req, res) => {
  Card.find().then((resa) => res.json(resa))
})

app.get('/adduser', (req, res) => {
  User.find().then((resa) => res.json(resa))
})

app.put('/edit/:id', (req, res) => {
  User.findOneAndUpdate(
    { id: req.params.id },
    { seller: req.body.seller },
  ).then((data) => res.json({ data }))
})

app.put('/del/:id', (req, res) => {
  User.findOneAndUpdate(
    { email: req.params.id },
    { seller: req.body.seller },
  ).then((data) => res.json({ data }))
})

app.put('/delcart/:id', (req, res) => {
  User.findOneAndUpdate({ email: req.params.id }, { cart: req.body.cart }).then(
    (data) => res.json({ data }),
  )
})

app.put('/total/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body.total)
  User.findOneAndUpdate(
    { email: req.params.id },
    { total: req.body.total },
  ).then((data) => res.json({ data }))
})

app.put('/pay/:id', (req, res) => {
  User.findOneAndUpdate(
    { email: req.params.id },
    { total: req.body.total, money: req.body.money, cart: req.body.cart },
  ).then((data) => res.json({ data }))
})
app.put('/cart/:id', (req, res) => {
  User.findOneAndUpdate({ email: req.params.id }, { cart: req.body.cart }).then(
    (data) => res.json({ data }),
  )
})

app.delete('/delete/:id', (req, res) => {
  Card.findOneAndDelete({ nameCard: req.params.id }).then(() =>
    res.send('11111'),
  )
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
