const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config ()
const ownerRoute = require('./routes/campingOwnerRoute')
const siteRoute = require('./routes/campingSiteRoute')
const reservationRoute = require('./routes/reservationRoute')


const port = process.env.PORT;
const app = express();
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.use('/Owner',ownerRoute)
app.use('/Site',siteRoute)
app.use('/reservation',reservationRoute)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })