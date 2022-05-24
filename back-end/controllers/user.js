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

exports.logout = (req, res, next) => {
  const logout = "";

  Connection.query(logout, (error, result) => {
    if (error) {
      console.log(error);
      res.json({error})
    }else {
      res.json({message:"utilisateur déconnecté "})
    }
  })
}

exports.deleteUser = (req, res, next) => {

  const sqlUserSelect = `SELECT * FROM user WHERE Id = ${req.params.Id}`;
  const sqlUserDelete = `DELETE FROM user WHERE Id = ${req.params.Id}`;

Connection.query(sqlUserSelect, (error, result) => {
  if (error) 
  console.log(error);
  if (result[0].Id !== req.auth.userId) {
      return res.status(401).json({message :"interdit"})
  };
  Connection.query(sqlUserDelete , (error, result) => {
    if (error) {
      res.json({ error });
  } else {
      res.json({ message: "user supprimé de la bdd !!" });
  }
  })

})
};

exports.updateUser = (req, res, next) => {
  const sqluserSelect = `SELECT * FROM user WHERE Id = ${req.params.Id}`;
  const sqlUpdateUser = `UPDATE user SET Nom = ?, Prenom = ?, Password = ?, Email = ? WHERE Id = ${req.params.Id}`;

Connection.query(sqluserSelect, (error, result) => {
  if (error) 
  console.log(error);

  if (result[0].Id !== req.auth.userId) {
      return res.status(401).json({message :"interdit"})
  }

  Connection.query(sqlUpdateUser, [req.body.Nom , req.body.Prenom, req.body.Password, req.body.Email], (error, result) => {
    if (error) {
      console.log(error);
      res.json({ error });
  } else {
      res.json({ message: "user modifié dans la bdd !!" });
  }
  })

})
};

exports.getOneUser = (req, res, next) => { 
  const sqlGetUser = `SELECT * FROM user WHERE Id = ${req.params.Id}`;

  Connection.query(sqlGetUser, (error, result) => {
    if (error) {
      res.status(404).json({ error });
      throw error;
    }
    res.status(200).json(result);
  })
}