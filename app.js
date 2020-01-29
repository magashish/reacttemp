// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();
const cors = require('cors');
// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ashish:ashish123@cluster0-bflch.mongodb.net/productstutorial', {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});



