const bcrypt = require('bcrypt');
// const User = require ('../models/User');
const jwt = require('jsonwebtoken');
const Connection = require('../config/DB.js');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = {
        nom : req.body.nom,
        prenom : req.body.prenom,
        password : hash,
        email : req.body.email,
      }
      Connection.query(
        "INSERT INTO users SET ?", user, (error, result) => {
          if (error) {
            console.log(error);
            res.json({error})
          } else {
            console.log(result);
            res.json({message:"utilisateur créer !! "});
          }
        }

      )}
    ).catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  Connection.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' }); 
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};