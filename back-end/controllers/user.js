const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const fs = require('fs');

const Connection = require("../config/DB.js");

//création user hash password 

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        password: hash,
        email: req.body.email,
      };
      Connection.query("INSERT INTO user SET ?", user, (error, result) => {
        if (error) {
          res.json({ error });
        } else {
          res.json({ message: "utilisateur créer !! " });
        }
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

// Connection user vérifier hash 

exports.login = (req, res, next) => {
  const email = req.body.UserEmail;
  const password = req.body.UserPassword;

  Connection.query(
    `SELECT * FROM user WHERE Email = ? `,
    [email],
    (error, results) => {
      if (error) {
        res.status(404).json({ error: error });
      }
      const user = results[0];
      bcrypt
        .compare(password, user.Password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            Admin: user.admin,
            userId: user.Id,
            token: jwt.sign({ userId: user.Id, Admin: user.admin }, process.env.token, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => {
          res.status(500).json({ error });
        });
    }
  );
};

// delete user 

exports.deleteUser = (req, res, next) => {
  const sqlUserSelect = `SELECT * FROM user WHERE Id = ${req.params.Id}`; 
  const sqlUserDelete = `DELETE FROM user WHERE Id = ${req.params.Id}`;
 
    Connection.query(sqlUserSelect, (error, result) => {
      if (error){
        res.json({ error });
      }
      if (result[0].Id !== req.auth.userId) {
        return res.status(401).json({ message: "interdit" });
      }
        Connection.query(sqlUserDelete, (error, result) => {
        if (error) {
          res.json({ error });
        } else {
          res.json({ message: "user supprimé de la bdd !!" });
          }
      });
    });
  };

// Update user connecté 

exports.updateUser = (req, res, next) => {
  const sqluserSelect = `SELECT * FROM user WHERE Id = ${req.params.Id}`;
  const sqlUpdateUser = `UPDATE user SET Nom = ?, Prenom = ?, Email = ? WHERE Id = ${req.params.Id}`;

  Connection.query(sqluserSelect, (error, result) => {
    if (error);

    if (result[0].Id !== req.auth.userId) {
      return res.status(401).json({ message: "interdit" });
    }

    Connection.query(
      sqlUpdateUser,
      [req.body.Nom, req.body.Prenom, req.body.Email],
      (error, result) => {
        if (error) {
          res.json({ error });
        } else {
          res.json({ message: "user modifié dans la bdd !!" });
        }
      }
    );
  });
};

exports.getOneUser = (req, res, next) => {
  const sqlGetUser = `SELECT * FROM user WHERE Id = ${req.params.Id}`;

  Connection.query(sqlGetUser, (error, result) => {
    if (error) {
      res.status(404).json({ error });
      throw error;
    }
    res.status(200).json(result);
  });
};