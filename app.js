const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const gasRoute = require('./routes/gas');
const insuranceRoute = require('./routes/insurance');
const maintenanceRoute = require('./routes/maintenance');

app.use('/gas', gasRoute);
app.use('/insurance', insuranceRoute);
app.use('/maintenance', maintenanceRoute);

const options = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true
};

mongoose.connect(
    'mongodb+srv://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASS + process.env.MONGODB_URL,
    options
).then(() => {
    console.log('Database connection established!');
}, err => {
    {
        console.log('Error connecting database:', err);
    }
});

app.listen(3000);
