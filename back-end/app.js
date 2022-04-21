require("dotenv").config();

const express = require('express');
// const axios = require('axios');
const path = require('path');

const userRoutes = require('./routes/user');
const mysql = require('../config/DB.js');
// const sauceRoutes = require('./routes/sauces');


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
// app.use('/api/sauces', sauceRoutes);

app.post("/signup", (req,res) => {
  const user = {
    nom : req.body.nom,
    prenom : req.body.prenom,
    password : req.body.password,
    email : req.body.email,
    admin : false
  }
  mysql.query(
    "INSERT INTO users SET ?", user, (err, res) => {
      if (err) {
        console.log(err);
        res.json({err})
      } else {
        console.log(res);
        res.json({message:"utilisateur créer !! "});
      }
    }

  )

})

module.exports = app;