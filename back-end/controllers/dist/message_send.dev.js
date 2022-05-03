"use strict";

var Connection = require('../config/DB.js'); // création et insertion de nouveau message dans la base de donnée


exports.createMessage = function (req, res, next) {
  var text = {
    text: req.body.text
  };
  Connection.query('INSERT INTO message_send SET ? ', text, function (error, results) {
    if (error) {
      console.log(error);
      res.json({
        error: error
      });
    } else {
      console.log(results);
      res.json({
        message: "Message envoyé dans la bdd !!"
      });
    }
  });
}; // récuperation des messages dans la base de donnée 


exports.getAllMessage = function (req, res, next) {
  var sqlMessage = "SELECT * FROM message_send ";
  Connection.query(sqlMessage, function (error, results) {
    res.send(results);
  });
}; // suppression du message de la base de donné 


exports.deleteMessage = function (req, res, next) {
  var text = req.params.Id;
  var sqlMessagedelete = "DELETE FROM message_send WHERE Id = ? ";
  Connection.query(sqlMessagedelete, text, function (error, results) {
    if (error) console.log(error);
  });
  console.log();
};