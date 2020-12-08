const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// Configuration : Required environment variables are in .env file
require('dotenv').config();

// Creating express server on a port
const app = express();
const port = process.env.PORT || 5000;

// Parse JSON
app.use(cors());
app.use(express.json());


// Connecting database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})

const usersRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const dataRouter = require('./routes/dataset');
const predictRouter = require('./routes/predict');
const sellRouter = require('./routes/dataset');
const contactRouter = require('./routes/contact_support');

app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/data', dataRouter);
app.use('/predict',predictRouter );
app.use('/sell',dataRouter );
app.use('/contact', contactRouter);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});