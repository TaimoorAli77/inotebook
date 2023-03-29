const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 2323

app.get('/', (req, res) => {
  res.send('Hello Taimoor Ali!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})