const bcrypt = require('bcrypt');
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
        'INSERT INTO user SET ?', user, (error, result) => {
          if (error) {
            console.log(error);
            res.json({error})
          } else {
            // console.log(result);
            res.json({message:"utilisateur créer !! "});
          }
        }

      )}
    ).catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  const email = req.body.UserEmail;
  const password = req.body.UserPassword;

  Connection.query(
  `SELECT * FROM user WHERE Email = ? `, 
  [email], 
  (error, results) => {
    console.log(results);
    if (error) {
      res.status(404).json({error : error})
    }
    const user = results[0];
    bcrypt.compare(password, user.Password)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
      }
        res.status(200).json({
          userId: user.Id,
          token: jwt.sign(
            { userId: user.Id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
          )
        });
    })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error })
      });
     
    })

};
