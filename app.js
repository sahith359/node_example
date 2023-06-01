const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const connectDb = require('./config/dbConnect');
const app = express();

connectDb()
app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/api/contacts', require('./routes/contactRoute'))
app.use('/api/users', require('./routes/userRoute'))

app.listen(port, () => {
    console.log(`app is listening at port ${port}`)
})