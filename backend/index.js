const connectToMongo = require('./db');
const express = require('express');
connectToMongo();
const authentication = require('./routes/auth');
const notes = require('./routes/notes');
const app = express()
const port = 5000
var cors = require('cors')
app.use(cors())
// Available Routes
app.use(express.json());   

app.use('/api/auth' , authentication);
app.use('/api/notes' , notes);

// app.get('/', (req, res) => {
//   res.send('Hello Taimoor Ali!')
// })




app.listen(port, () => {
  console.log(`iNoteBook backend app listening on port http://localhost:${port}`)
})