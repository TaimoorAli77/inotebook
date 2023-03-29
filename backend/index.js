const connectToMongo = require('./db');
const express = require('express');
connectToMongo();
const bodyParser = require("body-parser")
const authentication = require('./routes/auth');
const notes = require('./routes/notes');
const app = express()
const port = 2323
app.use(bodyParser.urlencoded({ extended: true }));


// Available Routes
app.use(express.json());   

app.use('/api/auth' , authentication);
app.use('/api/notes' , notes);

// app.get('/', (req, res) => {
//   res.send('Hello Taimoor Ali!')
// })




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})