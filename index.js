require('./services/passport')
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
const app = express();

mongoose
    .connect(
        keys.mongoURI,
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000
app.listen(PORT);

