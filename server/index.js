const express = require('express')
const app = express()

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const mongoose = require('mongoose');
const config = require('./config/key');
const connect = mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true, useCreateIndex: true, 
        useFindAndModify: false, useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.err(err))

    const port = process.env.PORT || 5000
    app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
    });
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users', require('./routes/users'));