const dotenv =require ('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');

const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message_send');


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/home', messageRoutes);


module.exports = app;