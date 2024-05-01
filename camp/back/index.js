const express = require('express');
const cors = require('cors');
const ownerRoute = require('./routes/campingOwnerRoute')

const PORT = 3100
const app = express();
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.use('/Owner',ownerRoute)

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
  })