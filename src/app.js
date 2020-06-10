const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


const app = express();

// MIDDLEWARES
// app.use('/posts', () => {
//   console.log('This is middleware running');
// });

// Import routes
const postRouter = require('../routes/posts');
const userRouter = require('../routes/user');

app.use(express.json());
//app.use(bodyParser.json());
app.use('/posts', postRouter);
app.use('/user', userRouter);

// ROUTES

// Connect to DB
mongoose.connect('mongodb://testboy:rhino94@ds155396.mlab.com:55396/rest', 
{ useNewUrlParser: true, 
  useUnifiedTopology: true 
}, () => {
  console.log('connected to DB!');
});


// LISTENING SERVER
app.listen(3000);